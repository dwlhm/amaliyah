import express from "express"
import path from "node:path"
import { fileURLToPath } from "node:url"
import fs, { readFileSync } from "node:fs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export async function createServer(
    root = process.cwd(),
    isProd = process.env.NODE_ENV == "production"
    ) {
    
    const resolve = (p) => path.resolve((__dirname).toString(), p)

    const indexProd = isProd
        ? fs.readFileSync(resolve("/functions/client/index.html"), "utf-8")
        : ""

    const app = express()

    app.disable("x-powered-by")

    let vite

    if (!isProd) {
        vite = await (
            await import("vite")
        ).createServer({
            root,
            logLevel: "info",
            server: {
                middlewareMode: true,
                watch: {
                    usePolling: true,
                    interval: 100
                }
            },
            appType: "custom"
        })
        // vite as middleware
        app.use(vite.middlewares) 
    } else {
        app.use((await import("compression")).default())
    }

    app.use("*", async (req, res) => {
        try {
            const url = req.originalUrl

            const template = isProd
                ?   indexProd
                :   await vite.transformIndexHtml(
                    url,
                    readFileSync(resolve("index.html"), "utf-8")
                )

            const render = isProd
                ?   import("./functions/server/entry-server.js").render
                :   ( await vite.ssrLoadModule("/src/entry-server.tsx")).render

            const context = {
                url
            }

            const appHtml = render(url)

            // if (context.url) {
            //     return res.redirect(301, context.url)
            // }

            const html = template
                .replace(`<!--app-head-->`, appHtml.hydration)
                .replace(`<!--app-html-->`, appHtml.body)

            res.status(200).set({
                "Content-Type": "text/html"
            }).end(html)
        } catch (error) {
            !isProd && vite.ssrFixStacktrace(error)
            console.error(error.stack)
            res.status(500).end(error.stack)
        }

    })

        return { app, vite }
    
}

createServer()
.then(({ app }) => {
    app.listen(5173, () => {
        console.debug("http://localhost:5173")
    })
})
.catch((err) => {
    console.error("Error Starting Server:\n", err)
    process.exit()
})

/*
 # references
 https://vitejs.dev/guide/ssr.html
 https://github.com/amoutonbrady/vite-ssr-solid/blob/master/src/entry-server.tsx
*/