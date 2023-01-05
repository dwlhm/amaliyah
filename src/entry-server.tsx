import { generateHydrationScript, renderToStream } from "solid-js/web"
import { Router } from "@solidjs/router"

import App from "./App"
import "./index.css"

export function render() {
    const body = renderToStream(() => <App />)
    const hydration = generateHydrationScript()

    return {
        hydration,
        body
    }
}

/*
 # references
 https://www.solidjs.com/guides/server
 https://github.com/amoutonbrady/vite-ssr-solid/blob/master/src/entry-server.tsx
*/
