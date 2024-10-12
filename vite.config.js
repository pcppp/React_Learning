/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-12 10:21:16
 * @LastEditors: your name
 * @LastEditTime: 2024-10-12 11:05:16
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 将 @ 映射到 src 目录
    },
  },
});
