<template>
  <section id="investor" class="base">
    <div class="container">
      <h1>{{title}}</h1>
      <div class="partners">
        <div :key="item.key" v-for="(item, index) in list" class="item">
          <a
            :href="item.url"
            target="_blank"
            @mouseover="onHover(index)"
            @mouseout="onOut(index)"
            :class="`key-${item.key}`"
          >
            <img class="investor-logo" :src="item.logo" alt />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const dataMap = {
  investor: [
    {
      key: 'bitmain',
      logo: require('~/assets/images/investor/bitmain-blue.png'),
      url: 'https://www.bitmain.com/',
    },
    {
      key: 'ok',
      logo: require('~/assets/images/investor/ok-blue.png'),
      url: 'https://www.okex.com/project/9',
    },
    {
      key: 'ld',
      logo: require('~/assets/images/investor/ld-blue.png'),
      url: 'http://www.ldcap.com/',
    },
    {
      key: 'genesisCapital',
      logo: require('~/assets/images/investor/genesis-blue.png'),
      url: 'http://www.newgenesiscap.com/',
    },
    {
      key: 'bp',
      logo: require('~/assets/images/investor/bp-blue.png'),
      url: 'http://byzantinepartners.com/',
    },
    {
      key: 'kosmos',
      logo: require('~/assets/images/investor/kosmos-blue.png'),
      url: 'http://kosmos.capital/',
    },
    {
      key: 'distributed-fund',
      logo: require('~/assets/images/investor/distributed-fund-blue.png'),
      url: 'http://distributed.fund',
    },
    {
      key: 'bigcoin',
      logo: require('~/assets/images/investor/bigcoin-blue.png'),
      url: 'https://www.linkedin.com/company/bigcoin-capital/',
    },
    {
      key: 'wanbu',
      logo: require('~/assets/images/investor/wanbu-blue.png'),
      url: 'http://wandarin.org/',
    },
    {
      key: 'funcityCapital',
      logo: require('~/assets/images/investor/funcity-blue.png'),
      url: 'http://www.funcityholding.com/',
    },
    {
      key: 'nodeCapital',
      logo: require('~/assets/images/investor/node-blue.png'),
      url: 'http://www.nodecap.com/',
    },
    {
      key: 'linkvc',
      logo: require('~/assets/images/investor/linkvc-blue.png'),
      url: 'http://www.linkvc.com/',
    },
    {
      key: 'zhizi',
      logo: require('~/assets/images/investor/zhizi-blue.png'),
    },
    {
      key: 'hot',
      logo: require('~/assets/images/investor/hot-blue.png'),
    },
    {
      key: 'dazhi',
      logo: require('~/assets/images/investor/dazhi-blue.png'),
    },
    {
      key: 'UniValues',
      logo: require('~/assets/images/investor/UniValues-blue.png'),
    },
    {
      key: 'axi',
      logo: require('~/assets/images/investor/axi-blue.png'),
    },
    {
      key: 'handsome',
      logo: require('~/assets/images/investor/handsome-blue.png'),
    },
    {
      key: 'hesheng',
      logo: require('~/assets/images/investor/hesheng-blue.png'),
    },
    {
      key: 'b100',
      logo: require('~/assets/images/investor/b100-blue.png'),
    },
    {
      key: 'bn',
      logo: require('~/assets/images/investor/bn-blue.png'),
    },
  ],
  partner: [
    {
      key: 'alchemy',
      logo: require('~/assets/images/partner/alchemy.png'),
      url: 'https://www.alchemytech.io/',
    },
    {
      key: 'ankr',
      logo: require('~/assets/images/partner/ankr.png'),
      url: 'https://www.ankr.com/',
    },
    // {
    //   key: 'bi23',
    //   logo: require('~/assets/images/partner/bi23.png'),
    //   url: 'https://www.bi23.com/#/',
    // },
    {
      key: 'btc.com',
      logo: require('~/assets/images/partner/btc.com.png'),
      url: 'https://btc.com/',
    },
    {
      key: 'harmony',
      logo: require('~/assets/images/partner/harmony.png'),
      url: 'https://harmony.one/',
    },
    {
      key: 'hashfi',
      logo: require('~/assets/images/partner/hashfin.png'),
      url: 'https://www.hashfin.com/',
    },
    // {
    //   key: 'troy',
    //   logo: require('~/assets/images/partner/troy.png'),
    //   url: 'https://troytrade.com/',
    // },
    {
      key: 'okex',
      logo: require('~/assets/images/investor/ok-blue.png'),
      url: 'https://www.okex.com/',
    },
    // {
    //   key: 'vgate',
    //   logo: require('~/assets/images/partner/vgate.jpg'),
    //   url: 'https://vgate.io/',
    // },
    {
      key: 'chainlink',
      logo: require('~/assets/images/partner/chainlink.png'),
      url: 'https://chain.link/',
    },
    {
      key: 'hashquark',
      logo: require('~/assets/images/partner/hashquark.png'),
      url: 'https://www.hashquark.io/',
    },
    {
      key: 'f2pool',
      logo: require('~/assets/images/partner/f2pool.png'),
      url: 'https://www.f2pool.com/',
    },
   //   {
   //    key: 'spark',
   //    logo: require('~/assets/images/partner/spark.png'),
   //    url: 'https://www.sparkpool.com/',
   //  },
    {
      key: 'infostone',
      logo: require('~/assets/images/partner/infostone.png'),
      url: 'https://infinitystones.io/',
    },
  ],
};

export default {
  props: {
    type: {
      type: String,
      default: 'investor',
    },
    title: {
      type: String,
      default: '',
    },
  },
  name: 'investment',
  data() {
    return {
      hover: null,
    };
  },
  computed: {
    list() {
      return dataMap[this.type];
    },
  },
  methods: {
    onHover(index) {
      this.hover = index;
    },
    onOut() {
      this.hover = null;
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
section.base {
    padding-top: 90px;
    padding-bottom: 90px;
    h1 {
        font-weight: 600;
        margin-bottom: 60px;
        text-align: center;
    }
    @include touch {
        padding: 25px 15px;
        h1 {
            font-size: 24px;
            line-height: 34px;
            margin-bottom: 30px;
        }
    }
}

.partners {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 160px;
    .item {
        display: flex;
        padding: 0 20px;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    @include touch {
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 120px;
    }
    @include mobile {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
