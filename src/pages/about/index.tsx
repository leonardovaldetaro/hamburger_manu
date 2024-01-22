import Styles from './About.module.scss';

export default function About () {
    return (
        <main className={Styles.about}>
            <section className={Styles.about__top}>
                <h2 className={Styles.about__top__subtitle}>A few words about me</h2>
                <h1 className={Styles.about__top__title}>Skilled front-end web developer and experienced digital designer. I specialize in creating responsive websites and functional user interfaces that meet the needs of my clients and their target audience.</h1>
            </section>
        </main>
    );
}