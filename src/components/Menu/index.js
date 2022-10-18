import { NavLink } from "react-router-dom";
import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";

export default function Menu(){
    return(
        <header>
            <nav className={styles.navegacao}>
                <MenuLink rota="/" >
                    Inicio
                </MenuLink>
                <MenuLink rota="/sobremim" >
                    Sobre mim
                </MenuLink>
               
            </nav>
        </header>
    )
}