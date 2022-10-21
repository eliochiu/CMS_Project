<template>
  <el-form
    ref="form"
    :inline="true"
    class="login-container"
    :rules="rules"
    :model="form"
    label-width="70px"
  >
    <h3 class="login-title">系统登录</h3>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-button type="primary" @click="submit">登录</el-button>
  </el-form>
</template>


<script>
import Mock from "mockjs";
import Cookie from "js-cookie";
import { getMenu } from "../api";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },

      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },

  methods: {
    submit() {
      // 校验
      this.$refs.form.validate((valid) => {
        // 校验通过
        if (valid) {
          getMenu(this.form).then(({ data }) => {
            // console.log(data);
            // 根据返回数据判断
            // 登录成功
            if (data.code === 20000) {
              // 保存当前用户的token
              Cookie.set("token", data.data.token);

              // 从后端获取菜单数据，修改store中的数据
              this.$store.commit("setMenu", data.data.menu);

              // 动态注册路由
              this.$store.commit("addMenu", this.$router);
              
              // 跳转首页
              this.$router.push("/home");
            } else {
              // 登录失败
              this.$message.error(data.data.message);
            }
          });
        }
      });
    },
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
    color: #505458;
  }

  .el-button {
    margin-left: 105px;
    margin-top: 15px;
  }

  .el-input {
    width: 198px;
  }
}
</style>