<!--
 * @Descripttion: 
 * @version: 
 * @Author: wqq
 * @Date: 2020-07-03 15:17:15
 * @LastEditors: wqq
 * @LastEditTime: 2020-08-24 14:36:00
--> 
<template>
  <div class="header">
    <el-row>
      <el-col class="header-top">
        <span class="tuijian">
          <i class="el-icon-s-opportunity"></i>
          推荐
        </span>
        <span href></span>
        <span href>前端汇</span>
        <span href>友情链接</span>
        <span href>留言板</span>
        <span href="关于"></span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">资源下载</el-menu-item>
          <el-menu-item index="3">活动</el-menu-item>
          <el-menu-item index="4">社区</el-menu-item>
          <el-menu-item index="5">招聘</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6" style="line-height: 66px;">
        <el-input placeholder="搜索" v-model="searchKey">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="6" class="user-info">
        <span>
          <i class="el-icon-user-solid"></i>
          登录
        </span>
        <span>注册</span>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      activeIndex: "1",
      searchKey: ""
    };
  },
  components: {},
  methods: {
    handleSelect() {},
    getLastArticle() {
      this.$http
        .get("user?id=5", {
          method: "get",
        })
        .then(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        );
    }
  },
  mounted() {
    // this.getLastArticle();
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 106px;
  overflow: hidden;
  background: white;
}
.header-top {
  height: 30px;
  line-height: 30px;
  text-align: right;
  padding-right: 100px;
  .tuijian {
    color: rgb(255, 94, 82);
  }
  span {
    margin: 0 5px;
    cursor: pointer;
    color: rgb(153, 153, 153);
  }
  span:hover {
    color: #337ab7;
  }
}
.el-menu-demo {
  padding-left: 100px;
}
.user-info {
  text-align: right;
  padding-right: 150px;
  height: 66px;
  line-height: 66px;
  color: rgb(153, 153, 153);
  cursor: pointer;
}
</style>
