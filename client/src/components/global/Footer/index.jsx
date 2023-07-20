import React from "react";
import { Link } from "react-router-dom";

import { navItemList } from "../Navbar";

import style from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.info}>
        <h2>C-Company</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          aperiam consequatur fuga blanditiis atque. Perspiciatis exercitationem
          fuga nihil optio id!
        </p>
      </div>
      <div className={style.links}>
        <h2>Links</h2>
        <div className={style.pageLinks}>
          {navItemList?.map((item) => {
            return (
              <Link
                key={item.link + item.title}
                to={item.link}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>

      <div className={style.links}>
        <h2>Social Links</h2>
        <div className={style.pageLinks}>
          <Link>Facebook</Link>
          <Link>Instagram</Link>
          <Link>Youtube</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
