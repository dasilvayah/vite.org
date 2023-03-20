<template>
  <div class="timeline"
        :class="{
          'is-finish': type === 'completed',
          'is-in-progress':  type === 'inProgress',
          'is-next': type === 'nextStep'
        }"
    >
    <div class="timeline__title is-hidden-touch">
      {{ $t(`roadmap.${type}`) }}
    </div>
    <ul class="is-grid">
      <li class="is-common is-finish" v-if="type === 'completed'">
        <div class="place-holder"></div>
        <div class="divider">
          <div class="dot"></div>
        </div>
        <div class="desc special-item" @click="clickPrevious">
          <p v-if="this.previousOpen"> {{$t(`roadmap.close`) }} <img src="~/assets/images/roadmap/next.svg"/></p>
          <p v-else>{{ $t(`roadmap.previous`) }} <img src="~/assets/images/roadmap/previous.svg"/></p>
        </div>
      </li>
      <li class="is-common" :key="item.time" v-for="(item) in list">
        <h3 class="time">{{item.time}}</h3>
        <div class="divider">
          <div class="dot"></div>
        </div>
        <div class="desc">
          <p class="dot-item" v-for="(desc, index) in item.description" :key="index">
            <span v-if="!(desc instanceof Object)"> {{desc}} </span>
            <a v-else :href="desc.url" target="_blank">{{ desc.text }}</a>
          </p>
        </div>
      </li>
      <li class="is-common is-next" v-if="type === 'nextStep'">
        <div class="place-holder"></div>
        <div class="divider">
          <div class="dot"></div>
        </div>
        <div class="desc special-item" @click="clickNext">
          <p v-if="this.nextOpen"> {{$t(`roadmap.close`) }} <img src="~/assets/images/roadmap/previous.svg"/></p>
          <p v-else>{{ $t(`roadmap.next`) }} <img src="~/assets/images/roadmap/next.svg"/></p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/babel">

export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    timeLines: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    list() {
      if (this.type === 'completed') {
        return this.previousOpen ? this.timeLines : this.timeLines.slice(12);
      }
      if (this.type === 'nextStep') {
        return this.nextOpen ? this.timeLines : this.timeLines.slice(0, 2);
      }
      return this.timeLines;
    },
  },
  data() {
    return {
      previousOpen: false,
      nextOpen: false,
    };
  },
  methods: {
    clickPrevious() {
      this.previousOpen = !this.previousOpen;
    },
    clickNext() {
      this.nextOpen = !this.nextOpen;
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

$dot-size: 1.5rem;
$dot-gap: 0.5;
$dot-size-inner: 0.75rem;
$timelineCommonColor: #919AA3;

.timeline {
  img {
    margin-left: 4px;
    vertical-align: baseline;
  }

  .timeline__title {
    text-align: center;
    font-size:20px;
    font-family:$font-family-light;
    font-weight:400;
    color:rgba(145,154,163,1);
    line-height:28px;
  }

  ul.is-grid {
    padding-top: 30px;
    @include mobile {
      padding-top: 10px;
    }
    li {
      position: relative;
      min-width: 120px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 100px 50px auto;
      list-style-type: none;

    }
  }
  .special-item {
    cursor: pointer;
    font-size:16px;
    font-family:$font-family-title;
    font-weight:600;
    color:rgba(145,154,163,1);
    line-height:20px;
  }

  .time {
    font-family: $font-family-title;
    color: #919aa3;
    letter-spacing: 0.23px;
    text-align: right;
    font-size:16px;
    font-family:$font-family-title;
    font-weight:600;
    line-height:24px;
  }

  .divider {
    margin-left: 17px;
    border-left: 2px solid #919aa3;
    .dot {
      transform: translateX(-50%);
      margin-left: -1px;
      width: 24px;
      height: 24px;
      border: 6px solid #ccd0d4;
      border-radius: 50%;
      background: #919aa3;
    }
  }

  .desc {
    min-height: 30px;
    padding-bottom: 10px;
    font-size: 13px;
    line-height: 17px;
    color: #919AA3;
    letter-spacing: 0;
    p {
      margin-top: 5px;
    }
  }


  &.is-finish {

  }
  &.is-in-progress {
    .timeline__title {
      font-size:24px;
      font-family:$font-family-title;
      font-weight:600;
      color:rgba(23,28,52,1);
    }
    .time {
      color: #007aff;
    }
    .divider {
      border-left: 2px dashed #007aff;
    }
    .dot {
      border-color: #b8d8ff;
      background: #007aff;
    }
    .desc {
      color: #4a4a4a;
    }
  }
  &.is-next {
    .divider {
      border-left-style: dashed;
    }
    .dot {
      background: #919aa3;
      border: none;
      width: 12px;
      height: 12px;
    }
  }
}

.dot-item {
  position: relative;
  padding-left: 10px;
}
.dot-item::before {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 99px;
  background: #ccd0d4;
  left: 1px;
  top: 6px;
}
</style>
