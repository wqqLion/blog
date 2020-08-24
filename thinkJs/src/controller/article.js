/*
 * @Descripttion:
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-08-24 14:16:33
 * @LastEditors: wqq
 * @LastEditTime: 2020-08-24 15:53:21
 */
const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  async newArticleAction() {
    const newArticle = await this.model('article').getNewArticle();
    if (newArticle.length > 0) {
      newArticle.forEach(item => {
        if (item.picurl) {
          item.picurl = ` http://${this.ctx.host}/${item.picurl}`;
        }
      });
      return this.success(newArticle);
    } else {
      return this.fail(203, '暂无数据');
    }
  }
};