<template>
    <div>
        <indexHeader></indexHeader>
        <div class="user-main-wrap ovf-hidden newAccount">
            <div class="content-wrap float-left noLeft">
                <div class="user-identity-page">
                    <header>
                        <div class="title">
                            <p>{{$t("transferLog.verified")}}</p>
                            <p>{{$t("transferLog.verified_desc")}}</p>
                        </div>
                        <div class="imgTip">
                            <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbl9kYW5nZXIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjYwIiBoZWlnaHQ9IjcwLjM0NSIgdmlld0JveD0iMCAwIDYwIDcwLjM0NSI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmY2U5NjsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZmM5NjIwOwogICAgICB9CgogICAgICAuY2xzLTMsIC5jbHMtNCB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgICAgICBvcGFjaXR5OiAwLjE7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGlkPSLot6/lvoQiIGNsYXNzPSJjbHMtMSIgZD0iTTU5Ljk5LDEyLjUwOVYxMC4wMzdsLTUuMjMxLS4wNzVoLS4wMTZBMzcuNjA5LDM3LjYwOSwwLDAsMSw0My4yNDgsNy41MDYsNTIuMyw1Mi4zLDAsMCwxLDMzLjE1NywyLjI0N0wyOS45ODcsMCwyNi44NjYsMi4yMzFBNTEuNjQyLDUxLjY0MiwwLDAsMSwxNi43NTgsNy41MDYsMzYuMTMxLDM2LjEzMSwwLDAsMSw1LjI0Nyw5Ljk2MkwwLDEwLjAzN1YzOS43MzFDMCw0Ni41NTMsMy45NjksNTQuMiwxMC45MTMsNjAuNzJhNDMuNTkzLDQzLjU5MywwLDAsMCw5LjYyNCw2LjkxM0EyMS4zNTUsMjEuMzU1LDAsMCwwLDMwLDcwLjM0NWEyMS42MjIsMjEuNjIyLDAsMCwwLDkuNTI2LTIuNzU1LDQzLjYyLDQzLjYyLDAsMCwwLDkuNTU5LTYuODcsNDAuNDc5LDQwLjQ3OSwwLDAsMCw3LjY2MS05LjYzQTIzLjQ0NywyMy40NDcsMCwwLDAsNjAsMzkuNzI2TDU5Ljk5LDEyLjUxNFoiLz4KICA8cGF0aCBpZD0i6Lev5b6ELTIiIGRhdGEtbmFtZT0i6Lev5b6EIiBjbGFzcz0iY2xzLTIiIGQ9Ik02Mi45NzMsMjAuNDM5di0yLjI2bC00LjcwNi0uMDY4aC0uMDE1YTMzLjM3LDMzLjM3LDAsMCwxLTEwLjM0Mi0yLjI0Niw0Ni44MTgsNDYuODE4LDAsMCwxLTkuMDgtNC44MDlMMzUuOTc5LDlsLTIuODA4LDIuMDRhNDYuMjMyLDQ2LjIzMiwwLDAsMS05LjA5NCw0LjgyNEEzMi4wNTksMzIuMDU5LDAsMCwxLDEzLjcyMSwxOC4xMUw5LDE4LjE3OVY0NS4zMzNjMCw2LjIzOCwzLjU3MSwxMy4yMzQsOS44MTgsMTkuMTk0YTM5LjI0MiwzOS4yNDIsMCwwLDAsOC42NTksNi4zMjEsMTguOTc5LDE4Ljk3OSwwLDAsMCw4LjUxNywyLjQ4MSwxOS4yMTcsMTkuMjE3LDAsMCwwLDguNTcxLTIuNTIsMzkuMjY3LDM5LjI2NywwLDAsMCw4LjYtNi4yODIsMzYuOTI0LDM2LjkyNCwwLDAsMCw2Ljg5My04LjgwNywyMS43MDcsMjEuNzA3LDAsMCwwLDIuOTI1LTEwLjM5MmwtLjAxLTI0Ljg4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ljk5MSAtNS45OTEpIi8+CiAgPHBhdGggaWQ9Iui3r+W+hC0zIiBkYXRhLW5hbWU9Iui3r+W+hCIgY2xhc3M9ImNscy0zIiBkPSJNODUuNDU2LDIwLjQzOXYtMi4yNkw4MC43NSwxOC4xMWgtLjAxNWEzMy4zNywzMy4zNywwLDAsMS0xMC4zNDItMi4yNDYsNDYuODE5LDQ2LjgxOSwwLDAsMS05LjA4LTQuODA5TDU4LjQ2Miw5bC4wMTUsNjQuMzI4czUuNDMtLjg3MSw4LjU3MS0yLjUyYTM5LjI2NywzOS4yNjcsMCwwLDAsOC42LTYuMjgyQTM2LjkyNCwzNi45MjQsMCwwLDAsODIuNTQsNTUuNzJhMjEuNzA3LDIxLjcwNywwLDAsMCwyLjkyNS0xMC4zOTJsLS4wMS0yNC44ODRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjguNDc0IC01Ljk5MSkiLz4KICA8ZyBpZD0i5oSf5Y+55Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNy41NjIgMjQpIj4KICAgIDxwYXRoIGlkPSLlvaLnirYiIGNsYXNzPSJjbHMtNCIgZD0iTTAsMEg0LjUxNUw0LjAwNiwxNS43NTJIMy40MzJ2LjU3NWgtMi4zdi0uNDZILjU2M1pNLjEyMiwyMC41MzlBMi4zNzcsMi4zNzcsMCwxLDAsMi41LDE4LjE1OSwyLjM3OSwyLjM3OSwwLDAsMCwuMTIyLDIwLjUzOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8L2c+Cjwvc3ZnPgo=" alt="">
                        </div>
                    </header>
                    <div class="identity">
                        <div class="tab">
                            <button class="active">{{$t("transferLog.personal_certification")}}</button>
                        </div>
                        <div class="identity-content">
                            <div class="basic">
                                <div class="basic-content">
                                    <div class="left">
                                        <div class="header">
                                            <span>{{$t("accountSet.basic_authentication")}}</span>
                                        </div>
                                        <p>
                                            <span>{{$t("accountSet.basic_authentication")}}</span>
                                            <span>{{$t("transferLog.basic_authentication_1")}}</span>
                                            <span>{{$t("transferLog.basic_authentication_2")}}</span>
                                        </p>
                                    </div>
                                    <div class="right">
                                        <button type="button" class="el-button bk-btn el-button--default" v-if="review_status == 0" @click="commonConfirm">
                                            <span>{{$t("accountSet.go_to_authentication")}}</span>
                                        </button>
                                        <button type="button" class="el-button bk-btn el-button--default" v-if="review_status == 1">
                                            <span>{{$t("accountSet.under_review")}}</span>
                                        </button>
                                        <button type="button" class="el-button bk-btn el-button--default" v-if="review_status == 2">
                                            <span style="color: rgb(27, 179, 6);">{{$t("accountSet.audited")}}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="basic senior">
                                <div class="basic-content">
                                    <div class="left">
                                        <div class="header">
                                            <span :data-after='$t("transferLog.recommend")'>{{$t("transferLog.advanced_real_name_authentication")}}</span> 
                                            <i>{{$t("transferLog.recommend")}}</i>
                                        </div>
                                        <p>
                                            <span style="padding-right: 48px;">{{$t("transferLog.desc_1")}}</span> 
                                            <span>{{$t("transferLog.desc_2")}}</span>
                                        </p>
                                    </div>
                                    <div class="right">
                                        <button type="button" class="el-button bk-btn el-button--default" disabled v-if="review_status < 2">
                                            <span>{{$t("accountSet.go_to_authentication")}}</span>
                                        </button>
                                        <button type="button" class="el-button bk-btn el-button--default" v-if="0 == advanced_review_status && review_status >= 2" @click="confirm">
                                            <span>{{$t("accountSet.go_to_authentication")}}</span>
                                        </button>
                                        <button type="button" class="el-button bk-btn el-button--default" v-if="1 == advanced_review_status && review_status >= 2">
                                            <span>{{$t("accountSet.under_review")}}</span>
                                        </button>
                                        <button type="button" class="el-button bk-btn el-button--default" v-if="advanced_review_status >= 2 && review_status >= 2">
                                            <span style="color: rgb(27, 179, 6);">{{$t("accountSet.audited")}}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tip">
                        <div class="tipInfo" style="height: 50px;">
                            <p>{{$t("bonus.not_certified")}}</p>
                            <p>{{$t("accountSet.basic_authentication")}}</p>
                            <p>{{$t("accountSet.advanced_authentication")}}</p>
                        </div>
                        <div class="tipInfo" style="height: 50px;">
                            <p>{{$t("transferLog.tip_1_1")}}</p>
                            <p>{{$t("transferLog.tip_1_2")}}</p>
                            <p>{{$t("transferLog.tip_1_3")}}</p>
                        </div>
                        <div class="tipInfo" style="height: 50px;">
                            <p>{{$t("transferLog.tip_2_1")}}</p>
                            <p>{{$t("transferLog.tip_2_2")}}</p>
                            <p>{{$t("transferLog.tip_2_3")}}</p>
                        </div>
                        <div class="tipInfo" style="height: 50px;">
                            <p>{{$t("transferLog.tip_3_1")}}</p>
                            <p>{{$t("transferLog.tip_3_2")}}</p>
                            <p></p>
                        </div>
                    </div>
                    <div class="basicDialog">
                        <el-dialog
                            :title='$t("accountSet.basic_authentication")'
                            :visible.sync="showCommonFlag"
                            class="cancel-dialog upload-dialog"
                            width="700px"
                            :before-close="handleClose">
                            <div class="info-tip">
                                <p>{{$t("transferLog.personal_information")}}</p>
                                <p>{{$t("transferLog.personal_information_desc")}}</p>
                            </div>
                            <el-form>
                                <el-form-item :label='$t("transferLog.select_nationality")'>
                                    <el-select v-model="gj">
                                        <el-option v-for="(item,index) in deviceIdList" :key="index" :label="item.countryName" :value="item.countryName">
                                            <span style="display: table-cell;vertical-align:middle;">
                                                <img style="vertical-align:middle;width:24px;height:100%" :src="item.countryImage">
                                                <span class="ml10" style="vertical-align:middle;">{{item.countryName}}</span>
                                            </span>
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item :label='$t("transferLog.type_of_certificate")'>
                                    <el-select v-model="id_type">
                                        <el-option :label='$t("transferLog.id_card")' value="0">
                                        </el-option>
                                        <el-option :label='$t("transferLog.passport")' value="1">
                                        </el-option>
                                        <el-option :label='$t("transferLog.driver_license")' value="2">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item :label='$t("transferLog.actual_name")'>
                                    <el-input v-model="name" :placeholder='$t("transferLog.input_placeholder")'></el-input>
                                </el-form-item>
                                <el-form-item :label='$t("transferLog.id_number")'>
                                    <el-input v-model="card_id" :placeholder='$t("transferLog.id_number_placeholder")'></el-input>
                                </el-form-item>
                            </el-form>
                            <el-button class="butbox mt30" style="width: 100%;" type="primary" @click="commonSubmit">{{$t("transferLog.start_authentication")}}</el-button>
                        </el-dialog>
                        <el-dialog
                            :title='$t("accountSet.advanced_authentication")'
                            :visible.sync="showFlag"
                            class="cancel-dialog"
                            width="700px">
                            <div class="info-tip">
                                <p>{{$t("transferLog.personal_information")}}</p>
                                <p>{{$t("transferLog.personal_information_desc")}}</p>
                            </div>
                            <form class="el-form el-form--label-top" style="display: flex;">
                                <div class="el-form-item" style="display: flex;">
                                    <div>
                                        <label for="countryId" class="el-form-item__label">{{$t("transferLog.id_front")}}</label>
                                        <div class="up_sty color-primary">
                                            <img v-if="front_pic" :src="$utils.img_url + front_pic" @click="upfile1" style="width: 230px;height: 150px;">
                                            <img v-else @click="upfile1" src="data:image/png;base64,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" alt="" class="up_sty__img">
                                            <input type="file" accept="image/*" name="file" ref="upfile1" @change="file1">
                                            <p class="mt10">{{$t("transferLog.click_to_upload")}}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="countryId" class="el-form-item__label">{{$t("transferLog.the_back_of_the_document")}}</label>
                                        <div class="up_sty color-primary">
                                            <img v-if="reverse_pic" @click="upfile2" :src="$utils.img_url + reverse_pic" style="width: 230px;height: 150px;">
                                            <img v-else @click="upfile2" src="data:image/png;base64,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">
                                            <input type="file" accept="image/*" name="file" ref="upfile2" @change="file2">
                                            <p class="mt10">{{$t("transferLog.click_to_upload")}}</p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <el-button class="butbox mt30" style="width: 100%;" type="primary" @click="submit">{{$t("transferLog.start_authentication")}}</el-button>
                        </el-dialog>
                    </div>
                </div>
            </div>
        </div>
        <indexFooter></indexFooter>
    </div>
