<template>
  <!--download model-->
  <Transition name="fade">
    <div v-if="isOpenModel" style="width: 100%;">
      <!--window z-index: 252-->
      <div class="window">
        <!--弹窗标题-->
        <div style="display: flex; flex-direction: row; align-items: center;">
          <div style="width: 6px; height: 25px; background-color: #42b883; margin-right: 6px;"></div>
          <div class="window-title fonts">下载Archive Markdown Editor</div>
        </div>
        <!--App图标、名称与简介-->
        <div
            style="display: flex; flex-direction: row; margin-top: 20px; justify-content: flex-start; align-items: center;">
          <!--App图标-->
          <div style="margin-right: 15px;">
            <img style="width: 60px; height: 60px; border-radius: 15px;" :src="mainImg">
          </div>
          <div style="display: flex; justify-content: center; flex-direction: column; height: 100%; padding: 0;">
            <!--App Title-->
            <div class="window-title fonts">格物致知a</div>
            <!--App Slogan-->
            <div class="window-subtitle fonts">简单高效的多功能英语学习工具</div>
            <div class="window-subtitle fonts">版本 v</div>
          </div>
        </div>
        <!--App开发者介绍-->
        <div style="display: flex; flex-direction: row; align-items: center; margin-top: 10px;">
          <div class="dev-txt fonts">Developed by</div>
          <div
              style="width: 13px; height: 16px; position: relative; align-self: center; margin-left: 4px; margin-right: 2px;">
            <img style="width: 100%; height:100%; object-fit: cover;" :src="developer">
          </div>
          <div class="dev-txt fonts">Scott Smith.</div>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; margin-top: 10px;" class="dev-txt fonts">
          致谢名单
        </div>
        <!--确定按钮-->
        <div style="display: flex; width: 100%; flex-direction: row; margin-top: 20px; justify-content: flex-end;">
          <div @click="isOpenModel = false;" class="button fonts">确定</div>
        </div>
      </div>
      <!--model z-index: 251-->
      <div class="mod" @click="isOpenModel = false;"></div>
    </div>
  </Transition>
</template>
<script>
import mainImg from "../../assets/imgs/gwzza.jpg";
import right from "../../assets/icos/index_page/right.png";
import logout from "../../assets/icos/index_page/logout.png";
import about from "../../assets/icos/index_page/about.png";
import settings from "../../assets/icos/index_page/settings.png";
import developer from "../../assets/icos/index_page/Developer.png";

import x0p from 'x0popup';
import 'x0popup/dist/x0popup.min.css';

import Tips from "../../components/little_tips/Tips";

import axios from "axios";

export default {
  name: "Settings",
  components: {
    Tips,
  },
  data() {
    return {
      loginStatus: false,

      // images
      mainImg: mainImg,
      right: right,
      logout: logout,
      about: about,
      settings: settings,
      developer: developer,

      // version
      appVersion: '0.0.1',
      userType: "students",

      // model
      isOpenModel: false,
      isOpenSettingsModel: false,
    };
  },
  methods: {
  },
  created() {
  },
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

.content-like {
  /*margin-top: 20px;*/
  /*margin-bottom: 20px;*/
  background-color: #dffff1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  align-items: center;
}

.user-head {
  background-color: #ffffff;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin-top: 20px;
  width: 500px;
}

.user-nickname {
  font-weight: bold;
  font-size: large;
  color: rgb(71, 71, 71);
}

.user-status {
  color: rgb(71, 71, 71);
  font-size: x-small;
}

.app-content {
  width: 500px;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.unit {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.unit:active {
  background-color: #F4F4F4;
}

.mod {
  position: absolute;
  z-index: 251;
  display: block;
  overflow: auto;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  margin: 0 auto;
}

.window {
  padding: 20px;
  z-index: 252;
  width: 500px;
  /* height: 220px; */
  background-color: #ffffff;
  border-radius: 15px;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  /* bottom: 0; */
  top: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.window-title {
  font-weight: bold;
  color: rgb(71, 71, 71);
  font-size: large;
}

.window-subtitle {
  color: rgb(71, 71, 71);
  font-size: x-small;
}

.dev-txt {
  font-weight: bold;
  color: rgb(107, 107, 107);
  font-size: small;
}

.button {
  width: 60px;
  height: 35px;
  border-radius: 10px;
  background-color: #42b883;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 35px;
  cursor: pointer;
}

.button-cancel {
  width: 60px;
  height: 35px;
  border-radius: 10px;
  background-color: #c75f5f;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 35px;
  cursor: pointer;
}

.input-info {
  text-align: right;
  border: none;
  outline: none;
}

@media screen and (max-width: 700px) {
  .user-head {
    margin-top: 20px;
    width: 90%;
    background-color: #ffffff;
    padding: 20px;
    box-sizing: border-box; /* 使内边距增大时外边距保持不变 */
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
  }

  .app-content {
    width: 90%;
    background-color: #ffffff;
    box-sizing: border-box;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .window {
    padding: 20px;
    z-index: 252;
    width: 80%;
    /* height: 220px; */
    background-color: #ffffff;
    border-radius: 15px;
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    /* bottom: 0; */
    top: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

.button:active {
  background-color: #2d815c;
}

.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-leave-to {
  opacity: 0;
}

/* switch button */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 21px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #42b983;
}

input:focus + .slider {
  box-shadow: 0 0 1px #42b983;
}

input:checked + .slider:before {
  -webkit-transform: translateX(19px);
  -ms-transform: translateX(19px);
  transform: translateX(19px);
}

/* 圆形滑块 */
.slider.round {
  border-radius: 21px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>