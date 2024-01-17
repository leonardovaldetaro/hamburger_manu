import Styles from './About.module.scss';

export default function About () {
    return (
        <main className={Styles.about}>
            <h1 className={Styles.about__title}>Here is the about page!</h1>
        </main>
    );
}