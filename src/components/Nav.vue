<template>
  <div class="keep-head nav">
    <div class="nav-ico-position">

      <div class="little-hide" style="height: 40px; cursor: pointer;" @click="$router.push('/');">
        <img style="width: 40px; border-radius: 5px;" src="../assets/imgs/my_ico.ico" />
      </div>

      <div class="little-display" style="height: 20px; cursor: pointer;" @click="openSideBar">
        <svg style="width: 20px; height: 20px;" t="1711968956837" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5105" width="200" height="200"><path d="M511.7 64.7c123.3 0 235.3 50.2 316.9 131.1 80.5 81.2 130.7 192.9 130.7 316.9 0 124-50.2 235.7-130.7 316.2l-2.8 2.8c-80.6 79.8-192.2 129-314.1 129-123.3 0-235.7-50.5-316.9-131.8-81-80.6-131.5-192.2-131.5-316.2S113.8 277 194.7 195.8l2.5-2.8c80.9-79.2 192.6-128.3 314.5-128.3z m-50.2 231.4v166.8H295.1c-27.6 0-49.5 22.6-49.5 49.8 0 27.2 21.9 49.8 49.5 49.8h166.4v166.8c0 27.6 22.6 49.4 50.2 49.4 27.2 0 49.4-21.9 49.4-49.4V562.5h166.4c27.9 0 50.2-22.6 50.2-49.8 0-27.2-22.3-49.8-50.2-49.8H561.1V296.1c0-27.6-22.2-49.5-49.4-49.5-27.6 0-50.2 21.9-50.2 49.5z m296.5-30C695.1 203.6 608.2 164 511.7 164c-95.4 0-181.3 38.2-244.2 100.4l-2.4 1.8C202.5 329.3 163 416.2 163 512.7c0 95.7 39.6 183.3 102.1 246.3 63.2 62.8 150.1 102 246.6 102 95 0 181.2-37.8 243.8-100l2.5-2.1c62.9-62.9 102.1-150.6 102.1-246.3 0-96.4-39.3-183.3-102.1-246.5z" fill="#42b883" p-id="5106"></path></svg>
      </div>

      <div class="break"></div>
      <div style="margin-left: 10px;">
        <div><h3 class="fonts"
                 style="color: #213547; font-weight: bold; margin: 0;">{{ indexIsInExample !== 'true' ? content : '示例' }}</h3></div>
        <div><h6 class="fonts" style="color: #898989; margin: 0;">{{  indexIsInExample !== 'true' ? subContent : '参考示例，灵活运用，可写出漂亮文档' }}</h6></div>
      </div>

      <div class="menu-position">
        <div class="menu-element little-hide" @click="openLink('https://gitee.com/scott-smith666/Archive-Markdown-Editor');">
          <div class="login-button-invisible fonts" style="display: flex; align-items: center; justify-content: center;">
            <svg style="width: 15px; height: 15px;" t="1761978743359" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9277" width="200" height="200"><path d="M512 1024q-104 0-199-40-92-39-163-110T40 711Q0 616 0 512t40-199Q79 221 150 150T313 40q95-40 199-40t199 40q92 39 163 110t110 163q40 95 40 199t-40 199q-39 92-110 163T711 984q-95 40-199 40z m259-569H480q-10 0-17.5 7.5T455 480v64q0 10 7.5 17.5T480 569h177q11 0 18.5 7.5T683 594v13q0 31-22.5 53.5T607 683H367q-11 0-18.5-7.5T341 657V417q0-31 22.5-53.5T417 341h354q11 0 18-7t7-18v-63q0-11-7-18t-18-7H417q-38 0-72.5 14T283 283q-27 27-41 61.5T228 417v354q0 11 7 18t18 7h373q46 0 85.5-22.5t62-62Q796 672 796 626V480q0-10-7-17.5t-18-7.5z" p-id="9278" fill="#556470"></path></svg>
            <div style="width: 5px;"></div>
            Gitee
          </div>
        </div>
        <div class="menu-element little-hide" @click="openLink('https://gitee.com/scott-smith666/Archive-Markdown-Editor-For-HarmonyOS');">
          <div class="login-button-invisible fonts" style="display: flex; align-items: center; justify-content: center; width: 300px;">
            <svg style="width: 15px; height: 15px;" t="1761978743359" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9277" width="200" height="200"><path d="M512 1024q-104 0-199-40-92-39-163-110T40 711Q0 616 0 512t40-199Q79 221 150 150T313 40q95-40 199-40t199 40q92 39 163 110t110 163q40 95 40 199t-40 199q-39 92-110 163T711 984q-95 40-199 40z m259-569H480q-10 0-17.5 7.5T455 480v64q0 10 7.5 17.5T480 569h177q11 0 18.5 7.5T683 594v13q0 31-22.5 53.5T607 683H367q-11 0-18.5-7.5T341 657V417q0-31 22.5-53.5T417 341h354q11 0 18-7t7-18v-63q0-11-7-18t-18-7H417q-38 0-72.5 14T283 283q-27 27-41 61.5T228 417v354q0 11 7 18t18 7h373q46 0 85.5-22.5t62-62Q796 672 796 626V480q0-10-7-17.5t-18-7.5z" p-id="9278" fill="#556470"></path></svg>
            <div style="width: 5px;"></div>
            AME HarmonyOS ver. on Gitee
          </div>
        </div>
        <div class="menu-element github-hide" @click="openLink('https://github.com/ScottSmith666/Archive-Markdown-Editor');">
          <div class="login-button fonts" style="display: flex; align-items: center; justify-content: center;">
            <svg style="width: 15px; height: 15px;" t="1761978653102" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8226" width="200" height="200"><path d="M20.48 503.72608c0 214.4256 137.4208 396.73856 328.94976 463.6672 25.8048 6.5536 21.87264-11.8784 21.87264-24.33024v-85.07392c-148.93056 17.44896-154.86976-81.1008-164.94592-97.52576-20.23424-34.52928-67.91168-43.33568-53.69856-59.76064 33.91488-17.44896 68.48512 4.42368 108.46208 63.61088 28.95872 42.88512 85.44256 35.6352 114.15552 28.4672a138.8544 138.8544 0 0 1 38.0928-66.7648c-154.25536-27.60704-218.60352-121.77408-218.60352-233.79968 0-54.31296 17.94048-104.2432 53.0432-144.54784-22.36416-66.43712 2.08896-123.24864 5.3248-131.6864 63.81568-5.7344 130.00704 45.6704 135.168 49.68448 36.2496-9.78944 77.57824-14.9504 123.82208-14.9504 46.4896 0 88.064 5.3248 124.5184 15.23712 12.288-9.4208 73.80992-53.53472 133.12-48.128 3.15392 8.43776 27.0336 63.93856 6.02112 129.4336 35.59424 40.38656 53.69856 90.76736 53.69856 145.24416 0 112.18944-64.7168 206.4384-219.42272 233.71776a140.0832 140.0832 0 0 1 41.7792 99.9424v123.4944c0.86016 9.87136 0 19.6608 16.50688 19.6608 194.31424-65.49504 334.2336-249.15968 334.2336-465.5104C1002.57792 232.48896 782.66368 12.77952 511.5904 12.77952 240.18944 12.65664 20.48 232.40704 20.48 503.72608z" fill="#ffffff" opacity=".65" p-id="8227"></path></svg>
            <div style="width: 5px;"></div>
            GitHub
          </div>
        </div>
        <div class="menu-element github-hide" @click="openLink('https://github.com/ScottSmith666/Archive-Markdown-Editor-For-HarmonyOS');">
          <div class="login-button fonts" style="display: flex; align-items: center; justify-content: center; width: 300px;">
            <svg style="width: 15px; height: 15px;" t="1761978653102" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8226" width="200" height="200"><path d="M20.48 503.72608c0 214.4256 137.4208 396.73856 328.94976 463.6672 25.8048 6.5536 21.87264-11.8784 21.87264-24.33024v-85.07392c-148.93056 17.44896-154.86976-81.1008-164.94592-97.52576-20.23424-34.52928-67.91168-43.33568-53.69856-59.76064 33.91488-17.44896 68.48512 4.42368 108.46208 63.61088 28.95872 42.88512 85.44256 35.6352 114.15552 28.4672a138.8544 138.8544 0 0 1 38.0928-66.7648c-154.25536-27.60704-218.60352-121.77408-218.60352-233.79968 0-54.31296 17.94048-104.2432 53.0432-144.54784-22.36416-66.43712 2.08896-123.24864 5.3248-131.6864 63.81568-5.7344 130.00704 45.6704 135.168 49.68448 36.2496-9.78944 77.57824-14.9504 123.82208-14.9504 46.4896 0 88.064 5.3248 124.5184 15.23712 12.288-9.4208 73.80992-53.53472 133.12-48.128 3.15392 8.43776 27.0336 63.93856 6.02112 129.4336 35.59424 40.38656 53.69856 90.76736 53.69856 145.24416 0 112.18944-64.7168 206.4384-219.42272 233.71776a140.0832 140.0832 0 0 1 41.7792 99.9424v123.4944c0.86016 9.87136 0 19.6608 16.50688 19.6608 194.31424-65.49504 334.2336-249.15968 334.2336-465.5104C1002.57792 232.48896 782.66368 12.77952 511.5904 12.77952 240.18944 12.65664 20.48 232.40704 20.48 503.72608z" fill="#ffffff" opacity=".65" p-id="8227"></path></svg>
            <div style="width: 5px;"></div>
            AME HarmonyOS ver. on GitHub
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import x0p from 'x0popup';
import 'x0popup/dist/x0popup.min.css';


