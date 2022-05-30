import { For } from "solid-js"
import LabelIcon from "../icons/LabelIcon"
import ErrorIcon from "../icons/ErrorIcon"
import { NavButtons } from "./Buttons"

import "./Summary.css"

export default (props: any) => {

    if (props.data?.body == "nil") return(
        <div class="flex items-center justify-center p-5 mt-10">
            <ErrorIcon />
            <p class="ml-2 text-md font-semibold text-red-600">Tidak ada Amaliyah Tersedia</p>
        </div>
    )

    if (props.data?.msg == "error") return(
        <div class="flex items-center justify-center p-5 mt-10">
            <ErrorIcon />
            <p class="ml-2 text-md font-semibold text-red-600">{props.data?.body}</p>
        </div>
    )

return(
<>
    <div>
        <For each={props.data?.body}>{
            (props: any) => (
                props.topic == "undefined" ? "" : <>
                    <div class="summary-amaliyah--title flex items-center my-2 mt-5 px-2 py-3 text-base font-bold">
                        <LabelIcon />
                        <h3 class="ml-2">{props.topic}</h3>
                    </div>
                    <div class="summary-amaliyah--body">
                        <For each={props.content.slice(0,3)}>{
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
                        {props.content.length < 5 ? "" : (
                            <>
                                <NavButtons
                                    to={`/kategori/${props.topic.toLowerCase().replace(" ", "-")}`}
                                    style="italic justify-center bg-white border-2 border-black hover:border-amber-400 p-4 rounded text-sm my-5"
                                >
                                    lihat semua {props.topic}
                                </NavButtons>
                            </>
                        )}
                    </div>
                </>
            )
        }</For>
    </div>
</>
)
}