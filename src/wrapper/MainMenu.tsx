import { useLocation, useNavigate, useRouteData } from "solid-app-router";
import { createSignal, Show } from "solid-js";
import { BasicButtons, NavButtons } from "../components/Buttons";
import CloseIcon from "../icons/CloseIcon";
import MenuIcon from "../icons/MenuIcon";

import "./MainMenu.css"

export default () => {

    const navigate = useNavigate();
    const uri = useLocation();

    const damn = (msg: any) => {
        
        if (msg)    navigate(`/menu`);

        if (!msg)   history.back();

        if (uri.pathname == "/menu") navigate("/");

    };

    return(
    <>
        <nav 
            id="main-menu"
            class="flex items-center justify-between px-2 py-3 m-2 rounded shadow"
        >
            <div 
                id="main-menu__brand"
                class="inline-block"
            >
                <NavButtons
                    to={`/`}
                    >
                    <img
                        class="h-8 w-8 mr-3 inline-block"
                        src="/300x300.png"
                        alt="Amaliyah Logo"
                        />
                    <h1
                        class="text-left inline-block float-right"
                        >
                        <span class="font-bold text-base leading-none pb-1 block">
                            amaliyah.
                        </span>
                        <span class="text-xs leading-none block">
                            dwlhm.space
                        </span>
                    </h1>
                </NavButtons>
            </div>
            <div 
                id="main-menu__button"
                class="float-right flex items-center"
            >
                <BasicButtons
                    startVal={uri.pathname == "/menu"}
                    onActive={<CloseIcon />}
                    onInactive={<MenuIcon />}
                    onceActive={damn}
                    />
            </div>
        </nav>
    </>
    )
}