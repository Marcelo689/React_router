import { NavLink, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, rota}){
    
    return (
        <NavLink 
            className={({ isActive }) => `
            ${styles.link}
            ${isActive ? styles.linkDestacado : ""}
        `}
        to={rota}>
            {children}
        </NavLink>
    );
}