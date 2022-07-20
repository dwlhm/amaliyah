import { createEffect, For } from "solid-js"
import { Amaliyah, IsiAmaliyah } from "../api/Amaliyah"
import { PrimaryButtons, NavButtons } from "./Buttons"
import ShareIcon from "../icons/ShareIcon"
import PengaturanIcon from "../icons/PengaturanIcon"
import BackIcon from "../icons/BackIcon"
import DownloadIcon from "../icons/DownloadIcon"
import DownloadedIcon from "../icons/DownloadedIcon"
import { createSignal } from "solid-js"

import "./Amaliyah.css"
import { Pengaturan } from "../views/Pengaturan"

export const ReadAmaliyah = (props: any) => {

    const data: IsiAmaliyah = props.data
    const rules: Pengaturan = props.pengaturan
    const mode: string = props.mode || "isi"

    return(
        <li class={`amaliyah--isi py-3 mx-2 border-b-2 border-gray-700`}>
            <ul class={`amaliyah--child mode__${mode}`}>
                <p class="text-md font-semibold leading-loose">{data.judul}</p>

                <For each={data.keterangan?.awal}>{(ket: string) => <p class="ket text-center text-lg leading-loose">{ket}</p>}</For>
                {
                    data.isi
                        ?   <For each={data.isi}>{(props: IsiAmaliyah) => ( 
                                <ReadAmaliyah data={props} pengaturan={rules} mode={props.tipe} />
                            )}</For> 
                        :   <div>
                    
                                {
                                    data.arab !== undefined && rules.teksArab.visibilitas == "terlihat"
                                    ? <p
                                        class={`text-right arab text-lg leading-loose terlihat`}
                                        style={{"font-size": `${rules.teksArab.fontSize}px`}}
                                        >{data.arab}</p>
                                    : ""
                                }

                                {
                                    data.latin !== undefined && rules.teksLatin.visibilitas == "terlihat"
                                    ? <p
                                        class={`latin text-lg terlihat`}
                                        style={{"font-size": `${rules.teksLatin.fontSize}px`}}
                                        >{data.latin}</p>
                                    : null
                                }
                                
                                {
                                    data.indo !== undefined && rules.teksTerjemahanIndonesia.visibilitas == "terlihat"
                                    ? <p 
                                        class={`terjemahan-indonesia text-lg terlihat`}
                                        style={{"font-size": `${rules.teksTerjemahanIndonesia.fontSize}px`}}
                                        >{data.indo}</p>
                                    : null
                                }
                            </div>
                }   
            </ul>
        </li>
    )
}

export const AmaliyahShortcut = (props: any) => {

    const [ tersimpan, setTersimpan ] = createSignal(localStorage.getItem(props.id) !== null)
    const [ hapusTersimpan, setHapusTersimpan ] = createSignal("")
    const [ linkShared, setLinkShared ] = createSignal("")
    const [ copyLabel, setCopyLabel ] = createSignal("copy")

    const data = props.data

    const saveIt = () => {
        if (tersimpan()) setHapusTersimpan(props.id)
        if (!tersimpan()) {
            let local = JSON.parse(localStorage.getItem("tersimpan") || "[]")
            local.push({"title": data.judul, "description": data?.deskripsi })
            localStorage.setItem(props.id, JSON.stringify(props.data))
            localStorage.setItem("tersimpan", JSON.stringify(local))
            setTersimpan(true)
        }
    }

    const shareIt = (args: boolean) => {
        if (!navigator.canShare && args) setLinkShared(window.location.href)

        if(args) navigator.share({
                title: props.data.judul,
                text: props.data.deskripsi,
                url: props.location
            })

        if (!args) {
            setLinkShared("")
            setCopyLabel("copy")
        }
    }

    const hapusIt = () => {
        let local = JSON.parse(localStorage.getItem("tersimpan") || "{}")
        localStorage.removeItem(props.id)
        let index = local.findIndex((o: any) => o.title == data.judul)
        local.splice(index, 1)
        localStorage.setItem("tersimpan", JSON.stringify(local))
        setHapusTersimpan("")
        setTersimpan(false)
    }

    const copyIt = () => {
        navigator.clipboard.writeText(linkShared())
        .then(() => {
            setCopyLabel("copied");
        })
    }
    
    return(
    <>
        <div id="amaliyah--shortcut" class="p-2 rounded mb-4 text-sm flex justify-between">
            <PrimaryButtons
                    action={() => history.back()}
                    style="border-0"
                >
                    <BackIcon style="mr-2" />
                    Kembali
            </PrimaryButtons>
            <div class="flex">
                <PrimaryButtons
                    action={saveIt}
                    style="border-0 pr-1"
                    >
                    {
                    tersimpan()
                        ? <DownloadedIcon />
                        : <DownloadIcon />
                    }
                </PrimaryButtons>
                <PrimaryButtons
                    action={shareIt}
                    style="border-0 h-full"
                    >
                    <ShareIcon />
                </PrimaryButtons>
                <NavButtons
                    to="/pengaturan"
                    style="pl-1 pr-2"
                    >
                    <PengaturanIcon />
                </NavButtons>
            </div>
        </div>
        {
            hapusTersimpan() == "" ? "" : (
            <>
                <div class="p-2 rounded border-2 border-black flex justify-between items-center">
                    <div class="text-sm p-1 mr-3">
                        {`Dengan menghapus ${hapusTersimpan()} anda tidak akan dapat membukanya lagi secara offline, apakah anda yakin?`}
                    </div>
                    <PrimaryButtons
                        action={hapusIt}
                        style="text-xs py-1 px-3 border-0 bg-gray-300 mr-2"
                        >hapus</PrimaryButtons>
                    <PrimaryButtons
                        action={(args: boolean) => setHapusTersimpan("")}
                        style="text-xs py-1 px-3 border-0 bg-gray-300"
                        >batalkan</PrimaryButtons>
                </div>
            </>
            )
        }
        {
            linkShared() == "" ? "" : (
            <>
                <div class="p-2 rounded border-2 border-black flex justify-between items-center">
                    <div>{linkShared()}</div>
                    <PrimaryButtons
                        action={copyIt}
                        style="text-xs py-1 px-3 border-0 bg-gray-300"
                        >{copyLabel()}</PrimaryButtons>                                
                </div>
            </>
            )
        }
    </>
    )
}