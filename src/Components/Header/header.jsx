import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./header.scss";

const Header = ({ children, transparent }) => {
    const [mainMenuExpanded, setMainMenuExpanded] = useState(false);
    const [expandedSubMenu, setExpandedSubMenu] = useState(null);
    const [hasScrolled, setHasScrolled] = useState(false);

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
            <div className="button">
                <link to={menu.link}>
                    <div 
                        className="buttonTitle"
                        onClick={(e) => {
                            if (menu.subMenus.length > 0) {
                                e.preventDefault();
                                setExpandedSubMenu(expandedSubMenu !== menu.id ? menu.id : null);
                            } else {
                                setMainMenuExpanded(false);
                            }
                        }}
                    >
                        {menu.title_sv}
                    </div>
                </link>
                {menu.subMenus.length !== 0
                ? (
                   <div className="buttonDropdownContainer">
                    <ul className={`${styles.buttonDropdown} ${expandedSubMenu === menu.id ? styles.subMenuExpanded : ""}`}>
                        {menu.subMenus.map((subMenu) => (
                            <Link to={subMenu.link} onClick={() => { setMainMenuExpanded(false); }}>
                                <li className="buttonDropdownItem">{subMenu.title_sv}</li>
                            </Link>
                        ))}
                    </ul> 
                   </div>
                )
                : <div />}
            </div>
        )
    };

    return (
        <div className="container">
            <div className="menuContainer">
                <div className={`${styles.mainMenu} ${transparent && !hasScrolled ? styles.transparent : ""}`}>
                    <div className="logoContainer">
                        <link
                            to="/"
                            onClick={() => {
                                setMainMenuExpanded(false);
                            }}
                        >
                            <img src="/logo.png" alt="Logo" className="logo"/>
                        </link>
                    </div>
                    <div className="iconContainer">
                        <div
                            className="expandButton"
                            onClick={() => {
                                setMainMenuExpanded(!mainMenuExpanded);
                                if (!mainMenuExpanded) {
                                    setMainMenuExpanded(null);
                                }
                            }}                   
                        >
                            <FontAwesomeIcon icon={faBars} size="2x" />
                        </div>
                    </div>
                    <div className={`${styles.buttonContainer} ${mainMenuExpanded ? styles.menuExpanded : ""}`}>
                        {menu.map((menu) => menuFrom(menu))}
                    </div>
                </div>
                <div className={`${styles.content} ${transparent ? styles.transparent : ''} ${mainMenuExpanded ? styles.contentWithExpandedMenu : ''}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Header;