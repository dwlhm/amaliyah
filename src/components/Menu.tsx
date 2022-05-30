import { For } from "solid-js"
import LabelIcon from "../icons/LabelIcon"
import { NavButtons } from "./Buttons"


export default (props: any) => {

    return(<>
        <For each={props.menu}>{(menu: any, i) => (
            <li class="rounded p-4 my-2 flex items-center border-2 border-white hover:border-amber-400">
                <NavButtons
                    to={menu.uri}
                >
                    <span class="inline-block mr-3">{menu.icon}</span> 
                    <span class="inline-block text-lg font-semibold">{menu.title}</span>
                </NavButtons>
            </li>
        )}</For>
        <For each={props.categories}>{(menu: any, i) => (
            <li class="rounded p-4 my-2 flex items-center border-2 border-white hover:border-amber-400">
                <NavButtons
                    to={menu.uri}
                >
                    <span class="inline-block mr-3">{menu.icon || <LabelIcon />}</span> 
                    <span class="inline-block text-lg font-semibold">{menu.title}</span>
                </NavButtons>
            </li>
        )}</For>
    </>)
}