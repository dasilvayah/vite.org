<template>
  <div>
    <section class="home">
      <div class="container">
        <div class="topinfo">
          <h1 class="title">ZERO GAS LAYER-1</h1>
          <div class="btn-group">
            <WhitePaper class="wp-btn"></WhitePaper>
            <a
              :href="$link('viteBridge.whitePaper')"
              class="pop-btn"
              target="_blank"
              >{{$t('home.bridgeWhitepaper')}}</a>
            <a
              :href="$link('docs.vitex.en')"
              class="pop-btn"
              target="_blank"
            >{{$t('home.vitex')}}</a>
          </div>
          <div class="divider"></div>
          <h2 class="slogan">{{$t("home.slogan")}}</h2>
        </div>
      </div>
    </section>

    <section class="base-section core-feature-section">
      <div class="container">
        <h1 class="title">{{$t('home.coreFeature.title')}}</h1>
        <p class="desc">{{$t('home.coreFeature.desc')}}</p>
        <div class="features">
          <div class="item">
            <img srcset="
              ~assets/images/home/features/fee.png 1x,
              ~assets/images/home/features/fee@2x.png 2x,
              " src="~assets/images/home/features/fee.png" :alt="$t('home.coreFeature.fee.title')">
            <h3>{{$t('home.coreFeature.fee.title')}}</h3>
            <p>{{$t('home.coreFeature.fee.desc')}}</p>
          </div>
          <div class="item">
            <img srcset="
              ~assets/images/home/features/speed.png 1x,
              ~assets/images/home/features/speed@2x.png 2x,
              " src="~assets/images/home/features/speed.png" :alt="$t('home.coreFeature.speed.title')">
            <h3>{{$t('home.coreFeature.speed.title')}}</h3>
            <p>{{$t('home.coreFeature.speed.desc')}}</p>
          </div>
          <div class="item">
            <img srcset="
              ~assets/images/home/features/cross-chain.png 1x,
              ~assets/images/home/features/cross-chain@2x.png 2x,
              " src="~assets/images/home/features/cross-chain.png" :alt="$t('home.coreFeature.crossChain.title')">
            <h3>{{$t('home.coreFeature.crossChain.title')}}</h3>
            <p>{{$t('home.coreFeature.crossChain.desc')}}</p>
          </div>
          <div class="item">
            <img srcset="
              ~assets/images/home/features/ecosystem.png 1x,
              ~assets/images/home/features/ecosystem@2x.png 2x,
              " src="~assets/images/home/features/ecosystem.png" :alt="$t('home.coreFeature.ecosystem.title')">
            <h3>{{$t('home.coreFeature.ecosystem.title')}}</h3>
            <p>{{$t('home.coreFeature.ecosystem.desc')}}</p>
          </div>
          <div class="item">
            <img srcset="
              ~assets/images/home/features/evm.png 1x,
              ~assets/images/home/features/evm@2x.png 2x,
              " src="~assets/images/home/features/evm.png" :alt="$t('home.coreFeature.evm.title')">
            <h3>{{$t('home.coreFeature.evm.title')}}</h3>
            <p>{{$t('home.coreFeature.evm.desc')}}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="base-section bridge-section is-even">
      <div class="container is-flex">
        <div class="left">
          <h1>{{$t('home.bridge.title')}}</h1>
          <h2>{{$t('home.bridge.subTitle')}}</h2>
          <div class="has-text-centered">
            <p class="desc">{{$t('home.bridge.desc')}}</p>
          </div>
          <div class="btn-group">
            <a class="button section-button" :href="$link('viteBridge.whitePaper')">{{$t('home.bridge.whitePaper')}}</a>
            <a class="button section-button" :href="$link('viteBridge.tutorial')">{{$t('home.bridge.tutorial')}}</a>
            <a class="button section-button" :href="$link('viteBridge.tryit')">{{$t('home.bridge.tryit')}}</a>
          </div>
        </div>
        <div class="right">
          <img srcset="
          ~assets/images/home/aboutVite@2x.png 2x,
          ~assets/images/home/aboutVite@1x.png 1x,
          " src="~assets/images/home/aboutVite@1x.png" alt="bridge">
        </div>
      </div>
    </section>

    <section class="base-section vitex-section">
      <div class="container is-flex">
        <div class="left">
          <img srcset="
            ~assets/images/home/vitex@2x.png 2x,
            ~assets/images/home/vitex.png 1x,
            " src="~assets/images/home/vitex.png" alt="vitex">
        </div>
        <div class="right">
          <h1>{{$t('home.viteDex.title')}}</h1>
          <h2>{{$t('home.viteDex.subTitle')}}</h2>
          <p class="desc">
            <span class="is-hidden-desktop">{{$t('home.viteDex.desc')}}</span>
            <span class="is-hidden-touch">
            {{$t('home.viteDex.descMultiLine[0]')}}<br />
            {{$t('home.viteDex.descMultiLine[1]')}}
          </span>
          </p>
          <div class="btn-group">
            <a class="button section-button" :href="$link('webWallet')">{{$t('home.viteDex.trade')}}</a>
            <a class="button section-button" :href="$link('vitexMine')">{{$t('home.viteDex.getVX')}}</a>
            <a class="button section-button" :href="$link('docs.vitex')">{{$t('home.viteDex.learn')}}</a>
          </div>
        </div>
      </div>
    </section>

    <v-new class="is-even"></v-new>

    <v-roadmap></v-roadmap>

  </div>
