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
                <title>Bierens Group | Trend Analyse</title>
            </Head>
            <main className="body_container">

                <div className={article_style.nav_container}>
                    <nav className={article_style.nav_block}>
                        <p onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeft} />&nbsp;Back</p>
                    </nav>
                </div>

                <div className={article_style.art_container}>
                    <article>
                        <h2>Trend Analyse</h2>
                        <p>Na het doen van literatuuronderzoek naar het hoofd onderwerp, online experience, is er een trend analyse uitgevoerd om te achterhalen wat de huidige trends zijn met betrekking tot web development. Dit onderzoek geeft meer inzicht in de trends en technieken die eventueel te gebruiken zijn voor het project.</p>
                        <h3>Aanpak</h3>
                        <p>Verschillende interessante trends binnen web-development zijn doormiddel van literatuuronderzoek verzameld en onderzocht. Vervolgens zijn hier de meest relevante trends voor het project van Bierens group verzameld en ge-evalueerd. Verder is er een trend canvas gemaakt van de meest relevante trend. Deze trend, animatie, bestaat uit twee relevante trends: micro-animatie en parallex effect.</p>
                        <h3>Resultaat</h3>
                        <p>Animaties en Augmented Reality zijn relevante trends voor het project van Bierens group. Echter valt Augmented Reality niet binnen de scope van het project. Het is een complexe techniek, waarbij specifieke hardware en software tools voor nodig zijn. Er is daarom gekozen voor de twee trends binnen Animatie: Parallax effect en Micro-animaties.
                            Deze twee trends worden samen gevoegd in het trend canvas Animatie. Het is een trend die al door grote bedrijven en platformen als Facebook, Twitter en Apple wordt toegepast. Denk hierbij aan het inladen van generated content of het weergeven van product(en).
                            Er zijn echter nog veel statische websites waarbij de gebruikers ervaring verbeterd kan worden doormiddel van animatie. Dit kan eenvoudig toegepast worden op action-call buttons en feedback elementen, maar ook op product elementen.
                        </p>
                        <h3>Conclusie</h3>
                        <p>Uit de trend analyse zijn relevante en toepasbare web technieken naar voren gekomen. Aan de hand van deze trends is een concept en technisch prototype ontwikkeld en gepresenteerd aan Bierens Group.</p>
                        <br />
                        <a className={sec_style.inbetween_button02}
                            href="/documents/Trend_Analyse.pdf"
                            target="_blank">
                            Trend Analyse
                        </a>
                    </article>
                    <ImageModalBox>
                        <img src="/documents/Trend_Canvas.png" />
                    </ImageModalBox>
                </div>

            </main>
        </>
    );
}
//export page-elements
export default article;