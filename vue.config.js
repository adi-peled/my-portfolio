module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader',
        },
      ],
    }
  },
};