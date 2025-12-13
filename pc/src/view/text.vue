<template>
    <div class="help-instruction-box rate-container law-container">
        <indexHeader></indexHeader>
        <div class="help-instruction-banner">
            <div class="box">
                <div class="help-title">{{article.title}}</div>
            </div>
        </div>
        <div class="help-instruction-page bk-rich">
            <div class="instruction-page">
                <div class="title"></div>
                <div class="main-content" v-html="article.content"></div>
            </div>
        </div>
        <indexFooter></indexFooter>
    </div>
  </template>
  <script>
  import indexHeader from '@/view/indexHeader';
  import indexFooter from "@/view/indexFooter";
  
  export default {
    name: 'text',
    data() {
      return {
        article:{}
      }
    },
    components: {
      indexHeader,
      indexFooter
    },
    mounted(){
        const that = this
        this.$http.post("api/general_new",{
            "c_id": this.$route.query.id,
            'lang': window.localStorage.getItem('lang')
        }).then(res => {
            if (res.data.type == "ok") {
                that.article = res.data.message;
            } else {
                // layer.msg(res.message);
            }
        });
    }
  }
  </script>
  <style lang="scss" scoped>
  .help-instruction-box.rate-container {
    background-color: #f7f7fa;
    color: #000!important;
}
.help-instruction-box.rate-container .help-instruction-banner {
    height: 300px;
    background-image: url(../assets/images/rate_bg.png);
    background-size: cover;
}
.help-instruction-box.rate-container.law-container .help-instruction-banner .box {
    background: url(../assets/images/law-banner.png) no-repeat;
    background-position: top 71px right 126px;
    display: block;
    width: 1200px;
    height: 100%;
    margin: 0 auto;
}
.help-instruction-box.rate-container .help-instruction-banner .box .help-title {
    font-size: 50px;
    font-weight: 600;
    line-height: 70px;
    padding-top: 115px;
}
.help-instruction-box .help-instruction-banner .box .help-title {
    text-align: left;
    font-size: 34px;
    font-weight: 500;
    color: #fff;
    line-height: 170px;
}
.help-instruction-box.rate-container.law-container .help-instruction-page {
    border-radius: 16px 16px 0 0;
    padding: 50px 50px 240px;
}
.help-instruction-box.rate-container .help-instruction-page {
    width: 1200px;
    margin: -60px auto 0;
    border-radius: 16px;
    box-shadow: none;
    padding: 40px 50px 60px;
}
.help-instruction-page {
    width: 1000px;
    position: relative;
    margin: -40px auto 30px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(51,51,51,.1);
    text-align: left;
    padding: 30px;
    line-height: 30px;
    border-radius: 12px;
}
  </style>
  