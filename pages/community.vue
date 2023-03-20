<template>
    <div class="page-community">
        <page-header name="community"></page-header>
        <!-- <community id="community"></community> -->

        <section class="base meet">
            <div class="container">
                <h1>{{$t('community.title')}}</h1>
                <div class="video is-flex" @click="play" >
                    <img src="~assets/images/video/play.svg" />
                </div>
            </div>
        </section>

        <section id="telegramGroup" class="base telegram">
            <div class="container">
                <h1>{{$t('community.telegram.title')}}</h1>
            </div>
            <ul v-if="isMobile">
                <li v-for="[lang, url] in telegramGroups" :key="lang">
                    <a :href="url" target="_blank">{{ $t(`language.${lang}`) }}</a>
                </li>
            </ul>
            <v-chart v-else class="map" :option="mapOption" ref="map" @click='handleMap'/>
        </section>

        <section class="base social">
            <div class="container">
                <h1>{{$t('community.social.title')}}</h1>
                <div class="items">
                    <div class="item">
                        <a href="https://twitter.com/vitelabs" target="_blank">
                            <div class="logo">
                                <fa-icon class="icon__item" :icon="['fab', 'twitter']"></fa-icon>
                                <h3>Twitter</h3>
                            </div>
                            <span>https://twitter.com/vitelabs</span>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://github.com/vitelabs" target="_blank">
                        <div class="logo">
                            <fa-icon class="icon__item" :icon="['fab', 'github']"></fa-icon>
                            <h3>Github</h3>
                        </div>
                        <span>https://github.com/vitelabs</span>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://www.instagram.com/vite.labs/" target="_blank">
                            <div class="logo">
                                <fa-icon class="icon__item" :icon="['fab', 'instagram']"></fa-icon>
                                <h3>Instagram</h3>
                            </div>
                            <span>https://www.instagram.com/vite.labs/</span>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://www.facebook.com/vitelabs/" target="_blank">
                            <div class="logo">
                                <fa-icon class="icon__item" :icon="['fab', 'facebook-square']"></fa-icon>
                                <h3>Facebook</h3>
                            </div>
                            <span>https://www.facebook.com/vitelabs/</span>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://blockfolio.com/coin/VITE" target="_blank">
                            <div class="logo">
                                <img class="icon__item blockfolio" src="~/assets/images/community/blockfolio-white.svg" />
                                <h3>Blockfolio</h3>
                            </div>
                            <span>https://blockfolio.com/coin/VITE</span>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://discord.com/invite/CsVY76q" target="_blank">
                            <div class="logo">
                                <fa-icon class="icon__item" :icon="['fab', 'discord']"></fa-icon>
                                <h3>Discord</h3>
                            </div>
                            <span>https://discord.com/invite/CsVY76q</span>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://www.reddit.com/r/vitelabs" target="_blank">
                            <div class="logo">
                                <fa-icon class="icon__item" :icon="['fab', 'reddit']" />
                                <h3>Reddit</h3>
                            </div>
                            <span>https://www.reddit.com/r/vitelabs</span>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://www.youtube.com/channel/UC8qft2rEzBnP9yJOGdsJBVg" target="_blank">
                            <div class="logo">
                                <fa-icon class="icon__item" :icon="['fab', 'youtube']" />
                                <h3>Youtube</h3>
                            </div>
                            <span>https://www.youtube.com/channel/UC8qft2rEzBnP9yJOGdsJBVg</span>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://forum.vite.net" target="_blank">
                            <div class="logo">
                                <img class="icon__item forum" src="~/assets/images/community/forum-icon.svg" />
                                <h3>Forum</h3>
                            </div>
                            <span>https://forum.vite.net</span>
                        </a>
                    </div>
                    <div class="item">
                        <a href="https://bitcointalk.org/index.php?topic=5056409" target="_blank">
                            <div class="logo">
                                <fa-icon class="icon__item" :icon="['fab', 'bitcoin']" />
                                <h3>BitcoinTalk</h3>
                            </div>
                            <span>https://bitcointalk.org/index.php?topic=5056409</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import isMobile from 'is-mobile';
import { use, registerMap } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { MapChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  ToolboxComponent,
} from "echarts/components";
import VChart from "vue-echarts";

import worldJson from '~/pages/json/world.json';

import PageHeader from '~/components/PageHeader.vue';
// import Community from '~/components/community/index.vue';
import player from '~/components/play';

use([
  CanvasRenderer,
  MapChart,
  TooltipComponent,
  CanvasRenderer,
]);

registerMap("world", worldJson);

