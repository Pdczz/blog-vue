<template>
  <el-menu
    :default-active="currentPath"
    class="el-menu-admin"
    router
    mode="vertical"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse">
    <div style="height: 80px;"></div>

   <!-- <img src="../../assets/profile.jpg" style="width: 100%;height: auto;max-width: 45px;margin-top: 30px;" class="img-circle" alt="User Image">-->

    <!--<a style="color: #90ecff;margin-left: 25px">{{name}}</a><br><br>
    <a href="#" style="margin-left: 100px;color: darkgrey"><i class="fa fa-circle text-success" ></i> 在线</a>
    <a href="#" v-on:click="logout" style="padding-left:10px; color: darkgrey"><i class="fa fa-sign-out text-danger"></i> 注销</a>-->


    <!--index 没有用但是必需字段-->
    <el-submenu  v-for="(item,i) in adminMenus" :key="i" :index="(i).toString()" style="text-align: left">
        <span slot="title" style="font-size: 15px;">
          <i :class="item.iconCls"></i>
          {{item.nameZh}}
        </span>
      <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">
        <i :class="child.icon"></i>
        {{ child.nameZh }}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: 'AdminMenu',
    data () {
      return {
        isCollapse: false,
        name: ''
      }
    },
    computed: {
      adminMenus () {
        this.name = this.$store.state.user.username.name
        return this.$store.state.adminMenus
      },
      currentPath () {
        return this.$route.path
      }
    },
    methods: {
      logout () {
        var _this = this
        this.$axios.get('/logout').then(resp => {
          if (resp && resp.status === 200) {
            _this.$store.commit('logout')
            _this.$router.replace('/index')
            // 清空路由，防止路由重复加载
            const newRouter = createRouter()
            _this.$router.matcher = newRouter.matcher
          }
        }).catch(failResponse => {})
      }
    }
  }
</script>

<style scoped>
  .el-menu-admin {
    border-radius: 5px;
    height: 100%;
  }

  .image>img {
    width: 100%;
    max-width: 45px;
    height: auto;
  }
  .img-circle {
    border-radius: 50%;
  }

</style>
