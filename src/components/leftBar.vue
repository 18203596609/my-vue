<template>
  <div id="sidebar-wrap">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LeftBar extends Vue {
  private data = [
    {
      label: "一级 1",
      children: [
        {
          label: "二级 1-1",
          children: [
            {
              label: "三级 1-1-1"
            }
          ]
        }
      ]
    },
    {
      label: "一级 2",
      children: [
        {
          label: "二级 2-1",
          children: [
            {
              label: "三级 2-1-1"
            }
          ]
        },
        {
          label: "二级 2-2",
          children: [
            {
              label: "三级 2-2-1"
            }
          ]
        }
      ]
    },
    {
      label: "一级 3",
      children: [
        {
          label: "二级 3-1",
          children: [
            {
              label: "三级 3-1-1"
            }
          ]
        },
        {
          label: "二级 3-2",
          children: [
            {
              label: "三级 3-2-1"
            }
          ]
        }
      ]
    }
  ];
  private defaultProps = {
    children: "children",
    label: "label"
  };

  private handleNodeClick(data:any){
    console.log(data);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
