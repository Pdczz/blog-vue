<template>

  <div >

    <el-row style="width: 1200px;margin: 0 auto; ">

      <el-col style="width: 900px">
        <div class="block">
          <el-timeline>
            <el-timeline-item timestamp="2020-05-01" placement="top">
              <el-card >
                <p>SpringBoot+Vue.js进行网站建设，搭建个人网站</p>

              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020-11-01" placement="top">
              <el-card>
                <p>参考hexo的css样式，修改前端内容</p>

              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020-11-24" placement="top">
              <el-card>
                <p>购买域名 pdczzblog.com ，并把项目部署到云端</p>

              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020-11-26" placement="top">
              <el-card>
                <p>进行gzip压缩，提升页面加载速度</p>

              </el-card>
            </el-timeline-item>
          </el-timeline>

          </div>
      </el-col>
      <el-col style="width: 280px">
        <article-right></article-right>

      </el-col>

    </el-row>


  </div>
</template>

<script>
  import ArticleRight from '../jotter/ArticleRight'
  export default {
    name: 'Music',
    components: {ArticleRight}
  }
</script>

<style scoped>
  .block{
    width: auto;
    height: 750px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #bfbfbf;   // 进行修改背景和字体
  color: #fff;
  }
  .el-card{
    text-align: left;
    margin-bottom: 20px;
    background-color: rgba(255,255,255,.8)
  }

</style>

<style>
  .el-timeline-item__wrapper .el-timeline-item__timestamp {
    color: #a0cfff;
  }

</style>
