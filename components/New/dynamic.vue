<template>
  <div class="news-dynamic">
      <agile ref="agile" :options="agileOption" v-if="list.length > 0">
        <div v-for="(item, idx) in list" :key="idx">
            <div class="agile__desc">
                <a :href="item.skipUrl" target="_blank">
                    <img :src="item.img" :alt="item.title">
                    <p>{{item.date}}</p>
                    <h3>{{item.title}}</h3>
                </a>
            </div>
        </div>
        <template slot="prevButton">
            <fa-icon class="icon" :icon="['fas', 'arrow-left']"/>
        </template>
        <template slot="nextButton">
            <fa-icon class="icon" :icon="['fas', 'arrow-right']"/>
        </template>
      </agile>
      <!-- <div class="pic"> -->
      <!--     <three-column :list="list" :is-custom="resAcLen > 3"></three-column> -->
      <!-- </div> -->
  </div>
</template>
<script type="text/babel">
// import ThreeColumn from '~/components/ThreeColumn';

export default {
  components: {
    // ThreeColumn,
  },
  data() {
    return {
      dynamics: [],
      resAcLen: 0,
      agileOption: {
        dots: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slideMultiple: true,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              slideMultiple: true,
            }
          },
        ]
      },
    };
  },
  async mounted() {
    const url = this.$i18n.locale === 'zh' ? '/discover_zh.json' : '/discover_en.json';
    const reportUrl = this.$i18n.locale === 'zh' ? '/report_zh.json' : '/report_en.json';
    await this.getData(url, reportUrl);
  },
  watch: {
    '$i18n.locale': async function (val) {
      const url = val === 'zh' ? '/discover_zh.json' : '/discover_en.json';
      const reportUrl = val === 'zh' ? '/report_zh.json' : '/report_en.json';
      await this.getData(url, reportUrl);
    },
  },
  methods: {
    async getData(url, reportUrl) {
      const res = await this.$axios.$get(url);
      for (let i = 0; i < res.tags.length; i++) {
        if (res.tags[i].tag === 'news') {
          let res = await this.$axios.$get(url);
          res = res.tags[i].list.filter((item) => item.source === 1);
          const resReport = await this.$axios.$get(reportUrl);
          this.resAcLen = res.length + resReport.length;

          this.dynamics = res.concat(resReport) || [];
        }
      }
    },
  },
  computed: {
    list() {
      return this.dynamics.map((item) => {
        const time = new Date(item.createTime * 1000);
        item.bannerUrl = item.bannerUrl.replace(/\s/ig, '');
        return {
          img: item.bannerUrl,
          title: item.desc,
          skipUrl: item.skipUrl,
          date: time.toLocaleDateString(),
        };
      }).slice(0, 9);
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss">
@import "~assets/vars";
.news-dynamic{
    overflow: hidden;
    .agile {
        margin: 0 -15px;

        &__slide {
            height: 280px;
            padding: 0 15px;
            @include widescreen {
              height: 290px;
            }
        }

        &__desc {
            img {
                display: block;
            }
            p {
                margin: 16px 0 10px;
                font-size: 13px;
                line-height: 16px;
                font-weight: 600;
                color: #919aa3;
            }
            h3 {
                font-size: 14px;
                line-height: 18px;
                font-weight: 600;
                color: #171c34;
            }
        }

        &__nav-button {
            background: transparent;
            border: none;
            color: #fff;
            cursor: pointer;
            font-size: 24px;
            height: 217px;
            position: absolute;
            top: 0;
            transition-duration: .3s;
            width: 66px;
            padding: 0;
            .icon {
                height: 46px;
                width: 46px;
                padding: 10px;
                font-size: 24px;
                color: #fff;
                background: #8F8D8D;
                border-radius: 23px;
                cursor: pointer;
                opacity: .7;
            }

            &:hover {
                .icon {
                    opacity: 1;
                }
            }

            &--prev {
                left: 15px;
            }

            &--next {
                right: 15px;
            }
        }
    }
}
</style>
