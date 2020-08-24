/*
 * @Descripttion:
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-08-24 14:17:26
 * @LastEditors: wqq
 * @LastEditTime: 2020-08-24 15:43:29
 */
module.exports = class extends think.Model {
  /**
   * @name: getNewArticle
   * @for: 获取最新的五条文章
   * @param {type}
   * @return {type}
   */
  getNewArticle(where = {
    totop: 1,
    ispublished: 1
  }, limit = 5) {
    return this.model('article').where(where).order('createtime DESC').limit(limit).select();
  }
};