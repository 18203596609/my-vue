<template>
  <section id="home-page">
  home page
  </section>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { barList } from "@/components/barList";
@Component({
  name: "Home",
  components: {
  },
})
export default class Home extends Vue {
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/public/pxToRem.scss";
#home-page {
  width: 100%;
  height: 100%;
  background: #f5f6f7;
}
</style>
