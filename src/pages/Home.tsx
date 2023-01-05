import type { Component } from "solid-js"
import { createSignal } from "solid-js"

const Home : Component = () => {

    const [ count, setCount ] = createSignal(0)

    return(
        <div>
            <button onClick={() => setCount(c => c + 1)}>
                {count()}
            </button>
        </div>
    )

}

export default Home
