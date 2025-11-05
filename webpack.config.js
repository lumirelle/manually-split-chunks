/**
 * @type {import('webpack').Configuration}
 */
export default {
  entry: './src/index.js',
  output: {
    filename: '[name]-[fullhash].js',
    clean: true,
    path: import.meta.dirname + '/webpack-dist',
  },
  optimization: {
    splitChunks: {
      /**
       * We want apply cache groups to both `async` and `initial` chunks, so we should use `chunks: 'all'`.
       */
      chunks: 'all',
      cacheGroups: {
        // Extract large vendors into a separate chunk.
        'e-charts': {
          name: 'echarts',
          test: /[\\/]node_modules[\\/]echarts(.*)/,
          priority: 30,
          reuseExistingChunk: true,
        },
        'element-plus': {
          name: 'element-plus',
          test: /[\\/]node_modules[\\/]element-plus(.*)/,
          priority: 20,
          reuseExistingChunk: true,
        },
        // Extract common vendors into a separate chunk.
        'vendor': {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        // Extract common source code (used by more than 1 chunk) into a separate chunk.
        'default': {
          name: 'default',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
}
