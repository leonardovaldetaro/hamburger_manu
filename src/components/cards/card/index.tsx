import Styles from './Card.module.scss';
import cardInfo from 'data/cardsInfo.json';
import { Link } from 'react-router-dom';

type Props = typeof cardInfo[0];

export default function Card (props: Props) {
    const  {title, description, photo, alt}= props;

    return (
        <Link to={`/projeto/${props.id}`} className={Styles.card__link}>
            <article className={Styles.card}>

                <div className={Styles.card__imgContainer}>
                    <img src={photo} alt={alt} className={Styles.card__imgContainer__img} />
                </div>

                <div className={Styles.card__infoContainer}>
                    <h2 className={Styles.card__infoContainer__title}>{title}</h2>
                    <h3 className={Styles.card__infoContainer__subtitle}>{description}</h3>
                </div>

            </article>
        </Link>
    );
}