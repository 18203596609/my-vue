<template>
  <section id="home-page">
    <HeaderVue/>
    <section class="cotent-area">
      <router-view></router-view>
    </section>
  </section>
</template>

<script lang="ts">
import HeaderVue from "@/components/header.vue";
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "Home",
  components: {
    HeaderVue,
  },
})
export default class Home extends Vue {

  mounted() {
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
    padding-top: 0.6rem;
  }
}
</style>