</template>
<script>
import indexHeader from '@/view/indexHeader';
import indexFooter from "@/view/indexFooter";
import axios from "axios";
export default {
    name: 'transferLog',
    data(){
        return {
            id_type: "0",
            name: "",
            card_id: "",
            front_pic: "",
            reverse_pic: "",
            hand_pic: "",
            showFlag: !1,
            showCommonFlag: !1,
            token: "",
            review_status: 0,
            advanced_review_status: 0,
            gj: "Malaysia",
            deviceIdList: [{
                countryName: "Malaysia",
                countryNumber: "+60",
                countryImage: require("@/assets/images/Malaysia.png")
            }, {
                countryName: "Spain",
                countryNumber: "+34",
                countryImage: require("@/assets/images/Spain.png")
            }, {
                countryName: "Canada",
                countryNumber: "+1",
                countryImage: require("@/assets/images/Canada.png")
            }, {
                countryName: "United States of America",
                countryNumber: "+1",
                countryImage: require("@/assets/images/United States of America.png")
            }, {
                countryName: "Chile",
                countryNumber: "+56",
                countryImage: require("@/assets/images/Chile.png")
            }, {
                countryName: "Colombia",
                countryNumber: "+57",
                countryImage: require("@/assets/images/Colombia.png")
            }, {
                countryName: "Cuba",
                countryNumber: "+53",
                countryImage: require("@/assets/images/Cuba.png")
            }, {
                countryName: "Denmark",
                countryNumber: "+45",
                countryImage: require("@/assets/images/Denmark.png")
            }, {
                countryName: "Egypt",
                countryNumber: "+20",
                countryImage: require("@/assets/images/Egypt.png")
            }, {
                countryName: "Finland",
                countryNumber: "+358",
                countryImage: require("@/assets/images/Finland.png")
            }, {
                countryName: "France",
                countryNumber: "+33",
                countryImage: require("@/assets/images/France.png")
            }, {
                countryName: "French Guiana",
                countryNumber: "+594",
                countryImage: require("@/assets/images/French Guiana.png")
            }, {
                countryName: "Germany",
                countryNumber: "+49",
                countryImage: require("@/assets/images/Germany.png")
            }, {
                countryName: "Ghana",
                countryNumber: "+233",
                countryImage: require("@/assets/images/Ghana.png")
            }, {
                countryName: "Grenada",
                countryNumber: "+1473",
                countryImage: require("@/assets/images/Grenada.png")
            }, {
                countryName: "Greece",
                countryNumber: "+30",
                countryImage: require("@/assets/images/Greece.png")
            }, {
                countryName: "Guam",
                countryNumber: "+1671",
                countryImage: require("@/assets/images/Guam.png")
            }, {
                countryName: "Honduras",
                countryNumber: "+504",
                countryImage: require("@/assets/images/Honduras.png")
            }, {
                countryName: "Hongkong",
                countryNumber: "+852",
                countryImage: require("@/assets/images/Hongkong.png")
            }, {
                countryName: "India",
                countryNumber: "+91",
                countryImage: require("@/assets/images/India.png")
            }, {
                countryName: "Iraq",
                countryNumber: "+964",
                countryImage: require("@/assets/images/Iraq.png")
            }, {
                countryName: "Iran",
                countryNumber: "+98",
                countryImage: require("@/assets/images/Iran.png")
            }, {
                countryName: "Ireland",
                countryNumber: "+353",
                countryImage: require("@/assets/images/Ireland.png")
            }, {
                countryName: "Israel",
                countryNumber: "+972",
                countryImage: require("@/assets/images/Israel.png")
            }, {
                countryName: "Italy",
                countryNumber: "+39",
                countryImage: require("@/assets/images/Italy.png")
            }, {
                countryName: "Jamaica",
                countryNumber: "+1876",
                countryImage: require("@/assets/images/Jamaica.png")
            }, {
                countryName: "Japan",
                countryNumber: "+81",
                countryImage: require("@/assets/images/Japan.png")
            }, {
                countryName: "Kampuchea(Cambodia)",
                countryNumber: "+855",
                countryImage: require("@/assets/images/Kampuchea(Cambodia).png")
            }, {
                countryName: "Kazakstan",
                countryNumber: "+7",
                countryImage: require("@/assets/images/Kazakstan.png")
            }, {
                countryName: "Russia",
                countryNumber: "+7",
                countryImage: require("@/assets/images/Russia.png")
            }, {
                countryName: "Korea",
                countryNumber: "+82",
                countryImage: require("@/assets/images/Korea.png")
            }, {
                countryName: "Macao",
                countryNumber: "+853",
                countryImage: require("@/assets/images/Macao.png")
            }, {
                countryName: "Netherlands",
                countryNumber: "+31",
                countryImage: require("@/assets/images/Netherlands.png")
            }, {
                countryName: "New Zealand",
                countryNumber: "+64",
                countryImage: require("@/assets/images/New Zealand.png")
            }, {
                countryName: "Norway",
                countryNumber: "+47",
                countryImage: require("@/assets/images/Norway.png")
            }, {
                countryName: "Pakistan",
                countryNumber: "+92",
                countryImage: require("@/assets/images/Pakistan.png")
            }, {
                countryName: "Poland",
                countryNumber: "+48",
                countryImage: require("@/assets/images/Poland.png")
            }, {
                countryName: "Portugal",
                countryNumber: "+351",
                countryImage: require("@/assets/images/Portugal.png")
            }, {
                countryName: "Philippines",
                countryNumber: "+51",
                countryImage: require("@/assets/images/Philippines.png")
            }, {
                countryName: "Peru",
                countryNumber: "+51",
                countryImage: require("@/assets/images/Peru.png")
            }, {
                countryName: "Sweden",
                countryNumber: "+46",
                countryImage: require("@/assets/images/Sweden.png")
            }, {
                countryName: "Mexico",
                countryNumber: "+52",
                countryImage: require("@/assets/images/Mexico.png")
            }, {
                countryName: "Maldives",
                countryNumber: "+960",
                countryImage: require("@/assets/images/Maldives.png")
            }, {
                countryName: "Paraguay",
                countryNumber: "+595",
                countryImage: require("@/assets/images/Paraguay.png")
            }, {
                countryName: "Saudi Arabia",
                countryNumber: "+966",
                countryImage: require("@/assets/images/Saudi Arabia.png")
            }, {
                countryName: "Suriname",
                countryNumber: "+597",
                countryImage: require("@/assets/images/Suriname.png")
            }, {
                countryName: "Thailand",
                countryNumber: "+66",
                countryImage: require("@/assets/images/Thailand.png")
            }, {
                countryName: "United Arab Emirates",
                countryNumber: "+971",
                countryImage: require("@/assets/images/United Arab Emirates.png")
            }, {
                countryName: "United Kingdom",
                countryNumber: "+44",
                countryImage: require("@/assets/images/United Kingdom.png")
            }, {
                countryName: "Taiwan",
                countryNumber: "+886",
                countryImage: require("@/assets/images/Taiwan.png")
            }, {
                countryName: "Switzerland",
                countryNumber: "+41",
                countryImage: require("@/assets/images/Switzerland.png")
            }]
        }
    },
    components: {
      indexHeader,
      indexFooter
    },
    filters: {
        toFixeds: function(value) {
        value = Number(value);
        return value.toFixed(2);
        }
    },
    created(){
        this.token = localStorage.getItem("token") || ""
    },
    mounted(){
        this.init();
    },
    methods:{
        submit() {
            if (!this.front_pic)
                return layer.msg(this.$t("transferLog.upload_tip")),
                !1;
            if (!this.reverse_pic)
                return layer.msg(this.$t("transferLog.upload_tip_2")),
                !1;
            let t = this;
            this.$http({
                url: "/api/user/real",
                method: "post",
                data: {
                    front_pic: t.front_pic,
                    reverse_pic: t.reverse_pic,
                    hand_pic: t.hand_pic,
                    real_type: 2,
                    lang: window.localStorage.getItem("lang") || "en"
                },
                headers: {
                    Authorization: this.token
                }
            }).then(e=>{
                layer.msg(e.data.message),
                t.showFlag = !1,
                t.init()
            }
            )
        },
		upfile1(){
			this.$refs.upfile1.click();
		},
		upfile2(){
			this.$refs.upfile2.click();
		},
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
		  axios.post("/api/upload_new", formData, {
		    headers: {"Content-Type": "multipart/form-data"}
		  }).then(t=>{
		        let a = t.data;
		        "ok" == a.type ? that.front_pic = a.message : layer.msg(a.message)
		    }
		    )
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
		  axios.post("/api/upload_new", formData, {
		    headers: {"Content-Type": "multipart/form-data"}
		  }).then(t=>{
		        let a = t.data;
		        "ok" == a.type ? that.reverse_pic = a.message : layer.msg(a.message)
		    }
		    )
		},
        commonSubmit() {
            if (!this.id_type)
                return layer.msg(this.$t("transferLog.please_select_a_document_type")),
                !1;
            if (!this.name)
                return layer.msg(this.$t("transferLog.name_tip")),
                !1;
            if (!this.card_id)
                return layer.msg(this.$t("transferLog.id_number_tip")),
                !1;
            if (!this.gj)
                return layer.msg(this.$t("transferLog.nation_tip")),
                !1;
            let t = this;
            this.$http({
                url: "/api/user/real",
                method: "post",
                data: {
                    id_type: t.id_type,
                    name: t.name,
                    card_id: t.card_id,
                    country: t.gj,
                    real_type: 1,
                    lang: window.localStorage.getItem("lang") || "en"
                },
                headers: {
                    Authorization: this.token
                }
            }).then(e=>{
                layer.msg(e.data.message),
                t.showCommonFlag = !1,
                t.init()
            }
            )
        },
        commonConfirm() {
            this.showCommonFlag = !0
        },
        confirm() {
            this.showFlag = !0
        },
        handleClose() {
            this.showFlag = !1,
            this.showCommonFlag = !1
        },
        init() {
            var t = this;
            this.$http({
                url: "/api/real/state?lang=" + window.localStorage.getItem("lang") || !1,
                method: "get",
                data: {},
                headers: {
                    Authorization: this.token
                }
            }).then(e=>{
                t.review_status = e.data.message.review_status,
                t.advanced_review_status = e.data.message.advanced_review_status
            }
            )
        }
    }
}
</script>
<style scoped>

