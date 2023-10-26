import React, {useState} from "react";
import "../styles/Header.css"

const links = [
    { id: 1, name: "Home", pointer: "#" },
    { id: 2, name: "Join", pointer: "#join" },
    { id: 3, name: "Events", pointer: "#events" },
    { id: 4, name: "Committee", pointer: "#committee" },
];

function Header() {
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!active);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <img
                    className="colossus"
                    src="/colossus.png"
                    alt="Colossus-chan"
                    height={100}
                />

                <div className={`hamburger ${active ? "active" : ""}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <img
                    className={'mobile-logo'}
                    src={"/logo2023.png"}
                    alt={"Anime & Manga Society Logo"}
                    height={'100px'}
                />

                <ul className={`menu-links ${active ? "active" : ""}`}>
                    {links.map((link) => (
                        <li className="header-menu-item" key={link.id}>
                            <a href={link.pointer}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;