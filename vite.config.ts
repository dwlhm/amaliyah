import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa"

const pwaOptions: Partial<VitePWAOptions> = {
    includeAssets: ['favicon.ico', 'amaliyah.svg', "apple-touch-icon.png"],
    manifest: {
        name: "Amaliyah Robithoh Murid TQN PP Suryalaya Sirnarasa",
        short_name: "Amaliyah",
        description: "just another web who served amailyah content",
        theme_color: "#ffffff",
        icons: [
            {
                src: "/icon-192x192.png",
                size: "192x192",
                type: "image/png"
            },
            {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: 'any maskable'
            }
        ]
    },
    injectRegister: "script",
    registerType: "autoUpdate",
    devOptions: {
        enabled: false
    },
    workbox: {
        globPatterns: ['**/*.{tsx,ts,js,css,html,ico,png,svg}'],
        clientsClaim: true,
        skipWaiting: true,
    }
}

export default defineConfig({
    plugins: [ 
        solidPlugin({
            ssr: true
        }),
        VitePWA(pwaOptions)
    ],
    server: {
        port: 3000
    },
    build: {
        target: "ES2015",
        outDir: "./functions"
    }
})

/* =====
  # references
  https://github.com/solidjs/templates/blob/master/ts/tsconfig.json
*/

