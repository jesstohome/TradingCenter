<template>
    <div class="account-main wrap fColor1" style="max-width: 980px">
        <div class="title">{{ $t('security.idcardh') }}</div>
        <div class="main-content mt20">
            <div v-show="base_review_status!=2">
                <div class="tc ft30 au-statue">{{ $t('auth.basefirst') }}</div>
            </div>
            <div v-show="base_review_status==2&&review_status==0">
                <div class="main-input">
                    <div class="flex alcenter center">
                        <span>{{ $t('auth.passport') }}：</span>
                        <input type="text" :placeholder="$t('auth.passportid')" id="passport" v-model="passport">
                    </div>
                    <div class="flex alcenter center mt20">
                        <span>{{ $t('auth.jiashi') }}：</span>
                        <input type="text" :placeholder='$t("auth.jiashiid")' id="jiashi" v-model="jiashi">
                    </div>
                </div>
                <div class="mt40 fColor1 ft14 tc">{{ $t('auth.note1') }}</div>
                <div class="idimg flex center mt40">
                    <div>
                        <img :src="src1" alt>
                        <input type="file" accept="image/*" name="file" @change="file1($event)">
                    </div>
                    <div>
                        <img :src="src2" alt>
                        <input type="file" accept="image/*" name="file" @change="file2($event)">
                    </div>
                    <div>
                        <img :src="src3" alt>
                        <input type="file" accept="image/*" name="file" @change="file3($event)">
                    </div>
                    <div>
                        <img :src="src4" alt>
                        <input type="file" accept="image/*" name="file" @change="file4($event)">
                    </div>
                    <div>
                        <img :src="src5" alt>
                        <input type="file" accept="image/*" name="file" @change="file5($event)">
                    </div>
                </div>
                <div class="updata tc">
                    <input type="button" :value="$t('ad.up')" @click="updata" class="curPer">
                </div>
            </div>
            <div v-show="base_review_status==2&&review_status==1">
                <div class="tc ft30 au-statue">{{ $t('auth.ising') }}</div>
            </div>
            <div v-show="base_review_status==2&&review_status==2">
                <div class="tc ft30 au-statue">{{ $t('auth.ised') }}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios";

    export default {
        name: "advanced",
        data() {
            return {
                passport: "",
                jiashi: "",
                src1: "../../static/imgs/addimg.png",
                src2: "../../static/imgs/addimg.png",
                src3: "../../static/imgs/addimg.png",
                src4: "../../static/imgs/addimg.png",
                src5: "../../static/imgs/addimg.png",
                review_status: 3,
                base_review_status: 3
            };
        },
        created() {
            this.token = localStorage.getItem("token");
        },
        methods: {
            file1(e) {
                let that = this;
                let reader = new FileReader();
                // console.log(window.event.target.files[0]);
                let file = e.target.files[0];

                reader.readAsDataURL(file);
                reader.onload = function (ed) {
                };
                let formData = new FormData();
                formData.append("file", file);
                axios.post("/api/upload", formData, {
                    headers: {"Content-Type": "multipart/form-data"}
                }).then(res => {
                    let msg = res.data;
                    if (msg.type == 'ok') {
                        that.src1 = msg.message;
                    } else {
                        layer.msg(msg.message)
                    }
                });
            },
            file2(e) {
                let that = this;
                let reader = new FileReader();
                // console.log(window.event.target.files[0]);
                let file = e.target.files[0];

                reader.readAsDataURL(file);
                reader.onload = function (ed) {
                };
                let formData = new FormData();
                formData.append("file", file);
                axios.post("/api/upload", formData, {
                    headers: {"Content-Type": "multipart/form-data"}
                }).then(res => {
                    let msg = res.data;
                    if (msg.type == 'ok') {
                        that.src2 = msg.message;
                    } else {
                        layer.msg(msg.message)
                    }
                });
            },
            file3(e) {
                let that = this;
                let reader = new FileReader();
                // console.log(window.event.target.files[0]);
                let file = e.target.files[0];

                reader.readAsDataURL(file);
                reader.onload = function (ed) {
                };
                let formData = new FormData();
                formData.append("file", file);
                axios.post("/api/upload", formData, {
                    headers: {"Content-Type": "multipart/form-data"}
                }).then(res => {
                    let msg = res.data;
                    if (msg.type == 'ok') {
                        that.src3 = msg.message;
                    } else {
                        layer.msg(msg.message)
                    }
                });
            },
            file4(e) {
                let that = this;
                let reader = new FileReader();
                // console.log(window.event.target.files[0]);
                let file = e.target.files[0];

                reader.readAsDataURL(file);
                reader.onload = function (ed) {
                };
                let formData = new FormData();
                formData.append("file", file);
                axios.post("/api/upload", formData, {
                    headers: {"Content-Type": "multipart/form-data"}
                }).then(res => {
                    let msg = res.data;
                    if (msg.type == 'ok') {
                        that.src4 = msg.message;
                    } else {
                        layer.msg(msg.message)
                    }
                });
            },
            file5(e) {
                let that = this;
                let reader = new FileReader();
                // console.log(window.event.target.files[0]);
                let file = e.target.files[0];

                reader.readAsDataURL(file);
                reader.onload = function (ed) {
                };
                let formData = new FormData();
                formData.append("file", file);
                axios.post("/api/upload", formData, {
                    headers: {"Content-Type": "multipart/form-data"}
                }).then(res => {
                    let msg = res.data;
                    if (msg.type == 'ok') {
                        that.src5 = msg.message;
                    } else {
                        layer.msg(msg.message)
                    }
                });
            },
            updata() {
                var that = this;
                let passport = this.$utils.trim(that.passport);
                let jiashi = this.$utils.trim(that.jiashi);
                // if (this.name.length == "") {
                //   layer.tips(that.$t('auth.truename'), "#name");
                //   return;
                // }
                // if (this.card_id.length == "") {
                //   layer.tips(that.$t('auth.truenum'), "#card");
                //   return;
                // }

                // if (that.src1 == "" || that.src2 == '' || that.src3 == '') {
                //   layer.tips(that.$t('auth.img'), "#name");
                //   return;
                // }
                this.$http({
                    url: "/api/" + "user/real_name_high",
                    method: "post",
                    data: {
                        passport: passport,
                        jiashi: jiashi,
                        front_pic: that.src1,
                        passport_pic: that.src2,
                        passport_hand_pic: that.src3,
                        jiashi_pic: that.src4,
                        jiashi_hand_pic: that.src5
                    },
                    headers: {Authorization: window.localStorage.getItem('token')}
                })
                    .then(res => {
                        layer.msg(res.data.message);
                        if (res.data.type == 'ok') {
                            setTimeout(function () {
                                that.$router.push("/");
                            }, 500);
                        }
                    })
                    .catch(error => {
                    });
            },
            Info() {
                var that = this;
                this.$http({
                    url: "/api/" + "user/center",
                    method: "get",
                    data: {},
                    headers: {Authorization: window.localStorage.getItem('token')}
                }).then(res => {
                    that.review_status = res.data.message.hreview_status;
                    that.base_review_status = res.data.message.review_status;
                }).catch(error => {
                });
            }
        },
        mounted() {
            this.Info();
        }
    };
