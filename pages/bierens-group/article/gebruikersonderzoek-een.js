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
                        <p>Tijdens de tweede iteratie zijn er twee versies ontwikkeld, beide met aangepaste hotspots. De ene versie beschikt over cirkels, de andere versie over cijfers.
                            De aanname is dat nummers eenvoudiger te onthouden zijn, waardoor mensen alle voordelen van Bierens Group advocaten incasso eenvoudiger kunnen vinden, zonder daarbij in herhaling te vallen en dezelfde voorkeuren meerdere keren openen.
                            Er is een testplan opgezet, met daarin de doel van het onderzoek, de onderzoeksvragen, de doelgroep en meer.
                            De test is online uitgevoegd doormiddel van de online usability-test tool Maze. De test-personen hebben een korte uitleg van de opdracht en het concept gekregen, waarna ze verzocht wordt het prototype te testen. Vervolgens hebben ze een voorkeur keuze kunnen maken, waarna de A-B test gevalideerd wordt door een card-sorting. Hierbij wordt er gekeken of de gebruikers weldegelijk het prototype uitgeprobeerd hebben. Als laatste wordt er nog verzocht feedback achter te laten.
                        </p>
                        <h3>Resultaat</h3>
                        <p>Uit het gebruikersonderzoek kan geconcludeerd worden dat de iteratie met cijfers de voorkeur heeft, boven de iteratie met cirkels. Verder geven test-personen aan dat de cijfers door het contrast (donkere cijfers, donkere achtergrond), niet altijd even zichtbaar is.</p>
                        <h3>Conclusie</h3>
                        <p>Naast de A-B test heeft het onderzoek ook nog bruikbare feedback opgeleverd. De resultaten zijn verwerkt in een volgende iteratie.</p>
                        <br />
                        <a className={sec_style.inbetween_button02}
                            href="/documents/Gebruikeronderzoek_Hotspots.pdf"
                            target="_blank">
                            Gebruikersonderzoek Document
                        </a>
                        <a className={sec_style.inbetween_button02}
                            href="/documents/Resultaten_Gebruikeronderzoek_een.pdf"
                            target="_blank">
                            Gebruikersonderzoek Resultaten
                        </a>
                    </article>
                    <ImageModalBox>
                        <img src="/documents/Eerste_gebruikersonderzoek_resultaat.png" />
                    </ImageModalBox>
                </div>

            </main>
        </>
    );
}
//export page-elements
export default article;