.ovf-ellipsis,.ovf-hidden {
    overflow: hidden
}

.user-main-wrap {
    width: 1200px;
    margin: 40px auto;
    text-align: left;
    color: #333
}

.user-main-wrap.newAccount {
    width: 100%;
    margin: 0;
    background: #f7f7fa
}

.user-main-wrap .content-wrap {
    margin-left: 6px;
    width: 994px;
    background-color: #fff
}

.float-left {
    float: left
}

.user-main-wrap .content-wrap.noLeft {
    width: 100%;
    margin-left: 0;
    margin-bottom: 40px;
    background: transparent
}

.user-identity-page {
    width: 1200px;
    margin: 40px auto 0
}

article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {
    display: block
}

.user-identity-page header {
    padding: 30px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0
}

.user-identity-page header .title p {
    font-size: 28px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 10px
}

.user-identity-page header .title p:last-child {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #919191;
    margin-bottom: 0
}

.user-identity-page header .imgTip {
    width: 60px
}

.user-identity-page .identity {
    padding: 0;
    overflow: hidden
}

.user-identity-page .identity .tab {
    height: 50px;
    background-color: rgba(247,247,250,.5)
}

.user-identity-page .identity .tab button {
    border: none;
    background: none;
    min-width: 144px;
    padding: 0 10px;
    height: 100%;
    font-size: 16px;
    font-weight: 700;
    color: #333;
    cursor: pointer
}

