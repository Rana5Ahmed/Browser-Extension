import React, { useState } from "react";
import logo from '../public/assets/images/logo.svg';
import moonIcon from '../public/assets/images/icon-moon.svg';
import sunIcon from '../public/assets/images/icon-sun.svg';

function NavBar() {
    const [clicked, setClicked] = useState(false);
    const [icon, setIcon] = useState({
        src: moonIcon,
        alt: "Moon-Icon"
    });

    function changeMood() {
        setClicked(!clicked);
        if (!clicked) {
            setIcon({
                src: sunIcon,
                alt: "Sun-Icon"
            });
            document.body.classList.add("dark-mood");
            document.body.classList.remove("light-mood");
        } else {
            setIcon({
                src: moonIcon,
                alt: "Moon-Icon"
            });
            document.body.classList.add("light-mood");
            document.body.classList.remove("dark-mood");
        }
    }

    return (
        <nav>
            <img src={logo} alt="Main-Logo" />
            <button>
                <img src={icon.src} alt={icon.alt} id="icon" onClick={changeMood} />
            </button>
        </nav>
    );
}

export default NavBar;