export default {
  name: "Nav",
  props: {
    content: {
      type: String,
      default: 'Scott Editor Engine',
    },
    subContent: {
      type: String,
      default: 'Useful, lightweight and powerful',
    },
    indexIsInExample: {
      type: String,
      default: 'false',
    },
    md: {
      type: String,
      default: '',
    },
  },
  data() {
    return {

    };
  },
  methods: {
    openSideBar() {
      this.$emit('openModal');
    },
    openLink(url) {
      window.open(url, "_blank");
    }
  },
}
</script>

<style scoped>
@font-face {
  /* 中文字体全局定义为“阿里巴巴普惠体” */
  font-family: AlibabaPuHuiTi;
  src: url("../assets/fonts/AlibabaPuHuiTi/Alibaba-PuHuiTi-Regular.ttf");
}

@font-face {
  font-family: Inconsolata;
  src: url("../assets/fonts/Inconsolata/Inconsolata-Regular-2.ttf");
}

.fonts {
  font-family: Lato, AlibabaPuHuiTi;
}

.fonts-ico {
  font-family: Inconsolata !important;
}

.fonts-dark {
  color: white !important;
}

.keep-head {
  margin-top: 0;
}

.nav {
  position: relative;
  background-color: white;
  border-bottom: 1px solid #e3e3e3;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
}

