import Styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/simbol_lv_branco.svg';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header () {

const rotaLogo = [{
  label: <Logo className={Styles.header__img} />,
  to: '/'
}];

const rotasNav = [{
  label: 'Projects',
  to: '/'
},{
  label: 'About',
  to: '/about'
},{
  label: 'Contact',
  to: '/contact'
}]

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
}

  return (
    <header className={Styles.header}>

      <div className={Styles.header__logo}>
          {rotaLogo.map((rota, index) => (
              <figure key={index}>
                <Link to={rota.to}>{rota.label}</Link>
              </figure>
          ))}
      </div>

      <div className={Styles.header__menu}>
        <div className={Styles.header__menu__bar}></div>
        <div className={Styles.header__menu__bar}></div>
        <div className={Styles.header__menu__bar}></div>
      </div>

      <nav 
        className={Styles.header__nav}
        id="nav"
      >

        <h5 className={Styles.header__nav__title}>Menu</h5>
            
        <ul className={Styles.hedaer__nav__list}>
          {rotasNav.map((rota, index) =>(
            <li className={Styles.header__nav__list__item} key={index}>
              <NavLink 
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "" 
              }
              to={rota.to}
              >
                {rota.label}
              </NavLink>
            </li>
          ))}
        </ul>

      </nav>

    </header>
  );
}