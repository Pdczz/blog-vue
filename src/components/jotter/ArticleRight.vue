<template>
  <el-card shadow="never" style="margin-left: 10px" >
    <div >
      <el-input
        @keyup.enter.native="searchClick"
        placeholder="Search"
        prefix-icon="el-icon-search"
        size="mini"
        background-color="#bbb"
        v-model="keywords">
      </el-input>
    </div>
    <hr>

    <hr>
    <div class="buttonColor">
      <div style="text-align:left;color:#808080"><h5>&nbsp;FEATURED TAGS </h5></div>
      <el-button size="mini" round><span>JavaScript</span></el-button>
      <el-button size="mini" round><span>Veu</span></el-button>
      <el-button size="mini" round><span>Nginx</span></el-button>
      <el-button size="mini" round><span>前端开发</span></el-button>
      <el-button size="mini" round><span>Linux</span></el-button>
      <el-button size="mini" round><span>JavaEE</span></el-button>
      <el-button size="mini" round><span>Spring</span></el-button>
      <el-button size="mini" round><span>Mybatis</span></el-button>

    </div>
    <hr>
    <div class="imgstyle" >
      <div style="text-align:left;color:#808080"><h5>&nbsp;ABOUT ME </h5></div>
      <a href="https://weibo.com"><img src="../../assets/weibo.png"></a>
      <a href="https://twitter.com"><img src="../../assets/tuite.png"></a>
      <a href="https://github.com"><img src="../../assets/github.png"></a>
      <a href="https://www.facebook.com"><img src="../../assets/facebook.png"></a>
      <a href="https://www.google.com"><img src="../../assets/google.png"></a>
    </div>

  </el-card>

</template>

<script>
  export default {
    name: 'ArticleRight',
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>

<style scoped>
  .buttonColor span{
    color: #bfbfbf;
  }
  .buttonColor .el-button{
    margin-bottom: 5px;
    margin-left: 0px;
  }
  .imgstyle a img{
    height: 30px;
    width: 30px;
    margin-left: 10px;
  }
  hr {
    margin-top: 30px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
</style>
