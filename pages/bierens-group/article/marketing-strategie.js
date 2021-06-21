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
                <title>Bierens Group | Marketing Strategie</title>
            </Head>
            <main className="body_container">

                <div className={article_style.nav_container}>
                    <nav className={article_style.nav_block}>
                        <p onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeft} />&nbsp;Back</p>
                    </nav>
                </div>

                <div className={article_style.art_container}>
                    <article>
                        <h2>Marketing Strategie</h2>
                        <p>Op basis van de Business Model Canvas is er een Marketing strategie ontwikkeld om het bedrijf en zijn product onder de man te brengen. In de strategie worden er een voorstel gemaakt voor mogelijk middelen, om het product (en het bedrijf) op de markt te zetten.</p>
                        <h3>Aanpak</h3>
                        <p>Het product en de doelgroep zijn beschreven. Vervolgens zijn er aan de hand van het business model canvas doelstelling(en) beschreven. Aan de hand van literatuuronderzoek is de propositie en de positionering in de markt omschreven.
                            Er is vervolgens gekeken naar mogelijke concurrenten en hun aanpak en waar er dus eventueel kansen liggen.
                            Door meer literatuuronderzoek is er een marketing strategie beschreven, gebaseerd op verschillende middelen en kanalen.
                        </p>
                        <h3>Resultaat</h3>
                        <p>Het resultaat is een multi-channel marketing strategie, waarbij er voornamelijk gefocust wordt op het opbouwen van een klanten bestand en het promoten van bedrijf en product doormiddel van de Google Ranking, email-marketing en adverteren via Google Ads en Facebook Ads.</p>
                        <br />
                        <a className={sec_style.inbetween_button02}
                            href="/documents/Marketing_Strategie.pdf"
                            target="_blank">
                            Marketing Strategie
                        </a>
                    </article>
                    <img src="/illustrations/undraw_Analytics_re_dkf8.svg" />
                </div>

            </main>
        </>
    );
}
//export page-elements
export default article;