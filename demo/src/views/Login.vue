<template>
  <el-form :inline="true" class="login-container" :rules="rules" :model="form" label-width="70px">
    <h3 class="login-title">系统登录</h3>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-button type="primary">登录</el-button>
  </el-form>

</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },

      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.login-container {
  box-sizing: border-box;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #ffffff;
  border-radius: 15px;
  width: 350px;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .login-title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458
  }

  .el-button {
    margin-left: 105px;
    margin-top : 15px;
  }

  .el-input {
    width: 198px;

  }
}
</style>