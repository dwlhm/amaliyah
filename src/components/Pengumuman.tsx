import { For } from "solid-js"
import { GetPengumuman } from "../api/Amaliyah"
import ExitIcon from "../icons/ExitIcon"
import { PrimaryButtons } from "./Buttons"

import "./Pengumuman.css"

export default () => {

    let res: any[] = []
    
    GetPengumuman()

    const pengumuman = localStorage.getItem('pengumuman')

    if (pengumuman == undefined) return

    (JSON.parse(pengumuman).map((v: any, k: number, arr: any) => {
        
        if (!v.dibaca) res.push({key: k, ...v})

    }))

    const pengumumanGen = JSON.parse(pengumuman)

    const toggle = (args: boolean, id: string, key: number) => {
        if (args) {
            document.getElementById(id)?.setAttribute("style", "display: none;")
            pengumumanGen[key].dibaca = true;
        }
        
        localStorage.setItem('pengumuman', JSON.stringify(pengumumanGen))
    }

    return(<>
        {
            pengumumanGen[0].dibaca 
                ? ""
                :   <div class="my-5 pb-3">
                        <For each={res}>{(props) => (
                            <div class="pengumuman p-4 pb-6 rounded text-base mb-2" id={props.id}>
                                <div class="flex justify-end">
                                <PrimaryButtons
                                    primaryColor="transparent"
                                    action={(args: boolean) => toggle(args, props.id, props.key)}
                                    style="py-0 my-0"
                                >
                                    <ExitIcon />
                                </PrimaryButtons>
                                </div>
                                <h3 class="text-sm font-semibold underline-offset-1 italic mb-2">{props.judul}</h3>
                                <p class="text-sm">{props.isi}</p>
                            </div>
                        )}</For>   
                    </div>
        }
    </>)
}