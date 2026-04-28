<template>
  <div class="keep-tail footer-like">
    <div class="nav-ico-position">
      <div class="nav-ico-wrap" style="height: 40%;">
        <img alt="ft" class="little-ico" style="border-radius: 5px;" src="../assets/imgs/my_ico.ico" />
      </div>
      <div class="break" style="background-color: white;"></div>
      <div class="little-text" style="margin-left: 10px;">
        <div>
          <h5 style="margin: 0; color: white;" class="fonts">2025 - {{ new Date().getFullYear() }}，<a href="https://beian.miit.gov.cn" target="_blank"
                                                                                                      style="color: white; text-decoration: none;">Archive Markdown Editor</a></h5>
        </div>
        <div>
          <h5 style="margin: 0; color: white;" class="fonts">Designed & developed by Scott Smith.</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DocsFooter",
}
</script>

<style scoped>
@font-face {
  /* 中文字体全局定义为“阿里巴巴普惠体” */
  font-family: AlibabaPuHuiTi;
  src: url("../assets/fonts/AlibabaPuHuiTi/Alibaba-PuHuiTi-Regular.ttf");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  /* 中文字体全局定义为“阿里巴巴普惠体” */
  font-family: AlibabaPuHuiTi;
  src: url("../assets/fonts/AlibabaPuHuiTi/Alibaba-PuHuiTi-Bold.ttf");
  font-weight: bold;
  font-style: normal;
}

.fonts {
  font-family: AlibabaPuHuiTi, serif;
}

.keep-tail {
  margin-bottom: 0;
  margin-top: auto;
}

.footer-like {
  position: relative;
  height: 55px;
  background-color: #42b883;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
}

.footer-like-dark {
  background-color: #1A1A1A !important;
}

.nav-ico-wrap {
  margin-left: auto;
  height: 85%;
}

.nav-ico {
  width: 100%;
  height: 100%;
}

.nav-ico-position {
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.break {
  width: 1px;
  height: 70%;
  background-color: #8e8e8e;
  margin-left: 10px;
  opacity: 40%;
}

.nav-ico-position {
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

@media screen and (max-width: 600px) {
  .nav-ico-position {
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer-like {
    position: relative;
    height: 120px;
    background-color: #42b883;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
  }

  .break {
    display: none;
  }

  .nav-ico-position {
    width: 85%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .little-text {
    margin: 0 !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .nav-ico-wrap {
    margin: 0 auto;
    margin-bottom: 10px;
  }

  .little-ico {
    width: 48px;
    height: 48px;
  }
}

@media screen and (min-width: 601px) {
  .little-ico {
    width: 20px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
{
  transform: translateX(10px);
  opacity: 0;
}

.dark-mode {

}
</style>
