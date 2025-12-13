<template>
  <div :style="article == 'white'?'background:#fff':'background:#000'">
      <div class="safety-box">
          <img src="@/assets/images/home-pj.png">
          <span>{{$t("homeContent.safety_box_span")}}</span>
      </div>
      <footer class="el-footer1" style="height: auto;">
        <div class="el-footer-content">
            <div class="el-footer-box" style="margin-right: 110px;">
                <div>
                    <div class="foot-logo">
                        <img v-if="siteConfig" :src="siteConfig.site_logo" style="width: 60%; height: 100%;">
                        <br>
                        <span>{{$t("indexFooter.title")}}</span>
                    </div>
                    <div class="icons" style="display: flex; justify-content: flex-start; margin-top: 10px; flex-wrap: wrap;">
                        <div style="width: 25%; margin-top: 10px;">
                            <img src="@/assets/images/footer1.png" alt="" style="width: 25px; height: 25px;">
                        </div>
                        <div style="width: 25%; margin-top: 10px;">
                            <img src="@/assets/images/footer2.png" alt="" style="width: 25px; height: 25px;">
                        </div>
                        <div style="width: 25%; margin-top: 10px;">
                            <img src="@/assets/images/footer3.png" alt="" style="width: 25px; height: 25px;">
                        </div>
                        <div style="width: 25%; margin-top: 10px;">
                            <img src="@/assets/images/footer4.png" alt="" style="width: 25px; height: 25px;">
                        </div>
                        <div style="width: 25%; margin-top: 10px;">
                            <img src="@/assets/images/footer5.png" alt="" style="width: 25px; height: 25px;">
                        </div>
                        <div style="width: 25%; margin-top: 10px;">
                            <img src="@/assets/images/footer6.png" alt="" style="width: 25px; height: 25px;">
                        </div>
                        <div style="width: 25%; margin-top: 10px;">
                            <img src="@/assets/images/footer7.png" alt="" style="width: 25px; height: 25px;">
                        </div>
                    </div>
                </div>
            </div>
            <div class="el-footer-box">
                <div class="el-footer-title">{{$t("indexFooter.terms_and_policies")}}</div>
                <div class="a_new" @click="$router.push({path:'/text?id=39'})">{{$t("indexFooter.anti_money_laundering")}}</div>
                <div class="a_new" @click="$router.push({path:'/text?id=36'})">{{$t("indexFooter.risk_warning")}}</div>
            </div>
            <div class="el-footer-box">
                <div class="el-footer-title">{{$t("indexFooter.service_privacy")}}</div>
                <div class="a_new" @click="$router.push({path:'/text?id=37'})">{{$t("indexFooter.terms_of_service")}}</div>
                <div class="a_new" @click="$router.push({path:'/text?id=38'})">{{$t("indexFooter.privacy_statement")}}</div>
            </div>
            <div class="el-footer-box">
                <div class="el-footer-title">{{$t("indexFooter.service_information")}}</div>
                <div class="a_new" @click="$router.push({path:'/text?id=19'})">{{$t("indexFooter.about_us")}}</div>
            </div>
            <div class="el-footer-box">
                <div class="el-footer-title"> {{$t("indexFooter.partner_institutions")}} </div>
                <div style="margin: 8px 0px 16px;">
                    <img src="@/assets/images/hezuo1.png" alt="" style="width: 88px; height: 16px;">
                    <img src="@/assets/images/hezuo2.png" alt="" style="width: 88px; height: 16px; margin-left: 15px; vertical-align: middle;">
                </div>
                <div style="margin: 8px 0px 16px;">
                    <img src="@/assets/images/hezuo3.png" alt="" style="width: 88px; height: 16px; vertical-align: middle;">
                    <img src="@/assets/images/hezuo4.png" alt="" style="width: 88px; height: 16px; margin-left: 15px; vertical-align: middle;">
                </div>
            </div>
        </div>
        <div class="el-footer-content" style="height: 1px; margin-top: 20px; border-bottom: 0.5px solid rgb(189, 194, 202);"></div>
        <div class="foot-link" v-if="siteConfig" style="color: rgb(189, 194, 202); margin-top: 20px;">{{siteConfig.site_name}} © 2013-2023. All Right Reserved.</div>
        <div class="el-footer-content" v-if="siteConfig" style="color: rgb(189, 194, 202); margin-top: 10px; font-size: 14px;"> {{$t("indexFooter.risk_prompt").replaceAll("{siteName}",siteConfig.site_name)}} </div>
    </footer>   
</div>
</template>

<script>

