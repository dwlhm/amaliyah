import type { Component } from "solid-js"
import { createSignal } from "solid-js"

const Client : Component = () => {
    
    const [ count, setCount ] = createSignal(0)
    
    return(
        <button onclick={() => setCount(c => c + 1)}>
            {count()}
        </button>
    )
}

export default Client

/* =====
  # references
  https://github.com/solidjs/templates/blob/master/ts/tsconfig.json
*/