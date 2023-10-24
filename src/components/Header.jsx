import React from "react";
import "../styles/Header.css"

const links = [
    { id: 1, name: "Home", pointer: "/#" },
    { id: 2, name: "Join", pointer: "/#join" },
    { id: 3, name: "Events", pointer: "/#events" },
    { id: 4, name: "Committee", pointer: "/#committee" },
];

function Header() {
    return (
        <header className={"navbar"}>
            <img src={"/colossus.png"} alt={"Anime & Manga Society Logo with Colossus-chan our mascot"} height={100}/>

            <ul className={'menu-links'}>
            {links.map((link) =>
                <li className={'header-menu-item'}><a href={link.pointer}>{link.name}</a></li>
            )}
            </ul>
        </header>
    )
}

export default Header;