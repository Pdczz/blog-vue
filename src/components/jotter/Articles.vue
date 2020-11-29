<template>

  <div >

    <el-row style="width: 1200px;margin: 0 auto; ">
      <el-col style="width: 900px"><!--:span="12"  :offset="4"-->
      <div class="articles-area" >

          <div v-for="article in articles" :key="article.id">
            <el-card  shadow="never">
              <div style="float:left;width:100%;height: 200px">
                <router-link class="article-link" :to="{path:'jotter/article',query:{id: article.id}}">
                    <span style="font-size: 20px">
                      <strong>{{article.articleTitle}}
                      </strong>
                    </span>
                </router-link><br>
                <i class="el-icon-date post-meta"> {{article.articleDate}}</i><br>
                <router-link class="article-link " :to="{path:'jotter/article',query:{id: article.id}}">
                  <p class="post-content">
                    {{getContent(article.articleContentHtml)}}
                  </p>
                </router-link>
                <router-link class="article-link " :to="{path:'jotter/article',query:{id: article.id}}">
                  <el-button size="mini" style="float: right;padding-top: 5px">阅读全文>>
                  </el-button>
                </router-link>
              </div>
            </el-card>
          </div>

      </div>
    </el-col>

      <el-col  style="width: 280px"><!--:span="4"-->
      <article-right></article-right>

      </el-col>

    </el-row>

      <el-pagination
        style="margin-top: 20px;margin-right: 100px"
        background
        layout=" prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        :total="total"
        >
      </el-pagination>



  </div>



</template>

<script>
  import ArticleRight from './ArticleRight'

  export default {
    name: 'Articles',
    components: {ArticleRight},
    data () {
      return {
        articles: [],
        pageSize: 7,
        total: 0,
        keywords:'',
        currentPage: 1
      }
    },
    created(){
      this.currentPage=window.sessionStorage.getItem('page') == null ? 1 : JSON.parse(window.sessionStorage.getItem('page' || '[]'))

    },
    mounted () {
      this.loadArticles()
    },
    methods: {
      loadArticles () {
        var _this = this;
        let page=parseInt(this.currentPage)
        this.$axios.get('/article/' + this.pageSize + '/'+page).then(resp => {
          if (resp && resp.status === 200) {
            _this.articles = resp.data.items
            _this.total = resp.data.total
          }
        })
      },
      handleCurrentChange (page) {
        var _this = this
        //document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        window.sessionStorage.setItem("page",page)
        this.$axios.get('/article/' + this.pageSize + '/' + page).then(resp => {
          if (resp && resp.status === 200) {
            _this.articles = resp.data.items
            _this.total = resp.data.total
          }
        })
      },
      getContent(articleContentMd){
        return articleContentMd.replace(/<\/?.+?>/g, "").replace(/ /g, "");
      },
    }
  }
</script>

<style scoped>
  .articles-area {
    width: auto;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }

  .article-link {
    text-decoration: none;
    color: #606266;
  }

  .article-link:hover {
    color: #409EFF;
  }
  .post-meta {
    padding: 0;
    margin: 15px 0 0;
    color: #6E7173;
    float: left;
    display: inline;
    text-indent: .15em;
  }
  .post-content {
    clear: left;
    font-size: 15px;
    line-height: 1.77;
    color: #444;
    padding-top: 15px;
    text-align: justify;
    text-justify: distribute;
    word-break: normal;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .post-content:hover{
    color: #409EFF;
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


