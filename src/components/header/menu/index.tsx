import React, { useState } from 'react';
import nav from './nav.json';
import Styles from './Menu.module.scss'
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { IoMenu, IoClose } from "react-icons/io5";

interface Props { 
    menu: string,
    setMenu: React.Dispatch<React.SetStateAction<string>>
}

export default function Menu ({ menu, setMenu } : Props) {
    const [aberto, setAberto] = useState(false);
    const nomeMenu = menu && nav.find(navegador => navegador.value === menu)?.nome;
    return (
        <button
            className={classNames({
                [Styles.menu]: true,
                [Styles['menu--ativo']]: menu !== '',
            })}
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}
        >
            <span>{nomeMenu || 'Menu'}</span>

            {aberto ? 
            (<IoClose size={32} color= "#ffffff" />)
            :
            (<IoMenu size={32} color= "#ffffff" />)     
            }

            <div
                className={classNames({
                    [Styles.menu__options]: true,
                    [Styles['menu__options--ativo']]: aberto,
                })}
            >
                {nav.map(navegador => (
                    <div className={Styles.menu__option} key={navegador.value}
                    onClick={() => setMenu(navegador.value)}
                    >
                        {navegador.nome}
                    </div>
                ))}

            </div>
        </button>
    )
}