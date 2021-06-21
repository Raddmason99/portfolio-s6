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
                <title>Bierens Group | Tweede Iteratie</title>
            </Head>
            <main className="body_container">

                <div className={article_style.nav_container}>
                    <nav className={article_style.nav_block}>
                        <p onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeft} />&nbsp;Back</p>
                    </nav>
                </div>

                <div className={article_style.art_container}>
                    <article>
                        <h2>Tweede Iteratie</h2>
                        <p>Vanuit de brainstorm sessies met Bierens Group zijn de verschillende scenes en ruimtes bedacht verdeeld over de groepsleden. Hierbij is er gekozen dat ik mij bezig houdt met de 7 voordelen van Bierens Group advocaten incasso in de Comic Wall kamer.</p>
                        <h3>Aanpak</h3>
                        <p>Er is op locatie een 360-graden/panorama afbeelding gemaakt van de Comic Wall ruimte. Deze afbeelding is vervolgens in panorama bewerkt in photoshop om de verkeerde stitches (waar de afbeelding aan elkaar geplakt wordt) te corrigeren.
                            Vervolgens is doormiddel van het pannellum framework hotspots op de 360-graden/panorama afbeeldingen geplaatst en zijn deze hotspots gekoppeld aan html overlay elementen met daarop informatie omtrend de 7 voordelen van Bierens Group advocaten incasso. Het pannellum framework is gekozen uit een kort onderzoek van een van de projectleden, waarbij het naar voren kwam als licht (voor de inladen op de website) en simpel in gebruik en programmeren.
                            Er zijn twee versies ontwikkeld. Één versie waarbij er gebruik gemaakt wordt van cirkels bij de hotspots, en een tweede versie waarbij er gebruik gemaakt word van cijfers.
                        </p>
                        <h3>Resultaat</h3>
                        <p>Het resultaat is twee versies van een minimaal werkend prototype.</p>
                        <h3>Conclusie</h3>
                        <p>De tweede iteratie betreft een werkend prototype, met daarin de belangrijkste functies, zoals de locatie van de hotspots, de automatische zoom functie en een overlay die tevoorschijn komt met informatie. De volgende stap was het testen van verschillende versies doormiddel van een A-B gebruikerstest.</p>
                        <br />
                        <a className={sec_style.inbetween_button02}
                            href="http://demo.fluxpuck.com/demo1.html"
                            target="_blank">
                            Versie 1 - Tweede Iteratie
                        </a>
                        <a className={sec_style.inbetween_button02}
                            href="http://demo.fluxpuck.com/demo2.html"
                            target="_blank">
                            Versie 2 - Tweede Iteratie
                        </a>
                    </article>
                    {/* <img src="/illustrations/undraw_design_team_af2y.svg" /> */}
                    <iframe src="http://demo.fluxpuck.com/demo1.html" title="First Iteration"></iframe>
                </div>

            </main>
        </>
    );
}
//export page-elements
export default article;