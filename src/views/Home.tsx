import { createEffect, createResource, createSignal } from "solid-js"

import { PintasanWrapper } from "../wrapper/Pintasan"
import { SummaryWrapper } from "../wrapper/Summary"
import Pengumuman from "../components/Pengumuman"

import OfflineIcon from "../icons/OfflineIcon"

export default () => {

    return(
        <>
            <div>
                <ModeApp />
                {/* <PengumumanWrapper /> */}
                { <PintasanWrapper /> }
                <SummaryWrapper />
            </div>
        </>
    )
}

const ModeApp = () => {

    const [ isOffline, setIsOffline ] = createSignal(false)

    createEffect(() => {
        setIsOffline(!navigator.onLine)
    })

    return(<>
        {
            isOffline() 
                ?   <div class="flex justify-center items-center text-red-600 text-sm">
                        <OfflineIcon style="mr-2" />{`Anda sedang berada di mode offline`}
                    </div>
                : ""
        }
    </>
        
    )
}

const PengumumanWrapper = () => <Pengumuman />