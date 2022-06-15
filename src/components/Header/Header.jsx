import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import classes from "./index.module.scss";
export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false); //Detectar sí está en responsive.
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    }); //Cierra el menú dependiendo el modo en el que esté.

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []); //Toma las medidas de la pantalla y al tomarlas, decide sí quite el hamburger o no.

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false)
        }
    }, [size.width, menuOpen]); //El menú se expande al detectar resolución de 768px.

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p); //Activa el toggle dependiendo el estado.
    }

    return (
        <>
        <header className={classes.header}>
            <div className={classes.header__content}>
                <h2 className={classes.header__content__logo}>LOGO</h2>
            <nav className={`${classes.header__content__nav} ${menuOpen ?  classes.isMenu : ""}`}>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sobre mi</a></li>
                <li><a href="#">Acerca</a></li>
                <li><a href="#">Testimonios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            </nav>
            <div className={classes.header__content__toggle}>
            {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
            </div>
            </div>
        </header>
        </>
    )

}