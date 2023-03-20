<template>
  <section>
    <div class="container">
      <div class="header">
        <h1>{{ $t('New.dynamic.title') }}</h1>
        <a class="more" :href="$link('news.more')" target="_blank">{{ $t('New.dynamic.more') }}</a>
      </div>
      <!-- <activity></activity> -->
      <dynamic></dynamic>
    </div>
  </section>
</template>
<script type="text/babel">
import activity from './activity';
import dynamic from './dynamic';

export default {
  components: {
    activity,
    dynamic,
  },
  data() {
    return {
    };
  },

};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

section {
  /* text-align: center; */
  /* background: $common-bg-color; */
  /* padding-bottom: 90px; */
  @include until($desktop) {
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 0;
  }
  .header {
    position: relative;
    margin-bottom: 30px;
  }
  .more {
    position: absolute;
    bottom: 0;
    right: 10px;
    font-size: 18px;
    color: #919aa3;
  }
  h1 {
      font-size: 44px;
      line-height: 48px;
  }
  @include mobile {
    h1 {
      font-size: 28px;
    }
    .more {
      position: static;
    }
  }
}
</style>
