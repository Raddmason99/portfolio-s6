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
                <title>Bierens Group | Business Canvas</title>
            </Head>
            <main className="body_container">

                <div className={article_style.nav_container}>
                    <nav className={article_style.nav_block}>
                        <p onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeft} />&nbsp;Back</p>
                    </nav>
                </div>

                <div className={article_style.art_container}>
                    <article>
                        <h2>Business Model Canvas</h2>
                        <p>Er is een fictief bedrijf rond het 360-graden/panorama verhaal bedacht en beschreven in een business model canvas. Hierin worden alle key-facetten van het bedrijf beschreven.</p>
                        <h3>Aanpak</h3>
                        <p>De negen elementen van een business model canvas (klantsegement, waardepropositie, kanalen, klantenrelaties, inkomstenstromen, key resources, kernactiviteiten, key partners en kostenstructuur) zijn beschreven aan de hand van literatuur onderzoek.
                            Vervolgens zijn de sterke en zwakke punten van het bedrijf geanalyseerd en is er een conclusie getrokken.
                        </p>
                        <h3>Resultaat</h3>
                        <p>Het resultaat is een bedrijfs analyse waaruit geconcludeerd kan worden dat het bedrijf niet rendabel kan zijn zonder key-partners. Dit komt omdat er vanuit de markt geen directe vraag is naar het specifieke product, en er dus actief klanten gewerft moeten worden.</p>
                        <h3>Conclusie</h3>
                        <p>Een bedrijf op één niche product is zonder key partners niet rendabel genoeg. Toch is er een kans om de markt en eventuele klanten te bereiken. Hoe die klanten eventueel gewerft kunnen worden, wordt beschreven in de marketing strategie.</p>
                        <br />
                        <a className={sec_style.inbetween_button02}
                            href="/documents/Business_Model_Canvas.pdf"
                            target="_blank">
                            Business Model Canvas
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