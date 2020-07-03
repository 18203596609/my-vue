<template>
  <section class="front-page">
    <div class="left-bar">
      <el-tree
        :data="sidebar[1].sidebar"
        @node-click="handleNodeClick"
      ></el-tree>
    </div>
    <div class="right-bar">
      <router-view></router-view>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import LeftBar from "@/components/leftBar.vue";
import { BarList } from "@/components/barList";
@Component({
  name: "HtmlVue",
  components: {
    LeftBar,
  },
})
export default class extends Vue {
  private sidebar = BarList;
  private handleNodeClick(data: any) {
    console.log(data);
    this.$router.push({
      path: data.path,
    });
    // if (data.children) {
    // }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/sass/public/pxToRem.scss";
.front-page {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  padding: pxToRem(20) pxToRem(60) 0;
  display: flex;
  flex-wrap: nowrap;

  .left-bar {
    width: pxToRem(200);
    margin-right: 16px;
  }

  .right-bar {
    width: 100%;
    border: #eee solid 1px;
    border-radius: pxToRem(10);
    box-shadow: 1px 2px 8px 3px rgba(172,172,172,0.09);
    background: #fff;
  }
}
</style>
<style lang="scss">
.content-list {
  text-align: left;
  .content {
    display: inline-block;
    padding: 6px 16px;
    font-size: 18px;
    color: #606266;
    // font-weight: 600;
  }
}
</style>
