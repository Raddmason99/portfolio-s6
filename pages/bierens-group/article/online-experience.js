//import NextJS dependencies
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ImageModalBox from '../../../components/ImageModal'

//import styling
import article_style from '../../../styles/Article.module.scss'
import sec_style from '../../../styles/Second.module.scss'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//construct return page-elements
const article = () => {

    //setup routing
    const router = useRouter()
    const routePath = router.asPath.split('#')[1]

    return (
        <>
            <Head>
                <title>Bierens Group | Online Experience</title>
            </Head>
            <main className="body_container">

                <div className={article_style.nav_container}>
                    <nav className={article_style.nav_block}>
                        <p onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeft} />&nbsp;Back</p>
                    </nav>
                </div>

                <div className={article_style.art_container}>
                    <article>
                        <h2>Online Experience</h2>
                        <p>Aan de hand van de opdracht analyse is er in samenwerking met Laurens en Natasha van Bierens Group een design challenge opgezet. Vervolgens zijn er rond deze design challenge deelvragen ontwikkeld. Een van de deelvragen had betrekking tot het onderwerp van de design challenge, een online experience.</p>
                        <h3>Aanpak</h3>
                        <p>Er is begonnen met het opzetten van sub-vragen onder de deelvraag. Door antwoord te geven op deze sub-vragen kan de deelvraag beantwoord worden en kan er relevante informatie vergaard worden voor het project.
                            •	Wat is een online Experience?
                            o	Welke verschillende soorten online experiences zijn er?
                            o	Welke voordelen biedt een online experience?
                            o	Wat zijn kenmerken van een goede online experience?
                            Als eerste is er gekeken naar de term “een Online Experience”. Wat is de definitie van deze term? Hieruit kwam naar voren dat er verschillende soorten online experience zijn. Vervolgens is er onderzoek gedaan naar de voordelen en kenmerken van een online experience.
                            In het onderzoek is gebruik gemaakt van recente literatuur.
                        </p>
                        <h3>Resultaat</h3>
                        <p>Uit het onderzoek kan geconcludeerd worden dat er verschillende online experiences bestaan. Met een online experience kan een bedrijf een product of dienst promoten, of kan er een specifieke ervaring overgebracht worden op de gebruiker(s). Volgens een onderzoek van Event Markting Institute & Mosaic heeft 74% van de gebruikers een positievere mening na een positieve (online) experience. Daarbij komt kijken dat mensen met een positieve ervaring dit graag willen delen, waarmee ze (in)direct andere overtuigen van het bedrijf of de organisatie.
                            Goede online experiences hebben een goede interactie tussen het product en de gebruiker, waardoor de gebruiker een meer immersive experience heeft.
                            Verder hebben online experiences vergelijkbare UI en UX karaktiristieken met reguliere websites. Waarbij het tevens belangrijk is dat ze voldoen aan de geldende design principes. Ook is het belangrijk dat de online experience geoptimaliseerd is voor alle apparaten, sinds steed meer gebruikers gebruik maken van mobiele apparaten.
                        </p>
                        <h3>Conclusie</h3>
                        <p>Na het literatuuronderzoek is er een beter begrip ontstaan van het onderwerp Online Experiences. Dit is van belang geweest voor het vervolg van het project. De antwoorden op de onderzoeksvragen van de deelvragen hebben inzichten en richting gegeven de start van het project. Aan de hand hiervan is er een trend analyse gemaakt naar web-technieken gerelateerd aan een online experiences.</p>
                        <br />
                        <a className={sec_style.inbetween_button02}
                            href="/documents/Online_Experience_research.pdf"
                            target="_blank">
                            Onderzoeks Document
                        </a>
                    </article>
                    <img src="/illustrations/undraw_Freelancer_re_irh4.svg" />
                </div>

            </main>
        </>
    );
}
//export page-elements
export default article;