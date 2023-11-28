import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 4000,//启动端口
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',	//实际请求地址
        changeOrigin: true, // 允许跨域
        secure: false,  //忽略安全证书   
        rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径把路径变成空字符,
      },
    }
  }
})
