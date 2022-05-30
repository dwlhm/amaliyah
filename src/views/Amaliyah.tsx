import { NavLink, useParams, useSearchParams } from "solid-app-router"
import { createResource, createSignal, For } from "solid-js"
import { Amaliyah, GetAmaliyah } from "../api/Amaliyah"
import {AmaliyahShortcut, default as AmaliyahComponent} from "../components/Amaliyah"
import { BasicButtons, NavButtons, PrimaryButtons } from "../components/Buttons"
import BackIcon from "../icons/BackIcon"
import DownloadedIcon from "../icons/DownloadedIcon"
import DownloadIcon from "../icons/DownloadIcon"
import PengaturanIcon from "../icons/PengaturanIcon"
import ShareIcon from "../icons/ShareIcon"
import ErrorIcon from "../icons/ErrorIcon"
import DBIcon from "../icons/DBIcon"

import "./Amaliyah.css"

export default() => {

    let data: Amaliyah
    const params = useParams()
    const [ linkShared, setLinkShared ] = createSignal("")
    const [ copyLabel, setCopyLabel ] = createSignal("copy")
    const [ hapusTersimpan, setHapusTersimpan ] = createSignal("")
    const [ tersimpan, setTersimpan ] = createSignal(true)

    const getLocalAmaliyah = localStorage.getItem(params.id)

    data = JSON.parse(getLocalAmaliyah || "{}")

    const [ amaliyah ] = createResource(params.id, GetAmaliyah)

    return(
        <>
            {
                amaliyah.loading 
                ?   <div class="flex items-center justify-center p-5 mt-10">
                        <DBIcon />
                        <p class="ml-2 text-md font-semibold">Mendapatkan data</p>
                    </div>
                : amaliyah()?.body == "nil"     
                ?   <>
                    <div class="flex items-center justify-center p-5 mt-10">
                        <ErrorIcon />
                        <p class="ml-2 text-md font-semibold text-red-600">
                            {`Amaliyah '${params.id}' tidak tersedia di database kami`}
                        </p>
                    </div>
                    <div class="flex items-center justify-center">
                        <NavButtons
                            to="/"
                            style="w-fit py-2 px-4 my-10 bg-gray-300 rounded"
                        >Pergi ke Beranda</NavButtons>
                    </div>
                    </>
                : amaliyah()?.msg == "error"
                ?   <>
                        <div class="flex items-center justify-center p-5 mt-10">
                            <ErrorIcon />
                            <p class="ml-2 text-md font-semibold text-red-600">
                                {amaliyah()?.body}
                            </p>
                        </div>
                        <div class="flex items-center justify-center">
                            <NavButtons
                                to="/"
                                style="w-fit py-2 px-4 my-10 bg-gray-300 rounded"
                            >Pergi ke Beranda</NavButtons>
                        </div>
                    </>
                :   <div>
                        <AmaliyahShortcut id={params.id} data={amaliyah()?.body} />
                        <AmaliyahComponent data={amaliyah()?.body} />
                    </div>
            }
        </>
    )
}
