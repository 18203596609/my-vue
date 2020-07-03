<template>
  <section class='html-page'>
    <ul class='content-box'>
      <li class='content-list' v-for="(item, index) in data" :key="index">
        <a class='content' :href="item.href" target='_blank'>{{ item.name }}</a>
        <hr />
      </li>
    </ul>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { HtmlData } from "./data";
@Component({
  name: "HtmlVue"
})
export default class extends Vue {
  private data: any = HtmlData;
}
</script>
<style lang="scss" scoped></style>