.dark {
  background-color: #1A1A1A !important;
}

.dark-line {
  border-bottom: 1px solid #545454 !important;
}

.menu-position {
  margin-left: auto;
  display: flex;
  flex-direction: row;
}

.menu-element {
  padding-left: 30px;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.menu-element-txt {
  transition: color 0.2s;
}

.menu-element-txt:hover {
  color: #42b983;
}

.nav-ico-wrap {
  /* height: 85%; */
  cursor: pointer;
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

@media screen and (max-width: 550px) {
  .nav-ico-position {
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}

.break {
  width: 1px;
  height: 70%;
  background-color: #8e8e8e;
  margin-left: 10px;
  opacity: 40%;
}

.upper {
  position: relative;
}

.lower {
  position: absolute;
  z-index: 1000;
  right: 0;
  top: 45px;
}

.dp-menu {
  box-shadow: 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
  border: 1px solid transparent;
  border-radius: 8px;
  width: 160px;
  background-color: white;
}

.dp-menu-element {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin-left: 16px;
  transition: color 0.2s;
}

.dp-menu-element:hover {
  color: #42b983;
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

.login-button {
  height: 40px;
  width: 120px;
  background-color: #42b983;
  color: white;
  border-radius: 5px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
}

.login-button-invisible {
  height: 40px;
  width: 120px;
  background-color: rgba(255, 255, 255, 0);
  color: #213547;
  border-radius: 5px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
}

.login-button-invisible:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

@media screen and (max-width: 600px) {
  .little-hide {
    display: none;
  }

  .little-display {
    display: block;
  }

  .github-hide {
    display: none;
  }
}

@media screen and (min-width: 601px) {
  .little-hide {
    display: block;
  }

  .little-display {
    display: none;
  }
}
</style>
