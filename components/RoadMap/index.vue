<template>
  <section>
    <div class="container">
      <h1>{{ $t('roadmap.title')}}</h1>
    </div>
    <div class="is-hidden-touch">
      <div class="container roadmap__timeline is-grid">
        <timeline :time-lines="tableList(item)" :type="item" v-for="(item, index) in tabs" :key="index"></timeline>
      </div>
    </div>

    <div class="is-hidden-desktop">
      <div class="tab-wrapper">
        <div
          v-for="(item, index) in tabs"
          :key="index"
          class="tab-content"
          :class="{'is-active': tabParams === item}"
          @click="clickTab(item)">
          {{ $t(`roadmap.${item}`) }}
        </div>
      </div>
      <div class="container roadmap__timeline roadmap__touch">
        <timeline :time-lines="list" :type="tabParams" ></timeline>
      </div>
    </div>

  </section>
</template>

<script type="text/babel">
import timeline from './timeline';

export default {
  components: {
    timeline,
  },
  data() {
    return {
      tabParams: 'inProgress',
      tabs: ['completed', 'inProgress', 'nextStep']
    };
  },
  computed: {
    list() {
      if (this.tabParams === 'completed') {
        return this.getTimelines().slice(0, 17);
      }
      if (this.tabParams === 'inProgress') {
        return this.getTimelines().slice(17, 18);
      }
      if (this.tabParams === 'nextStep') {
        return this.getTimelines().slice(18);
      }
      return [];
    },
  },
  methods: {
    tableList(item) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (item === 'completed') {
          return this.getTimelines().slice(0, 17);
        }
        if (item === 'inProgress') {
          return this.getTimelines().slice(17, 18);
        }
        if (item === 'nextStep') {
          return this.getTimelines().slice(18);
        }
      }
    },
    clickTab(str) {
      this.tabParams = str;
    },
    getTimelines() {
      const roadmaps = this.$t('roadmap.timelines');
      if (!Array.isArray(roadmaps)) {
        return [];
      }
      return roadmaps.map((item) => {
        if (!Array.isArray(item.description)) {
          return {
            ...item,
            description: [item.description],
          };
        }
        return item;
      });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

section {
  margin-bottom: 140px;
  @include touch {
    padding-left: 15px;
    padding-right: 15px;
  }
  h1 {
    padding-top: 60px;
    /* text-align: center; */
    @include mobile {
      padding-top: 30px;
      font-size: 28px;
      white-space: normal;
    }
  }
  .is-hidden-touch {
    /* padding-right: 150px; */
  }
  .is-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
  }
  .roadmap__timeline {
    margin-top: 100px;
    @include touch {
      margin-top: 0px;
    }
  }
  .roadmap__touch {
    justify-content: center;
  }
  .is-active {
    color: #171C34;
  }
  .tab-wrapper {
    box-sizing: border-box;
    padding: 0 40px;
    justify-content: space-between;
  }

}
</style>
