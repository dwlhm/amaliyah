import { createEffect, createResource, createSignal } from "solid-js"
import { AmaliyahAPI, AmaliyahSummary, GetSummary } from "../api/Amaliyah"
import Tersimpan from "../components/Tersimpan"
import Summary from "../components/Summary"
import Pengumuman from "../components/Pengumuman"
import DBIcon from "../icons/DBIcon"
import ErrorIcon from "../icons/ErrorIcon"
import PintasanIcon from "../icons/PintasanIcon"
import OfflineIcon from "../icons/OfflineIcon"

export default () => {

    return(
        <>
            <div>
                <ModeApp />
                <PengumumanWrapper />
                <PintasanWrapper />
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

const SummaryWrapper = () => {
    
    const [ summary ] = createResource(GetSummary);
    
    return(
        <>
            {summary.loading ? (
                <div class="flex items-center justify-center p-5 mt-10">
                    <DBIcon />
                    <p class="ml-2 text-md font-semibold">Mendapatkan data</p>
                </div>
            ) : summary.error ? (
                <div class="flex items-center justify-center p-5 mt-10">
                    <ErrorIcon />
                    <p class="ml-2 text-md font-semibold text-red-600">Error sistem</p>
                </div>
            ) : (
                <Summary data={summary()} />
            )}
        </>
    )
}

const PintasanWrapper = () => {
    return(
        <>
            <div class="summary-amaliyah--title flex items-center my-2 px-2 py-3 text-base font-bold">
                <PintasanIcon />
                <h3 class="ml-2">Tersimpan</h3>
            </div>
            <Tersimpan />
        </>
    )
}

const PengumumanWrapper = () => {
    return(
        <>
            <Pengumuman />
        </>
    )
}