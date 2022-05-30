import { Link } from "solid-app-router";
import { children, createEffect, createSignal, Show } from "solid-js";

export const BasicButtons = (props: any) => {
    
    const [ buttonIsActive, setButtonIsActive ] = createSignal(props.startVal || false);
    createEffect(() => {
        setButtonIsActive(props.startVal)
    })
    const toggle = () => {
        setButtonIsActive(!buttonIsActive());
        props.onceActive(buttonIsActive())
    };

    return(
        <>
            <Show
                when={buttonIsActive()}
                fallback={<button class="p-1 flex items-center" onClick={toggle}>{props.onInactive}</button>}
            >
                <button class="p-1 flex items-center" onClick={toggle}>{props.onActive}</button>
            </Show>
        </>
        
    )
}

export const NavButtons = (props: any) => {

    const direction = props.direction == "y" ? "flex-col" : "flex-row";
    const style = "" || props.style

    return(
        <>
            <Link 
                href={props.to}
                class={`w-full flex items-center ${direction} ${style}`}    
            >{props.children}</Link>
        </>
    )
}

export const PrimaryButtons = (props: any) => {

    const [ buttonIsActive, setButtonIsActive ] = createSignal(props.startVal || false);
    const toggle = () => {
        setButtonIsActive(!buttonIsActive());
        props.action(buttonIsActive());
    };

    const style = "" || props.style

    return(
        <>
            <button 
                class={`py-2 px-2 rounded border-2 flex items-center ${props.fullWidth ? `w-full` : ``} ${style}`}
                style={{"background-color":props.primaryColor, "border-color": props.borderPColor || props.primaryColor}}
                onClick={toggle}
            >
                {props.children}
            </button>
        </>
    )
}