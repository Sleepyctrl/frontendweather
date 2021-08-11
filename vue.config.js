module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'https://localhost:44306/api/values/1'
  }
}
