<template>
    <div class="page-community">
        <page-header name="developer" :buttons="headerBtns"></page-header>

        <section class="DAO">
            <img class="left" srcset="
            ~assets/images/developer/DAO@2x.png 2x,
            ~assets/images/developer/DAO@1x.png 1x,
            " src="~assets/images/developer/DAO@1x.png" alt="Vuilder DAO">
            <div class="right">
                <h1>{{$t('developer.DAO.title')}}</h1>
                <p>{{$t('developer.DAO.desc')}}</p>
                <a class="button" :href="$link('developer.introDAO')" target="_blank">{{$t('developer.DAO.btn')}}</a>
            </div>
        </section>

        <section class="base hackathon" id="hackathon">
            <div class="container">
                <h1>{{$t('developer.hackathon.title')}}</h1>
                <p v-html="$t('developer.hackathon.desc')"></p>
                <div class="items">
                    <div class="item gr12">
                        <a :href="$link('developer.hackathon.gr12')" target="_blank">
                            <img srcset="
                            ~assets/images/developer/gr12@2x.png 2x,
                            ~assets/images/developer/gr12@1x.png 1x,
                            " src="~assets/images/developer/gr12@1x.png" alt="hackathon 12">
                        </a>
                    </div>
                    <div class="item gr11">
                        <a :href="$link('developer.hackathon.gr11')" target="_blank">
                            <img srcset="
                            ~assets/images/developer/gr11@2x.png 2x,
                            ~assets/images/developer/gr11@1x.png 1x,
                            " src="~assets/images/developer/gr11@1x.png" alt="hackathon 11">
                        </a>
                    </div>
                    <div class="item gr10">
                        <a :href="$link('developer.hackathon.gr10')" target="_blank">
                            <img srcset="
                            ~assets/images/developer/gr10@2x.png 2x,
                            ~assets/images/developer/gr10@1x.png 1x,
                            " src="~assets/images/developer/gr10@1x.png" alt="hackathon 10">
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="base tutor">
            <div class="container">
                <h1>Tutorials</h1>
                <SlideVideo :data="tutorList"></SlideVideo>
            </div>
        </section>

        <!-- <section class="base tools"> -->
        <!--     <div class="container"> -->
        <!--         <h1>{{$t('developer.tools.title')}}</h1> -->
        <!--         <div class="columns"> -->
        <!--             <div class="column"> -->
        <!--                 <a :href="$link('docs.java')" target="_blank"> -->
        <!--                     <img srcset=" -->
        <!--                     ~assets/images/developer/java@2x.png, -->
        <!--                     ~assets/images/developer/java@1x.png, -->
        <!--                     " src="~assets/images/developer/java@1x.png" alt="Java SDK"> -->
        <!--                     <h3>{{$t('developer.tools.javaSDK')}}</h3> -->
        <!--                 </a> -->
        <!--             </div> -->
        <!--             <div class="column right"> -->
        <!--                 <a :href="$link('docs.js')" target="_blank"> -->
        <!--                     <img srcset=" -->
        <!--                     ~assets/images/developer/js@2x.png, -->
        <!--                     ~assets/images/developer/js@1x.png, -->
        <!--                     " src="~assets/images/developer/js@1x.png" alt="JavaScript SDK"> -->
        <!--                     <h3>{{$t('developer.tools.jsSDK')}}</h3> -->
        <!--                 </a> -->
        <!--             </div> -->
        <!--         </div> -->
        <!--         <div class="columns"> -->
        <!--             <div class="column"> -->
        <!--                 <a :href="$link('docs.vep')" target="_blank"> -->
        <!--                     <img srcset=" -->
        <!--                     ~assets/images/developer/vep@2x.png, -->
        <!--                     ~assets/images/developer/vep@1x.png, -->
        <!--                     " src="~assets/images/developer/vep@1x.png" alt="VEP"> -->
        <!--                     <h3>{{$t('developer.tools.VEP')}}</h3> -->
        <!--                 </a> -->
        <!--             </div> -->
        <!--             <div class="column right"> -->
        <!--                 <a :href="$link('docs.vscode')" target="_blank"> -->
        <!--                     <img srcset=" -->
        <!--                     ~assets/images/developer/vscode@2x.png, -->
        <!--                     ~assets/images/developer/vscode@1x.png, -->
        <!--                     " src="~assets/images/developer/vscode@1x.png" alt="VScode"> -->
        <!--                     <h3>{{$t('developer.tools.VScode')}}</h3> -->
        <!--                 </a> -->
        <!--             </div> -->
        <!--         </div> -->
        <!--     </div> -->
        <!-- </section> -->

        <section class="base join">
            <div class="container">
                <h1>{{$t('developer.join.title')}}</h1>
                <a class="button" :href="$link('developer.discord')">{{$t('developer.join.discord')}}</a>
            </div>
        </section>
        
        <!-- <home-section name="joinDev" :buttons="joinDevBtns" center></home-section> -->
    </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import SlideVideo from '~/components/SlideVideo.vue';

