import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/

import vueform from '@vueform/vueform/vite'
import { visualizer } from 'rollup-plugin-visualizer';
import { type PluginOption } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    visualizer() as PluginOption,
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: false
      },
      manifest: {
        "name": "asxvec web app",
        "short_name": "asxvec",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "lang": "en",
        "scope": "/",
        "icons": [
          {
            src: 'icons/icon-192x192.png',
            size: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            size: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            size: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            size: '512x512',
            type: 'image/png'
          },
        ]
      }
    }),
    vueform(),
  ],
})
