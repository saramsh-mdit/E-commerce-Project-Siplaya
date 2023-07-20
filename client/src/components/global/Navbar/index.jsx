import React from "react";
import { NavLink } from "react-router-dom";

import style from "./style.module.scss";

export const navItemList = [
  { title: "Home", link: "/" },
  { title: "Cart", link: "/cart" },
  { title: "Profile", link: "/profile" },
  { title: "Login", link: "/Login" },
];

const NavItem = ({ title, link }) => (
  <NavLink
    to={link}
    className={({ isActive }) => {
      return isActive ? style.navItemActive : style.navItem;
    }}
  >
    <p>{title}</p>
  </NavLink>
);

const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <div className={style.navItems}>
        {navItemList?.map((item, index) => (
          <NavItem
            key={index + item.title + item.link}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
