import Styles from './CallToWork.module.scss';
import { Link } from 'react-router-dom';
import { MdTrendingFlat } from 'react-icons/md';

export default function CallToWork () {
    return (
        <section className={Styles.callToWork}>
            <h4 className={Styles.callToWork__title}>need a project?</h4>
            <Link className={Styles.callToWork__link} to={"/contact"}> 
                Let&rsquo;s work together <MdTrendingFlat size={40} color="rgb(32,50,62)" className={Styles.callToWork__icon} /> 
            </Link>
        </section>
    );
}