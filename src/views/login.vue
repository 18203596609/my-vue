<template>
  <section class="login-page">
    <el-form ref="form" :model="form" label-width="80px">
      <h2 class="title">自用系统</h2>
      <el-form-item label="用户名">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="form.password"
          placeholder="请输入密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-button
        type="primary"
        @click="onSubmit()"
        :class="{ forbid: !form.name && !form.password }"
        >登陆</el-button
      >
    </el-form>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ElementUI from "element-ui";
import { setTokenCookie } from "../utils/auth";
import Http from "../utils/http";
@Component
export default class LoginComponent extends Vue {
  private form: any = {
    name: "",
    password: ""
  };

  mounted () {
    Http.request({
      url: "/static/mgb.json",
      method: "get"
    }).then(res => {
      console.log(res);
    });
  }

  private onSubmit () {
    console.log(this.form);
    if (!this.form.name && !this.form.password) {
      return;
    }
    if (this.form.name === "mm" && this.form.password === "123456") {
      this.$router.push({
        path: "/home"
      });
      setTokenCookie("qwretrtyiuoip");
    } else {
      this.$alert("用户名或密码错误", {
        confirmButtonText: "确定"
      });
    }
  }
}
</script>
<style lang="scss" scope>
@import "../assets/sass/public/pxToRem.scss";
.login-page {
  width: 100%;
  height: 100%;
  background: url("../assets/image/yyqx2.jpg") no-repeat center center / 100%
    100%;
}

.el-form {
  width: pxToRem(600);
  position: relative;
  top: 50%;
  left: pxToRem(100);
  transform: translateY(-50%);

  .title {
    margin-bottom: pxToRem(60);
  }

  .el-form-item__label {
    color: rgba($color: #000000, $alpha: 0.8);
  }

  .el-button {
    width: calc(100% - 80px);
    margin-left: 80px;
  }
}

.forbid {
  cursor: not-allowed;
}
</style>
