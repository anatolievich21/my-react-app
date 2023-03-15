import React from "react";
import s from './Navbar.module.css';




const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a href="01-first-project/react-app-1/src/components">Profile</a>
            </div>
            <div className={s.item}>
                <a href="01-first-project/react-app-1/src/components">Messages</a>
            </div>
            <div className={s.item}>
                <a href="01-first-project/react-app-1/src/components">News</a>
            </div>
            <div className={s.item}>
                <a href="01-first-project/react-app-1/src/components">Music</a>
            </div>
            <div className={s.item}>
                <a href="01-first-project/react-app-1/src/components">Settings</a>
            </div>
        </nav>
    )

}

export default Navbar;