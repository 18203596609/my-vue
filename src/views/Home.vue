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
        <el-tree
          :data="leftBarData"
          :props="defaultProps"
          @node-click="handleNodeClick"
        ></el-tree>
      </div>
      <div class="rightBar">
        <a
          href="https://www.cnblogs.com/Sabo-dudu/p/12118689.html"
          title="关闭eslint"
          target="_blank"
          >eslint</a
        >
      </div>
    </section>
  </section>
</template>

<script>
import LeftBar from "@/components/leftBar.vue";
import HeaderVue from "@/components/header.vue";
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
  headData = barList || [];
  leftBarData = "" || [];

  defaultProps = {
    children: "children",
    label: "label"
  };

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
    margin-top: pxToRem(12);
    display: flex;
    flex-wrap: nowrap;

    .leftBar {
      width: pxToRem(200);
    }

    .rightBar {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