</template>

<script>
import { VPopover } from 'v-tooltip';
import isMobile from 'is-mobile';
import New from '~/components/New/index.vue';
import WhitePaper from '~/components/WhitePaper';
import Video from '~/components/Video.vue';
import Logo from '~/components/Logo.vue';
import LogoWord from '~/components/LogoWord';
import RoadMap from '~/components/RoadMap/index.vue';
import Wechat from '~/components/Wechat';
import Telegram from '~/components/Telegram';
import JoinMailingList from '~/components/JoinMailingList';
import HomeSection from '~/components/HomeSection';
import Countdown from '~/components/Countdown';

import config from '~/config.js';
import imgEn from '~/assets/images/notice/en.jpg';
import imgZh from '~/assets/images/notice/zh.jpg';

export default {
  components: {
    VPopover,
    VNew: New,
    VVideo: Video,
    Logo,
    LogoWord,
    VRoadmap: RoadMap,
    Wechat,
    Telegram,
    JoinMailingList,
    WhitePaper,
    HomeSection,
    Countdown,
  },
  mounted() {},
  data() {
    return {
      isMobile: isMobile(),
      activity: config.urls.mainnetRelease,
      showNotice: true,
      imgObj: {
        en: imgEn,
        zh: imgZh,
      },
    };
  },
  methods: {
    openLink() {
      window.open(this.activity[this.$i18n.locale]);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/vars.scss";

.home-notification {
  position: absolute;
  z-index: 1;
  max-width: 300px;
  right: 30px;
  top: 15px + 72px;
  background: #1580e3;
  color: white;
}

.home {
  position: relative;
  font-family: $font-family-title;
  background-color: #007AFF;

  background-image: url("~assets/images/home/new-bg.png");
  background-repeat: no-repeat;
  background-position: 82% 0;
  background-size: 62% auto;

  .topinfo {
    padding-top: 160px;
    padding-bottom: 150px;
    text-align: left;
    @include mobile {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }
  .title {
    font-family: $font-family-title;
    font-weight: 500;
    font-size: 80px;
    color: #ffffff;
    margin-bottom: 70px;
    @include mobile {
      font-size: 72px;
      text-align: center;
      margin-bottom: 50px;
    }
  }
  .slogan{
    padding-right: 60px;
    font-size: 30px;
    font-family: $font-family-light;
    color: #fff;
    @include mobile {
      font-size: 28px;
      padding-right: 0;
    }
  }

  .divider {
    height: 8px;
    width: 100px;
    margin-bottom: 30px;
    background: #00E5FF;
    @include mobile {
      display: none;
    }
  }

  .btn-group {
    display: flex;
    flex-direction: row;
    margin-left: -15px;
    margin-bottom: 100px;

    color: white;
    letter-spacing: 1px;
    text-align: center;
    cursor: pointer;

    .pop-btn {
      box-shadow: none;
      display: inline-block;
      min-width: 200px;
      padding: 0 17px;
      height: 54px;
      line-height: 54px;
      color: white;
      background: transparent;
      border: 1px solid #ffffff;
      border-radius: 0px;
      font-size: 16px;
      font-weight: 600;
      margin-right: 15px;
      margin-left: 15px;
      &:hover {
        background: rgba(0,0,0,0.05);
      }
      @include touch {
        width: 124px;
        height: 50px;
        line-height: 50px;
        font-size: 12px;
        margin-right: 14px;
        border: none;
      }
    }

    .wp-btn {
      /deep/ .trigger {
        span {
          background: white;
          color: #007AFF;
          padding-left: 35px;
          padding-right: 35px;
          @include until($desktop) {
            background: none;
            color: white;
          }
        }
      }
      /deep/ .wp-wrapper {
        min-width: 200px;
        margin-right: 15px;
        margin-left: 15px;
      }
    }

    @include touch {
      align-items: center;
      flex-wrap: wrap;
      margin-top: 12px;
      .pop-btn {
        background: transparent;
        padding: 0;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        text-align: left;
        width: auto;
        min-width: unset;
        margin-top: 10px;
        @include more-icon();
      }
      .wp-btn {
        /deep/ .trigger {
          span {
            padding-left: 0;
            padding-right: 0;
          }
        }

        /deep/ .wp-wrapper {
          min-width: unset;
        }
      }

      @include mobile {
        flex-direction: column;
        margin-bottom: 50px;
        margin-left: 0;
      }

    }
  }


  @include touch {
    background-position: 80% 200px;
    padding-left: 15px;
    padding-right: 15px;
  }

  @include mobile {
    background-size: 100% auto;
    /* background-size: cover; */
    background-position: left 65px;
  }

  @include fullhd {
    background-size: 70% auto;
    background-position: 80% 0;
    /* background-size: cover; */
  }
}

section.is-even {
  background: #f5faff;
  padding-top: 100px;
  padding-bottom: 100px;
}

.base-section {
  margin-top: 80px;
  margin-bottom: 80px;
  h1 {
    margin-bottom: 30px;
    font-size: 44px;
    line-height: 48px;
    /* text-align: center; */
  }
  h2 {
    margin-bottom: 30px;
    font-size: 34px;
    font-family: $font-family-light;
    color: #171C34;
  }
  @include mobile {
    h1 {
      font-size: 28px;
    }
    h2 {
      font-size: 18px;
    }
  }
  p.desc {
    /* display: inline-block; */
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 30px;
    color: #54565a;
    text-align: left;
  }
  .btn-group {
    display: flex;
    flex-flow: row wrap;
    margin-left: -10px;
    .section-button {
      margin: 10px 10px;
      padding: 17px 26px;
      background: none;
      box-shadow: none;
      color: #007AFF;
      border: 1px solid #007aff;
    }
  }
  img {
    display: inline-block;
  }
  @include until($desktop) {
    padding-left: 15px;
    padding-right: 15px;
  }
}

.core-feature-section{
  margin-top: 100px;
  margin-bottom: 100px;
  h1 {
    font-size: 30px;
    font-weight: 400;
  }
  .desc {
    max-width: 630px;
  }
  .features {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 50px;
    margin-top: 60px;
    .item {
      border: 1px solid #22273e;
    }
    .item {
      padding: 50px 16px 80px;
      img {
        margin-left: 4px;
        margin-bottom: 30px;
        width: 60px;
        height: 60px;
      }
      h3 {
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 24px;
        color: #171c34;
      }
      p {
        font-size: 12px;
        line-height: 16px;
        color: #54565A;
      }
    }
  }
  @include mobile {
    .features {
      grid-template-columns: 1fr;
      row-gap: 20px;
      .item {
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        padding: 30px 16px;
        img {
          margin-bottom: 0;
        }
        h3 {
          align-self: center;
          margin-bottom: 0;
        }
        p {
          margin-top: 20px;
        }
      }
    }
  }
  @include tablet-only {
    .features {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 30px;
      row-gap: 30px;
    }
  }
  @include desktop-only {
    .features {
      column-gap: 16px;
    }
  }
  @include fullhd {
    .container {
      width: 1300px;
      max-width: 1300px;
    }
  }
}

.bridge-section {
  .left {
    width: 64%;
    padding-right: 60px;
  }
  .right {
    max-width: 600px;
    margin-top: 50px;
    margin-right: -200px;
    img {
      padding: 15px;
      border-radius: 6px;
      box-shadow: 0px 2px 16px 4px rgba(0,0,0,0.06);
    }
  }
  @include touch {
    .is-flex {
      flex-flow: column;
    }
    .left {
      width: 100%;
      padding-right: 0;
    }
    .right {
      width: 100%;
      max-width: 100%;
      margin: 30px auto 0;
      img {
        width: 100%;
      }
    }
  }
  @include desktop-only {
    .is-flex {
      flex-flow: column;
    }
    .left {
      width: 100%;
      padding-right: 0;
    }
    .right {
      width: 60%;
      max-width: 60%;
      margin: 30px auto 0;
    }
  }
  @include fullhd {
    .left {
      width: 60%;
    }
    .right {
      width: 40%;
    }
  }
}


.vitex-section {
  .left {
    margin-top: 100px;
    margin-left: -180px;
    max-width: 600px;
  }
  .right {
    width: 64%;
    padding-left: 60px;
  }
  @include touch {
    .is-flex {
      flex-flow: column-reverse;
    }
    .left {
      width: 100%;
      max-width: 100%;
      margin: 30px auto 0;
      img {
        width: 100%;
      }
    }
    .right {
      width: 100%;
      padding-left: 0;
    }
  }
  @include desktop-only {
    .is-flex {
      flex-flow: column-reverse;
    }
    .left {
      width: 60%;
      max-width: 60%;
      margin: 30px auto 0;
    }
    .right {
      width: 100%;
      padding-left: 0;
    }
  }
  @include fullhd {
    margin-left: 0;
    margin-right: 0;
    .left {
      width: 40%;
      margin-left: 0;
    }
    .right {
      width: 60%;
    }
  }
}
</style>
