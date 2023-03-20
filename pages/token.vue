<template>
    <div class="page-what-is-vite">
        <page-header name="token" :buttons="headerBtns"></page-header>
        <section class="token-info container">
            <h2 class="section-title">{{$t('token.info.title')}}</h2>
            <ul class="token-info-desc">
                <li>
                    <img src="~/assets/images/tokenInfo/tokenName.svg" alt="">
                    <div>{{$t('token.info.tokenName')}}</div>
                </li>
                <li>
                    <img src="~/assets/images/tokenInfo/issueDate.svg" alt="">
                    <div>{{$t('token.info.issueDate')}}</div>
                </li>
                <li>
                    <img src="~/assets/images/tokenInfo/totalSuply.svg" alt="">
                    <div>{{$t('token.info.totalSuply')}}</div>
                </li>
            </ul>
        </section>

        <distribution></distribution>
        <section class="section-token-use-case container padding-until-desktop">
            <h2 class="section-title">{{$t('token.using.title')}}</h2>
            <div class="token-use-case">
                <div v-for="item in tokenUsing" :key="item.name" class="item">
                    <h3>{{$t(`token.using.${item.name}.title`)}}</h3>
                    <p v-html="$t(`token.using.${item.name}.text`)"></p>
                    <a class="button section-button" :href="item.url" target="_blank">{{$t(`token.using.${item.name}.btn`)}}</a>
                </div>
            </div>
        </section>
        <section class="section-get-token">
            <div class="container padding-until-desktop">
                <h2 class="section-title" id="getToken">{{$t('token.getToken.title')}}</h2>
                <div class="exchange-list">
                    <h3>{{$t('token.getToken.exchange')}}</h3>
                    <div>
                        <a v-for="exchange in exchangeList" :class="exchange.name" :key="exchange.name" :href="exchange.link" target="_blank">
                            <img :src="exchange.logo" :alt="exchange.name">
                        </a>
                    </div>
                </div>
                <div class="section-get-token__content">
                  <div class="grid-container">
                    <div key="runSBP">
                        <h3>{{$t(`token.getToken.runSBP.title`)}}</h3>
                        <div class="section-get-token__desc">{{$t(`token.getToken.runSBP.desc`)}}</div>
                        <a class="button section-button" :href="$link('docs.sbp')" target="_blank">{{$t(`token.getToken.learn`)}}</a>
                    </div>
                    <div key="runFullnode">
                        <h3>{{$t(`token.getToken.runFullnode.title`)}}</h3>
                        <div class="section-get-token__desc">{{$t(`token.getToken.runFullnode.desc`)}}</div>
                        <a class="button section-button" :href="$link('docs.fullnode')" target="_blank">{{$t(`token.getToken.learn`)}}</a>
                    </div>
                  </div>
                    <div key="vote">
                        <h3>{{$t(`token.getToken.vote.title`)}}</h3>
                        <div class="section-get-token__desc">{{$t(`token.getToken.vote.desc`)}}</div>
                        <a class="button section-button" :href="$link('usingVite.votingForSBP')" target="_blank">{{$t(`token.getToken.vote.btnGroup.tutorial`)}}</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- <home-section name="wallet" :buttons="walletBtns"></home-section> -->
        <investor id="partner" :title="$t('whatIsVite.partner')" type="partner" class="section-partner"></investor>
    </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import Distribution from '~/components/token/Distribution';
import nodeList from '~/components/whatIsVite/nodeList.js';
// import HomeSection from '~/components/HomeSection';
import Investor from '~/components/whatIsVite/Investor';
import config from '~/config.js';

const exchangeList = [
  {
    name: 'binance',
    logo: require('~/assets/images/exchange/binance.svg'),
    link: config.urls.exchange.binance,
  },
  {
    name: 'binance.us',
    logo: require('~/assets/images/exchange/binance_us.svg'),
    link: config.urls.exchange.binanceUS,
  },
  {
    name: 'vitex',
    logo: require('~/assets/images/exchange/vitex.svg'),
    link: config.urls.exchange.vitex,
  },
  {
    name: 'bittrex',
    logo: require('~/assets/images/exchange/bittrex.svg'),
    link: config.urls.exchange.bittrex,
  },
  {
    name: 'coinex',
    logo: require('~/assets/images/exchange/coinex.svg'),
    link: config.urls.exchange.coinex,
  },
  {
    name: 'wazirx',
    logo: require('~/assets/images/exchange/wazirx.svg'),
    link: config.urls.exchange.wazirx,
  },
  {
    name: 'bitrue',
    logo: require('~/assets/images/exchange/bitrue.png'),
    link: config.urls.exchange.bitrue,
  },
  {
    name: 'uniswap',
    logo: require('~/assets/images/exchange/uniswap.svg'),
    link: config.urls.exchange.uniswap,
  },
  {
    name: 'sushi',
    logo: require('~/assets/images/exchange/sushiSwap.png'),
    link: config.urls.exchange.sushi,
  },
  {
    name: '1inch',
    logo: require('~/assets/images/exchange/1inch.svg'),
    link: config.urls.exchange.oneinch,
  },
  {
    name: 'pancake',
    logo: require('~/assets/images/exchange/pancake.svg'),
    link: config.urls.exchange.pancake,
  },
];

