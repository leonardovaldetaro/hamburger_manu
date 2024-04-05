import Styles from './About.module.scss';
import { FaLinkedin, FaGithubSquare, FaBehanceSquare, FaDribbbleSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const rotasSocial = [{
    label: 'Linkedin',
    to: 'https://www.linkedin.com/in/leonardovaldetaro/',
    icon: <FaLinkedin size={32} color="rgb(32,50,62)" className={Styles.header__icon} />
},{
    label: 'Github',
    to: 'https://github.com/leonardovaldetaro',
    icon: <FaGithubSquare size={32} color="rgb(32,50,62)" className={Styles.header__icon} />
},{
    label: 'Behance',
    to: 'https://www.behance.net/leonardovaldetaro',
    icon: <FaBehanceSquare size={32} color="rgb(32,50,62)" className={Styles.header__icon} />
},{
    label: 'Dribbble',
    to: 'https://dribbble.com/Valdetaro',
    icon: <FaDribbbleSquare size={32} color="rgb(32,50,62)" className={Styles.header__icon} />
}]

export default function About () {
    return (
        <main className={Styles.sobre}>
                <h2 className={Styles.sobre__subtitle}>A FEW WORDS ABOUT ME</h2>
                <h1 className={Styles.sobre__title}>I&rsquo;m a skilled front-end web developer and experienced digital designer. I specialize in creating responsive websites and functional user interfaces that meet the needs of my clients and their target audience.</h1>
                <p className={Styles.sobre__mainText}>
                My main experience is in front-end development but I also have a passion for design. Given that producing a modern website requires the combination of design, server technology, and the layer that users interacts with, I believe having experience in both design and development allows for making the most optimal user experiences. 
                </p>

                <div className={Styles.sobre__tools}>
                    <h2 className={Styles.sobre__tools__title}>Tools and Skills</h2>
                    <h2 className={Styles.sobre__tools__titleDesign}>Design tools</h2>
                    <h3 className={Styles.sobre__tools__namesDesign}>
                        Photoshop<em> / </em>
                        Illustrator <em> / </em> Figma<em> / </em>
                        InDesign<em> / </em>
                         UI<em> / </em>
                        Design System<em> / </em>
                        Design Pattern<em> / </em>
                        Design Components
                    </h3>
                    <h2 className={Styles.sobre__tools__titleTools}>Frontend skills</h2>
                    <h3 className={Styles.sobre__tools__namesTools}>
                        HTML<em> / </em>
                        CSS<em> / </em>
                        javaScript<em> / </em>
                        React.js<em> / </em>
                        Next.js<em> / </em>
                        Bootstrap<em> / </em>
                        SASS<em> / </em>
                        TypeScript<em> / </em>
                        Git<em> / </em>GitHub <em> / </em>
                        Wordpress<em> / </em>SEO
                    </h3>
                </div>
                <h2 className={Styles.sobre__titleExpirience}>Over 8 years of experience</h2>
                <p className={Styles.sobre__textExpirience}>
                    Over the years, I have developed a passion for creating incredible and functional interfaces that not only meet the users' needs but also impress them. My goal is to make the user experience as enjoyable as possible, making navigation and interaction with the site easier.
                </p>
                <p className={Styles.sobre__textExpirience__proactive}>
                    As a proactive collaborator, I am always looking for opportunities to learn and grow. With excellent communication skills, I am able to work in teams and contribute to a collaborative and productive environment.
                </p>
                <h2 className={Styles.sobre__titleVision}>Turning Your Vision into Reality!</h2>
                <p className={Styles.sobre__textVision}>
                    If you are looking for a passionate and experienced web developer who can turn your vision into reality, <Link className={Styles.sobre__link} to="/contatos">please contact me</Link>. I will be happy to talk about how I can help you achieve your online goals. <a href="https://read.cv/leonardovaldetaro" className={Styles.sobre__link}>Access my resume</a> and social medias.</p>
                <div className={Styles.sobre__mdSociais}>
                    <ul className={Styles.sobre__mdSociais__list}>
                        {rotasSocial.map((rota, index) =>(
                            <li className={Styles.sobre__mdSociais__list__item} key={index}>
                                <Link to={rota.to} target="_blank" title={rota.label}>{rota.icon}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
        </main>
    );
}