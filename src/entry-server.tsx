import { generateHydrationScript, renderToString } from "solid-js/web"

import App from "./App"

export function render() {
    const body = renderToString(() => <App />)
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