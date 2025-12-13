<template>
  <div class="login" style="height: 100%;color:#555;">
    <indexHeader></indexHeader>
    <div style="width: 100%; height: 200px; background: url('static/imgs/lockbg2.jpg'); background-size: contain;">
      <h1 style="line-height: 200px; text-align: center; font-weight: bold; font-size: 28px; color: #fff;">
        {{ $t('lockrank.welcome') }}</h1>
    </div>
    <div class="contentBK" style=" width:100%; background:#181d25; padding: 20px 0; height:auto;">
      <div style="width: 1300px; min-height: 200px; background: #181d25; margin:0px auto;">
        <div v-for="(item,index) in products"
             style="width:630px; background: #fff; border-radius:5px; padding: 20px 20px;  margin:10px; float: left; height: auto;">
          <h2 style="font-weight: bold; line-height: 45px;">{{ item.currency_name }} {{
              $t('lockrank.lockformoney')
            }} {{ item.period }}{{ $t('lockrank.time') }}</h2>
          <div class="whiteinput" style="width: 100%;">
            <el-input readonly type="number" style="background: #fff;"
                      :placeholder="$t('lockrank.number') + item.min_single_limit+' - ' +item.max_single_limit"
                      v-model="item.number">
              <template slot="append">{{ item.currency_name }}</template>
            </el-input>
          </div>
          <div class="ft14" style="line-height: 40px;">{{ $t('lockrank.return') }}：<span class="green1 ft18 bold">{{
              item.min_daily_return_rate| numFilters(5)
            }}</span> {{ item.currency_name }}
          </div>

          <el-button :disabled="item.exists"  type="primary" @click="buyNow(index)" v-loading="item.loading" style="width: 100%;">
            {{ item.exists===false?$t('lockrank.buynow'):$t('lockrank.diyaed') }}
          </el-button>
        </div>
      </div>
      <div style="clear: both;"></div>
      <div style="width: 1280px; padding:10px; margin:0 auto; background: #fff;border-radius:5px; ">
        <h1 style="line-height: 50px; font-size: 18px; border-bottom: 1px solid #eee; text-indent: 1em;">
          {{ $t('lockrank.record') }}</h1>
        <div style="width:1200px; margin: 0 auto">
          <div class="flex">
            <el-table
                :data="tableData"
                v-loading="dataloading"
                :row-class-name="tableRowClassName"
                :empty-text="$t('nodata')"
                style="width: 100%">
              <el-table-column
                  prop="id"
                  :label="$t('lockrank.no')"
                  width="80">
              </el-table-column>

              <el-table-column
                  prop="show_add_time"
                  :label="$t('lockrank.starttime')"
                  width="190">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.show_add_time }}</span>
                  <br/>

                </template>
              </el-table-column>
              <el-table-column
                  prop="show_add_time"
                  :label="$t('lockrank.endtime')"
                  width="190">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.show_end_time }}</span>

                </template>
              </el-table-column>

              <el-table-column
                  prop="caution_money"
                  width="180"
                  :label="$t('lockrank.dayrate')"
              >
                <template slot-scope="scope">
                  <el-tag type="success" size="medium">{{ scope.row.caution_money|numFilters(4) }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column
                  prop="revenue"
                  :label="$t('lockrank.returned')"
                  width="180"
              >
                <template slot-scope="scope">
                  <el-tag type="success" size="medium">{{ scope.row.product.min_daily_return_rate|numFilters(4) }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column
                  prop="product.currency_name"
                  :label="$t('lockrank.currency')"
              >
                <template slot-scope="scope">
                  <div style="height: 50px; display: flex; align-items: center; ">
                    <el-badge :value="scope.row.product.period" class="item">
                      <el-tag effect="dark">{{ scope.row.product.currency_name }}</el-tag>
                    </el-badge>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                  prop="status"
                  :label="$t('lockrank.status')"
              >
                <template slot-scope="scope">
                  <el-tag :type="getStatusType(scope.row.status)">{{ getStatusText(scope.row.status) }}</el-tag>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <indexFooter></indexFooter>
  </div>
</template>
<script>
import indexHeader from '@/view/indexHeader'
import indexFooter from '@/view/indexFooter'

export default {
  name: "pledge",
  components: {indexHeader, indexFooter},
  filters: {
    numFilters: function (value, num) {
      if (!value) {
        return '0.0000'
      }
      value = (value - 0).toFixed(parseInt(num)).toString()
      return value.slice(0) + ' '
    }
  },
  data() {
    return {
      products: [],
      tableData: [],
      loading: null,
      dataloading: true
    }
  },
  created() {
    this.account_number = this.$route.query.account_number || ''
  },
  mounted() {
    // this.loading = this.$loading({
    //   lock: true,
    //   text: 'Loading',
    //   spinner: 'el-icon-loading',
    //   background: 'rgba(255, 255, 255, 0.85)'
    // });

    this.getMyProducts();

  },
  methods: {
    getStatusType(status) {
      if (status == 1) {
        return 'warning';
      } else {
        return 'success';
      }
    },
    getStatusText(status) {
      if (status == 1) {
        return this.$t('lockrank.status1');
      } else {
        return this.$t('lockrank.status2');
      }
    },
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    getProducts() {
      let that = this;
      this.$http({
        url: '/api/' + 'wealth/getProfitList',
        method: 'get',
        data: {},
      }).then(res => {
        if (res.data.type == 'ok') {
          let objs = res.data.message;
          let arr = [];
          objs.forEach(x => {
            x.total = 0;
            x.number = x.min_single_limit;
            x.loading = false;
            x.exists = false;

            let exists_arr = that.tableData.filter(y => {
              return y.wealth_product_id == x.id;
            });
            console.log(exists_arr);
            if (exists_arr.length > 0) {
              x.exists = true;
            }

            arr.push(x);
          });
          that.products = arr;
          that.loading.close();

        }
      }).catch(error => {

      })
    },
    getMyProducts() {
      let that = this;
      this.$http({
        url: '/api/' + 'wealth/getMyprofit',
        method: 'get',
        data: {},
        headers: {Authorization: localStorage.getItem("token")}
      }).then(res => {
        if (res.data.type == 'ok') {
          let objs = res.data.message.data;
          let arr = [];
          objs.forEach(x => {
            arr.push(x);
          });
          console.log(arr);
          that.tableData = arr;
          that.dataloading = false;

          that.getProducts();
        }
      }).catch(error => {

      })
    },
    buyNow(index) {
      let item = this.products[index];
      if (item.loading) {
        return;
      }
      // console.log(parseFloat(item.number)<parseFloat(item.min_single_limit));
      item.number = parseFloat(item.number);
      item.min_single_limit = parseFloat(item.min_single_limit);
      item.max_single_limit = parseFloat(item.max_single_limit);

      if (item.number > item.max_single_limit || item.number < item.min_single_limit) {
        this.$message(this.$t('lockrank.d1', {
          'number': item.min_single_limit,
          'number1': item.max_single_limit,
          'currency': item.currency_name
        }))
        return;
      }


      let that = this;
      this.$confirm(this.$t('lockrank.confirmbuy'), this.$t('account.notice'), {
        confirmButtonText: this.$t('lay.sure'),
        cancelButtonText: this.$t('lay.ceil'),
        type: 'warning'
      }).then(() => {

        item.loading = true;
        that.$http({
          url: '/api/' + 'wealth/buyProfit',
          method: 'post',
          data: item,
          headers: {Authorization: localStorage.getItem("token")}
        }).then(res => {
          item.loading = false;
          if (res.data.type == 'ok') {
            that.$message({
              message: res.data.message,
              type: 'success'
            });
            that.getMyProducts();
          } else {
            that.$message({
              message: res.data.message,
              type: 'warning'
            });
          }
        });

      }).catch(() => {
      });
    }
  },
}
</script>

<style lang="scss">

html, body {
  min-height: 100%;
}

.green1 {
  color: #038c0e;
}

.whiteinput {
  .el-input__inner {
    background: #fff !important;
    border: 1px solid #DCDFE6 !important;
    color: #666 !important;
  }
}

.content-wrap {
  background: url(../../static/imgs/bg_login.png) center bottom 316px repeat-x, -webkit-linear-gradient(top, #181d25, #181d25);
  background-position: top center;
}

.day .content-wrap {
  background: url(../../static/imgs/bg_login.png) center bottom 316px repeat-x, -webkit-linear-gradient(top, #fff, #fff);
}

.account {
  width: 1200px;
  margin: 0 auto;
  padding-top: 43px;
  min-height: 880px;
}

.main {
  position: relative;
}

.main_title {
  font-size: 36px;
  color: #c7cce6;
}

.day .main_title {
  color: #484f73;
}

.register-item {
  display: block;
  height: 22px;
  color: #61688a;
  font-size: 12px
}

.register-input {
  position: relative;
  margin-top: 20px
}

.input-box {
  position: relative;
  margin-top: 40px;
}

.input-main {
  width: 520px;
  min-height: 46px;
  border: 1px solid #4e5b85;
  padding: 0 20px;
  color: #c7cce6;
  font-size: 14px;
  border-radius: 3px;
  background-color: #181d25;
}

.day .input-main {
  border: 1px solid #d4d4d4;
  background-color: #ffffff;
  color: #999;
}

.icon {
  width: 48px;
  height: 48px;
  line-height: 48px;
  border-right: 1px solid #52688c;
  position: absolute;
  top: 0;
}

.login-btn {
  width: 420px;
  margin-top: 40px;
  background: #5697f4;
  font-size: 16px;
  border-radius: 4px;
  color: #fff;
  line-height: 48px;
  cursor: pointer;
}

.noaccount {
  color: #fff;
}

.register-button {
  width: 200px;
  display: inline-block;
  line-height: 46px;
  background-color: #00a4d8;
  /**#7a98f7;*/
  border-radius: 4px;
  color: #fff;
  border: none
}

.have-account {
  font-size: 14px;
  display: inline-block;
  margin-left: 30px
}

.right-tip {
  position: absolute;
  left: 620px;
  top: 70px;
  line-height: 24px;
  padding-right: 50px;
  margin-top: 10px;
  font-size: 14px;
  color: #61688a;
}
</style>
