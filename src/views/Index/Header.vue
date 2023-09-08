<template>
  <header>
    <router-link to="/index" class="logo">
      <img src="../../../public/img/logo.png" alt="logo" />
    </router-link>
    <div class="right">
      <ul class="capabilities">
        <li @click="goto('search')"><img src="../../../public/img/search.png" alt="" /></li>
        <li @click="goto('set')"><img src="../../../public/img/set.png" alt="" /></li>
        <li>
          <img src="../../../public/img/tips.png" alt="" />
          <div class="dot">1</div>
        </li>
      </ul>
      <div class="user">
        <img src="../../../public/img/user.png" alt="" />
        <el-dropdown>
          <span class="el-dropdown-link">
            <span>小家</span><i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped>
header {
  background-color: #4497fd;
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 111px;
    height: 32px;
    margin-left: 42px;

    img {
      width: 111px;
      height: 32px;
      vertical-align: bottom;
    }
  }

  .right {
    display: flex;
    margin-right: 72px;

    .capabilities {
      margin-right: 50px;
      display: flex;
      align-items: center;

      li {
        position: relative;
        margin-left: 15px;

        // height: 22px;
        .dot {
          top: -10px;
          right: -10px;
          font-size: 12px;
          position: absolute;
          text-align: center;
          line-height: 10px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          color: white;
          background-color: red;
        }
      }
    }

    .user {
      height: 32px;

      img {
        margin-right: 10px;
      }

      span {
        line-height: 32px;
        color: white;
      }
    }
  }
}
</style>

<script>
export default {
  name: 'Header',
  methods: {
    goto(url) {
      this.$router.push(url)
    }
  }
}
</script>