import { createResource, For } from "solid-js";
import { GetAllCategories } from "../api/Amaliyah";
import { BasicButtons, NavButtons } from "../components/Buttons";
import Menu from "../components/Menu";
import DocIcon from "../icons/DocIcon";
import HomeIcon from "../icons/HomeIcon";
import PengaturanIcon from "../icons/PengaturanIcon";
import PintasanIcon from "../icons/PintasanIcon";

import "./Menu.css"

export default () => {

    const menus = [
        {title: "Beranda", icon: <HomeIcon />, uri: "/"},
        {title: "Tersimpan", icon: <PintasanIcon />, uri: "/tersimpan"},
        {title: "Pengaturan", icon: <PengaturanIcon />, uri: "/pengaturan"}
    ]

    const [ categories ] = createResource(GetAllCategories)
    
return(
<>
    <div id="menu--views">
        <div id="menu--views__title">
            <h1 class="text-lg font-bold py-3">MENU</h1>
        </div>
        <div id="menu--views__wrapper">
            <ul>
                {}
                <Menu categories={categories()} menu={menus}  />               
            </ul>
        </div>
    </div>
</>
)
}