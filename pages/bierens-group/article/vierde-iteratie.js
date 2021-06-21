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
                <title>Bierens Group | Vierde Iteratie</title>
            </Head>
            <main className="body_container">

                <div className={article_style.nav_container}>
                    <nav className={article_style.nav_block}>
                        <p onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeft} />&nbsp;Back</p>
                    </nav>
                </div>

                <div className={article_style.art_container}>
                    <article>
                        <h2>Vierde Iteratie</h2>
                        <p>Naar aanleiding van de derde iteratie en de resultaten van individuele gebruikersonderzoeken, zijn de verschillende deelproducten, of beter gezegd deel-prototypen, samengevoegd tot één prototype.</p>
                        <h3>Aanpak</h3>
                        <p>Door groepsgenoten is er vanuit één eerste scene (de “Garden”) een development omgeving opgezet in FHICT Gitlab. Vanuit hier heb ik de omgeving gecloned en heb ik mijn ruimte toegevoegd aan het prototype. Hierbij heb ik enkel nieuwe hotspots aangemaakt, die doorlussen naar volgende en vorige scenes.
                            Vervolgens is doormiddel van Photoshop de 360-graden/panorama afbeelding aangepast, zijn de kleuren verbeterd en zijn er nieuwe highlights toegepast. Ondanks mijn gebruikersonderzoek, is er binnen het project gekozen voor deze nieuwe highlights. Vervolgens is de nieuwe afbeelding ingelaten, zijn mijn cijfers veranderd voor lege, klikbare elementen en is het in zijn geheel gepusht naar de Git omgeving.
                        </p>
                        <h3>Resultaat</h3>
                        <p>Het resultaat is een functionerend prototype van het volledige concept. </p>
                        <h3>Conclusie</h3>
                        <p>Er ontbreekt in deze iteratie nog een plattegrond, waarop de gebruiker kan zien in welke ruimte hij of zij zich bevind. Hierbij kan eventueel aangegeven worden wat elke kamer inhoudt, om zo een verwachting te scheppen voor gebruiker.</p>
                        <br />
                        <a className={sec_style.inbetween_button02}
                            href="http://demo.fluxpuck.com/demo4/index.html"
                            target="_blank">
                            Vierde Iteratie
                        </a>
                    </article>

                    <ImageModalBox>
                        <img src="/documents/Derde_Iteratie.png" />
                    </ImageModalBox>

                </div>

            </main>
        </>
    );
}
//export page-elements
export default article;