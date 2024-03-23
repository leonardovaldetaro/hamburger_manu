import Styles from './Footer.module.scss';
import classNames from 'classnames';
import { ReactComponent as LogoNight } from 'assets/simbol_lv_branco.svg';
import { ReactComponent as LogoDay } from 'assets/simbol_lv_preto.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Footer () {
    const [isDay, setIsDay] = useState(true);

    useEffect(()=> {
        const horaAtual = new Date().getHours();
        setIsDay(horaAtual >= 6 && horaAtual < 18);
    }, []);
    
    return (
        <>
        <footer className={classNames(
            Styles.footer,
            { [Styles.day]: isDay },
            { [Styles.night]: !isDay }
        )}>
            <div className={Styles.footer__container}>
                <h4 className={Styles.footer__container__titleContact}>
                    Contact
                    information —
                </h4>
                <p className={Styles.footer__container__textContact}>
                    Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.
                </p>

                <h4 className={Styles.footer__container__titleProjects}>
                    Latest
                    projects —
                </h4>

                <ul className={Styles.footer__container__list}>
                    <li className={Styles.footer__container__list__item}>
                        <Link to="/" className={Styles.footer__container__link}>Front-end</Link>
                     </li>
                    <li className={Styles.footer__container__list__item}>
                        <Link to="/" className={Styles.footer__container__link}>Basic UI</Link>
                    </li>
                    <li className={Styles.footer__container__list__item}>
                        <Link to="/" className={Styles.footer__container__link}>VIP</Link>
                    </li>
                    <li className={Styles.footer__container__list__item}>
                        <Link to="/" className={Styles.footer__container__link}>Basic UX</Link>
                    </li>
                </ul>
                <h4 className={Styles.footer__container__titleAvailability}>
                    Current
                    availability —
                </h4>
                <p className={Styles.footer__container__textAvailability}>
                I usually work on several projects but I’ll be happy to discuss new opportunities. Let’s get in touch!
                </p>

            </div>
        </footer>

        <div className={classNames(
            Styles.copyright,
            { [Styles.day]: isDay },
            { [Styles.night]: !isDay }
        )}>

            <div className={Styles.copyright__logoContainer}>
                {isDay ? <LogoDay className={Styles.copyright__logoContainer__logo}/> : <LogoNight className={Styles.copyright__logoContainer__logo} />}
                <h5 className={Styles.copyright__logoContainer__title}>Leonardo Valdetaro</h5>
            </div>

            <p className={Styles.copyright__copyright}>&copy; Copyright 2024</p>

        </div>
        </>
    );
}