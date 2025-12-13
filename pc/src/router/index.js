import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import homeContent from '@/view/homeContent'
import dealCenter from '@/components/dealCenterV2'
import dealCenterOld from '@/components/dealCenter'
import fiatradCenter from '@/components/fiatradCenter'
import payOpts from '@/view/payOpts'
import userSetting from '@/components/userSetting'
import c2c from '@/components/c2c'
import c2cOrder from '@/view/c2c/c2cOrder'
import c2cRelease from '@/view/c2c/c2cRelease'
import c2cTrade from '@/view/c2c/c2cTrade'
import c2cDetail from '@/view/c2c/c2cDetail'
import leverdealCenter from '@/components/lever_dealCenter'
import leverdealCenterV2 from '@/components/leverDealCenterV2'
import login from '@/components/login'
import register from '@/components/register'
import account from '@/components/account'
import accountCenter from '@/view/accountCenter'
import accountEntrust from '@/view/accountEntrust'
import accountSet from '@/view/accountSet'
import authentication from '@/view/authentication'
import advanced from '@/view/advanced'
import payment from '@/view/payment'
import accountMessage from '@/view/accountMessage'
import setCash from '@/components/setCash'
import recharge from '@/view/recharge'
import rechargeMoney from '@/view/rechargeMoney'
import coinRecord from '@/view/coinRecord'
import noticeList from '@/components/noticeList'
import noticeDetail from '@/components/noticeDetail'
import aceite from '@/view/aceite'
import region from '@/view/region'
import chargeRecord from '@/view/chargeRecord'
import new_account from '@/components/new_account'
import finance from '@/view/accounts/finance'
import transfer from '@/view/accounts/transfer'
import lever from '@/view/accounts/lever'
import finanrec from '@/view/accounts/finanrec'
import manger from '@/view/accounts/lever_manger'
import legal from '@/view/accounts/legal'
import change from '@/view/accounts/change'
import fiat from '@/view/accounts/fiat'
import UOrder from '@/view/accounts/UOrder'
import legalAccount from '@/view/accounts/legalAccount'
import changeAccount from '@/view/accounts/changeAccount'
import transferLegal from '@/view/accounts/transferLegal'
import transferLog from '@/view/transfer_log'

import allTransaction from '@/view/all_transaction'
import leverTransactions from '@/view/lever_transactions'
import leverTransaction from '@/view/lever/lever_transaction'
import leverList from '@/view/lever/leverList'
import transferRecord from '@/view/lever/transferRecord'
import success from '@/view/success'
import quotation from '@/components/quotation'
import ForgetPwd from '@/components/ForgetPwd'  //忘记密码
import ResetPwd from '@/components/ResetPwd'  //重置密码密码
import withdraw_address from '@/view/accounts/withdraw_address'
import letransactions from '@/view/accounts/letransactions'
import leverRecord from '../view/lever/leverRecord.vue'
import bindEmail from '../view/bindEmail.vue'
import secondContract from "@/components/secondContract";
import Pledge from "@/components/pledge";
import iepnList from "@/components/iepnList";
import text from '@/view/text'
import marketQuotaion from '@/view/marketQuotaion'
import fastTransaction from '@/view/fastTransaction'
import creditCard from '@/view/creditCard'
import accountNewPage from '@/view/accountNewPage'
import defi from '@/view/defi'
import defidetail from '@/view/defidetail'
import earn from '@/view/earn'
import record from '@/view/record'
import structured_financial from '@/view/structured_financial'
import startup from '@/view/startup'
import startupDetail from '@/view/startupDetail'
import message from '@/view/message'
import download from '@/view/download'
import deposit from '@/view/deposit'
import withdrawDeposit from '@/view/withdrawDeposit'
import invitation from '@/view/invitation'
import transferSet from '@/view/transferSet'
import modifyPassword from '@/view/modifyPassword'
import setTransactionPassword from '@/view/setTransactionPassword'
import bonus from '@/view/bonus'
import bonusRecord from '@/view/bonusRecord'
import secondDealCenter from '@/components/secondDealCenter'





