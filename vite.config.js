import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    outDir: 'vite-dist',
    assetsDir: '.',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Extract large vendors into a separate chunk.
          if (id.match(/[\\/]node_modules[\\/]echarts(.*)/)) {
            return 'echarts'
          }
          if (id.match(/[\\/]node_modules[\\/]element-plus(.*)/)) {
            return 'element-plus'
          }
          // Extract common vendors into a separate chunk.
          if (id.match(/[\\/]node_modules[\\/]/)) {
            return 'vendor'
          }
          return null
        },
      },
    },
  }
})
