<template>
  <el-container id="admin-body">
    <el-header style="z-index: 1;height: 80px;margin-left: -20px">
      <Header style="position: absolute;width: 100%; height: 80px"></Header>
    </el-header>
    <!--<el-row style="height: 100%;">-->
    <el-container>
      <el-aside style="height: 150%;margin-top: -80px;width: 230px">
        <admin-menu></admin-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import AdminMenu from './AdminMenu'
  import Header from './Header'
  export default {
    name: 'AdminIndex',
    components: {AdminMenu, Header},
    data () {
      return {
        dialogVisible: false
      }
    },
    mounted () {
      // this.$router.replace('/admin/dashboard')
    }
  }
</script>

<style scoped>
  #admin-body {
    height: 95vh;
  }
</style>