export default {
  components: {
    PageHeader,
    SlideVideo,
  },
  data() {
    return {
      tutorList: [
        {
          title: "Vite: Solidity++ dApp Development Workshop - Solidity++",
          desc: "Full dApp development workshop series for beginners. Participants will learn to build and deploy a complete Vite-based dApp from scratch using Solidity++ and Vite.js. Minimal experience needed.",
          src: "https://www.youtube.com/embed/Y1ZvlZNK320?rel=0&showinfo=0&fs=0&modestbranding=1&iv_load_policy=3&autohide=1&enablejsapi=1",
        },
        {
          title: "Vite: Solidity++ dApp Development Workshop - Vite.js",
          desc: "Full dApp development workshop series for beginners. Participants will learn to build and deploy a complete Vite-based dApp from scratch using Solidity++ and Vite.js. Minimal experience needed.",
          src: "https://www.youtube.com/embed/ZG-AumOJP5s?rel=0&showinfo=0&fs=0&modestbranding=1&iv_load_policy=3&autohide=1&enablejsapi=1",
        },
      ],
    }
  },
  computed: {
    dappBtns() {
      return [
        {
          name: 'learn',
          url: this.$link('tutorial.dappDevelopment'),
        },
      ];
    },
    headerBtns() {
      return [
        {
          name: 'wiki',
          url: this.$link('document'),
        },
        {
          name: 'github',
          url: this.$link('github'),
        },
        {
          name: 'smartContract',
          url: this.$link('docs.dapp'),
        },
      ];
    },
    // joinDevBtns() {
    //   return [
    //     {
    //       name: 'techGroup',
    //       url: this.$link('telegram.english'),
    //     },
    //     {
    //       name: 'toForum',
    //       url: this.$link('forum'),
    //     },
    //   ];
    // },
  },
  methods: {
    setPlayerNavHeight(ev) {
      setTimeout(() => {
        const $iframe = this.$refs.carousel.$el.querySelector('.agile__slide--active iframe');
        if ($iframe) {
          this.playerHeight = $iframe.offsetHeight * 0.6 + 'px';
        }
      }, 300);
      if (this.player) {
        /*
         * Returns the state of the player. Possible values are:
         * 1 – unstarted
         * 0 – ended
         * 1 – playing
         * 2 – paused
         * 3 – buffering
         * 5 – video cued
         */
        const state= this.player.getPlayerState();
        console.log(state);
        if (state == 2) {
            this.player.playVideo();
        } else {
            this.player.pauseVideo();
        }
      }
    },
  }
};
</script>

<style lang="scss" scoped>
@import "assets/vars.scss";

.dev-support {
    padding-top: 90px;
    padding-bottom: 90px;
    background-color: #F5FAFF;
    h2 {
        @include title();
        font-size: 44px;
        line-height: 48px;
        text-align: center;
        margin-bottom: 90px;
    }
    &__content {
        display: flex;
        flex-direction: row;
        margin: -48px;
        /*word-break: break-all;*/
    }
    &__item {
        flex: 1;
        margin: 48px;
        padding: 40px 30px;
        border-radius: 6px;
        box-shadow: 0px 0px 20px 4px rgba(0,122,255,0.1);
        color: #171c34;
        h4 {
            @include title();
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 30px;
            text-align: center;
        }
        & > div {
            font-size: 16px;
            line-height: 30px;
        }
    }

    @include until($desktop) {
        padding: 60px 15px;
        h2 {
            line-height: 24px;
            font-size: 20px;
            margin-bottom: 30px;
        }
        &__content {
            flex-direction: column;
            margin: -20px
        }
        &__item {
            margin: 20px;
        }
    }
}

