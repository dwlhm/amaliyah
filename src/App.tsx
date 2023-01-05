import { Component, lazy } from "solid-js"
import { createSignal } from "solid-js"
import { Router, Routes, Route } from "@solidjs/router"

const Hi = lazy(() => import("./pages/Hi"))
const Home = lazy(() => import("./pages/Home"))

const App : Component = () => {
    
    return(
    <Router>
        <Routes>
            <Route path="/hi" component={Hi} />
            <Route path="/" component={Home} />
        </Routes>
    </Router>
    )
}

export default App

/* =====
  # references
  https://github.com/solidjs/templates/blob/master/ts/tsconfig.json
*/
