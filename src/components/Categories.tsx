import { For } from "solid-js"
import LabelIcon from "../icons/LabelIcon"
import { NavButtons } from "./Buttons"

export default (props: any) => {

    const data = props.data

    return(<>
        <div class="summary-amaliyah--title flex items-center my-2 mt-5 px-2 py-3 text-base font-bold">
            <LabelIcon />
            <h3 class="ml-2">{data.topic}</h3>
        </div>
        <div class="summary-amaliyah--body">
            <For each={data.content}>{
                (amaliyah: any) => (
                    <NavButtons
                        to={`/amaliyah/${amaliyah.title.toLowerCase().replace(" ", "-")}`}
                        direction="y"
                        style="summary-amaliyah--body__btn px-5 py-6 rounded mb-3 border-2 border-white hover:border-amber-400"
                    >
                        <h2 class="w-full text-lg font-bold">{amaliyah.title}</h2>
                        <p class="w-full text-sm mt-1">{amaliyah.description}</p>
                    </NavButtons>
                )
            }</For>
        </div>
    </>)
}