const LanguageWithTelegram = {
  English: 'https://t.me/vite_en',
  Chinese: 'https://t.me/vite_zh',
  Russian: 'https://t.me/vite_russian',
  Japanese: 'https://t.me/vite_japanese',
  Vietnamese: 'https://t.me/vite_vietnamese',
  Arabic: 'https://t.me/vite_arabic',
  German: 'https://t.me/vite_german',
  Turkish: 'https://t.me/vite_turkish',
  Indonesian: 'https://t.me/vite_indonesian',
  Portugese: 'https://t.me/vite_portuguese',
  Filipino: 'https://t.me/vite_filipino',
  French: 'https://t.me/vite_french',
  Spanish: 'https://t.me/vitespanish',
  Hindi: 'https://t.me/vite_india',
}

const LanguageWithCountry = {
  Chinese: ['China'],
  Russian: [
    'Russia',
    'Belarus',
    'South Ossetia',
    'Transnistria',
  ],
  Japanese: [ 'Japan' ],
  Vietnamese: [ 'Vietnam' ],
  Arabic: [
    'Algeria',
    'Bahrain',
    'Chad',
    'Comoros',
    'Djibouti',
    'Egypt',
    'Iraq',
    'Jordan',
    'Kuwait',
    'Lebanon',
    'Libya',
    'Mauritania',
    'Morocco',
    'Oman',
    'Palestineb',
    'Qatar',
    'Saudi Arabia',
    'Somalia',
    'Sudan',
    'Syria',
    'Tunisia',
    'United Arab Emirates',
    'Yemen',
  ],
  German: [
    'Germany',
    'Liechtenstein',
  ],
  Turkish: [
    'Turkey',
    'Northern Cyprus',
    'Cyprwus',
  ],
  Indonesian: [
    'Indonesia',
  ],
  Portugese: [
    'Brazil',
    'Portugal',
    'Angola',
    'Cape Verde',
    'Guinea-Bissau',
    'Mozambique',
    'São Tomé and Príncipe',
    'East Timor',
    'Macau',
  ],
  Filipino: [
    'Philippines',
  ],
  French: [
    'Benin',
    'Burkina Faso',
    'Congo',
    'DR Congo',
    'Ivory Coast',
    'France',
    'Gabon',
    'Guinea',
    'Mali',
    'Monaco',
    'Niger',
    'Senegal',
    'Togo',
    'Belgium',
    'Burundi',
    'Cameroon',
    'Chad',
    'Central African Republic',
    'Comoros',
    'Djibouti',
    'Equatorial Guinea',
    'Haiti',
    'Luxembourg',
    'Madagascar',
    'Rwanda',
    'Seychelles',
    'Switzerland',
    'Vanuatu',
  ],
  Spanish: [
    'Mexico',
    'Colombia',
    'Spain',
    'Argentina',
    'Peru',
    'Venezuela',
    'Chile',
    'Guatemala',
    'Ecuador',
    'Bolivia',
    'Cuba',
    'Dominican Republic',
    'Honduras',
    'Paraguay',
    'El Salvador',
    'Nicaragua',
    'Costa Rica',
    'Panama',
    'Uruguay',
  ],
  Hindi: [
    'India',
  ],
}

function getTelegramLink(countryName) {
  const idx = Object.values(LanguageWithCountry).findIndex((item) => {
    const found = item.find(x => x == countryName);
    if (found) {
      return true;
    } else {
      return false;
    }
  });
  const language = Object.keys(LanguageWithCountry)[idx]
  const link = LanguageWithTelegram[language] || LanguageWithTelegram['English'];
  return {
    language,
    link,
  }
}