.user-identity-page .identity .tab button.active {
    background-color: #fff;
    border-top: 2px solid #ec6d56;
    color: #ec6d56
}

.user-identity-page .identity .identity-content {
    padding: 40px
}

.user-identity-page .identity .identity-content .basic {
    padding-bottom: 36px;
    border-bottom: 1px solid hsla(0,0%,56.9%,.1)
}

.user-identity-page .identity .identity-content .basic .basic-content {
    display: flex;
    align-items: center;
    justify-content: space-between
}

.user-identity-page .identity .identity-content .basic .left .header {
    height: 40px;
    overflow: hidden
}

.user-identity-page .identity .identity-content .basic .left .header span {
    line-height: 28px;
    font-size: 20px;
    font-weight: 700;
    height: 28px;
    float: left
}

.user-identity-page .identity .identity-content .basic .left p {
    padding-top: 24px;
    padding-left: 32px
}

.user-identity-page .identity .identity-content .basic .left p:last-child {
    min-height: 28px;
    overflow: hidden;
    box-sizing: content-box
}

.user-identity-page .identity .identity-content .basic .left p span {
    font-size: 14px;
    font-weight: 500;
    line-height: 28px;
    float: left;
    padding-right: 73px;
    position: relative
}

.user-identity-page .identity .identity-content .basic .left p span:before {
    content: "";
    position: absolute;
    left: -32px;
    top: 0;
    width: 28px;
    height: 28px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABOhJREFUSEvtll1sFFUUx//nzk5nt4uCNCHAgykEIkWJEfGDhJLoQxMSQUK0YNJAQApF2N22sDudIjK10v1qLTtrAjaBkEgIqRgjkKiRaAIG/GoifQAbRQhEPorsA9h2t525xyy12LTdTftCfHAe555zfvd/7v+eGcJDfugh8/A/8EHHTdMUHs/kJ1goS1hiLogeIXAKEl3MzmnDqLkynuMZV0vDMauMCLsBvMBMN0HcTYwUQNMBng5CIRinWHCDsSPQkQ+cF2iaHxZqhZkkEa0B+KRkfHD7hv1Ta2tt31DR3butRz2TUMogA8zPgfk9Qw805oLmBGZhbm//MTAWMtkVRrDmVL6dMzNFm5MbAbQyc5sRCtSOFZ8TGI5ZB4hoLTOfM0L+pflg0WhykRT8GkCvEjCXmR1m6PW6f+/IvDGBg2dGxyVzXBAM6XB9f3rgoGnu+HNkgXDU2k6CIsx8Aczt0sZnioqXQBQeSNOCXbt8l4fnjAJm3ej2Tj0D0NW6oO+NaNzSmSnbHpXBJ+A4DYZR83u2SFPUWiUEjgjC+uLHp7eXl5c72femaRZohVN/JOBMXci/LS+wqcmaL1TqZKDMCPq+zga/G255RnWppwF8mulJbTBN086+D0cTOyGowgj6S0YrT1aRQIOC9OxgMNgztD5KYSRuVQLUBuBoxw+nK+aXlno9aXwL0M10752Vpmn2ZpMjzXuXgsUXLLnZ0APvjAKG359DLvVXW/Lit3X/d7mB0UQLC7GCmGdIZh8I8wi02kXq88Hglu6hxEg8WQGg5db1geKha2JZltabRhvAMwByAXgRxBvqgoGjOYHhWGIfSMyBlOdI0FYeTIwZQd+e4SoiMWs/E0q7FXtRa+3gvYzErC1MiIBxjJgcCF4jJW+t1wMf5VYYs/YAVFbgGljabyttUtJZl+BTjkOTMpnUedM0pWm2TtG8rk4CX5NSHiRJPxtGoOP+ZkFLLv+mLZxZ0ut128olZlllhKo/zglsiibWCUHNJPtm67p+7745YtZhIqwGUyex3KHrgW/i8eQsh9EO4hIwDteF/FXhWHIfEa+TA1jELF1KgXLegfP0zmB1Z+6WhluLyeW6IJjKQ6FtJ7MWdxcWXWTw90TEYKxkQuK6xg1FKU3RPOl6EC23M1iluqlLSmdzvV59oClm1Qug8o9rmJdM+jM5gYOKEicAchshXxlAHIklokxiZabnzgLNU7SRBCcg+Wy6z72swNOfHeyH2LaXCVX5yradSjuDz7VC5RdkR9wIB489aZoTz0LSWSJ6sy7oOxyNJfcx8VP9jl2lKuqXAN9zJNZn7R6+b3/XRQB3IakjPW3SCu323QiRWF2gDDxZW1ubynvxhxbD0cQuEmK7HODlQqUkS3kcoMdAeNnrxmK/3383G9ve3q5cunLjE2LqTveltmmeKT4Syh4pnfJ6vfr4uGbpv1ArQQKVADIsOQmitWAkDd3fMrzQpk2b1JkzS7yahxpIKJtZympDD+yf0NfiATS8t4ZcopEZfxGhiIFlmZ5UdnLYmjbNI5XMLAXKKwy8lTXVP6YZpSyvaUburLExOUvVeDuIXgd4GjNuEUGCqRCEyWC+IoEjbpfdMvLMJtTSkcHxeNybkdoCl+BiKaGS5LR0oevmVdE13PpjtXJCCvMVmOjauH6iJlr0P6Xwb26BOjsb8V5EAAAAAElFTkSuQmCC) 100% no-repeat
}