export default {
  components: {
    PageHeader,
    Distribution,
    // HomeSection,
    Investor,
  },
  data() {
    return {
      nodeList,
      exchangeList,
    };
  },
  computed: {
    walletBtns() {
      return [
        {
          name: 'ios',
          url: this.$link('viteApp.ios'),
        },
        {
          name: 'android',
          url: this.$link('viteApp.android'),
        },
        {
          name: 'qr',
          url: this.$link('app'),
        },
        {
          name: 'learn',
          url: this.$link('forumContent.app'),
        },
      ];
    },
    headerBtns() {
      return [
        {
          name: 'nativeVite',
          url: this.$link('auditReport.native'),
        },
        {
          name: 'bep20Audit',
          url: this.$link('auditReport.bep20'),
        },
        {
          name: 'erc20Audit',
          url: this.$link('auditReport.erc20'),
        },
      ];
    },
    tokenUsing() {
      return [
        {
          name: 'stakingForQuota',
          url: this.$link('usingVite.stakingForQuota'),
        },
        {
          name: 'stakingForMining',
          url: this.$link('usingVite.stakingForMining'),
        },
        {
          name: 'votingForSBP',
          url: this.$link('usingVite.votingForSBP'),
        },
      ];
    },
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "assets/vars.scss";

.section-title {
    @include title();
    font-size: 44px;
    line-height: 48px;

    @include until($desktop) {
        line-height: 24px;
        font-size: 20px;
    }
}
.section-button{
    background: none;
    box-shadow: none;
    color: #007AFF;
    border: 1px solid #007aff;
    padding: 17px 26px;
    &:hover{
        border:1px solid #007aff;
        /* background: rgba(0,0,0,0.03); */
        background: rgba(0,122,255,.05);
    }
}

.token-info {
    padding-top: 150px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .token-info-desc {
        width: 100%;
        margin-top: 90px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        li {
            @include title();
            text-align: center;
            font-size: 20px;
            line-height: 24px;
            img {
                margin-bottom: 42px;
                @include touch {
                }
            }
        }
    }
    @include touch {
        padding-top: 60px;
        padding-bottom: 20px;
        .section-title {
            margin-bottom: 30px
        }
        .token-info-desc {
            margin-top: 30px;
            li {
                font-size: 12px;
                line-height: 16px;
                img {
                    margin-bottom: 21px;
                    height: 50px;
                    width: auto;
                }
            }
        }
    }
}

.section-token-use-case {
    padding: 150px 0;
    .section-title {
        text-align: center;
        margin-bottom: 90px;
    }
    .token-use-case {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        flex-direction: row;
        column-gap: 40px;
        .item {
            display: flex;
            flex-direction: column;
            /* grid-template-rows: 42px auto 54px; */
            box-shadow: 0px 0px 20px 4px rgba(0,122,255,0.1);
            padding: 30px 20px;
            h3 {
                @include title();
                font-size: 20px;
                line-height: 24px;
                margin-bottom: 18px;
                text-align: center;
            }
            p {
                font-size: 14px;
                line-height: 30px;
                margin-bottom: 30px;
            }
            .button {
                margin-top: auto;
                margin: auto 20px 0;
            }
        }
    }
    @include touch {
        padding: 90px 0;
        .section-title {
            margin-bottom: 30px;
        }
        .token-use-case {
            padding: 0 15px;
            grid-template-columns: 1fr;
            row-gap: 40px;
        }
    }
}
.section-get-token {
    padding: 90px 0;
    background-color: #F5FAFF;
    .section-title {
        margin-bottom: 80px;
        text-align: center;
    }
    h3 {
        @include title();
        text-align: left;
        color: #171c34;
        line-height: 24px;
        font-size: 20px;
        margin-bottom: 30px;
    }
    .exchange-list {
        & > div {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-auto-rows: 80px;
            margin-bottom: 60px;
            a {
                display: flex;
                padding: 24px;
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
            .pancake img {
                object-fit: cover;
            }
        }
    }
    .section-get-token__desc {
        line-height: 30px;
        font-weight: 400;
        color: #54565a;
        font-size: 14px;
        margin-bottom: 20px;
    }
    .section-get-token__content {
        .grid-container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 20px;
            margin-bottom: 70px;
            > div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                .button {
                    margin-top: auto;
                }
            }
        }
    }
    @include touch {
        padding-top: 60px;
        padding-bottom: 30px;
        .section-title {
            margin-bottom: 30px;
        }
        h3 {
            margin-bottom: 10px;
        }
        .exchange-list > div{
            grid-template-columns: repeat(3, 1fr);
        }
        .section-get-token__content {
            flex-direction: column;
            & > div {
                width: 100%;
                margin-top: 70px;
                &:first-child {
                    margin-top: 0;
                }
            }
        }

    }
    @include mobile {
        .exchange-list > div {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}

</style>
