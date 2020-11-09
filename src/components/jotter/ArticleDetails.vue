<template>
  <div class="articles-area" >

    <el-row>
      <el-col :xs="2" :sm="3" :md="4" :lg="4"> <span style="color: white">&nbsp</span></el-col>
      <el-col :span="12" >
        <div class="articles-area" >
          <div style="text-align: left">
            <span style="font-size: 20px"><strong>{{article.articleTitle}}</strong></span><br>
            <i class="el-icon-date" style="padding-top: 15px;"> {{article.articleDate}}</i><br>
            <div class="markdown-body">
              <div v-html="article.articleContentHtml"></div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4"  >
        <ArticleRight></ArticleRight>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ArticleRight from './ArticleRight'
  export default {
    name: 'ArticleDetails',
    components: {ArticleRight},
    data () {
      return {
        article: []
      }
    },
    mounted () {
      this.loadArticle()
    },
    methods: {
      loadArticle () {
        var _this = this
        this.$axios.get('/article?id=' + this.$route.query.id).then(resp => {
          if (resp && resp.status === 200) {
            _this.article = resp.data
          }
        })
      }
    }
  }
</script>

<style scoped>
  @import "../../styles/markdown.css";

</style>

