module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.fallback = {
        crypto: require.resolve("crypto-browserify"),
        buffer: require.resolve("buffer/"),
        stream: require.resolve("stream-browserify"),
      };
      return webpackConfig;
    },
  },
};
