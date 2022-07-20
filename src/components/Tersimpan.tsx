import ErrorIcon from "../icons/ErrorIcon"
import { NavButtons } from "./Buttons"

export default () => {

    const tersimpan = localStorage.getItem("tersimpan")

    if (tersimpan !== undefined) {

        const content = JSON.parse(tersimpan!)

        return <>
        
            {
                content.slice(0,3).map((amaliyah: any) => <>
                    <NavButtons
                        to={`/amaliyah/${amaliyah.title.toLowerCase().replace(" ", "-")}?tersimpan=true`}
                        direction="y"
                        style="summary-amaliyah--body__btn px-5 py-6 rounded mb-3 border-2 border-white hover:border-amber-400"
                        >
                            <h2 class="w-full text-lg font-bold">{amaliyah.title}</h2>
                            <p class="w-full text-sm mt-1">{amaliyah.description}</p>
                        </NavButtons>
                </>)
            }

            {
                content.length >= 3 
                    ? <NavButtons
                        to="/tersimpan"
                        style="italic justify-center bg-white border-2 border-black hover:border-amber-400 p-4 rounded text-sm my-5"
                        >lihat semua Tersimpan</NavButtons>
                    : null
            }

        </>
    }

    return  <div class="flex items-center justify-center p-5">
                <ErrorIcon />
                <p class="ml-2 text-md font-semibold text-red-600">Tidak ada amaliyah tersimpan</p>
            </div>
}