section.base {
    margin-top: 80px;
    margin-bottom: 80px;
    h1 {
        font-size: 44px;
        line-height: 48px;
        margin-bottom: 30px;
    }
    p {
        font-size: 18px;
        line-height: 30px;
        max-width: 760px;
        color: #54565A;
    }
    .button {
        font-size: 16px;
        font-weight: 600;
        height: 54px;
        line-height: 54px;
        color: #007AFF;
        border: 1px solid #007AFF;
        padding: 0 20px;
        border-radius: 0px;
        &:hover {
            /* background: rgba(0,0,0,0.03); */
            background: rgba(0,122,255,.05);
        }
    }
    @include touch {
        padding-left: 15px;
        padding-right: 15px;
        h1{
            font-size: 28px;
            white-space: normal;
            line-height: 42px;
        }
        p {
            width: 100%;
            line-height: 24px;
        }
    }

}
.DAO {
    display: flex;
    margin: 80px 0 120px 160px;
    .left {
        width: 364px;
        height: 364px;
        margin-right: 90px;
    }
    .right {
        width: 100%;
        padding: 60px 62px;
        background-color: #f5faff;
        background-image: url("~assets/images/developer/DAO-bg@1x.png");
        background-size: 553px 436px;
        background-position: top right;
        background-repeat: no-repeat;
        @media 
        (-webkit-min-device-pixel-ratio: 2), 
        (min-resolution: 2dppx) { 
            background-image: url("~assets/images/developer/DAO-bg@2x.png");
        }
        p {
            max-width: 760px;
            margin-bottom: 40px;
            font-size: 18px;
            line-height: 30px;
            color: #54565A;
        }
    }
    h1 {
        line-height: 48px;
        margin-bottom: 30px;
    }
    .button {
        /* display: none; */
        height: 54px;
        line-height: 54px;
        width: 240px;
        font-weight: bold;
        color: #007AFF;
        border: 1px solid #007aff;
        padding: 17px 26px;
        border-radius: 0px;
        &:hover{
          border:1px solid #007aff;
          /* background: rgba(0,0,0,0.03); */
          background: rgba(0,122,255,.05);
        }
    }
    @include touch {
        margin-left: 0;
        margin-top: 100px;
        margin-bottom: 100px;
        h1{
            font-size: 28px;
            line-height: 42px;
            font-weight: 300;
        }
        .left { display: none; }
        .right{
            padding: 90px 20px;
            p {
                width: 100%;
            }
        }
    }
}

.hackathon{
    margin-top: 150px;
    margin-bottom: 150px;
    h1 {
        margin-bottom: 27px;
    }
    p {
        margin-bottom: 40px;
        max-width: 760px;
    }
    img {
        display: inline-block;
        max-width: 370px;
    }
    .items {
        display: flex;
        flex-flow: row wrap;
    }
    .item {
        margin: 0 22px;
    }
    .gr12 {
        img{
            background-color: #FFF8DB;
        }
    }
    .gr11 {
        img {
            background-color: #E5E3FF;
        }
    }
    .gr10 {
        img{
            background-color: #E6FFF9;
        }
    }
    @include fullhd {
      .item {
        &:nth-child(3n) {
          margin-right: 0;
        }
        &:nth-child(3n+1) {
          margin-left: 0;
        }
      }
    }
    @include until($fullhd) {
      .item {
          margin: 0 20px 20px 0;
      }
    }
    @include mobile {
        .item {
            margin: 0 0 20px;
            width: 100%;
            text-align: center;
        }
        img {
            max-width: 100%;
        }
    }
}
.tutor{
    background-color: #F5FAFF;
    padding-top: 40px;
    padding-bottom: 40px;
    h3 {
        font-size: 28px;
        margin-bottom: 30px;
        font-weight: 600;
    }
    .carousel {
        .nav-left {
            position: absolute;
            top: 15%;
            left: 0;
            width: 118px;
            cursor: pointer;
            background: transparent;
            transition: visibility 0s linear 300ms, opacity 300ms;
            .icon {
                left: 20px;
            }
            &:hover {
                background: linear-gradient(90deg, rgba(0,0,0,.7), rgba(0,0,0,.35));
                transition: visibility 0s linear 0s, opacity 300ms;
            }
        }
        .nav-right {
            position: absolute;
            top: 15%;
            right: 0;
            width: 118px;
            cursor: pointer;
            background: transparent;
            transition: visibility 0s linear 300ms, opacity 300ms;
            .icon {
                right: 20px;
            }
            &:hover {
              background: linear-gradient(270deg, rgba(0,0,0,.7), rgba(0,0,0,.35));
                transition: visibility 0s linear 0s, opacity 300ms;
            }
        }
        .icon {
            position: absolute;
            top: 45%;
            height: 46px;
            width: 46px;
            padding: 10px;
            color: #fff;
            background: #8D8682;
            border-radius: 23px;
            border: none;
        }
    }
    nav {
        @include mobile {
            display: flex;
            justify-content: space-between;
            .icon{
                position: static;
                height: 50px;
                width: 50px;
            }
        }
    }
}
.tools {
    margin-bottom: 100px;
    h1 {
        margin-bottom: 90px;
    }
    .columns{
        margin-bottom: 40px;
    }
    .column {
        position: relative;
        &.right{
            position: absolute;
            right: 0;
        }
        a {
            display: block;
            background-color: #F8F8F8;
            width: 567px;
            height: 322px;
        }
        img {
            max-width: 171px;
            margin-top: 35px;
            margin-left: 44px;
            margin-bottom: 10px;
        }
        h3 {
            font-size: 36px;
            color: #171C34;
            margin-left: 50px;
        }
    }
    @include touch {
        .columns{
            margin-bottom: calc(1.5rem - 0.75rem);
        }
        .column {
            position: static;
            &.right {
                position: static;
            }
            a {
                width: 100%;
                height: 400px;
            }
        }
    }
}
section.join {
    margin: 100px 0;
    text-align: center;
    h1 {
        margin-bottom: 48px;
    }
    .button {
        width: 306px;
        margin: 0 10px 20px;
    }
}
</style>
