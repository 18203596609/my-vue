<template>
  <div id="sidebar-wrap">
    <el-tree
      :data="leftBarData"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class LeftBar extends Vue {
  @Prop({}) leftBarData: Array<any> = [];
  private data = [];

  private defaultProps = {
    children: "children",
    label: "label"
  };

  private handleNodeClick(data: any) {
    console.log(data, "侧边栏");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/sass/public/pxToRem.scss";
// #sidebar-wrap {
//   width: pxToRem(200);
// }
</style>
