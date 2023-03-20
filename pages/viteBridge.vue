<template>
  <div class="page-vite-bridge">
    <page-header name="viteBridge" :buttons="headerBtns"></page-header>

    <section class="base feature-section">
      <div class="container">
        <h1 class="section-header">Features</h1>
        <div class="is-flex">
          <div class="feature-item">
            <div class="icon">
              <img src="~assets/images/viteBridge/trustlessness.png" alt="">
            </div>
            <div class="feature-content">
              <h3>{{$t('viteBridge.features.0.title')}}</h3>
              <div v-html="$t('viteBridge.features.0.content')"></div>
            </div>
          </div>
          <div class="feature-item">
            <div class="icon">
              <img src="~assets/images/viteBridge/universality.png" alt="">
            </div>
            <div class="feature-content">
              <h3>{{$t('viteBridge.features.1.title')}}</h3>
              <div v-html="$t('viteBridge.features.1.content')"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="base works-section">
      <div class="container">
        <h1>{{$t('viteBridge.works.title')}}</h1>
        <div class="is-flex">
          <div class="item">
            <ul>
              <li v-for="(item, idx) in $t('viteBridge.works.how')">{{idx + 1}}. {{item}}</li>
            </ul>
          </div>
          <img class="item" srcset="
            ~assets/images/viteBridge/works@2x.png 2x,
            ~assets/images/viteBridge/works@1x.png 1x,
            " src="~assets/images/viteBridge/works@1x.png" alt="how the bridge works">
        </div>
      </div>
    </section>

    <section class="base beUsed-section">
      <div class="container">
        <h1>{{$t('viteBridge.beUsed.title')}}</h1>
        <div class="bridge-content">
          <div class="bridge-item-wrapper" v-for="item in $t('viteBridge.beUsed.useCase')" :key="item.title">
            <div class="bridge-item">
              <h3>{{item.title}}</h3>
              <div>{{item.content}}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
export default{
  components: {
    PageHeader,
  },
  data() {
    return {};
  },
  computed: {
    headerBtns() {
      return [
        {
          name: 'whitePaper',
          url: this.$link('viteBridge.whitePaper'),
        },
        {
          name: 'tutorial',
          url: this.$link('viteBridge.tutorial'),
        },
        {
          name: 'tryit',
          url: this.$link('viteBridge.tryit'),
        },
      ];
    },
  },
}
</script>

<style lang="scss" scoped>
@import "assets/vars.scss";

section.base {
  margin-top: 80px;
  margin-bottom: 80px;
  h1 {
    font-size: 44px;
    line-height: 48px;
  }
  @include touch {
    padding-left: 15px;
    padding-right: 15px;
  }
}

.feature-section {
  background: #F5FAFF;
  padding: 40px 0;
  margin-left: 70px;
  margin-right: 70px;

  @include until($fullhd){
    margin-left: 0;
    margin-right: 0;
  }

  .section-header {
    margin-bottom: 50px;
  }
  .feature-item {
    flex: 1;
    flex-direction: column;
    align-items: center;
    display: flex;
    .icon {
      width: 180px;
      height: 180px;
    }
  }
  .feature-content {
    margin-top: 50px;
    width: 100%;
    text-align: center;
    h3 {
      margin-bottom: 30px;
      font-size: 34px;
      font-weight: 400;
      color: #171c34;
      line-height: 38px;
    }
    & > div {
      font-size: 24px;
      font-weight: 400;
      color: #000000;
      line-height: 34px;
    }
  }

  @include touch {
    margin: 50px 0;
    padding: 60px 10px;
    .section-header {
      margin-bottom: 30px;
    }
    .feature-content {
      margin-top: 30px;
      h3 {
        font-size: 22px;
      }
      & > div {
        font-size: 20px;
      }
    }
    .feature-item {
      .icon {
        width: 140px;
        height: 140px;
      }
      margin-bottom: 60px;
    }
  }
  @include mobile {
    .is-flex {
      flex-direction: column;
    }
  }
}

.beUsed-section {
  h1 {
    text-align: center;
    margin-bottom: 57px;
  }
  .bridge-content {
    display: flex;
    flex-direction: row;
    margin: 0 -15px;
    .bridge-item-wrapper {
      padding: 0 15px;
      flex: 1;
    }
    .bridge-item {
      height: 480px;
      border: 1px solid #000000;
      padding: 90px 24px 24px 24px;
      h3 {
        font-size: 28px;
        font-family: $font-family-title;
        font-weight: 600;
        text-align: left;
        color: #000000;
        line-height: 50px;
        margin-bottom: 50px;
      }
      & > div {
        font-size: 18px;
        font-weight: 400;
        text-align: left;
        color: #000000;
        line-height: 30px;
      }
    }
  }
  @include until($desktop) {
    padding-top: 60px;
    padding-bottom: 60px;
    h1 {
      margin-bottom: 30px;
    }
  }
  @include touch {
    padding-left: 20px;
    padding-right: 20px;
    .bridge-content {
      flex-direction: column;
      .bridge-item {
        padding: 30px 15px;
        height: auto;
        h3 {
          font-size: 22px;
          margin-bottom: 30px;
        }
      }
    }
  }
}
.works-section {
  h1{
    font-size: 58px;
    font-weight: 400;
  }
  ul {
    width: 530px;
    margin-top: 100px;
    margin-right: 48px;
  }
  li {
    margin-bottom: 50px;
    font-size: 18px;
    line-height: 30px;
    color: #54565a;
  }
  img {
    width: 620px;
    margin-top: 47px;
  }
  @include touch {
    .is-flex {
      flex-direction: column;
    }
    ul{
      width: 100%;
    }
    img {
      width: 100%;
      margin-top: 0;
    }
  }
}
</style>

