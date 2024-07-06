module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.fallback = {
        crypto: false,
      };
      return webpackConfig;
    },
  },
};
