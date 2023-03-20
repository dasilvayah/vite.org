<template>
  <div class="public __vite__" :class="`is-${routeName}-public`">
    <!-- <div class="airdrop__fiexd" v-if="routeName !== 'airdrop'">
      <a
        :href="urls.exchange.vitex"
        target="_blank"
        class="text-hover-transition"
      >{{$t('home.gotoVitex')}}</a>
      <nuxt-link
      :to="localePath('airdrop')"
      class="text-hover-transition">
      {{$t('home.jionAirdrop')}}
      </nuxt-link>
    </div> -->

    <!-- <no-ssr>
      <dialog-compo :visible.sync="dialogVisible" v-if="routeName === 'index'">
        <div class="is-flex dialog__img" style="justify-content: center;">
          <img src="~/assets/images/vitex.svg" />
        </div>
        <span slot="footer">
          <div @click="dialogVisible = false">
            <a
              :href="urls.exchange.vitex"
              target="_blank"
              class="footer-btn"
            >{{$t('home.gotoVitex')}}</a>
          </div>
        </span>
      </dialog-compo>
    </no-ssr> -->

    <div
      ref="navbar"
      class="navbar"
      :class="{
        [`is-${routeName}`]: true,
        [`navbar_${navbarTheme}`]: true,
        'invisible': !navbarVisible,
      }"
    >
      <div class="container is-widescreen" :class="{ 'is-open': navbarActive, }" @click="onNavClick">
        <div class="navbar-brand">
          <div @click="onLogoClick">
            <nuxt-link class="navbar-item nav-item nav-item-logo" :to="localePath('index')">
              <img v-if="navbarTheme === 'light'" src="~assets/images/home/viteLogo-white.svg" alt="Vite Logo">
              <img v-else src="~assets/images/home/viteLogo-blue.svg" alt="Vite Logo">
            </nuxt-link>
          </div>
          <div class="navbar-burger" @click="onBurgerClick">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': navbarActive }">
          <div class="navbar-end">
            <secondary-menu
              :mode="navbarMode"
              :active="navbarActive"
              :theme="navbarTheme"
              :footer-name="$t(`nav.about`)"
              :secondary-list="navAboutList"
              @expand="handleExpand"
              @collapse="handleCollapse"
            ></secondary-menu>

            <nuxt-link
              key="developer"
              :to="localePath('developer')"
              class="nav-item top-nav-item text-hover-transition"
            >{{$t(`nav.developer`)}}</nuxt-link>


            <secondary-menu
              :mode="navbarMode"
              :active="navbarActive"
              :theme="navbarTheme"
              :footer-name="$t(`nav.production`)"
              :secondary-list="navProductionList"
              @expand="handleExpand"
              @collapse="handleCollapse"
            ></secondary-menu>

            <nuxt-link
              key="ecosystem"
              :to="localePath('ecosystem')"
              class="nav-item top-nav-item text-hover-transition"
            >{{$t(`nav.ecosystem`)}}</nuxt-link>

            <secondary-menu
              :mode="navbarMode"
              :active="navbarActive"
              :theme="navbarTheme"
              :footer-name="$t(`nav.community`)"
              :secondary-list="navCommunityList"
              @expand="handleExpand"
              @collapse="handleCollapse"
            ></secondary-menu>
          </div>
        </div>
      </div>
    </div>
    <div class="nuxt-content"
      :class="{
        [`is-${routeName}-page`]: true,
        'is-hidden': navbarNeedScroll,
      }"
    >
      <transition name="fade" mode="out-in" @after-leave="afterLeave">
        <nuxt :keep-alive="true"></nuxt>
      </transition>
    </div>
    <v-footer
      :class="{
        'is-hidden': navbarNeedScroll,
      }"
      :nav-community-list="navCommunityList"
    ></v-footer>
  </div>
</template>

<script type="text/babel">
import Cookies from 'js-cookie';
import dialogCompo from '~/components/dialog/component.vue';
import LangSelect from '~/components/LangSelect.vue';
import Footer from '~/components/Footer.vue';
import config from '~/config';
import SecondaryMenu from '~/components/SecondaryMenu.vue';