Vue.use(Router)
export default new Router({
    routes: [

        {
            path: '/',
            name: 'home',
            component: home,

            children: [
                {
                    path: '',
                    name: 'homeContent',
                    component: homeContent
                },
                // {
                //     path: '/match',
                //     component: () => import ('../components/match.vue')
                // },
                // {
                //     path: '/fiatradCenter',
                //     name: 'fiatradCenter',
                //     component: fiatradCenter
                // },
                // {
                //     path: '/userSetting',
                //     name: 'userSetting',
                //     component: userSetting,
                //     children: [
                //         {
                //             path: '',
                //             component: payOpts
                //         }
                //     ]
                // },
                // {
                //     path: '/c2c',
                //     name: 'c2c',
                //     component: c2c,
                //     children: []
                // },
                // {
                //     path: '/c2cOrder',
                //     name: 'c2cOrder',
                //     component: c2cOrder

                // },
                // {
                //     path: '/c2cRelease',
                //     name: 'c2cRelease',
                //     component: c2cRelease

                // },
                // {
                //     path: '/c2cTrade',
                //     name: 'c2cTrade',
                //     component: c2cTrade

                // },
                // {
                //     path: '/c2cDetail',
                //     name: 'c2cDetail',
                //     component: c2cDetail

                // },
                // {
                //     path: '/dealCenter',
                //     name: 'dealCenter',
                //     component: dealCenter
                // },
                // {
                //     path: '/dealCenterOld',
                //     name: 'dealCenterOld',
                //     component: dealCenterOld
                // },
                // {
                //     path: '/quotation',
                //     name: 'quotation',
                //     component: quotation
                // },
                // {
                //     path: '/secondDealCenterOld',
                //     name: 'secondContract',
                //     component: secondContract
                // },
                // {
                //     path: '/secondDealCenter',
                //     name: 'secondDealCenter',
                //     component: secondDealCenter
                // },
                // {
                //     path: '/leverdealCenter',
                //     name: 'leverdealCenter',
                //     component: leverdealCenterV2
                // },
                // {
                //     path: '/leverdealCenterOld',
                //     name: 'leverdealCenterOld',
                //     component: leverdealCenter
                // },
                // {
                //     path: '/allTransaction',
                //     name: 'allTransaction',
                //     component: allTransaction
                // },
                // {
                //     path: '/leverRecord',
                //     component: leverRecord
                // },
                // {
                //     path: '/bindEmail',
                //     component: bindEmail
                // },
                // {
                //     path: '/leverTransactions',
                //     name: 'leverTransactions',
                //     component: leverTransactions
                // },
                // {
                //     path: '/leverTransaction',
                //     name: 'leverTransaction',
                //     component: leverTransaction
                // },
                // {
                //     path: '/leverList',
                //     name: 'leverList',
                //     component: leverList
                // },
                // {
                //     path: '/transferRecord',
                //     name: 'transferRecord',
                //     component: transferRecord
                // },
                // {
                //     path: '/success',
                //     name: 'success',
                //     component: success
                // }

            ]
        },
		{
		    path: '/secondDealCenter',
		    name: 'secondDealCenter',
		    component: secondDealCenter
		},
		{
		    path: '/bindEmail',
		    component: bindEmail
		},
		{
		    path: '/dealCenter',
		    name: 'dealCenter',
		    component: dealCenter
		},
		{
		    path: '/leverdealCenter',
		    name: 'leverdealCenter',
		    component: leverdealCenterV2
		},
        {
            path: '/components/login',
            name: 'login',
            component: login
        },

        {
            path: '/forgetPwd',
            name: 'forgetPwd',
            component: ForgetPwd
        },
        {
            path: '/resetPwd',
            name: 'resetPwd',
            component: ResetPwd
        },
        {
            path: '/components/register',
            name: 'register',
            component: register
        },
        {
            path: '/noticeList',
            name: 'noticeList',
            component: noticeList
        },
        {
            path:'/upstart',
            name:'upStar',
            component: iepnList
        },
        {
            path: '/pledge',
            name: 'pledge',
            component: Pledge
        },
        {
            path: '/components/noticeDetail',
            name: 'noticeDetail',
            component: noticeDetail
        },
        {
            path: '/account',
            name: 'account',
            component: account,
            children: [
                {
                    path: '/accountCenter',
                    name: 'accountCenter',
                    component: accountCenter
                },
                {
                    path: '/accountEntrust',
                    name: 'accountEntrust',
                    component: accountEntrust
                },
                {
                    path: '/accountMessage',
                    name: 'accountMessage',
                    component: accountMessage
                },
                {
                    path: '/recharge',
                    name: 'recharge',
                    component: recharge
                },
                {
                    path: '/coinRecord',
                    name: 'coinRecord',
                    component: coinRecord
                },
                {
                    path: '/rechargeMoney',
                    name: 'rechargeMoney',
                    component: rechargeMoney
                },
                {
                    path: '/aceite',
                    name: 'aceite',
                    component: aceite
                },
                {
                    path: '/region',
                    name: 'region',
                    component: region
                },
                {
                    path: '/chargeRecord',
                    name: 'chargeRecord',
                    component: chargeRecord
                },
                {
                    path: '/userSetting',
                    name: 'userSetting',
                    component: payOpts,
                },
                {
                    path: '/authentication',
                    name: 'authentication',
                    component: authentication
                },
                {
                    path: '/advanced',
                    name: 'advanced',
                    component: advanced
                },
                {
                    path: '/payment',
                    name: 'payment',
                    component: payment
                }
            ]

        },
        {
            path: '/new_account',
            name: 'new_account',
            component: new_account,
            children: [
//jqk
                {
                    path: '/finance',
                    name: 'finance',
                    component: finance
                },
                {
                	path: '/letransactions',
		            name: 'letransactions',
		            component: letransactions,
		        },
                {
                    path: '/transfer',
                    name: 'transfer',
                    component: transfer
                },
                {
                    path: '/lever',
                    name: 'lever',
                    component: lever
                },
                {
                    path: '/change',
                    name: 'change',
                    component: change
                },
                {
                    path: '/fiat',
                    name: 'fiat',
                    component: fiat
                },
                {
                    path: '/UOrder',
                    name: 'UOrder',
                    component: UOrder
                },
                {
                    path: '/legal',
                    name: 'legal',
                    component: legal
                },
                {
                    path: '/legalAccount',
                    name: 'legalAccount',
                    component: legalAccount
                },
                {
                    path: '/changeAccount',
                    name: 'changeAccount',
                    component: changeAccount
                },
                {
                    path: '/transferLegal',
                    name: 'transferLegal',
                    component: transferLegal
                }


            ]

        },
        // 合约管理
        {

            path: '/lever_manger',
            name: 'manger',
            component: manger,
        },
        // 财务记录
        {

            path: '/finanrec',
            name: 'finanrec',
            component: finanrec,
        },
        // 地址管理
        {

            path: '/withdraw_address',
            name: 'withdraw_address',
            component: withdraw_address,
        },
        //123

        {
            path: '/setCash',
            name: 'setCash',
            component: setCash
        },
        {
            path: '/text',
            name: 'text',
            component: text
        },
        {
            path: '/marketQuotaion',
            name: 'marketQuotaion',
            component: marketQuotaion
        },
        {
            path: '/fastTransaction',
            name: 'fastTransaction',
            component: fastTransaction
        },
        {
            path: '/creditCard',
            name: 'creditCard',
            component: creditCard
        },
        {
            path: '/accountNewPage',
            name: 'accountNewPage',
            component: accountNewPage
        },
        {
            path: '/mx-defi',
            name: 'mx-defi',
            component: defi
        },
        {
            path: '/earn',
            name: 'earn',
            component: earn
        },
        {
            path: '/mx-defi-detail',
            name: 'mx-defi-detail',
            component: defidetail
        },
        {
            path: '/structured_financial',
            name: 'structured_financial',
            component: structured_financial
        },
        {
            path: '/record',
            name: 'record',
            component: record
        },
        {
            path: '/startup',
            name: 'startup',
            component: startup
        },
        {
            path: '/startupDetail',
            name: 'startupDetail',
            component: startupDetail
        },
        {
            path: '/message',
            name: 'message',
            component: message
        },
        {
            path: '/download',
            name: 'download',
            component: download
        },
        {
            path: '/deposit',
            name: 'deposit',
            component: deposit
        },
        {
            path: '/withdrawDeposit',
            name: 'withdrawDeposit',
            component: withdrawDeposit
        },
        {
            path: '/invitation',
            name: 'invitation',
            component: invitation
        },
        {
            path: '/transferSet',
            name: 'transferSet',
            component: transferSet
        },
        {
            path: '/transferLog',
            name: 'transferLog',
            component: transferLog
        },
        {
            path: '/accountSet',
            name: 'accountSet',
            component: accountSet
        },
        {
            path: '/modifyPassword',
            name: 'modifyPassword',
            component: modifyPassword
        },
        {
            path: '/setTransactionPassword',
            name: 'setTransactionPassword',
            component: setTransactionPassword
        },
        {
            path: '/bonus',
            name: 'bonus',
            component: bonus
        },
        {
            path: '/bonusRecord',
            name: 'bonusRecord',
            component: bonusRecord
        },
        
        
    ]
})