.user-identity-page .identity .identity-content .basic .left p span:nth-child(2):before {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAutJREFUSEvtlU1IVFEUx//njub4sXAxUIGLFgUFRS1slYFSm6jIFpEQLQKDQt9g1vsYcXEjc2beWOY8pRa5iFoUbYRcuBAqCAwK3AS5qJ3Rpg8hnZ76vCceIo0603umuIju7t1z7v/3zsc9l7DJizaZh//AZRlPp/uPKFIWEWqZKUrAOxDfd2e+DUopvTDlCZ3SlJ29AaJOgKcAGgGRC+Y6ADuZeXQ29+2klNINgoYCpjJ9pwAxBMaQm/MuSHllyheWUpaUVcauEjjFQH9C17SNAdrOOICYm/u6q1AUqUz2KTMaZ3Nz26W89uVP0MAIpeytjlaWfAfQY+maXkis275zQlDkmVI43WFqQ+sD2va2KJV/JkCauna9kFgy49QT8BxYOG/pbY/WBfQPJzPOD2KMWoZ2upBYyu5rAYl+T+Fgp6m9XTcwbTt3Fbg5Ahw1jPjLfEHpZwDlb5gwndC1PRvSNFL2xKIVZeNMqIZiKaCGPQ9TojRSD0IXMe+AUg2W1fZqQ4C+SHe3s1uU8hhA1StFBaPJMLQnQTDfHqJLB6qiFQsmCJcAii2JMsMlQtT/ZmaPiB8LJmkY8Y9/XcPUrex+LGAYRDUAXjDzA8EYNc345OLF763eUkF1giJnwdzERK4A2kxdGywGLRqhbTuHFggjBPaUogtB9+tmpm9vhMVDEA6AqdUyWgcKQQsC0+lsDQuMA+SpeTR0dGgTYeojpZ9+9RACE9Y1LREa6I8qMBqJcdg046/DwML6rIpwsRvxnhn3EoZ2OaxQMpM1if3G+r2YyIM3fyyRaP+wtLsKmLKdJAgWe/O78h2DwOmegXPMqnkZEOwKhYtLTVbwWqTs7BgTVSV0bV8QZNnEkTJaVRXbmr8nRMRrb7/8KX+vUISfQfzK0uNn1gJMZrIOgVpXnlk5X1cBk7bzkwj9xZ6iYj/Rlb5dWypKj+fbFcidnaEBKVumi9bQb5q5OTGZ77SWSIN8A0dbkMBa7f8+8BeXnCssdk5ovgAAAABJRU5ErkJggg==)
}

