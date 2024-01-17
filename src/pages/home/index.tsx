import Styles from './Home.module.scss';

export default function Home () {
    return (
        <main className={Styles.main}>
            <h1 className={Styles.main__title}>Olá Mundo!</h1>
        </main>
    );
}