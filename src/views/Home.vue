<template>
  <section id="home-page">
    <HeaderVue />
    <section class="cotent-area clearfix">
      <div class="leftBar">
        <LeftBar />
      </div>
      <div class="rightBar"></div>
    </section>
  </section>
</template>

<script>
import LeftBar from "@/components/leftBar.vue";
import HeaderVue from "@/components/header.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "Home",
  components: {
    LeftBar,
    HeaderVue
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
@import "../assets/sass/public/pxToRem.scss";
#home-page {
  width: 100%;

  .cotent-area {
    width: 100%;
    padding: 0 pxToRem(60);

    .leftBar {
      width: pxToRem(200);
      float: left;
    }

    .rightBar{
      width: calc(100% - 2rem);
      float: left;
      background: rebeccapurple;
    }
  }
}
</style>