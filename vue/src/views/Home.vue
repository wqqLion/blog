<!--
 * @Descripttion: 
 * @version: 
 * @Author: wqq
 * @Date: 2020-07-03 15:13:36
 * @LastEditors: wqq
 * @LastEditTime: 2020-08-24 16:48:10
--> 
<template>
  <div class="home">
    <myHeader></myHeader>
    <div class="main">
      <el-scrollbar style="height:100%">
        <div class="main-hot">
          <div class="top-article">
            <newArticle></newArticle>
          </div>
          <div class="recommend-article bx">
            <div class="title">大家推荐</div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/header.vue'
import myHeader from "@/components/header.vue";
import newArticle from "@/components/newArticle";
export default {
  name: "Home",
  components: {
    myHeader,
    newArticle,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  background: #f6f6f6;
}
.main {
  height: calc(100% - 126px);
  padding: 0 100px;
}
.main-hot {
  margin-top: 20px;
  height: 346px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  padding: 20px 10px;
}
.top-article{
  height: 100%;
  width: 70%;
  float: left;
}
.recommend-article{
  float: left;
  width: 30%;
  .title{
    border-bottom: 1px solid rgb(230, 230, 230);
    padding-bottom: 20px;
  }
}
</style>
<style lang="less">
.main {
  .el-scrollbar {
    .el-scrollbar__wrap {
      overflow-x: hidden !important;
    }
  }
}
</style>