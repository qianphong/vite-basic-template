import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    VueJsx(),
    WindiCSS(),
    Pages(),
    Layouts({
      defaultLayout: 'default',
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: 'src/types/auto-imports.d.ts',
    }),
    Components({
      resolvers: [
        IconsResolver({ prefix: 'Icon', customCollections: 'custom' }),
      ],
      directoryAsNamespace: true,
      dts: 'src/types/components.d.ts',
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3',
      customCollections: {
        custom: FileSystemIconLoader(resolve(__dirname, 'src/assets/icons')),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
