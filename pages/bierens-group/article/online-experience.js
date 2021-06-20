//import NextJS dependencies
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
                        <p>Met Laurens en Natasha van Bierens Group is er een gesprek geweest betreffende de inhoud van de opdracht. Aan de hand de opdracht analyse uit het gezamenlijke project document is er door mij literatuur onderzoek gedaan naar het hoofd-onderwerp van de opdracht, Online Experience. Dit onderzoek heeft als doel om te achterhalen wat een online experience is; welke verschillende soorten online experiences er zijn; wat de voordelen van een online experience zijn; wat kenmerken van een goede online experience zijn.</p>
                        <h3>Aanpak</h3>
                        <p>Door het beantwoorden van de deelvragen middels literatuuronderzoek, kan de hoofdvraag beantwoord worden.
                            In het onderzoek is er begonnen met kijken naar wat de term online experience inhoudt. Vanuit deze term is er gekeken naar verschillende soorten online experiences en wat deze verschillende soorten inhouden. Vervolgens ik er onderzocht welke voordelen een online experience kan bieden en welke kenmerken horen bij een goede online experience.
                        </p>
                        <h3>Resultaat</h3>
                        <p>Er zijn verschillende online experiences. Met een online experience kan een bedrijf een product of dienst promoten, of kan er een specifieke ervaring overgebracht worden op de gebruiker(s). Volgens een onderzoek van Event Markting Institute & Mosaic heeft 74% van de gebruikers een positievere mening na een positieve (online) experience. Daarbij komt kijken dat mensen met een positieve ervaring dit graag willen delen, waarmee ze (in)direct andere overtuigen van het bedrijf of de organisatie.
                            Goede online experiences hebben een goede interactie tussen de experience en de gebruiker, waardoor de gebruiker een meer immersive experience heeft.
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
                    <img src="/illustrations/undraw_design_team_af2y.svg" />
                </div>

            </main>
        </>
    );
}
//export page-elements
export default article;