export default {
  components: {
    LangSelect,
    VFooter: Footer,
    dialogCompo,
    SecondaryMenu,
  },
  head() {
    const { routeName } = this;
    const title = `${this.$t(`nav.${routeName}`)} - ${this.$t('head.title')}`;

    const description = this.$t(`head.description.${routeName}`);
    const iconUrl = 'https://vite.org/icon.png';
    const structuredData = [
      {
        '@context': 'http://schema.org',
        '@type': 'Organization',
        url: 'https://vite.org',
        name: 'Vite labs.',
        description,
        image: iconUrl,
        brand: {
          '@type': 'Brand',
          name: 'VITE',
          logo: iconUrl,
        },
        sameAs: [config.urls.twitter],
      },
    ];
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        {
          name: 'google-site-verification',
          content: 'MyUvG14lvMm-nYCWoXYE9NT21vRda-kIT6xMETrGqZk',
        },
        {
          name: 'renderer',
          content: 'webkit',
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge,chrome=1',
        },
        // Open Graph
        { name: 'og:title', content: title, hid: 'og:title' },
        { name: 'og:description', content: description, hid: 'og:description' },
        { name: 'og:type', content: 'website', hid: 'og:type' },
        { name: 'og:url', content: 'https://vite.org', hid: 'og:url' },
        { name: 'og:image', content: 'https://www.vite.org/og-logo.png', hid: 'og:image' },
        { name: 'og:image:width', content: '760', hid: 'og:image:width' },
        { name: 'og:image:height', content: '415', hid: 'og:image:height' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary', hid: 'twitter:card' },
        { name: 'twitter:site', content: '@vitelabs', hid: 'twitter:site' },
        { name: 'twitter:title', content: title, hid: 'twitter:title' },
        {
          name: 'twitter:description',
          content: description,
          hid: 'twitter:description',
        },
        {
          name: 'twitter:image',
          content: 'https://www.vite.org/og-logo.png',
          hid: 'twitter:image',
        },
        {
          name: 'twitter:image:alt',
          content: 'Vite Logo',
          hid: 'twitter:image:alt',
        },
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: structuredData.map((item) => ({
        innerHTML: JSON.stringify(item),
        type: 'application/ld+json',
      })),
    };
  },
  data() {
    return {
      dialogVisible: false,
      navPersonList: [
        {
          type: 'inner',
          name: 'counselor',
          to: 'figure',
          anchor: 'advisor',
        },
        {
          type: 'inner',
          name: 'community',
          to: 'figure',
          anchor: 'community',
        },
        {
          type: 'inner',
          name: 'investor',
          to: 'figure',
          anchor: 'investor',
        },
      ],
      navExList: ['vitex', 'binance', 'bittrex', 'okex', 'okexKr'].map((item) => ({
        type: 'outer',
        name: item,
        to: config.urls.exchange[item],
      })),
      navbarActive: false,
      navbarMode: 'dropdown',
      navbarVisible: true,
      navbarNeedScroll: false,
      lastScrollPosition: 0,
      scrollValue: 0,
      navs: ['airdrop'],
      urls: config.urls,
    };
  },
  created() {
    if (!Cookies.get('airdropDialog')) {
      Cookies.set('airdropDialog', 'true', { expires: 1 });
      this.dialogVisible = true;
    } else {
      this.dialogVisible = false;
    }
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    navProductionList() {
      return [
        {
          type: 'inner',
          name: 'viteBridge',
          to: 'viteBridge',
        },
        {
          type: 'outer',
          name: 'vitex',
          to: this.$link('vitex'),
        },
        {
          type: 'menu',
          name: 'wallet',
          subList: [
            {
              type: 'outer',
              name: 'app',
              to: this.$link('app'),
            },
            {
              type: 'outer',
              name: 'webWallet',
              to: this.$link('webWallet'),
            },
            {
              type: 'outer',
              name: 'desktopWallet',
              to: this.$link('createWallet'),
            },
          ],
        },
        {
          type: 'menu',
          name: 'explorer',
          subList: [
            {
              type: 'outer',
              name: 'viteScan',
              to: this.$link('explorer.viteScan'),
            },
            {
              type: 'outer',
              name: 'viteExplorer',
              to: this.$link('explorer.viteView'),
            },
            {
              type: 'outer',
              name: 'viteTxs',
              to: this.$link('explorer.viteTxs'),
            },
            {
              type: 'outer',
              name: 'vitcScan',
              to: this.$link('explorer.vitcScan'),
            },
            {
              type: 'outer',
              name: 'vitExplorerEu',
              to: this.$link('explorer.vitExplorerEu'),
            },
          ],
        },
      ];
    },
    navAboutList() {
      return [
        {
          type: 'inner',
          name: 'aboutVite',
          to: 'token',
        },
        {
          type: 'outer',
          name: 'viteNetwork',
          to: 'tutorial.start',
        },
        {
          type: 'outer',
          name: 'toolsTutorial',
          to: 'tutorial.toolstutorial',
        },
        {
          type: 'inner',
          name: 'faq',
          to: 'faq',
        },
      ];
    },
    navMediaList() {
      return [
        {
          type: 'outer',
          name: 'weeklyReport',
          to: 'weeklyReport',
        },
        {
          type: 'outer',
          name: 'ann',
          to: 'ann',
        },
        {
          type: 'outer',
          name: 'news',
          to: 'latestPress',
        },
      ];
    },
    navCommunityList() {
      return [
        {
          type: 'inner',
          name: 'join',
          to: 'community',
        },
        {
          type: 'outer',
          name: 'forum',
          to: config.urls.forum,
        },
      ];
    },
    routeName() {
      if (!this.$route || !this.$route.name) return 'index';
      return this.$route.name.split('-')[0];
    },
    navbarTheme() {
      return ['index'].indexOf(this.routeName) > -1 ? 'light' : 'gray';
    },
  },
  methods: {
    afterLeave() {
      console.log('triggerScroll');
      this.$root.$emit('triggerScroll');
    },
    openDotNet() {
      window.open(
        'https://international.bittrex.com/Market/Index?MarketName=BTC-VITE',
        // this.$i18n.locale === 'zh' ? 'https://vite.net/zh/' : 'https://vite.net'
      );
    },
    openAirdropPage() {
      let lang = '';
      this.$i18n.locale !== 'en'
        ? (lang = `/${this.$i18n.locale}`)
        : (lang = '');
      this.$router.push({ path: `${lang}/airdrop/` });
    },
    onNavClick(e) {
      const { target } = e;
      if ( target.closest('.top-nav-item') || target.closest('.nested-nav-item')) {
        this.navbarNeedScroll = false;
        this.navbarActive = false;
      }
    },
    onLogoClick() {
      this.navbarNeedScroll = false;
      this.navbarActive = false;
    },
    onBurgerClick() {
      this.navbarNeedScroll = false;
      this.navbarActive = !this.navbarActive;
      this.navbarMode = 'sticky'
      // setTimeout(() => {
      //   this.navbarActive = !this.navbarActive;
      // }, 500);
    },
    onScroll () {
      if (window.pageYOffset < 0 || this.navbarActive) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 100) {
        return
      }
      this.navbarVisible = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
    handleExpand(b) {
      if (b) {
        this.navbarNeedScroll = this.$refs.navbar.clientHeight > window.innerHeight;
      }
    },
    handleCollapse(b) {
      if (b) {
        this.navbarNeedScroll = this.$refs.navbar.clientHeight > window.innerHeight;
      }
    }
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "assets/vars.scss";
.airdrop__fiexd {
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 999;
  background-image: url("~assets/images/airdrop.svg");
  background-size: cover;
  width: 265px;
  height: 66px;
  font-size: 16px;
  font-family: $font-family-title;
  font-weight: 600;
  box-sizing: border-box;
  text-align: center;
  line-height: 66px;
  cursor: pointer;
  a {
    display: inline-block;
    text-align: center;
    margin-left: -45px;
    width: 265px;
    height: 66px;
    color: white;
  }
}
.dialog__img {
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    height: 100px;
  }
}
.footer-btn {
  display: inline-block;
  width: 242px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-family: $font-family-title;
  font-weight: 600;
  color: white;
  background: rgba(0, 122, 255, 1);
  box-shadow: 0px 10px 20px 0px rgba(126, 183, 238, 0.83);
  border-radius: 2px;
  cursor: pointer;
}
.public {
  // background: no-repeat url("~assets/images/bg/footer_others.svg") 0% 100%;
}

.is-index-public {
  @include touch {
    background: none;
  }
}

.img-text {
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 79px;
  z-index: 999;
  width: 153px;
  height: 131px;
  text-align: center;
  color: white;
  font-family: $font-family-title;
  font-size: 13px;
  padding-top: 30px;
  @include touch {
    top: 0px;
  }
  .act {
    max-width: 130px;
    margin: 10px;
  }
}

.is-team-page {
  margin-top: 0;
  background: no-repeat url("~assets/images/bg/team/topleft.svg") -58% 0%,
    no-repeat url("~assets/images/bg/team/topright.svg") 100% 20%,
    no-repeat url("~assets/images/bg/team/bottomright.svg") 110% 95%;
  @include touch {
    background: no-repeat url("~assets/images/bg/team/topleft.svg") -58% 0%,
      no-repeat url("~assets/images/bg/team/topright.svg") 100% 20%;
  }
}
.is-partnership-page {
  background: no-repeat url("~assets/images/bg/partnership/topleft.svg") -8% 2%,
    no-repeat url("~assets/images/bg/team/bottomright.svg") 110% 95%;
}
// .is-community-page {
//   background: no-repeat url("~assets/images/bg/partnership/topleft.svg") -8% 2%,
//     no-repeat url("~assets/images/bg/community/rightbottom.svg") 110% 95%;
// }
.is-airdrop-page {
  margin-top: 0;
  background: $common-bg-color url("~assets/images/bg/airdrop/airdropbg.svg")
    no-repeat center;
  @include touch {
    background: no-repeat url("~assets/images/bg/airdrop/bgpic.png") 60% 0%;
  }
  @include mobile {
    background: no-repeat url("~assets/images/bg/airdrop/bg.png") 50% 0%;
  }
}
.airdrop-hide {
  display: none;
}
</style>
