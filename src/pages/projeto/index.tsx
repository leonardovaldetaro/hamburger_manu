import { useParams } from 'react-router-dom';
import CardsInfo from 'data/cardsInfo.json';
import Styles from './Projeto.module.scss';
import classNames from 'classnames';

export default function Projeto() {
    const { id } = useParams();

    // Encontrar o projeto correspondente ao ID na URL
    const projeto = CardsInfo.find(item => item.id === String(id));

    // Verificar se o projeto foi encontrado
    if (!projeto) {
        return <ErroProjetoNaoEncontrado />;
    }
    
    // Renderizar o componente do projeto
    return (
        <main className={Styles.projeto}>
            <section className={Styles.containerDescriptions}>
                <h3 className={classNames(
                    Styles.containerDescriptions__subTittles,
                    Styles.containerDescriptions__caseStudy
                )}>
                    Case Study
                </h3>
                <h1 className={Styles.containerDescriptions__tittle}>
                    {projeto?.title}
                </h1>
                <h3 className={classNames(
                    Styles.containerDescriptions__subTittles,
                    Styles.containerDescriptions__myRoles
                )}>
                    My Roles
                </h3>
                <h2 className={Styles.containerDescriptions__roles}>
                    {projeto?.role_1}<br />
                    {projeto?.role_2}<br />
                    {projeto?.role_3}
                </h2>
                <h3 className={classNames(
                    Styles.containerDescriptions__subTittles,
                    Styles.containerDescriptions__clients
                )}>
                    Client
                </h3>
                <h2 className={Styles.containerDescriptions__client}>
                    {projeto?.client}
                </h2>
                <h3 className={classNames(
                    Styles.containerDescriptions__subTittles,
                    Styles.containerDescriptions__dates
                )}>
                    Date
                </h3>
                <h2 className={Styles.containerDescriptions__date}>
                    {projeto?.data}
                </h2>
            </section>

            <section className={Styles.containerText}>
                <p className={classNames(
                    Styles.containerText__text,
                    Styles.containerText__firstParagraf
                )}>
                    {projeto?.paragraph_1}
                </p>
                <p className={classNames(
                    Styles.containerText__text,
                    Styles.containerText__secondParagraf
                )}>
                    {projeto?.paragraph_2}
                </p>
                <p className={classNames(
                    Styles.containerText__text,
                    Styles.containerText__tirdParagraf
                )}>
                    {projeto?.paragraph_3}
                </p>
            </section>
            <figure className={Styles.firstImage}>
                <img 
                    src={projeto?.photo} 
                    alt={projeto?.alt}
                />
            </figure>
        </main>
    );
}

// Componente para exibir caso o projeto não seja encontrado
function ErroProjetoNaoEncontrado() {
    return <div>Desculpe, o projeto não pôde ser encontrado.</div>;
}