.user-identity-page .identity .identity-content .basic .left p span:nth-child(3):before {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAdNJREFUSEvtlrFLG2EYh3/v5fDSKCjq0CFDCg4ODnaugm6uUgSXgmAXsWcVvMuli18pksudkHpZBC2l1KFLwUHQzQz+AY5uEewgKIggYkhyb7nASdA24ZIYRHLbx3v8nvuee3m/j9Dih1rMQxvYdOMPlJqWkwNRrImkrKGp437eQ6CdYQBZArKNQhkYA3PM0BdeVQUSIOKa+rlRYMrOrDDzTBvI95VaVuZNiXgLjAECdm9vQu+EmL+upbwupUIIOdzZd0rgI5f5N5H0hRk7CV2d84Cm+XUEkjRbhrvuN8NYPPQ/pC5gMpmOkSznUCqNemGm7aQBGvZbPWmtTxBJcQ/C7KYS+sf9hoDlHUb6ciA+AfMvEAkA24a2sPQ4Si3rpUIvDggY9AHM2PCVrtrrQzKkt37NBYoJTV311nUpTdnOHoMGSlycKtxcHSuR3mkCNkmS3seXP/xIWs4MEX2v3K2hqeWBEhgo1tb6w6ycuy4mP8XVHT/UtDM/AUQrR9a/9AYHCiErSnc0n7/6I4Qo+qFCpHsQKYSFrp9V+4+BgbWaolb96QJbfFo4lwD11NIVoH5kaOrr/x5PXmcqhVBXgMCqr+bzHReVc7d9iWqW2buc56/0L3dPNCxniu2qAAAAAElFTkSuQmCC)
}

