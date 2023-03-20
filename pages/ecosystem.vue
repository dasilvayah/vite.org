<template>
    <div class="page-ecosystem">
        <page-header name="ecosystem"></page-header>
        <!-- <home-section name="dapp" :buttons="dappBtns"></home-section> -->
        <!-- <home-section name="devTool" :buttons="devToolBtns"></home-section> -->
        <!-- <home-section name="incentive" :buttons="incentiveBtns" center></home-section> -->
        <!-- <home-section name="community" :buttons="communityBtns"></home-section> -->
        <!-- <home-section name="syracoin" :buttons="syraBtns"></home-section> -->
        <!-- <home-section name="vitepay" :buttons="vitepayBtns" center></home-section> -->
        <section class="project">
            <div class="container">
                <div class="has-text-centered">
                    <h1>{{$t('ecosystem.project.title')}}</h1>
                    <!-- <a class="button" href="#">{{$t('ecosystem.project.submit')}}</a> -->
                </div>
                <div class="tags">
                  <span v-for="(tag, idx) in tags" class="tag" :class="{ selected: selectedTag == tag}" @click="handleTag(tag)">{{tag}}</span>
                </div>
                <div class="items">
                    <div class="item" v-for="item in selectedProjects" @click="handleLink(item)">
                        <div v-if="item.logo.startsWith('<svg')" class="logo" v-html="item.logo"></div>
                        <img v-else-if="item.logo !== ''" class="logo" :src="item.logo" :alt="item.name" />
                        <img v-else class="logo" src="~assets/images/home/viteLogo-blue.svg" :alt="item.name" />
                        <div class="name">
                            <h3 :title="item.name">{{item.name}}</h3>
                            <span class="tag">{{item.tags[0]}}</span>
                        </div>
                        <p class="intro">{{item.intro}}</p>
                        <ul class="socials is-flex" @click="handleSocial">
                            <li v-for="(v, k) in item.socialMedia">
                              <a :href="v" target="_blank">
                                <fa-icon class="icon__item" :icon="['fab', k]"></fa-icon>
                              </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
// import HomeSection from '~/components/HomeSection';
import projectJSON from '~/pages/json/project.json';

export default {
  components: {
    PageHeader,
    // HomeSection,
  },
  data() {
    const tagSet = new Set();
    for (const item of projectJSON) {
      for (const tag of item.tags) {
        tagSet.add(tag);
      }
    }
    const tags = Array.from(tagSet);
    tags.unshift('All')
    return {
      tags,
      selectedTag: 'All',
      selectedProjects: projectJSON,
      // devToolBtns: [
      //   {
      //     name: 'learn',
      //     url: {
      //       name: 'development',
      //     },
      //   },
      // ],
      // communityBtns: [
      //   {
      //     name: 'join',
      //     url: {
      //       name: 'community',
      //     },
      //   },
      // ],
    };
  },
  mounted() {
    this.handleTag(this.selectedTag);
  },
  // computed: {
  //   dappBtns() {
  //     return [
  //       {
  //         name: 'learn',
  //         url: this.$link('tutorial.dappDevelopment'),
  //       },
  //     ];
  //   },
  //   incentiveBtns() {
  //     return [
  //       {
  //         name: 'learn',
  //         url: this.$link('incentivePlan'),
  //       },
  //       {
  //         name: 'devCommittee',
  //         url: this.$link('devCommittee'),
  //       },
  //     ];
  //   },
  //   syraBtns() {
  //     return [
  //       {
  //         name: 'whitePaper',
  //         url: this.$link('syraWP'),
  //       },
  //       {
  //         name: 'learn',
  //         url: this.$link('forumContent.syra'),
  //       },
  //     ];
  //   },
  //   vitepayBtns() {
  //     return [
  //       {
  //         name: 'learn',
  //         url: this.$link('vitePayAnn'),
  //       },
  //       {
  //         name: 'toViteStore',
  //         url: this.$link('vitestore'),
  //       },
  //     ];
  //   },
  // },
  methods: {
    handleLink(item) {
      if (item.website.startsWith('http')) {
        window.open(item.website, "_blank")
      }
    },
    handleSocial(ev) {
      ev.stopPropagation();
    },
    handleTag(tag) {
      this.selectedTag = tag;
      if (tag === 'All') {
        this.selectedProjects = projectJSON;
      } else {
        this.selectedProjects = projectJSON.filter((x) => {
          const found = x.tags.find( t => t === tag )
          if (found) {
            return true
          } else {
            return false
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/vars.scss";
.project{
    margin: 80px 0 20px;
    h1 {
        margin-bottom: 38px;
        @include touch {
          font-size: 28px;
          white-space: normal;
          line-height: 42px;
        }
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
        &:hover{
          border:1px solid #007aff;
          background: rgba(0,0,0,0.03);
        }
    }
    .tags {
        margin-top: 60px;
        margin-bottom: 20px;
        justify-content: center;
        .tag {
            height: 42px;
            font-size: 16px;
            font-weight: 600;
            line-height: 20px;
            padding: 11px 18px;
            margin: 0 18px 20px;
            background: #eef6ff;
            color: #171C34;
            border-radius: 21px;
            cursor: pointer;
            &.selected {
                background: #007aff;
                color: #fff;
            }
        }
    }
    .items {
        display: flex;
        flex-flow: row wrap;
    }
    .item {
        width: 352px;
        height: 420px;
        margin: 0 36px 60px;
        padding: 24px;
        box-shadow: 0 0 20px hsla(211, 100%, 50%, 0.2);
        cursor: pointer; 
        .logo {
            width: 100px;
            height: 100px;
            margin-bottom: 30px;
            object-fit: cover;
            object-position: left center;
        }
        .name {
            position: relative;
            margin-bottom: 20px;
            h3 {
                font-size: 24px;
                font-weight: bold;
                color: #171C34;
                padding-right: 70px;
                white-space: nowrap;
                overflow: hidden;
            }
            .tag {
                position: absolute;
                right: 0;
                top: 8px;
            }
        }
        .intro {
            height: 120px;
            overflow: hidden;
            color: #171C34;
            margin-bottom: 20px;
        }
        .socials{
            border-top: 1px solid #eee;
            padding-top: 20px;
            cursor: default;
            li {
                margin-right: 20px;
            }
            .icon__item{
                width: 20px;
                height: 20px;
                color: #007AFF;
            }
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
      .items {
        justify-content: space-around;
      }
    }
    @include mobile {
        padding: 0 15px;
        .item {
            width: 100%;
            margin: 0 0 30px;
        }
    }
}
</style>
