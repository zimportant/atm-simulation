const withCSS = require('@zeit/next-css');

const options = {
  target: 'serverless'
};

module.exports = withCSS({
  ...options,
  webpack(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    });
    return config;
  }
});