.user-identity-page .identity .identity-content .basic .left p span:last-child:before {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAqNJREFUSEvtlT1rFFEUht9zM6uiFhY2osUGFWMhRLDQLgF/QEIiKAhqJWJmiGHnY1XICCG7sysx7CqWxkoLQ/YHCGkUAlqki6JiJNpZWIiIublH7n7EZXc+diOkylQDc859znvmPfcQtvmhbeZhB7jZ8SCYPaGEGCLGWRAdqH5g/sGEJaFUxXXH33fyexJbqkFMIg+ioTpkFUSr9fc0iNL194oAMo5jfYoDxwJzhfIICHMElgSaVVI+zWZv1WD1J5d7kBaGcUUBmRoYV7OOOR8FjQRWYeDnBFom5mHXtb7GVR4EpSNMtMDgfoAuRkFDgdPT5T5K4Q0x3v3+JQZ9/+bPBixfLF0Hk+855qHWAnz/0f49e9UiE/og109nsxMfW2NCgflCeQHEA6RwqlVZUCxPMuB7thmaq5UqQSvEeOk55nAiUKsTKawQ4Lu2ea81IQmo4xsxLNePt6psqzJXLLkEyrOUva0GaT4sSqGO0UYiw/jMYC9rW0Fz0W3AajvB/Z5j9YaZpBOFOi9fKK+BeMmzrQvxwGJ5UQd4tjn4X8CIc9oVdggUzAPNBUmQvO2Yr/+5ObzwrbT0DgNTYepJ8TnXtZZqLS2tgZDc0qD40GVwpGn0rO3ep8602X1jQ3re+KuaaWaOkZH6QCDPtcfiTZM0FnG3TeNbV2NRd9gCE84LxSeTrrS2Oe128PUBcVdbnMItX23VAQ9Ko0x4BtCyNIyhuxM3vsXBpmYeHzakrOgZJsYl17VehBorYQOMKkFPdIwA7vcQzWUyY1+acwqF0lEmutxYT0LxtSiYzktcwFXH9aSKIFQXMDOvUn0BM3OaNhcwKryxbodtiNibJkqxBgtj1whDjwQdrMXxd4J4q+Sf+SRQ49xEhZ2MQTcxO8BuutVR7F+2slgsElZ3kAAAAABJRU5ErkJggg==)
}

