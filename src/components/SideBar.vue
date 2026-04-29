<template>
  <div class="fonts">
    <Transition name="fade">
      <div v-if="show" class="modal" @click="close"></div>
    </Transition>
    <Transition name="fade">
      <div v-if="show" class="face">
        <!--title-->
        <div style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; width: 100%; padding: 20px; box-sizing: border-box;">
          <div class="nav-ico-position">
            <div class="little-hide" style="height: 40px; cursor: pointer;" @click="$router.push('/');">
              <img style="width: 40px; border-radius: 5px;" src="../assets/imgs/my_ico.ico" />
            </div>
          </div>
          <div class="break"></div>
          <div style="margin-left: 10px;">
            <div>
              <h3 class="fonts" style="color: #213547; font-weight: bold; margin: 0;">Archive Markdown Editor</h3>
            </div>
            <div>
              <h6 class="fonts" style="color: #898989; margin: 0;">简约、美观、功能强大</h6>
            </div>
          </div>
        </div>
        <div @click="$store.commit('updateOpenGoToSourceModel', true)" class="sidebar-keys" style="border-color: #e3e3e3; border-style: solid none none none; border-width: 1px 0 0 0; display: flex; align-items: center;">
          <svg style="width: 25px; height: 25px;" t="1761979138616" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12128" width="200" height="200"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="12129"></path></svg>
          <div style="width: 5px;"></div>
          GitHub
        </div>
        <div @click="$store.commit('updateOpenGoToSourceModel', true)" class="sidebar-keys" style="display: flex; align-items: center;">
          <svg t="1761979002446" style="width: 25px; height: 25px;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10340" width="200" height="200"><path d="M410.737778 75.093333C180.906667 136.533333 22.755556 370.915556 65.991111 587.093333 117.191111 838.542222 351.573333 1012.622222 583.68 969.386667c250.311111-46.648889 428.942222-285.582222 385.706667-515.413334-35.271111-193.422222-162.702222-331.093333-349.297778-380.017777-81.92-20.48-128.568889-20.48-209.351111 1.137777z m357.262222 237.795556v45.511111l-185.457778 5.688889c-230.968889 6.826667-220.728889-1.137778-216.177778 176.355555l3.413334 125.155556h134.257778c121.742222 0 136.533333-2.275556 151.324444-22.755556 9.102222-12.515556 14.791111-32.995556 13.653333-45.511111-3.413333-20.48-13.653333-23.893333-100.124444-28.444444l-96.711111-5.688889v-91.022222h295.822222l3.413333 91.022222c3.413333 106.951111-17.066667 157.013333-78.506666 190.008889-34.133333 18.204444-62.577778 20.48-232.106667 18.204444l-193.422222-3.413333-2.275556-187.733333c-3.413333-176.355556-2.275556-190.008889 22.755556-232.106667 44.373333-78.506667 76.231111-87.608889 292.408889-84.195556l187.733333 3.413334v45.511111z" fill="#c71c22" p-id="10341"></path></svg>
          <div style="width: 5px;"></div>
          Gitee
        </div>
      </div>
    </Transition>
  </div>
</template>
<script>
export default {
  name: "DocsFooter",
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    openLink(url) {
      console.log(window);
      window.open(url, "_blank");
    },
    close() {
      this.$emit('closeModal');
    },
  },
  created() {

  },
}
</script>
<style scoped>
.break {
  width: 1px;
  height: 100%;
  background-color: #8e8e8e;
  margin-left: 10px;
  opacity: 40%;
}

.nav-ico-position {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.modal {
  z-index: 250;
  display: block;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  margin: 0 auto;
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

.face {
  z-index: 251;
  overflow: auto;
  width: 240px;
  height: 100%;
  background-color: #ffffff;
  position: fixed;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@font-face {
  /* 中文字体全局定义为“阿里巴巴普惠体” */
  font-family: AlibabaPuHuiTi;
  src: url("../assets/fonts/AlibabaPuHuiTi/Alibaba-PuHuiTi-Regular.ttf");
}

.fonts {
  font-family: Lato, AlibabaPuHuiTi;
}

.sidebar-keys {
  width: 100%;
  padding: 20px;
  color: #213547;
  box-sizing: border-box;
}

.sidebar-keys:hover {
  background-color: #e7e7e7;
  cursor: pointer;
  font-weight: bold;
}
</style>
