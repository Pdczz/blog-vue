<template>
  <div>
    <nav-menu></nav-menu>

    <router-view/>
    <foot style="margin-top: 20px"></foot>

  </div>
</template>

<script>
  import NavMenu from './common/NavMenu'
  import foot from './common/foot'

  export default {
    name: 'Home',
    components: { NavMenu,foot}
  }
</script>

<style scoped>

</style>

