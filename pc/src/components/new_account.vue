<template>
  <div class="box">
    <indexHeader></indexHeader>
    <div class="_flex-sb _page-main">
      <left></left>
      <router-view></router-view>
    </div>
    <indexFooter></indexFooter>
  </div>
</template>
<script>
import indexHeader from '@/view/indexHeader'
import indexFooter from "@/view/indexFooter";
import left from '@/view/accounts/left_account'

export default {
  name: 'account',
  data() {
    return {
      lang: '',
      currentIndex: 0,
    }
  },
  components: {
    indexHeader,
    left,
    indexFooter
  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
.box .account {
  width: 100%;
  margin: 0;
  padding-top:0;
  background-color:#181d25;
}

.topcontent {
  height: 60px;
  line-height: 60px;
  padding: 0 30px;
  margin: 0px 0;
  font-size: 18px;
  border-radius: 3px;
  background-color: #181d25;
}

.leftcontent {
  width: 220px;
  margin-right: 0px;
  height: 350px;
  border-radius: 10px;
  padding: 4px;
  float: left;
}

.rightcontent {
  width: 977px;
  margin-left: 223px;
  min-height: 1000px;
  border-radius:10px;
}
._flex-sb, ._flex {
  display: flex;
}
._flex-sb {
  justify-content: space-between;
}
._page-main {
  width: 100%;
  height: calc(100vh - 75px);
}
._page-main__content1 {
  width: calc(100% - 260px);
  height: 100%;
  color: #000;
  background-color: #f7f7fa;
}
._page-main__content1, ._page-main__page {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style>

