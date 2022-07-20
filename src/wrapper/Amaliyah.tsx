import { createEffect, createSignal, For } from "solid-js"

import { Pengaturan } from "../views/Pengaturan"
import { NavButtons } from "../components/Buttons"
import { IsiAmaliyah } from "../api/Amaliyah"
import { ReadAmaliyah } from "../components/Amaliyah"

export default(props: any) => {

    const getPengaturan = localStorage.getItem("pengaturan")
    const initPengaturan: Pengaturan = JSON.parse(getPengaturan || "")

    const [ pengaturan, setPengaturan ] = createSignal(initPengaturan)

    createEffect(() => {
        setPengaturan(JSON.parse(localStorage.getItem("pengaturan") || ""))
    })

    const data = props.data

    return(
        <>
            <div class="my-5">
                <div class="grid grid-cols-5">
                    <div class="col-span-4">
                        <div class="pb-10">
                            <h1 class="text-2xl leading-relaxed font-bold">{data.judul}</h1>
                            <h3 class="text-sm">{data?.deskripsi}</h3>
                        </div>
                        <NavButtons 
                            class="italic text-sm inline-block mr-2"
                            to={`/kategori/${data.topik.toLowerCase().replace(" ", "-")}`}
                            >
                            {`#${data.topik.replace(" ", "-")}`}
                        </NavButtons>
                    </div>
                    <div class="flex items-right justify-end">
                        <div id="amaliyah--summary__prop" class="h-full w-full rounded">
                        </div>
                    </div>
                </div>
            </div>
            <ul class="amaliyah--isi__parent">
                <For each={data.isi}>{(props: IsiAmaliyah) => (
                    <ReadAmaliyah data={props} pengaturan={pengaturan()} mode={props.tipe} />
                )}</For>
            </ul>
        </>
    )
} 