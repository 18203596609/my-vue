<template>
  <section id="header-wrapper">
    <ul class="head-ul">
      <li v-for="(item, index) in data" :key="index">
        <div
          class="head-btn"
          :class="{ active: index === checkIndex }"
          @click="checkbtn(item, index)"
        >
          {{ item.title }}
        </div>
      </li>
    </ul>
    <div class="search-dom">
      <input class="search-input" type="search" placeholder="搜索文档" />
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { BarList } from "@/components/barList";
import { setSession, getSession } from "@/utils/cookie";
@Component
export default class HeaderVue extends Vue {
  private data: Array<any> = BarList;
  private checkIndex: any = 0;

  private checkbtn(item: any, index: number) {
    setSession("headIndex", index);
    this.checkIndex = index;
    this.$router.push({
      path: item.path
    });
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/public/pxToRem.scss";
#header-wrapper {
  height: pxToRem(60);
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 pxToRem(60);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .search-dom {
    .search-input {
      border: none;
      border-radius: pxToRem(6);
      outline: none;
      height: pxToRem(32);
      background: #f0f0f5;
      width: pxToRem(260);
      padding-left: pxToRem(8);
    }
  }

  .head-ul {
    height: 100%;
    display: flex;
    align-items: center;
    color: #555666;
    font-size: pxToRem(22);

    .head-btn {
      cursor: pointer;
      padding: 0 pxToRem(10);
      &:hover {
        color: #000;
      }
    }

    .active {
      background: #f0f0f5;
      border-radius: pxToRem(4);
    }
  }
}
</style>
