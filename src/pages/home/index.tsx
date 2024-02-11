import Slide from 'components/slide';
import Styles from './Home.module.scss';
import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <>
        <section className={Styles.main}>
            <h2 className={Styles.main__name}>
                Leonardo Valdetaro
            </h2>
            <h1 className={Styles.main__title}>
                Front-end web developer,<br /> Digital designer.
            </h1>
            <p className={Styles.main__text}>
                As a front-end web developer and digital designer, I'm passionate about creating professional, modern, and search engine-optimized websites that stand out on the internet and attract more customers.
            </p>
            <div className={Styles.main__botaoWraper}>
                <Link className={Styles.main__botaoWraper__link} to={"/contact"}>
                    Contact
                </Link>
                    or
                <Link className={Styles.main__botaoWraper__link} to={"/about"}>
                    Read About Me
                </Link>
            </div>
        </section>
        <section className={Styles.slide}>
            <h3 className={Styles.slide__subtitle}>selected projects</h3>
            <h2 className={Styles.slide__title}>Case Studies</h2>
            <Slide />
        </section>
        </>
    );
}