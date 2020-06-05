<template>
  <section id="home-page">
    <HeaderVue :headData="headData" @sidebarData="getSidebar($event)" />
    <section class="cotent-area">
      <div
        class="leftBar"
        :style="{
          display: leftBarData ? 'block' : 'none',
        }"
      >
        <el-tree :data="leftBarData" @node-click="handleNodeClick"></el-tree>
      </div>
      <div class="rightBar">
        <!-- <ul v-if="rightComponent.length > 0">
          <li v-for="(item, index) in rightComponent" :key="index">
            <VueConfig />
          </li>
        </ul> -->
      </div>
    </section>
  </section>
</template>

<script>
import LeftBar from "@/components/leftBar.vue";
import HeaderVue from "@/components/header.vue";
import VueConfig from "@/components/vue/vueConfig.vue";
import { Vue, Component } from "vue-property-decorator";
import { barList } from "../components/barList";
@Component({
  name: "Home",
  components: {
    LeftBar,
    HeaderVue,
  },
})
export default class Home extends Vue {
  headData = barList || []; // 头部目录
  leftBarData = "" || []; // 侧边栏目录
  rightComponent = []; // 右侧主内容区的组件名称

  mounted() {
    console.log(this.headData);
  }

  // 获取当前菜单下的sidebar数据
  getSidebar(event) {
    this.leftBarData = event;
    console.log(this.leftBarData, "sidebar");
  }

  handleNodeClick(data) {
    console.log(data);
    if (data.children) {
      this.rightComponent = data.children;
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/public/pxToRem.scss";
#home-page {
  width: 100%;
  height: 100%;
  background: #f5f6f7;

  .cotent-area {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    padding: pxToRem(72) pxToRem(60) 0;
    display: flex;
    flex-wrap: nowrap;

    .leftBar {
      width: pxToRem(200);
    }

    .rightBar {
      width: 100%;
      border: slategrey solid 1px;
      border-radius: pxToRem(10);
    }
  }
}
</style>
