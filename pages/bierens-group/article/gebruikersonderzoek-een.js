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
                <title>Bierens Group | Gebruikersonderzoek #1</title>
            </Head>
            <main className="body_container">

                <div className={article_style.nav_container}>
                    <nav className={article_style.nav_block}>
                        <p onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeft} />&nbsp;Back</p>
                    </nav>
                </div>

                <div className={article_style.art_container}>
                    <article>
                        <h2>Gebruikers Onderzoek #1</h2>
                        <p>Aan de hand van de tweede iteratie, het eerste functionele prototype, is er een gebruikersonderzoek gedaan. In dit onderzoek is getest welke versie de voorkeur schaft en of er nog verdere feedback verschaft kan worden.</p>
                        <h3>Aanpak</h3>
                        <p>Naast het functionerende prototypen is een tweede prototype ontwikkeld met daarin andere hotspots. Hotspots zijn de gemarkeerde plekken op de 360-graden/panorama afbeelding. In het tweede prototype is het ontwerp van de hotspots veranderd van cirkels naar nummers. Het idee is dat numbers eenvoudiger te onthouden zijn, waardoor mensen alle voordelen van Bierens Group advocaten incasso kunnen vinden, zonder daarbij in herhaling te vallen en dezelfde voordelen openen.
                            De test is online uitgevoegd doormiddel van de online usability-test tool Maze en heeft zich niet gericht op een specifieke doelgroep. Iedereen met interesse heeft het onderzoek in kunnen vullen.
                        </p>
                        <h3>Resultaat</h3>
                        <p>Uit het gebruikersonderzoek kan geconcludeerd worden dat de iteratie met cijfers de voorkeur heeft, boven de iteratie met cirkels. Verder geven test-personen aan dat de cijfers door het contrast (donkere cijfers, donkere achtergrond), niet altijd even zichtbaar is.</p>
                        <h3>Conclusie</h3>
                        <p>Naast de A-B test heeft het onderzoek ook nog bruikbare feedback opgeleverd. De resultaten zijn verwerkt in een volgende iteratie.</p>
                        <br />
                        <a className={sec_style.inbetween_button02}
                            href="/documents/Project_document.pdf"
                            target="_blank">
                            Eindproduct
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