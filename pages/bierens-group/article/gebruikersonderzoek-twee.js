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
                <title>Bierens Group | Gebruikersonderzoek #2</title>
            </Head>
            <main className="body_container">

                <div className={article_style.nav_container}>
                    <nav className={article_style.nav_block}>
                        <p onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeft} />&nbsp;Back</p>
                    </nav>
                </div>

                <div className={article_style.art_container}>
                    <article>
                        <h2>Gebruikersonderzoek #2</h2>
                        <p>Door andere projectleden is er een nieuwe iteratie op het prototype ontwikkeld. In dit prototype is een navigatie menu toegevoegd aan de prototype. Er is een gebruikersonderzoek gemaakt met als doel om de ontworpen navigatie te testen en valideren onder de gebruikers.</p>
                        <h3>Aanpak</h3>
                        <p>Om te kunnen achterhalen of de ontwikkelde navigatie en het navigatie menu toereikend zijn, is er een gebruikersonderzoek opgezet. Hierin wordt onderzocht of de gebruiker de navigatie kan vinden; of gebruikers een specifiek onderdeel kunnen vinden; of de verschillende ruimtes vindbaar zijn.
                            Het onderzoek wordt afgenomen onder leeftijdsgenoten, een groep tussen 16 en 30 jaar oud. Deze groep heeft geen directe affiniteit met de opdracht, maar kan wel inzicht geven in de kwaliteit van het ontwerp.
                            Er is gebruik gemaakt van de online gebruikersonderzoek-tool Maze. Hierin zijn verschillende blokken aangemaakt waarin de gebruiker wordt verzocht een taak uit te voeren en vervolgens enkele vragen te bentwoorden. Het onderzoek bestaat uit informatie, twee opdrachten en vier vragen.
                        </p>
                        <h3>Resultaat</h3>
                        <p>Uit de resultaten van het gebruikersonderzoek zien we dat 71% een 7 tot 9 geven voor de vindbaarheid van de navigatie. Dat is een gemiddelde score van 7.2, van de 0 tot 9 punten.
                            Verder zien we dat 86% van de gebruikers een specifiek onderdeel zelfstandig kan vinden en dat het overgroten merendeel de juiste kamers markeerd bij de vraag naar welke twee scenes je vanuit de “History Room” kan navigeren.
                            Mensen vinden de lift-knop en navigatie erg gaaf en realistisch. Er is verder geen nuttige feedback binnen gekomen.
                        </p>
                        <h3>Conclusie</h3>
                        <p>Uit de onderzoeksresultaten valideren de navigatie features in de nieuwe iteratie en bevestigen de gemaakte ontwerpkeuzes. De navigatie is goed vindbaar en gebruikers kunnen zich navigeren door de verschillende scenes. Ook de informatie is goed vindbaar.</p>
                        <br />
                        <a className={sec_style.inbetween_button02}
                            href="Gebruikeronderzoek_Navigatie.pdf"
                            target="_blank">
                            Gebruikersonderzoek Document
                        </a>
                        <a className={sec_style.inbetween_button02}
                            href="Resultaten_Gebruikeronderzoek_twee.pdf"
                            target="_blank">
                            Gebruikersonderzoek Resultaten
                        </a>
                    </article>
                    <img src="/documents/Tweede_gebruikersonderzoek_resultaat.png" />
                </div>

            </main>
        </>
    );
}
//export page-elements
export default article;