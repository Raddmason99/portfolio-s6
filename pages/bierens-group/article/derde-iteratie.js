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
                <title>Bierens Group | Derde Iteratie</title>
            </Head>
            <main className="body_container">

                <div className={article_style.nav_container}>
                    <nav className={article_style.nav_block}>
                        <p onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeft} />&nbsp;Back</p>
                    </nav>
                </div>

                <div className={article_style.art_container}>
                    <article>
                        <h2>Derde Iteratie</h2>
                        <p>Naar aanleiding van de resultaten en feedback uit het gebruikersonderzoek zijn er aanpassingen gedaan aan het functionerende prototype.</p>
                        <h3>Aanpak</h3>
                        <p>Uit het gebruikersonderzoek is naar voren dat de versie met cijfers het meeste aansprak. Uit de feedback die vervolgens gegeven is, kwam naar voren dat de cijfers echter niet altijd goed zichtbaar waren. Dit komt door het contract (donkere achtergrond, donkere cijfers). Er is om die reden een witte stroke om de cijfers gemaakt, waardoor de cijfers bij donkere en lichte achtergronden, prima zichtbaar blijven.</p>
                        <h3>Resultaat</h3>
                        <p>Het resultaat is een nieuwe versie met daarin verwerkt de feedback vanuit het gebruikersonderzoek.</p>
                        <h3>Conclusie</h3>
                        <p>Wat rest is het samenvoegen van de verschillende scene’s en daarin de verschillende ontwerpen, om zo één geheel te creëren. </p>
                        <br />
                        <a className={sec_style.inbetween_button02}
                            href="http://demo.fluxpuck.com/demo3.html"
                            target="_blank">
                            Derde Iteratie
                        </a>
                    </article>
                    {/* <img src="/illustrations/undraw_design_team_af2y.svg" /> */}
                    <iframe src="http://demo.fluxpuck.com/demo3.html" title="First Iteration"></iframe>
                </div>

            </main>
        </>
    );
}
//export page-elements
export default article;