.bk-btn,.bk-btn:active,.bk-btn:focus,.bk-btn:hover {
    background: #e3eafb!important;
    color: #276cff
}

.user-identity-page .identity .identity-content .basic .right .bk-btn {
    padding: 12px 10px;
    min-width: 100px;
    font-size: 16px;
    border-radius: 4px;
    font-weight: 700;
    border: none;
    float: left
}

.user-identity-page .identity .identity-content .senior .left .header i {
    font-style: normal;
    padding: 0 8px;
    background-color: rgba(236,109,86,.1);
    color: #ec6d56;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    float: left;
    height: 18px;
    margin: 5px 0 0 8px
}

.user-identity-page .identity,.user-identity-page .tip,.user-identity-page header {
    background-color: #fff;
    border-radius: 8px;
    margin-top: 10px
}

.user-identity-page .tip {
    padding: 40px;
    overflow: hidden
}

.user-identity-page .tip .tipInfo {
    overflow: hidden
}

.user-identity-page .tip .tipInfo p {
    width: 372px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #919191;
    box-sizing: border-box;
    padding: 14px 24px;
    height: inherit;
    min-height: 50px;
    border: 1px solid hsla(0,0%,56.9%,.1);
    border-right: none;
    border-bottom: none;
    float: left
}

.user-identity-page .tip .tipInfo:first-of-type p {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: #2d2e31;
    background-color: rgba(247,247,250,.5)
}

 .basicDialog .cancel-dialog {
    padding: 40px 45px 40px 41px
}

 .basicDialog .cancel-dialog .el-dialog {
    padding-top: 20px;
    padding-bottom: 20px
}

/depp/ .basicDialog .cancel-dialog .el-dialog__header {
    position: relative;
    height: 40px;
    line-height: 40px;
    padding: 0;
    background: transparent;
    text-align: left;
    font-size: 30px;
    font-weight: 700;
    color: #333;
    margin-top: 20px
}

 .basicDialog .cancel-dialog .el-dialog__header .el-dialog__title {
    font-size: 30px;
    line-height: 30px;
    font-weight: 700;
    color: #333
}

 .basicDialog .cancel-dialog .el-dialog__body {
    padding: 20px 20px 10px;
    color: #333
}

.basicDialog .cancel-dialog .info-tip p {
    font-weight: 700;
    line-height: 28px;
    color: #2d2e31;
    font-size: 20px
}

.basicDialog .cancel-dialog .info-tip p:last-child {
    margin-top: 10px;
    font-weight: 500;
    line-height: 20px;
    color: #333;
    font-size: 12px
}

.basicDialog .cancel-dialog .el-form {
    margin-top: 30px
}

.basicDialog .cancel-dialog .el-form .el-form-item__label {
    font-weight: 700;
    line-height: 20px;
    color: #2d2e31!important;
    padding-bottom: 0
}

.basicDialog .cancel-dialog .el-form .el-form-item .el-select {
    width: 100%;
    font-size: 18px;
    font-weight: 500
}

.el-form-item__content,.el-form-item__label {
    line-height: 32px
}

.basicDialog .cancel-dialog .el-form .el-form-item .el-input__inner {
    border: none;
    border-bottom: 1px solid #ddd;
    line-height: 57px;
    padding-left: 0
}

.basicDialog .cancel-dialog .el-form .el-form-item .el-input input,.basicDialog .cancel-dialog .el-form .el-form-item .el-select .el-input input {
    height: 57px
}

.basicDialog .cancel-dialog .el-form .el-form-item .el-input,.basicDialog .cancel-dialog .el-form .el-form-item .el-select {
    width: 100%;
    font-size: 18px;
    font-weight: 500
}

 .basicDialog .cancel-dialog .el-form .el-form-item .el-form-item__content .el-select input {
    border: none;
    border-bottom: 1px solid #ddd;
    line-height: 57px;
    padding-left: 0;
    font-size: 18px;
    margin-top: 10px
}

.up_sty {
    width: 320px;
    height: 192px;
    border-radius: 4px;
    text-align: center;
    padding-top: 20px;
    position: relative
}

.up_sty input {
    position: absolute;
    bottom: 10px;
    left: 20%;
    cursor: pointer;
    opacity: 0
}

.el-select-dropdown__item.hover,.el-select-dropdown__item.selected,.el-select-dropdown__item:hover {
    background: #f3f3f4!important
}
</style>