</script>
<style scoped lang="scss">
    .leftNav {
        margin-right: 0px !important;
    }

    .account-main {
        background: #273041;
        padding: 20px;
        background: #181b2a;

        .title {
            width: 100%;
            line-height: 60px;
            border-radius: 4px;
            padding-left: 20px;
            border-bottom: 1px solid #273041;
        }

        .main-content {

            min-height: 700px;
            border-radius: 2px;

            .main-input {
                margin: 0 auto;
                text-align: center;
                padding-top: 100px;

                span {
                    width: 100px;
                }

                input {
                    width: 320px;
                    min-height: 46px;
                    border: 1px solid #4e5b85;
                    padding: 0 20px;
                    color: #c7cce6;
                    font-size: 14px;
                    border-radius: 3px;
                    background-color: #1e2235;
                }
            }

            .idimg {
                div {
                    width: 160px;
                    height: 160px;
                    overflow: hidden;
                    position: relative;
                    background-size: 100% 100%;
                    border: 1px solid #e2e2e2;
                    margin-left: 50px;

                    input {
                        position: absolute;
                        z-index: 11110;
                        opacity: 0;
                        margin-left: -160px;
                        width: 100%;
                        height: 160px;
                        top: 0;
                        cursor: pointer;
                    }

                    img {
                        width: 100%;
                    }
                }
            }

            .updata {
                input {
                    width: 300px;
                    height: 45px;
                    border-radius: 4px;
                    color: #c7cce6;
                    font-size: 14px;
                    margin: 0 auto;
                    margin-left: 100px;
                    margin-top: 60px;
                    background: #5697f4;
                }
            }

            .au-statue {
                padding-top: 100px;
                font-size: 30px;
            }
        }
    }
</style>


// WEBPACK FOOTER //
// src/view/authentication.vue
