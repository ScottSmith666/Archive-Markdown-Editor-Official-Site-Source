<template>
  <router-view/>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {
    returnCanLang() {
      let locale = navigator.language;
      if (['zh-CN', 'zh', 'zh-Hans'].includes(locale)) {
        // 加载简体中文
        return 'zh-CN';
      } else if (['zh-TW', 'zh-HK', 'zh-MO', 'zh-Hant'].includes(locale)) {
        // 这些地区统一加载繁体中文
        return 'zh-TW';
      } else if (locale.startsWith('en')) {
        return 'en';
      } else {
        // 其他语言，默认英文
        return 'en';
      }
    }
  },
  created() {
    // load lang
    this.$store.commit('updateLang', this.returnCanLang());
  },
};
</script>