export default {
  components: {
    // Community,
    PageHeader,
    VChart
  },
  data() {
    return {
      isMobile: isMobile(),
      telegramGroups: Object.entries(LanguageWithTelegram).sort(),
      mapOption: {
        tooltip: {
          trigger: 'item',
          backgroundColor: '#fff',
          borderWidth: 0,
          borderRadius: 29,
          padding: [15, 20],
          color: '#007AFF',
          shadowColor: 'hsla(211, 100%, 50%, 0.2)',
          shadowBlur: 10,
          formatter(params) {
            const { link } = getTelegramLink(params.name);
            return `<div class='is-flex'><svg style="font-size: 28px; color: #007aff;" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-telegram-plane fa-w-14"><path data-v-785ec8dc="" fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" class=""></path></svg><span style="padding-left: 10px; font-size: 18px; line-height: 28px; color: #007aff;">${link}</span></div>`
          }
        },
        series: [
          {
            name: 'Vite Telegram Group',
            type: 'map',
            roam: false,
            map: 'world',
            // nameMap: {
            //   'China' : '中国',
            //   'United States of America': 'USA',
            // },
            itemStyle: {
                // areaColor: 'rgba(85,122,198,0.25)',
                areaColor: {
                    image: require('~/assets/images/community/dot-grey.png'),
                    repeat: 'repeat',
                },
                borderWidth: 0,
            },
              emphasis: {
                  label: {
                      show: false,
                  },
                  itemStyle: {
                    areaColor: {
                        image: require('~/assets/images/community/dot-blue.png'),
                        repeat: 'repeat',
                    },
                  }
              },
            select: {
                disabled: true,
            }
          }
        ]
      }
    };
  },
  mounted() {
  },
  methods: {
    play() {
      this.$i18n.locale === 'zh'
        ? player({ src: config.urls.video.loves.zh })
        : player({ src: '', iframeSrc: 'https://www.youtube.com/embed/s_hxkBMizgM' });
    },
    handleMap(params) {
      const { link } = getTelegramLink(params.name);
      window.open(link, '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/vars.scss";
section.base {
    margin-top: 80px;
    margin-bottom: 80px;
    h1 {
        margin-bottom: 30px;
        font-size: 44px;
        line-height: 48px;
    }
    p {
        margin-bottom: 40px;
        font-size: 18px;
        line-height: 30px;
        color: #54565A;
        max-width: 760px;
    }
    @include touch {
        padding-left: 15px;
        padding-right: 15px;
        h1{
            font-size: 28px;
            white-space: normal;
            line-height: 42px;
        }
    }
}
section.meet{
    .video {
        margin: 0 auto;
        width: 100%;
        height: 500px;
        background-image: url("~assets/images/community/world.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        text-align: center;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    @include touch {
        margin: 100px 0;
        padding-left: 0;
        padding-right: 0;
        h1 {
            padding-left: 15px;
            padding-right: 15px;
        }
        .video {
            height: 360px;
            background-size: contain;
        }
    }
    @include mobile {
        .video{
            height: 240px;
        }
    }
}
section.telegram {
    .map {
        width: 100%;
        height: 700px;
        background: #F5FAFF;
        @include until($desktop) {
            height: 240px;
        }
    }
    .map-container {
        box-sizing: border-box;
        padding: 0 15px;
        .map__footer {
            justify-content: space-between;
            overflow-x: scroll;
            font-size:14px;
            font-family: $font-family-light;
            font-weight:400;
            color:rgba(145,154,163,1);
            line-height:18px;
            .map__footer-wrapper {
                margin-top: 5px;
            }
        }
    }
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        background: #F5FAFF;
        padding: 10px 0;
        li {
            padding: 10px 30px;
            font-size: 18px;
        }
    }
    @include touch {
        padding-left: 0;
        padding-right: 0;
        .container {
            padding-left: 15px;
            padding-right: 15px;
        }
    }
}
section.social {
    margin-bottom: 80px;
    .items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: minmax(160px, auto);
        column-gap: 40px;
        row-gap: 40px;
        @include touch {
            grid-template-columns: 1fr;
            row-gap: 20px;
        }
    }
    .item {
        border: 1px solid #007aff;
        border-radius: 10px;
        padding: 30px;
        a {
            &:hover {
                span{
                    color: #007AFF;
                }
                .fa-twitter {
                    color: rgb(29, 155, 240);
                }
                .fa-github {
                    color: rgb(36, 41, 47);
                }
                .fa-instagram {
                    color: #000;
                }
                .fa-facebook-square {
                    color: #1877f2;
                }
                .fa-discord {
                    color: rgb(88, 101, 242);
                }
                .fa-youtube {
                    color: rgb(204, 0, 0);
                }
                .fa-reddit {
                    color: #ff4500;
                }
                .fa-bitcoin {
                    color: #476C8E;
                }
                .forum {
                    filter: brightness(.7) saturate(0);
                }
                .blockfolio {
                    filter: brightness(0) saturate(0);
                }
            }
        }
        .logo {
            display: flex;
            height: 60px;
            margin-bottom: 16px;
            align-items: center;
            .icon__item {
                width: 60px;
                height: 60px;
                color: #c2c2c2;
            }
            h3 {
                margin-left: 20px;
                font-size: 24px;
                font-weight: bold;
                color: #171C34;
            }
            .blockfolio {
                filter: brightness(.75) saturate(0);
            }
            .forum {
                filter: brightness(.25) saturate(0) invert(1);
            }
        }
        span {
            font-size: 16px;
            color: #171C34;
            word-break: break-all;
        }
        @include touch {
            padding: 20px;
        }
    }
}
</style>
