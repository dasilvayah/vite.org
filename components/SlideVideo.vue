<template>
  <div class="slide-video">
    <agile ref="agile" :options="agileOption" @after-change="handleafterChange">
        <div v-for="(item, idx) in data" :key="idx">
            <iframe :src="item.src"
                :id="'player'+ idx"
                frameborder="0" 
                height="500px"
                width="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="agile__desc">
                <h3>{{item.title}}</h3>
                <p>{{item.desc}}</p>
            </div>
        </div>
        <template slot="prevButton">
            <fa-icon class="icon" :icon="['fas', 'arrow-left']"/>
        </template>
        <template slot="nextButton">
            <fa-icon class="icon" :icon="['fas', 'arrow-right']"/>
        </template>
    </agile>
  </div>
</template>

<script type="text/babel">
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  head () {
    return {
      script: [
        {
          hid: 'youtube',
          src: 'https://www.youtube.com/iframe_api',
          defer: true,
          // Changed after script load
          callback: () => {
            window.YT.ready(() => {
              this.data.forEach((x, idx) => {
                new window.YT.Player(`player${idx}`, {
                  events: {
                    'onStateChange': (ev) => {
                        this.player = ev.target
                    },
                  }
                });
              })
            })
          } 
        }
      ]
    }
  },
  data() {
    return {
      youtubeAPIReady: false,
      agileOption: {
        dots: false,
        infinite: false,
      },
      playerReady: false,
      player: null,
    }
  },
  methods: {
    handleafterChange() {
      if (this.player) {
        /*
         * Returns the state of the player. Possible values are:
         * -1 – unstarted
         * 0 – ended
         * 1 – playing
         * 2 – paused
         * 3 – buffering
         * 5 – video cued
         */
        const state= this.player.getPlayerState();
        if(state == 1) {
            this.player.pauseVideo();
        }
      }
    }
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "assets/vars.scss";

.slide-video .agile {
    &__desc {
        margin-top: 40px;
        h3 {
            margin-bottom: 30px;
            font-size: 28px;
            font-weight: 600;
        }
        p {
            font-size: 16px;
            line-height: 30px;
        }
    }

    &__nav-button {
        background: transparent;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 24px;
        height: 56%;
        position: absolute;
        top: 10%;
        transition-duration: .3s;
        width: 118px;
        @include mobile {
          height: 36%;
        }
        .icon {
            height: 46px;
            width: 46px;
            padding: 10px;
            font-size: 24px;
            color: #fff;
            background: #8F8D8D;
            border-radius: 23px;
            border: none;
            cursor: pointer;
            opacity: .9;
        }

        &:hover {
            opacity: 1;
            .icon {
                opacity: 1;
            }
        }

        &--prev {
            left: 0;
            &:hover {
                background: linear-gradient(90deg, rgba(0,0,0,.7), rgba(0,0,0,.35));
            }
        }

        &--next {
            right: 0;
            &:hover {
              background: linear-gradient(270deg, rgba(0,0,0,.7), rgba(0,0,0,.35));
            }
        }
    }
}
</style>
