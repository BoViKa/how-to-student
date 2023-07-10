import React, {} from "react";
import styles from "./header.css";

const Header = () => {

    // Menu for header
    const menu = [
        {
            id: 0,
            title_sv: "Forum",
            title_en: "Forum",
            link: "/forum",
            subMenus: []
        },
        {
            id: 1,
            title_sv: "Hjälp",
            title_en: "Help",
            link: "/help",
            subMenus: [
                { title_sv: "Skolor", title_en: "Schools", link:"/schools" },
                { title_sv: "Kurser", title_en: "Courses", link:"/courses" },
                { title_sv: "Bostad", title_en: "Living", link:"/living" }
            ]
        },
        {
            id: 3,
            title_sv: "Om oss",
            title_en: "About us",
            link: "/about",
            subMenus: []
        }
    ];

    const menuFrom = (menu) => {
        const isActive = false;

        // Fortsätt skriv
        return (
            <div className=".button">
                <link to={menu.link}>
                    <div 
                        className=".buttonTitle"
                        onClick={(e) => {
                            if (menu.subMenus.length > 0) {
                                e.preventDefault();
                                setExpandedSubMenu(expandedSubMenu !== menu.id ? menu.id : null);
                            } else {
                                setMainMenuExpanded(false);
                            }
                        }}
                    >
                        {lang === "se" ? menu.title_sv : menu.title_en}
                    </div>
                </link>
                {menu.subMenus.length !== 0
                ? (
                   <div className=".buttonDropdownContainer">
                    <ul className={`${styles.buttonDropdown} ${expandedSubMenu === menu.id ? styles.subMenuExpanded : ""}`}>

                    </ul> 
                   </div>
                )
                : <div />}
            </div>
        )
    };

    return (
        <div className=".container">
            <div className=".menuContainer">
                <div className=".logoContainer">
                    <link
                        to="/"
                        onClick={() => {
                            setMainMenuExpanded(false);
                        }}
                    >

                    </link>
                </div>
            </div>
        </div>
    )
}

export default Header;