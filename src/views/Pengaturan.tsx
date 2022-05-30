import { createRenderEffect, createSignal } from "solid-js"
import { BasicButtons, PrimaryButtons } from "../components/Buttons"
import BackIcon from "../icons/BackIcon"
import DocIcon from "../icons/DocIcon"
import EyeIcon from "../icons/EyeIcon"
import EyeOffIcon from "../icons/EyeOffIcon"
import MinusIcon from "../icons/MinusIcon"
import PlusIcon from "../icons/PlusIcon"

import "./Pengaturan.css";

export interface Pengaturan {
    teksArab: {
        fontSize: number
        visibilitas: "terlihat" | "tersembunyi"
    }
    teksLatin: {
        fontSize: number
        visibilitas: "terlihat" | "tersembunyi"
    }
    teksTerjemahanIndonesia: {
        fontSize: number
        visibilitas: "terlihat" | "tersembunyi"
    }
}

export default () => {
    const [ fontArab, setFontArab ] = createSignal(20);
    const [ fontLatin, setFontLatin ] = createSignal(20);
    const [ fontTerjemahanIndonesia, setFontTerjemahanIndonesia ] = createSignal(20);
    const [ visibilitasArab, setVisibilitasArab ] = createSignal('terlihat');
    const [ visibilitasLatin, setVisibilitasLatin ] = createSignal('terlihat');
    const [ visibilitasTerjemahanIndonesia, setVisibilitasTerjemahanIndonesia ] = createSignal('terlihat');
    const [ btnSaveLabel, setBtnSaveLabel ] = createSignal("Simpan");

    createRenderEffect(() => {
        const pengaturan: Pengaturan = JSON.parse(localStorage.getItem("pengaturan") || "");
        setFontArab(pengaturan.teksArab.fontSize);
        setFontLatin(pengaturan.teksLatin.fontSize);
        setFontTerjemahanIndonesia(pengaturan.teksTerjemahanIndonesia.fontSize);
        setVisibilitasArab(pengaturan.teksArab.visibilitas);
        setVisibilitasLatin(pengaturan.teksLatin.visibilitas);
        setVisibilitasTerjemahanIndonesia(pengaturan.teksTerjemahanIndonesia.visibilitas);
    })

    const setVisibilitas = (teks: string, visibility: boolean) => {
        const visibilitas: "terlihat" | "tersembunyi" = visibility ? "terlihat" : "tersembunyi";
        if (teks == "teksArab") setVisibilitasArab(visibilitas);
        if (teks == "teksLatin") setVisibilitasLatin(visibilitas);
        if (teks == "teksTerjemahanIndonesia") setVisibilitasTerjemahanIndonesia(visibilitas);
        setBtnSaveLabel("Simpan Perubahan");
    }

    const setFontSize = (teks: string, mode: string) => {
        if (teks == "teksArab" && mode == "inc") setFontArab(fontArab()+1);
        if (teks == "teksArab" && mode == "dec") setFontArab(fontArab()-1);
        if (teks == "teksLatin" && mode == "inc") setFontLatin(fontLatin()+1);
        if (teks == "teksLatin" && mode == "dec") setFontLatin(fontLatin()-1);
        if (teks == "teksTerjemahanIndonesia" && mode == "inc") setFontTerjemahanIndonesia(fontTerjemahanIndonesia()+1);
        if (teks == "teksTerjemahanIndonesia" && mode == "dec") setFontTerjemahanIndonesia(fontTerjemahanIndonesia()-1);
        setBtnSaveLabel("Simpan Perubahan")
    }

    const savePengaturan = () => {
        localStorage.setItem("pengaturan", JSON.stringify({
            teksArab: {
                fontSize: fontArab(),
                visibilitas: visibilitasArab(),
            },
            teksLatin: {
                fontSize: fontLatin(),
                visibilitas: visibilitasLatin(),
            },
            teksTerjemahanIndonesia: {
                fontSize: fontTerjemahanIndonesia(),
                visibilitas: visibilitasTerjemahanIndonesia()
            }
        }))

        setBtnSaveLabel("Perubahan Disimpan");
    }

return(
<>
    <div id="pengaturan">
        <div id="pengaturan--title" class="flex items-center1">
            <PrimaryButtons
                action={() => history.back()}
                style="border-transparent"
            ><BackIcon /></PrimaryButtons>
            <h1 class="text-lg font-bold py-3">Pengaturan</h1>
        </div>
        <div id="pengaturan--wrapper">
            <ul>
                <li id="pengaturan--arab" class="my-4">
                    <div class="pengaturan--wrapper__title p-4 rounded my-2 flex items-center">
                        <span class="mr-2"><DocIcon /></span>
                        <span class="font-semibold">Teks Arab</span>
                    </div>
                    <div class="grid grid-cols-2 pt-10 pb-4">
                        <div class="pengaturan--wrapper__fsize p-2 grid grid-cols-3">
                            <span class="flex justify-end">
                                <PrimaryButtons
                                    primaryColor={`#DADADA`}
                                    action={() => setFontSize("teksArab", "dec")}
                                >
                                    <MinusIcon />
                                </PrimaryButtons>
                            </span>
                            <span class="flex items-center justify-center text-4xl">
                                {fontArab()}
                            </span>
                            <span>
                                <PrimaryButtons
                                    primaryColor={`#DADADA`}
                                    action={() => setFontSize("teksArab", "inc")}
                                >
                                    <PlusIcon />
                                </PrimaryButtons>
                            </span>
                            <p class="col-span-3 text-xs py-4 px-2 text-center">
                                Ukuran Teks
                            </p>
                        </div>
                        <div class="p-2">
                            <div class="flex justify-center items-center">
                                <BasicButtons
                                    startVal={visibilitasArab() == "terlihat"}
                                    onActive={<>
                                        <span class="inline-block mr-3"><EyeIcon /></span>
                                        <span class="font-semibold">Teks Terlihat</span>
                                    </>}
                                    onInactive={<>
                                        <span class="inline-block mr-3"><EyeOffIcon /></span>
                                        <span class="font-semibold">Teks Tersembunyi</span>
                                    </>}
                                    onceActive={(visibility: boolean) => setVisibilitas("teksArab", visibility)}
                                />
                            </div>
                            <p class="col-span-3 text-xs py-4 px-2 text-center">
                                Visibilitas Teks
                            </p>
                        </div>
                    </div>
                </li>

                <li id="pengaturan--latin" class="my-4">
                    <div class="pengaturan--wrapper__title p-4 rounded my-2 flex items-center">
                        <span class="mr-2"><DocIcon /></span>
                        <span class="font-semibold">Teks Latin</span>
                    </div>
                    <div class="grid grid-cols-2 pt-10 pb-4">
                        <div class="pengaturan--wrapper__fsize p-2 grid grid-cols-3">
                            <span class="flex justify-end">
                                <PrimaryButtons
                                    primaryColor={`#DADADA`}
                                    action={() => setFontSize("teksLatin", "dec")}
                                >
                                    <MinusIcon />
                                </PrimaryButtons>
                            </span>
                            <span class="flex items-center justify-center text-4xl">
                                {fontLatin()}
                            </span>
                            <span>
                                <PrimaryButtons
                                    primaryColor={`#DADADA`}
                                    action={() => setFontSize("teksLatin", "inc")}
                                >
                                    <PlusIcon />
                                </PrimaryButtons>
                            </span>
                            <p class="col-span-3 text-xs py-4 px-2 text-center">
                                Ukuran Teks
                            </p>
                        </div>
                        <div class="p-2">
                            <div class="flex justify-center items-center">
                                <BasicButtons
                                    startVal={visibilitasLatin() == "terlihat"}
                                    onActive={<>
                                        <span class="inline-block mr-3"><EyeIcon /></span>
                                        <span class="font-semibold">Teks Terlihat</span>
                                    </>}
                                    onInactive={<>
                                        <span class="inline-block mr-3"><EyeOffIcon /></span>
                                        <span class="font-semibold">Teks Tersembunyi</span>
                                    </>}
                                    onceActive={(visibility: boolean) => setVisibilitas("teksLatin", visibility)}
                                />
                            </div>
                            <p class="col-span-3 text-xs py-4 px-2 text-center">
                                Visibilitas Teks
                            </p>
                        </div>
                    </div>
                </li>

                <li id="pengaturan--terjemahanindo" class="my-4">
                    <div class="pengaturan--wrapper__title p-4 rounded my-2 flex items-center">
                        <span class="mr-2"><DocIcon /></span>
                        <span class="font-semibold">Teks Terjemahan Indonesia</span>
                    </div>
                    <div class="grid grid-cols-2 pt-10 pb-4">
                        <div class="pengaturan--wrapper__fsize p-2 grid grid-cols-3">
                            <span class="flex justify-end">
                                <PrimaryButtons
                                    primaryColor={`#DADADA`}
                                    action={() => setFontSize("teksTerjemahanIndonesia", "dec")}
                                >
                                    <MinusIcon />
                                </PrimaryButtons>
                            </span>
                            <span class="flex items-center justify-center text-4xl">
                                {fontTerjemahanIndonesia()}
                            </span>
                            <span>
                                <PrimaryButtons
                                    primaryColor={`#DADADA`}
                                    action={() => setFontSize("teksTerjemahanIndonesia", "inc")}
                                >
                                    <PlusIcon />
                                </PrimaryButtons>
                            </span>
                            <p class="col-span-3 text-xs py-4 px-2 text-center">
                                Ukuran Teks
                            </p>
                        </div>
                        <div class="p-2">
                            <div class="flex justify-center items-center">
                                <BasicButtons
                                    startVal={visibilitasTerjemahanIndonesia() == "terlihat"}
                                    onActive={<>
                                        <span class="inline-block mr-3"><EyeIcon /></span>
                                        <span class="font-semibold">Teks Terlihat</span>
                                    </>}
                                    onInactive={<>
                                        <span class="inline-block mr-3"><EyeOffIcon /></span>
                                        <span class="font-semibold">Teks Tersembunyi</span>
                                    </>}
                                    onceActive={(visibility: boolean) => setVisibilitas("teksTerjemahanIndonesia", visibility)}
                                />
                            </div>
                            <p class="col-span-3 text-xs py-4 px-2 text-center">
                                Visibilitas Teks
                            </p>
                        </div>
                    </div>
                </li>

                <li id="pengaturan--preview" class="my-4">
                    <div class="pengaturan--wrapper__title p-4 rounded my-2 flex items-center">
                        <span class="mr-2"><DocIcon /></span>
                        <span class="font-semibold">Preview</span>
                    </div>
                    <div class="pt-5 pb-3">
                        <div 
                            class={`text-right arab text-lg leading-loose ${visibilitasArab()}`}
                            style={{"font-size": `${fontArab()}px`}}
                        >
                        يَا شَيْخَ مُحْيِ الدِّيْنِ                            
                        </div>
                        <div 
                            class={`latin text-lg leading-loose ${visibilitasLatin()}`}
                            style={{"font-size": `${fontLatin()}px`}}
                        >
                            Yaa Syaikha Muhyiddin
                        </div>
                        <div 
                            class={`terjemahan-indonesia text-lg leading-loose ${visibilitasTerjemahanIndonesia()}`}
                            style={{"font-size": `${fontTerjemahanIndonesia()}px`}}
                        >
                            Saya niat sholat sunnah Hajat dua roka'at karena Alloh Ta'ala.
                        </div>
                    </div>
                </li>

                <div id="pengaturan--savebtn">
                    <PrimaryButtons
                        primaryColor={`#F67979`}
                        borderPColor={`#F6B179`}
                        fullWidth={true}
                        action={savePengaturan}
                    >
                        <span class="block py-1 text-base font-semibold text-center w-full">
                            {btnSaveLabel}
                        </span>
                    </PrimaryButtons>
                </div>

            </ul>
        </div>
    </div>
</>
)
}