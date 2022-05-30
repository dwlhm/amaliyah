import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    solidPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favcion.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Amaliyah oleh dwlhm.space',
        description: 'Panduan Amaliyah untuk ikhwan/akhwat TQN Pesantren Suryalaya Sirnarasa',
        theme_color: '#F6B179',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]
      }
    })
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