export default {
  name: 'indexFooter',
  data() {
    return {
	  article: 'black',
      token: "",
      img_link: [],
      link: [],
      footFrist2: [],
      footSecond2: [],
      footContract: [],
      siteConfig:{},
      wxImg: false
    };
  },
  created() {
    this.token = window.localStorage.getItem("token") || "";
    this.getData();
    this.getSiteConfig();
  },
  mounted() {
	this.article = 'black'
	if(this.$route.path == '/' 
	|| this.$route.path == '/components/login'
	|| this.$route.path == '/components/register'
	|| this.$route.path == '/message'
	|| this.$route.path == '/deposit'
	|| this.$route.path == '/letransactions'
	|| this.$route.path == '/modifyPassword'
	|| this.$route.path == '/change'
	|| this.$route.path == '/finance'
	|| this.$route.path == '/fiat'
	|| this.$route.path == '/withdrawDeposit'
	|| this.$route.path == '/UOrder'
	){
	    this.article = 'white'
	}
    this.aboutUs();
    this.help();
    this.contract();
    this.getSiteConfig();
  },
  methods: {
    getSiteConfig(){
      const that = this
      this.$http({
          url: '/api/getSiteConfig'
      }).then(res => {
          // console.log(res);
          that.siteConfig = res.data.message;
      })
    },
    goDetail(id) {
      this.$router.push({
        path: 'components/noticeDetail',
        query: {
          id: id
        }
      })
    },
    noopen() {

    },
    getData() {

    },
    aboutUs() {
      var that = this;
      // this.$http.post("/api/news/list", {"c_id": 19, 'lang': localStorage.getItem('lang')}).then(res => {
      //   if (res.data.type == "ok") {
      //     var list = res.data.message.list;
      //     if (list.length > 2) {
      //       that.footFrist2 = list;
      //     } else {
      //       that.footFrist2 = list;
      //     }
      //   } else {
      //     // layer.msg(res.message);
      //   }
      // });
    },
    help() {
      var that = this;
      // this.$http.post("/api/news/list", {"c_id": 21, 'lang': localStorage.getItem('lang')}).then(res => {
      //   if (res.data.type == "ok") {
      //     var list = res.data.message.list;
      //     if (list.length > 2) {
      //       that.footSecond2 = list;
      //     } else {
      //       that.footSecond2 = list;
      //     }
      //   } else {
      //     // layer.msg(res.message);
      //   }
      // });
    },
    contract() {
      var that = this;
      // this.$http.post("/api/news/list", {"c_id": 25}).then(res => {
      //   if (res.data.type == "ok") {
      //     var list = res.data.message.list;
      //     if (list.length > 2) {
      //       that.footContract = list;
      //     } else {
      //       that.footContract = list;
      //     }
      //   } else {
      //     // layer.msg(res.message);
      //   }
      // });
    },
    wxImg_over(i) {
      this.img_link[i].wxImg = true;

    },
    wxImg_out(i) {
      this.img_link[i].wxImg = false;
    }
  }
};
</script>

<style lang='scss'>

.fedui-footer {
  width: 100%;
  background-color: #181d25;
  color: #697080;
  padding-top: 60px;
  padding-bottom: 0px;
  min-width: 1280px;
}

.fedui-root, .fedui-root *, .fedui-root :after, .fedui-root :before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.fedui-footer-inner {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-top: 20px;
  //border-top: 1px solid #00a4d8;
}

.fedui-footer-logo {
  height: 23px;
}

.fedui-footer-copyright {
  font-size: 12px;
  color: #6a707f;
  line-height: 12px;
  padding-top: 16px;
}

.fedui-footer-link {
  padding-top: 40px;
}

.fedui-footer-link a:first-child {
  margin-left: 0;
}

.fedui-footer-link a {
  margin-left: 8px;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  color: #a8b7c8;
  display: inline-block;
  border-radius: 50%;
  vertical-align: top;
}

.fedui-footer-right {
  width: 792px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.fedui-footer-right {
  a:hover {
    color: #fff;
  }
}

.fedui-footer-right dl {
  width: 180px;
}

.fedui-root dd, .fedui-root dl, .fedui-root dt, .fedui-root li, .fedui-root ul {
  padding: 0;
  margin: 0;
}

.fedui-footer-right dt {
  line-height: 20px;
  font-size: 16px;
  padding-bottom: 8px;
}

.fedui-footer[data-locale=ko-kr] .fedui-footer-right a, .fedui-footer[data-locale=zh-cn] .fedui-footer-right a, .fedui-footer[data-locale=zh-hk] .fedui-footer-right a, .fedui-footer[data-locale=zh-tw] .fedui-footer-right a {
  line-height: 18px;
}

.fedui-footer-right a {
  padding-top: 8px;
  display: block;
  font-size: 12px;
  line-height: 16px;
  color: #d5def2;
  word-wrap: break-word;
}
.safety-box {
  height: 100px;
  padding: 19px 0;
  background-color: #161a1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  img {
    width: 256px;
  }
}
.el-footer-content {
  display: flex;
}
.bit-center-wrap, .el-footer-content {
  width: 1239px;
  margin: 0 auto;
}
.el-footer-box {
  width: 220px;
}
.el-footer-title {
  padding: 14px 0;
}
.a_new {
  display: block;
  line-height: 1.4;
  color: #999;
  font-size: 13px;
  margin: 8px 0 16px;
  cursor: pointer;
}
.foot-link {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
