// https://cli.vuejs.org/zh/guide/deployment.html

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/f-vue-typescript/'
    : '/'
}