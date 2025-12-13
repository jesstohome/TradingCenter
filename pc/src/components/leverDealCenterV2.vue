<template>
	
    <div class="home" style="background-color: rgb(34, 41, 52);">
		<indexHeader></indexHeader>
        <div class="main">
            <div class="main-top flex" style="padding-top: 6px;margin-top: 0;">
                <div class="tv-box lever">
                    <tv></tv>
                </div>
            </div>
            <div class="main-bottom flex">
                <div class="tran-box">
                    <leverTransactions></leverTransactions>
                </div>
            </div>
        </div>
		<indexFooter></indexFooter>
    </div>
	
  </template>
  
  <script>
import indexHeader from '@/view/indexHeader';
import indexFooter from '@/view/indexFooter';
  import notice from "@/view/lever/lever_noticeList";
  import deal from "@/view/deal";
  import exchange from "@/view/lever/lever_exchange";
  import market from "@/view/lever/lever_market";
  import trade from "@/view/lever/lever_trade";
  import chart from "@/view/chart";
  import entrust from "@/view/lever/lever_entrust";
  import hisentrust from "@/view/lever/lever_hisentrust";
  import detail from "@/view/detail";
  import currency from "@/view/currency";
  import complete from "@/view/complete";
  import leverTransaction from "@/view/lever/lever_transaction";
  import leverTransactions from "@/view/lever_transactions";
  
  import tv from '@/view/tv'
  
  export default {
    name: "leverDealCenterV2",
    components: {
		indexHeader,
		indexFooter,
      load: 1,
      notice,
      deal,
      tv,
      exchange,
      market,
      trade,
      chart,
      entrust,
      hisentrust,
      detail,
      currency,
      complete,
      leverTransaction,
      leverTransactions
    },
    data() {
      return {
      };
    },
    created() {
    },
    methods: {},
    mounted() {
  
    }
  };
  </script>
  
  <style lang="scss">

  </style>
  