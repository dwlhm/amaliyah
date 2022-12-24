import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"

export default defineConfig({
    plugins: [ solidPlugin() ],
    server: {
        port: 3000
    },
    build: {
        target: "ES5"
    }
})

/* =====
  # references
  https://github.com/solidjs/templates/blob/master/ts/tsconfig.json
*/