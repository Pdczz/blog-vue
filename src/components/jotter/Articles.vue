<template>

  <div >
    <el-row>
      <el-col :xs="2" :sm="3" :md="4" :lg="4"> <span style="color: white">&nbsp</span></el-col>
      <el-col :span="12" v-for="(o, index) in 1" :key="o" >
        <div class="articles-area" >
          <el-card style="text-align: left" shadow="never">
            <div v-for="article in articles" :key="article.id">
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
            </div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="4"  >
      <article-right></article-right>

      </el-col>

    </el-row>

    <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      :total="total">
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
        pageSize: 4,
        total: 0,
        keywords:''
      }
    },
    mounted () {
      this.loadArticles()
    },
    methods: {
      loadArticles () {
        var _this = this
        this.$axios.get('/article/' + this.pageSize + '/1').then(resp => {
          if (resp && resp.status === 200) {
            _this.articles = resp.data.items
            _this.total = resp.data.total
          }
        })
      },
      handleCurrentChange (page) {
        var _this = this
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
    /*width: 850px;
    height: 750px;*/
    width: auto;
    height: 750px;
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

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }


  .image {
    width: 50%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }






</style>

