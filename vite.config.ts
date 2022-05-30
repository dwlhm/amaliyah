import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    solidPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['300x300.png', 'favicon.svg', 'favcion.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Amaliyah oleh dwlhm.space',
        short_name: 'Amaliyah.dwlhm.space',
        description: 'Panduan Amaliyah untuk ikhwan/akhwat TQN Pesantren Suryalaya Sirnarasa',
        theme_color: '#F6B179',
        background_color: '#F4F6D4',
        scope: '/',
        start_url: '/',
        display: 'standalone',
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
