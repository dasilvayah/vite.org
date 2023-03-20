<template>
  <div :class="{'nav-item': mode == 'dropdown'}">
    <div
      v-show="mode == 'dropdown'"
      class="dropdown" 
      :class="[`dropdown_${theme}`]"
      @mouseover="dropdownVisible = true"
      @mouseleave="dropdownVisible = false"
    >
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" :class="{'foot-btn': isFooter}">
          <span v-if="!footerTo" class="btn__click">{{ footerName }}</span>
          <nuxt-link v-else :to="localePath(footerTo)" class="btn__click">{{ footerName }}</nuxt-link>
        </button>
      </div>
      <div class="dropdown-menu" :class="{'show': dropdownVisible, 'hide': !dropdownVisible}" id="dropdown-menu" role="menu">
        <div class="dropdown-content" v-if="list.length">
          <template v-for="(item, i) in list">
            <a
              v-if="item.type && item.type === 'outer'"
              class="dropdown-item"
              target="_blank"
              :href="item.to"
              :key="i"
            >{{$t(`nav.${item.name}`)}}</a>
            <nuxt-link
              v-if="item.type && item.type === 'inner'"
              :to="item.anchor ? `${localePath(item.to)}#${item.anchor}` : localePath(item.to)"
              class="dropdown-item"
              :key="i"
            >{{$t(`nav.${item.name}`)}}</nuxt-link>
            <template v-if="item.type && item.type === 'menu'">
              <hr class="navbar-divider">
              <dl class="sub-nav">
                <dt>{{$t(`nav.${item.name}`)}}</dt>
                <dd v-for="(subItem, j) in item.subList">
                  <a
                    v-if="subItem.type && subItem.type === 'outer'"
                    class="dropdown-item"
                    target="_blank"
                    :href="subItem.to"
                    :key="j"
                  >{{$t(`nav.${subItem.name}`)}}</a>
                  <nuxt-link
                    v-if="subItem.type && subItem.type === 'inner'"
                    :to="subItem.anchor ? `${localePath(subItem.to)}#${subItem.anchor}` : localePath(subItem.to)"
                    class="dropdown-item"
                    :key="j"
                  >{{$t(`nav.${subItem.name}`)}}</nuxt-link>
                </dd>
              </dl>
              <!-- <div -->
              <!--   class="nested dropdown-item" -->
              <!--   :key="i"> -->
              <!--   <secondary-menu -->
              <!--     :footer-name="$t(`nav.${item.name}`)" -->
              <!--     :secondary-list="item.subList" -->
              <!--   ></secondary-menu> -->
              <!-- </div> -->
            </template>
          </template>
          <slot></slot>
        </div>
      </div>
    </div>
    <div v-show="mode == 'sticky'" class="nested-nav" :class="[`is-${theme}`]"  @click="onNavClick">
      <div class="nested-nav-name">
        {{ footerName }}
        <i class="icon icon-angle" :class="{'icon-right-angle': collapse}"></i>
      </div>
      <ul v-if="list.length" :class="{'hide': collapse, 'show': !collapse}">
        <li v-for="(item, i) in list">
            <a
              v-if="item.type && item.type === 'outer'"
              class="nested-nav-item"
              target="_blank"
              :href="item.to"
              :key="i"
            >{{$t(`nav.${item.name}`)}}</a>
            <nuxt-link
              v-if="item.type && item.type === 'inner'"
              class="nested-nav-item"
              :to="item.anchor ? `${localePath(item.to)}#${item.anchor}` : localePath(item.to)"
              :key="i"
            >{{$t(`nav.${item.name}`)}}</nuxt-link>
            <template v-if="item.type && item.type === 'menu'">
              <div class="nested-nav-name">
                {{$t(`nav.${item.name}`)}}
                <i class="icon icon-angle"></i>
              </div>
              <ul>
                <li v-for="( subItem, j ) in item.subList">
                  <a
                    v-if="subItem.type && subItem.type === 'outer'"
                    class="nested-nav-item"
                    target="_blank"
                    :href="subItem.to"
                    :key="j"
                    >{{$t(`nav.${subItem.name}`)}}</a>
                  <nuxt-link
                    v-if="subItem.type && subItem.type === 'inner'"
                    class="nested-nav-item"
                    :to="subItem.anchor ? `${localePath(subItem.to)}#${subItem.anchor}` : localePath(subItem.to)"
                    :key="j"
                    >{{$t(`nav.${subItem.name}`)}}</nuxt-link>
                </li>
              </ul>
            </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/babel">
// secondaryList   item {type: inner/outer, name: xxx, to: xxx}
import config from '~/config';

export default {
  name: 'secondaryMenu',
  props: {
    isFooter: {
      type: Boolean,
      default: false,
    },
    footerName: {
      type: String,
      default: '',
    },
    footerTo: {
      type: String,
      default: '',
    },
    secondaryList: {
      type: Array,
      default: () => [],
    },
    theme: {
      type: String,
      default: 'gray',
    },
    mode: {
      type: String,
      default: 'dropdown',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    list() {
      return this.secondaryList.map((item) => {
        let url = item.to;
        if (item.type === 'outer' && item.to.indexOf('http') === -1) {
          url = this.$link(url);
        }
        return {
          ...item,
          to: url,
        };
      });
    },
  },
  data() {
    return {
      voteMap: config.urls.vote,
      collapse: true,
      dropdownVisible: false,
    };
  },
  watch: {
    active(val) {
      if (!val) {
        this.collapse = true;
      }
    },
  },
  methods: {
    onNavClick(e) {
      const { target } = e;
      if (target.closest('.nested-nav-name')) {
        this.collapse = !this.collapse;
        setTimeout(()=>{
          this.$emit('collapse', this.collapse);
        }, 100)
        setTimeout(()=>{
          this.$emit('collapse', this.collapse);
        }, 200)
        setTimeout(()=>{
          this.$emit('collapse', this.collapse);
          this.$emit('expand', !this.collapse);
        }, 350)
      }
    },
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
@import "~assets/subnav";
.dropdown {
  .dropdown-trigger{
    .button{
      height: 21px;
      line-height: 21px;
    }
  }
  .btn__click{
    color: rgba(0,0,0,0.6);
  }
  .nested .dropdown{
    width: 100%;
  }
}
.dropdown-menu {
  transition: all 300ms ease-in;
}
.sub-nav {
  padding-left: 15px;
  dt {
    color: #919aa3;
  }
}
.nested-nav {
  .nested-nav-name {
    display: flex;
    align-items: center;
    height: 48px;
    color: #919aa3;
    font-size: 14px;
    .icon-angle {
      width: 14px;
      height: 14px;
      background: url(~assets/images/home/down-gray.svg) no-repeat;
      background-size: 80%;
      background-position: center;
      margin-left: 6px;
      transition: all 300ms;
    }
    .icon-right-angle {
      transform: rotate(-0.25turn);
    }
  }
  ul{
    overflow: hidden;
    padding-left: 15px;
    &.hide {
      max-height: 0;
      transition: max-height 200ms ease-in;
    }
    &.show {
      transition: max-height 300ms ease-out;
      max-height: 460px;
    }
  }
  .nested-nav-item {
    display: flex;
    align-items: center;
    height: 36px;
    color: #4a4a4a;
    font-size: 14px;
    line-height: 24px;
  }

  &.is-light {
    .nested-nav-name {
      color: #fff;
      .icon-angle {
        background-image: url(~assets/images/home/down.svg);
      }
    }
    .nested-nav-item {
      color: rgba(255,255,255,0.8);
    }
  }
}
</style>
