import { hydrate } from "solid-js/web"
import { Router } from "@solidjs/router"

import App from "./App"
import "./index.css"

hydrate(() => <App/>, document.getElementById("app") as HTMLElement)

/* =====
  # references
  https://github.com/solidjs/templates/blob/master/ts/tsconfig.json
  https://www.solidjs.com/guides/server
*/
