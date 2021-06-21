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
                <title>Bierens Group | Samenvatting Brainstorm</title>
            </Head>
            <main className="body_container">

                <div className={article_style.nav_container}>
                    <nav className={article_style.nav_block}>
                        <p onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeft} />&nbsp;Back</p>
                    </nav>
                </div>

                <div className={article_style.art_container}>
                    <article>
                        <h2>Brainstorm Samenvatting</h2>
                        <p>Naar aanleiding van de eerste concept presentaties zijn er twee brainstorm sessies gehouden. De eerste van de twee, digitaal, betrof de presentatie van de verschillende technische concepten. In de tweede brainstorm, op locatie bij Bierens Group, hebben we verder gebrainstormd over het concept en de uitwerking hiervan.</p>
                        <h3>Aanpak</h3>
                        <p>In een digitale (Teams) meeting met Laurens en Natasha van Bierens Group zijn de verschillende individuele technische concepten besproken. Hierin zijn de verschillende concepten gepresenteerd en heeft Bierens Group hun voorkeur uitgesproken. Er is vervolgens afgesproken een fysieke meeting georganiseerd op kantoor bij Bierens Group. Het idee was om hier verder te brainstorm over de invulling van het concept.
                            In de tweede fysieke meeting met Laurens, Natasha en een media designer van Bierens Group in deze meeting is er gebrainstormd over de mogelijke invullingen van het concept. Het definitieve concept is vast-gelegd: Hoe dit concept uitgewerkt gaat worden en welke elementen het gaat bevatten. Er zijn hiervoor verschillende thema’s beschreven en gekoppeld aan ruimtes binnen het kantoor van Bierens Group.
                            Verder is gesproken over een vaste route (verhaallijn) voor de gebruiker of het vrij laten van de gebruiker. Er is hierbij gekozen om de gebruiker vrij te laten. Hoe dit uitgewerkt gaat worden staat echter nog niet vast. Dit kan doormiddel van een lift met verschillende knoppen naar etages (scenes), een lange gang met verschillende deuren of een andere uitwerking.
                        </p>
                        <h3>Resultaat</h3>
                        <p>Laurens en Natasha hebben de voorkeur voor een hybride concept van de concepten van Maximilian en Steven samen. Dit houdt in een combinatie van een 360 graden (panorama) scene en een concept waarin door verschillende proposities
                            Bij Bierens Group is er gebrainstormd over de invulling van het concept. Hierbij is een media-designer van Bierens Group aangesloten. Er is bedacht om doormiddel van 360 graden / panorama afbeeldingen van het kantoor Bierens Group een kijkje in de keuken te geven. Door verschillende scenes te kiezen en te koppelen aan ruimtes binnen het kantoor, kan er een online experience gerealiseerd worden.
                        </p>
                        <h3>Conclusie</h3>
                        <p>De brainstorm-sessies waren zeer interessant en gaven veel nieuwe inzichten. Het gaf na een lange tijd van wisselende ideeen een duidelijke richting in het project. Het was daarbij zeer waardevol dat Bierens Group (Laurens, Natasha en de media designer) actief mee-deden aan de brainstorm.
                            Vanuit de afgesproken punten zijn er 360-graden/panorama afbeeldingen gemaakt. Ieder groupslid heeft een scene met daarbij behorende ruimte gekozen en uitgewerkt tot een prototype.
                        </p>
                        <br />
                        <a className={sec_style.inbetween_button02}
                            href="/documents/Samenvatting_Brainstorm.pdf"
                            target="_blank">
                            Samenvatting Brainstorm
                        </a>
                    </article>
                    <img src="/illustrations/undraw_teamwork_hpdk.svg" />
                </div>

            </main>
        </>
    );
}
//export page-elements
export default article;