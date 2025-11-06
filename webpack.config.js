import { VueLoaderPlugin } from 'vue-loader'
import HtmlWebpackPlugin from 'html-webpack-plugin'

/**
 * @type {import('webpack').Configuration}
 */
export default {
  entry: './src/main.js',
  output: {
    filename: '[name]-[contenthash:8].js',
    clean: true,
    path: import.meta.dirname + '/webpack-dist',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: './template.html'
    })
  ],
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
