<template>
  <section id="header-wrapper">
    <div class="search-dom">
      <input class="search-input" type="search" placeholder="搜索文档" />
    </div>
    <ul class="head-ul">
      <li v-for="(item, index) in headArr" :key="index">
        <div class="head-btn">{{item}}</div>
      </li>
    </ul>
  </section>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class HeaderVue extends Vue {
  private headArr = ["首页", "前端"];
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/public/pxToRem.scss";
#header-wrapper {
  height: pxToRem(80);
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;

  .search-dom {
    .search-input {
      border: none;
      border-radius: pxToRem(6);
      outline: none;
      height: pxToRem(32);
    }
  }

  .head-ul {
    height: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: pxToRem(22);
    .head-btn {
      cursor: pointer;
      margin-right: pxToRem(16);
      &:hover {
        color: #41a3d0;
      }
    }
  }
}
</style>
