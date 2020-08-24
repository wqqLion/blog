<!--
 * @Descripttion: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-08-24 14:59:57
 * @LastEditors: wqq
 * @LastEditTime: 2020-08-24 16:29:05
-->
<template>
  <div class="newArticle">
    <div class="bx article-box" v-for="article in article" :key="article.id">
      <div class>
        <img :src="article.picurl" alt />
        <div class="bx article-title">{{article.title}}</div>
      </div>
    </div>
    <div class></div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      article: [],
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.$http.get("article/newArticle").then(
      (res) => {
        this.article = res.data;
        console.log(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  },
};
</script>

<style lang="less" scoped>
.newArticle {
  height: 100%;
  width: 100%;
  .article-box {
    width: 25%;
    height: 50%;
    float: left;
    cursor: pointer;
    box-sizing: border-box;
    overflow: hidden;
    padding: 5px;
    div {
      height: 100%;
      position: relative;
    }
  }
  .article-box:first-child {
    width: 50%;
    height: 100%;
    div {
      height: 100%;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
  .article-title {
    position: absolute !important;
    left: 0;
    bottom: 0;
    height: 50px !important;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    text-align: left;
    padding: 0 10px;
  }
  .article-title:hover {
    background-color: #337ab7;
  }
}
</style>
