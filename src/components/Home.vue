<template>
  <div>
    <div id="bg"></div>
    <header id="header" class="inner">
      <div class="alignleft">
        <h1><a href="/" >不见星空</a></h1>
      <!--<h2><a href="/">布道 · 开源 · 极客 · 新知</a></h2>-->
      </div>
      <nav id="main-nav" class="alignright">
        <ul>
          <li><router-link class="article-link" :to="{path:'/index'}">首页</router-link></li>
          <li><router-link class="article-link" :to="{path:'/jotter'}">随笔</router-link></li>
          <li><router-link class="article-link" :to="{path:'/library'}">图书</router-link></li>
          <li><router-link class="article-link" :to="{path:'/history'}">历史</router-link></li>
          <li><router-link class="article-link" :to="{path:'/about'}">关于</router-link></li>

        </ul>

      </nav>
      <div class="clearfix"></div>
    </header>

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
  #bg {
    background-image: url(../assets/beijing.jpg);
    background-color: #050a10;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  a{
    text-decoration: none;

  }
  #header {
    margin: 50px auto;
  }
  #header h1 {
    font-weight: normal;
    font-size: 2.5em;
    line-height: 1;
  }
  #header a {
    color: #fff;
  }
  #header ul li a:hover{
    color: #0cf;
  }
  .inner {
    width: 1200px;
    margin: 0 auto;
  }
  * {
    margin: 0;
    padding: 0;
    font-family: "Microsoft YaHei";
  }
  body {
    color: #fff;
    font-size: 14px;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
  }
  .alignleft {
    float: left;
  }
  #header #main-nav {
    font-family: "Microsoft YaHei";
    line-height: 2.5em;
  }
  .alignright {
    float: right;
  }
  #header #main-nav ul {
    list-style: none;
  }
  #header #main-nav ul li {
    float: left;
    margin-left: 60px;
  }
  .clearfix {
    zoom: 1;
  }
  .clearfix:before, .clearfix:after {
    content: "";
    display: table;
  }
  .clearfix:after {
    clear: both;
  }

</style>

