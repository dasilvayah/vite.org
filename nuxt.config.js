const hostname = 'https://www.vite.org';

const routes = [
  {
    url: '/',
    priority: 1,
    img: [
      {
        url: `${hostname}/icon.png`,
        caption: 'Vite logo',
        title: 'Vite logo',
      },
      {
        url: `${hostname}/logo_appstore.png`,
        caption: 'Vite logo for appstore',
        title: 'Vite logo for appstore',
      },
    ],
  },
  {
    url: '/faq',
    priority: 0.3,
  },
];
const whitepaperUrls = [
  {
    lang: 'en',
    url: 'https://www.vite.org/whitepaper/vite_en.pdf',
  },
  {
    lang: 'zh',
    url: 'https://www.vite.org/whitepaper/vite_cn.pdf',
  },
];
const sitemapUrls = [];
const locales = [
  {
    code: 'en',
    iso: 'en-US',
    name: 'EN',
    file: 'en.json',
  }
];
const defaultLocale = 'en';

routes.forEach((route) => {
  const links = locales.map((locale) => {
    const lang = locale.code;
    let url = `${hostname}/${lang}${route.url}`;
    if (defaultLocale === lang) {
      url = `${hostname}${route.url}`;
    }
    return {
      lang,
      url,
    };
  });
  links.forEach(({ url }) => {
    sitemapUrls.push({
      ...route,
      url,
      changefreq: 'daily',
      links,
    });
  });
});

whitepaperUrls.forEach(({ lang, url }) => {
  sitemapUrls.push({
    url,
    links: whitepaperUrls,
  });
});

module.exports = {
  head: {
    title: 'A high-performance decentralized ecosystem',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'vite lab' },
      { name: 'keywords', content: 'vite,crypto,dag,bitcoin,vitecoin,contract platform' },
    ],
  },
  loading: {
    color: '#7FB2FE',
  },
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false, // Fix bulma css warnings
        },
      },
    },
    transpile: [/echarts/, /zrender/, 'vue-agile'],
  },
  plugins: ['~/plugins/utilsPlugin', '~/plugins/vue-agile.js'],
  router: {
    mode: 'history',
  },
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/composition-api/module',
  ],
  fontawesome: {
    icons: {
      solid: ['faPlusCircle', 'faArrowLeft', 'faArrowRight'],
      brands: [
        'faTwitter', 'faGithub', 'faLinkedin', 'faDiscord',
        'faTelegramPlane', 'faReddit', 'faWeixin', 'faYoutube',
        'faWeibo', 'faFacebookSquare', 'faMediumM', 'faInstagram',
        'faBitcoin',
      ],
    },
    component: 'FaIcon',
    suffix: false,
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    ['@nuxtjs/i18n', {
      locales,
      defaultLocale,
      detectBrowserLanguage: {
        useCookie: true,
        alwaysRedirect: true,
      },
      redirectCookieKey: 'redirected',
      useRedirectCookie: true,
      loadLanguagesAsync: true,
      langDir: 'locales/',
      lazy: true,
      ignorePaths: [],
      seo: true,
      vueI18n: {
        fallbackLocale: defaultLocale,
      },
      routesNameSeparator: '-',
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-118987496-1',
    }],
    '@nuxtjs/sitemap',
  ],
  axios: {
    prefix: '/api',
    proxy: true,
    credentials: true,
  },
  proxy: {
    '/api': {
      target: 'https://static.vite.net/testnet-vite-1257137467/discover',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  css: [
    '~/assets/main.scss',
  ],
  render: {
    compressor: { threshold: 1 },
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname,
    gzip: true,
    exclude: [
      '/technology',
      '/careers',
      '/',
      '/faq',
    ].concat(locales.map((lang) => `/${lang.code}/**`)).concat(locales.map((lang) => `/${lang.code}`)),
    routes: sitemapUrls,
  },
  target: 'static',
};
