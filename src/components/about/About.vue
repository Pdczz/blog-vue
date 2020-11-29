<template>
  <div >

    <el-row style="width: 1200px;margin: 0 auto;" >

      <el-col style="width: 900px">

          <el-card class="block">
            <div class="aboutForme">

              <p style="border-left: 3px solid #FF1700;font-weight: bold;">&nbsp个人简介：</p>
              <p class="aboutme">&nbsp&nbsp&nbsp&nbsp某院校即将毕业大学生小白一枚~，某日突发奇想自己建立博客，可以拥有属于自己的网站是多么酷的一件事情，当然这也是一次技术的测试。但由于种种原因未能动工而停滞，直到2020年在疫情学校停课情况下，终于开始了网站的建设，包括前后端的设计和代码编写，项目的运维和部署(其中参考了很多很多)于是便有了此网站,欢迎大家一起来交流。(还有很多功能还未完成，如：评论功能，前后端优化，网站安全等等..)
              </p>
              <p style="border-left: 3px solid #FF1700;font-weight: bold;">&nbsp联系我：</p>
              <p class="aboutme">
                &nbsp&nbsp&nbsp&nbsp mail: 1634450780@qq.com
              </p>
            </div>

          </el-card>

      </el-col>

      <el-col style="width: 280px" >
        <ArticleRight></ArticleRight>

      </el-col>

    </el-row>




  </div>

</template>

<script>
  import ArticleRight from '../jotter/ArticleRight'
  export default {
    name: 'About',
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
  .aboutForme{
    width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  .aboutme{
    line-height: 2.0em;
    color: #808080;
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
