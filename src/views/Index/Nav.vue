<template>
  <div class="nav">
    <el-menu :router="true" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-menu-item index="/index">
        首页
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">商品管理</template>
        <el-menu-item index="1-1">商品列表</el-menu-item>
        <el-menu-item index="1-2">添加商品</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <span slot="title">用户管理</span>
        <el-menu-item index="1-1">用户分类</el-menu-item>
        <el-menu-item index="1-2">合同管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <span slot="title">订单管理</span>
        <el-menu-item index="1-1">商品订单</el-menu-item>
        <el-menu-item index="1-2">订单详情</el-menu-item>
        <el-menu-item index="1-1">发货</el-menu-item>
        <el-menu-item index="1-2">售后管理</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <span slot="title">会员管理</span>
        <el-menu-item index="1-1">会员列表</el-menu-item>
        <el-menu-item index="1-2">编辑会员</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <span slot="title">平台管理</span>
        <el-menu-item index="1-1">分类设置</el-menu-item>
        <el-menu-item index="1-2">焦点图</el-menu-item>
        <el-menu-item index="1-1">运费模版</el-menu-item>
        <el-menu-item index="1-2">添加模版</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <span slot="title">数据统计</span>
        <el-menu-item index="1-1">交易统计</el-menu-item>
        <el-menu-item index="1-2">商品统计</el-menu-item>
        <el-menu-item index="1-2">会员统计</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <span slot="title">权限管理</span>
        <el-menu-item index="1-1">账号管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.nav {
  width: 202px;
  height: calc(100vh - 58px);

  &::-webkit-scrollbar {
    display: none
  }

  background-color: #fff;
  overflow-y: auto;

  >ul {
    padding-top: 36px;
    height: 100%;

    a {
      display: block;
      height: 100%;
    }

    >li {
      min-height: 48px;
      margin-bottom: 20px;

      &.active {
        background: url("../../../public/img/list_bg.png") no-repeat 0 0;

        >a {
          >ul {
            display: block;
          }

          >span {
            color: #4497fd;
          }
        }
      }

      >a {
        >ul {
          display: none;

          li {
            text-align: left;
            margin-top: 7px;
            min-height: 32px;
            box-sizing: border-box;

            &:active {
              >span {
                color: #6caefb;
              }
            }

            span {
              font-size: 16px;
              line-height: 32px;
              margin-left: 62px;
            }

            &.down {
              li {
                &.active {
                  border: 1px solid #dcf0fe;
                  border-top-right-radius: 5px;
                  border-bottom-right-radius: 5px;
                  background-color: #f6fbfc;

                  >span {
                    color: #6caefb;
                  }
                }
              }
            }
          }
        }

        img {
          vertical-align: middle;
          margin-left: 36px;
        }

        span {
          vertical-align: middle;
          display: inline-block;
          width: 86px;
          line-height: 48px;
          font-size: 16px;
          margin-left: 14px;
          color: #666666;
        }
      }
    }
  }
}
</style>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>