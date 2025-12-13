import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import Util from './lib/utils.js'
import VueAxios from 'vue-axios'
import i18n from './lang/lang'
import Qs from 'qs'
import "@/assets/style/common.scss"
import VueSocketIO from 'vue-socket.io'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import VueCookies from 'vue-cookies'
import Antd from 'ant-design-vue';

Vue.use(Antd);
Vue.use(VueCookies)
Vue.use(VueAwesomeSwiper)


/**
 * 配置接口地址和socket地址http://39.109.123.37/13.212.220.19:8888/8558d7f1
 */
let ip = 'www.cosimok.com';
let sip = 'www.cosimok.com';
let [bus_host, socket_api, socket_path] = [`https://${ip}`, `wss://${sip}`, '/socket.io/'];

if (process.env.NODE_ENV === 'development') {
    bus_host = 'https://www.cosimok.com';
    socket_api = 'wss://' + sip + "";
    socket_path = '/wss/socket.io/';
} else {
    bus_host = '';
    socket_api = 'wss://' + document.domain + "";
    socket_path = '/wss/socket.io/';
}

Vue.use(new VueSocketIO({
    debug: false,
    connection: socket_api,
    options: {path: socket_path} //Optional options
}))

window.eventBus = new Vue();
Vue.config.productionTip = false


Axios.interceptors.request.use(function (config) {
    // layer.load(1);
    if (config.url.indexOf("transaction_in") < 0) {
        // layer.load(1);
    }
    config.url = bus_host + config.url;
    config.headers.lang = window.localStorage.getItem('lang');
	config.headers.Authorization = localStorage.getItem("token");
    if (config.url.indexOf('?') === -1) {
        config.url = config.url + '?_timespan=' + (new Date()).getTime()
    } else {
        config.url = config.url + '&_timespan=' + (new Date()).getTime()
    }
    // 在发送请求之前做些什么
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

let inmessage = false;
Axios.interceptors.response.use(function (response) {
    layer.closeAll('loading');
    if (response.data.type == '999') {
        // layer.msg('Please login');
        let now = router.currentRoute.name;
        // alert(now);
        let jump = true;
        if (now === 'login' || now == 'home' || now == 'homeContent' || now === 'register') {
            jump = false;
        }
        if (inmessage) {

        } else {
            inmessage = true;
            if (jump) {
                eventBus.$message.warning('Please login');
                setTimeout(() => {
                    inmessage = false;
                }, 3000);
            } else {
                inmessage = false;
            }
        }
        localStorage.removeItem('user_id');
        localStorage.removeItem('token');
        if (jump) {
            router.push("/components/login");
        }
    }
    return response
})

Vue.config.productionTip = false;

Axios.defaults.transformRequest = [(data) => {
    if (data instanceof FormData) {
        return data;
    }
    return Qs.stringify(data)
}]

Vue.use(VueAxios, Axios);
Vue.use(Util);

let bus = new Vue()
Vue.prototype.bus = bus


import ElementUI from 'element-ui';

Vue.use(ElementUI)


import 'element-ui/lib/theme-chalk/index.css'

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount("#app");
