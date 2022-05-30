import Tersimpan from "../components/Tersimpan"
import PintasanIcon from "../icons/PintasanIcon"

export default () => {
    return(<>
        <div class="summary-amaliyah--title flex items-center my-2 mt-5 px-2 py-3 text-base font-bold">
            <PintasanIcon />
            <h3 class="ml-2">Tersimpan</h3>
        </div>
        <Tersimpan />
    </>)
}