<template>
    <div style="background: white !important;">
        <indexHeader></indexHeader>
        <div class="message">
            <div class="message-page">
                <div class="message-top">
                    <div class="message-top-title">消息中心</div>
                    <div class="message-top-tools">
                        <div class="message-top-tools-clear"></div>
                    </div>
                </div>
                <div class="line el-divider el-divider--horizontal">

                </div>
                <div class="message-center">
                    <div class="message-filter">
                        <ul>
                            <li :class="active_index == 0 ?'active':''" @click="change(0)">
                                <div>系统消息</div>
                            </li>
                            <li :class="active_index == 1 ?'active':''" @click="change(1)">
                                <div> 系统公告 </div>
                            </li>
                        </ul>
                    </div>
                    <div class="message-container">
                        <div id="message-container">
                            <div class="message-card" v-for="(item,index) in list" :key="index" @click="changeItem(item,index)">
                                <div class="message-card-top">
                                    <div :title="item.title" class="message-card-title">
                                        <div class="message-card-title-text">{{item.title}}</div>
                                    </div>
                                    <div class="message-card-time">
                                        <span>{{item.create_time}}</span>
                                        <span class="message-card-more">
                                            <i class="message-card-time-li message-down"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="message-card-msg"> {{item.abstract}} </div>
                                <div v-show="showDetail == index" v-html="item.content">
                                </div>
                            </div>
                        </div>
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
  
  export default {
    name: 'message',
    data() {
        return {
            list: [],
            active_index: 0,
            showDetail: -1
        }
    },
    components: {
      indexHeader,
      indexFooter
    },
    created() {
        localStorage.getItem("token") || (window.location.href = "/#/components/login"),
        this.getSystemList()
    },
    methods:{
        changeItem(t, e) {
            t.flag ? t.flag = !t.flag : t.flag = !0,
            this.showDetail === e ? this.showDetail = -1 : this.showDetail = e,
            this.getSystemDetail(t.id)
        },
        change(t) {
            this.active_index = t,
            0 == t && this.getSystemList(),
            1 == t && this.getNews()
        },
        getSystemDetail(t) {
            this.$http({
                url: "/api/mailMessage/detail?id=" + t,
                method: "get",
                headers: {
                    Authorization: localStorage.getItem("token")
                },
                data: {}
            }).then(t=>{}
            )
        },
        getSystemList() {
            var t = this;
            this.$http({
                url: "/api/mailMessage/getList",
                method: "get",
                data: {}
            }).then(e=>{
                t.list = e.data.message
            }
            )
        },
        getNews() {
            var t = this;
            this.$http.post("/api/news/list", {
                c_id: 4,
                lang: window.localStorage.getItem("lang")
            }).then(e=>{
                if ("ok" == e.data.type) {
                    var a = e.data.message.list;
                    a.length,
                    t.list = a
                }
            }
            )
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  

  .message {
    height: auto;
    background: #fff;
    color: #000
}

.message-page {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    padding-bottom: 40px
}

.message-page .message-top {
    display: flex;
    justify-content: space-between;
    padding-top: 40px
}

.message-page .message-top .message-top-title {
    font-size: 24px;
    height: 33px;
    font-weight: 600;
    color: #1e2329;
    line-height: 33px
}

.message-page .message-top .message-top-tools {
    height: 33px;
    width: 33px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center
}

.message-page .message-top .message-top-tools .message-top-tools-clear {
    height: 20px;
    width: 20px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzPjxzdHlsZT5AZm9udC1mYWNle2ZvbnQtZmFtaWx5OmZlZWRiYWNrLWljb25mb250O3NyYzp1cmwoLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4X3U2OXc4eWh4ZHUud29mZjI/dD0xNjMwMDMzNzU5OTQ0KSBmb3JtYXQoJnF1b3Q7d29mZjImcXVvdDspLHVybCgvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS53b2ZmP3Q9MTYzMDAzMzc1OTk0NCkgZm9ybWF0KCZxdW90O3dvZmYmcXVvdDspLHVybCgvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfdTY5dzh5aHhkdS50dGY/dD0xNjMwMDMzNzU5OTQ0KSBmb3JtYXQoJnF1b3Q7dHJ1ZXR5cGUmcXVvdDspfTwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00NDIuMDYgNzcuNjdoMTM5LjkzdjM0MS4zNUg0NDIuMDZ6IiBmaWxsPSIjOTI5QUE1Ii8+PHBhdGggZD0iTTg4MS43NjYgNDA1LjkxNHYxMzkuOTNIMTQyLjIzNHYtMTM5Ljkzem0wIDE5OS4xMTZ2MzQxLjNINzgzLjM2VjgxNy4xNTJoLTg1LjM1djEyOS4xMjZINTU1Ljc3NlY4MTcuMTUyaC04NS4yNDh2MTI5LjEyNkgzMjguMTkyVjgxNy4xNTJoLTg1LjN2MTI5LjEyNkgxNDIuMjM1VjYwNC45OGg3MzkuNTMyeiIgZmlsbD0iIzkyOUFBNSIvPjwvc3ZnPg==);
    background-repeat: no-repeat
}

.message-page .message-filter ul li {
    cursor: pointer;
    width: 200px;
    background: #f7f7fa;
    line-height: 70px;
    text-align: left;
    padding-left: 20px;
    font-size: 16px;
    font-weight: 500;
    color: #1e2329;
}
.message-page .message-filter ul .active {
    background: #003fe6;
    font-weight: 500;
    color: #fff;
    font-size: 16px;
}
.message-page .message-container {
    width: 950px;
    margin: 0 auto;
}
.message-page .message-container .message-card {
    margin-top: 20px;
    width: 950px;
    background: #fff;
    box-shadow: 0 2px 6px 0 ;
    border-radius: 8px;
    padding: 20px;
}
.message-page .message-container .message-card .message-card-top {
    display: flex;
    justify-content: space-between;
}
.message-page .message-container .message-card .message-card-top .message-card-title {
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.message-page .message-container .message-card .message-card-msg {
    margin: 20px 0;
    width: 900px;
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    cursor: pointer;
}
.message-page .message-center {
    display: flex;
}
</style>
  