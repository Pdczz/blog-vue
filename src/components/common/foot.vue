<template>
      <div class="footer">
        <div class="wrapper">
          <div class="footer-bottom">
            <div class="link">
              <dl>
                <dt>
                  网站相关
                </dt>
                <dd>
                  关于我们
                </dd>
                <dd>
                  服务条款
                </dd>
                <dd>
                  帮助中心
                </dd>
                <dd>
                  编辑器语法
                </dd>
              </dl>
              <dl>
                <dt>
                  常用链接
                </dt>
                <dd>
                  博客园
                </dd>
                <dd>
                  CSDN
                </dd>
              </dl>
              <dl>
                <dt>
                  联系我们
                </dt>
                <dd>
                  联系我们
                </dd>
                <dd>
                  加入我们
                </dd>
                <dd>
                  建议反馈
                </dd>
              </dl>
              <dl>
                <dt>
                  关注我们
                </dt>
                <dd>
                  微博
                </dd>
                <dd>
                  twitter
                </dd>
              </dl>
              <div class="xuke">
                <h3>内容许可</h3>
                <p style="text-align: left">除特别说明外，用户内容均采用知识共享署名-非商业性使用-禁止演绎4.0 国际许可协议 (CC BY-NC-ND 4.0) 进行许可</p>
                <p>本站由 神盾局 提供更新服务</p>
              </div>
            </div>
            <p class="Copyright">Copyright &copy; 2017 问答社区 当前版本 0.0.1</p>
          </div>
        </div>
      </div>

</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style scoped>



  .footer {

    border-top: 1px solid #e6e6e6;
  }

  .footer-bottom {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .footer-bottom .link {
    overflow: hidden;
  }

  .footer-bottom .link dl {
    float: left;
    width: 203px;
  }

  @media (min-width: 1200px) {
    .footer-bottom .link dl {
      width: 203px;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    .footer-bottom .link dl {
      width: 186px;
    }
  }

  @media (max-width: 1024px) {
    .footer-bottom .link dl {
      width: 150px;
    }
  }

  .footer-bottom .link dl dt {
    padding-bottom: 15px;
    font-size: 16px;
    font-weight: bold;
  }

  .footer-bottom .link dl dd {
    margin-left: 0;
    font-size: 14px;
    line-height: 22px;
  }

  .footer-bottom .link .xuke {
    float: right;
    margin-top: 6px;
  }

  @media (min-width: 1200px) {
    .footer-bottom .link .xuke {
      width: 300px;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    .footer-bottom .link .xuke {
      width: 250px;
    }
  }

  @media (max-width: 1024px) {
    .footer-bottom .link .xuke {
      width: 200px;
    }
  }

  .footer-bottom .link .xuke p {
    margin-top: 15px;
    font-size: 14px;
  }

  .footer-bottom .Copyright {
    text-align: center;
    font-size: 14px;
    color: #999;
  }

  .wrapper {
    overflow: hidden;
    position: relative;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    .wrapper {
      width: 1170px;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    .wrapper {
      width: 1000px;
    }
  }

  @media (max-width: 1024px) {
    .wrapper {
      width: 800px;
    }
  }

</style>
