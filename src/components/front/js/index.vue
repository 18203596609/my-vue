<template>
  <section>
    <router-view></router-view>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "JSVue"
})
export default class extends Vue {}
</script>
<style lang="scss" scoped></style>
