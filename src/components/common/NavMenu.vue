<template>
  <div>
    <el-menu
      :default-active="currentPath"
      router
      mode="horizontal"
      style="min-width: 1300px">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
     <!-- <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">White Jotter - Your Mind Palace</span>-->

      <el-col :span="1" :offset="14" style="margin-top: 15px">
        <el-button icon="el-icon-upload" type="primary" size="mini" @click="login()">登录</el-button>
      </el-col>
      <el-button icon="el-icon-edit" size="mini" style="margin-top: 15px" @click="register()">注册</el-button>
     <!-- <a href="/register" style="color: #fff;float: right;padding: 20px; margin-right: 15px;background-color: #8c939d" >注册</a>
      <a href="/login" style="color: #fff;float: right;padding: 20px; margin-right: 10px;background-color: #8c939d">登录</a>-->
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    data () {
      return {
        navList: [
          {name: '/index', navItem: '首页'},
          {name: '/jotter', navItem: '笔记本'},
          {name: '/library', navItem: '图书馆'},
          {name: '/music', navItem: '音乐馆'}
        ],
        keywords: ''
      }
    },
    computed: {
      hoverBackground () {
        return '#ffd04b'
      },
      currentPath () {
        var x = this.$route.path.indexOf('/', 1)
        if (x !== -1) {
          return this.$route.path.substring(0, x)
        } else {
          return this.$route.path
        }
      }
    },
    methods:{
      login(){
        this.$router.replace('/login')
      },
      register(){
        this.$router.replace('/register')
      }
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  span {
    pointer-events: none;
  }
  .el-menu{
    padding-left: 300px;
  }

</style>
