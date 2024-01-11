import Styles from './Main.module.scss';

export default function Main () {
    return (
        <main className={Styles.main}>
            <h1 className={Styles.main__title}>Olá Mundo!</h1>
        </main>
    );
}