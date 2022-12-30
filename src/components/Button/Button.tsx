
export namespace Button {
    export interface Props {
        children: Element
    }
}

export function Button({ children } : Button.Props) {
    
    let cssVal : string = "bg-blue-400 px-4 py-1 rounded text-sm"

    return(
        <button class={cssVal}>
            {children}
        </button>
    )
}