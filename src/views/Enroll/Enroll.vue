<template>
  <div class="enroll">
    <div class="cont">
      <img src="/img/login/loginImg.png" alt="" class="img">
      <div class="form">
        <div class="title">家居在线|后台系统</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input placeholder="手机账号" prefix-icon="el-icon-date" v-model="ruleForm.username" />
          </el-form-item>
          <el-form-item prop="psw">
            <el-input show-password placeholder="登录密码" prefix-icon="el-icon-date" v-model="ruleForm.psw" />
          </el-form-item>
          <el-form-item prop="confirmPsw">
            <el-input show-password placeholder="确认密码" prefix-icon="el-icon-date" v-model="ruleForm.confirmPsw" />
          </el-form-item>
        </el-form>
        <button @click="enroll">立即注册</button>
        <span class="news" @click="login">已有账号登陆</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: '',
        psw: '',
        confirmPsw: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        psw: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        confirmPsw: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    enroll() {
      this.$message.success('注册成功')
    },
    login() {
      this.$router.push('/login')
    }
  },
  mounted(){
    console.log(1)
    alert('前面的区域以后在探索把！')
    this.$router.push('/login')
  }
}
</script>

<style lang="less" scoped>
.enroll {
  width: 100vw;
  height: 100vh;
  background-image: url('/public/img/login/loginBg.png');
  background-size: cover;
  overflow: hidden;

  .cont {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    overflow: hidden;

    .form {
      width: 405px;
      height: 375px;
      text-align: center;
      background-color: #fff;

      .title {
        margin-top: 40px;
        margin-bottom: 20px;
        text-align: center;
      }

      .el-form {
        width: 360px;
        margin: 0 auto;

        .el-form-item {
          margin-left: 0;
        }

        /deep/ .el-form-item__content {
          margin-left: 0 !important;
        }
      }

      .el-input {
        width: 360px;
      }

      button {
        width: 360px;
        height: 40px;
        background: linear-gradient(90deg, #3f6af3, #45b4f6);
        border: none;
        border-radius: 4px;
        color: #fff;
      }

      .news {
        position: absolute;
        right: 0px;
        bottom: 6px;
        font-size: 6px;
        transform: scale(0.8);
        color: #999999;
      }
    }
  }
}
</style>