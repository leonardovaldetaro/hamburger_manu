import Styles from './Footer.module.scss';

export default function Footer () {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.footer__container}>
                <h5 className={Styles.footer__title}>Leonardo Valdetaro</h5>
                <p className={Styles.footer__copyright}>&copy; Copyright 2024</p>
            </div>
        </footer>
    );
}