import React from "react";
import styles from './Menu.module.css'
import { LIST_NAV } from "../../../data/Navigate/listNavigates";
import { NavLink } from "react-router-dom";


const Menu: React.FC = () => {
  return <div>
    <nav className={styles.navigate}>
      {LIST_NAV.map((nav, index)=>(
        <NavLink key={index} to={nav.path} className={({isActive}) => isActive ? styles["active-link"] : ""}>{nav.name}</NavLink>
      ))}
    </nav>
  </div>;
};

export default Menu;
