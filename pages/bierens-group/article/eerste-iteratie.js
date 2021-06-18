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
                <title>Bierens Group | Eerste Iteratie</title>
            </Head>
            <main className="body_container">

                <div className={article_style.nav_container}>
                    <nav className={article_style.nav_block}>
                        <p onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeft} />&nbsp;Back</p>
                    </nav>
                </div>

                <div className={article_style.art_container}>
                    <article>
                        <h2>Eerste Iteratie</h2>
                        <p>Naar aanleiding van de trend analyse zijn er individueel concepten ontwikkeld. Er is onderling afgesproken om de concepten te ontwikkelen in kleine prototypen om zo de technische mogelijkheden van het concept duidelijk te kunnen maken aan de opdrachtgever, Bierens Group.</p>
                        <h3>Aanpak</h3>
                        <p>In de trend analyse komen micro-animaties en het parrallex effect naar boven als twee meest relevantste trends voor het Bierens Group project.
                            Aan de hand van deze trends is er inspiratie gezocht in andere projecten en is er een technisch prototype ontwikkeld.

                            In dit technische prototype is een animatie gecreëerd doormiddel van verschillende CSS technieken. Er is een geanimeerd karakter dat lijkt te lopen; twee achtergronden die bewegen in verschillende snelheden, en daarmee een parallax effect creëren.
                            Vervolgens is het technische prototype gepresenteerd aan de opdrachtgever.
                        </p>
                        <h3>Resultaat</h3>
                        <p>LINK NAAR PROTOTYPE</p>
                        <h3>Conclusie</h3>
                        <p>Door gebrek aan tijd is het een minimaal prototype geworden. Er heeft (te)veel tijd gezeten in het uitzoeken van de werking van deze animatie technieken.
                            Doormiddel van presentatie en uitleg is het concept toch goed overgekomen op de opdrachtgever. De uitkomsten van de concept presentatie(s) zijn te vinden bij Samenvatting Brainstorm.
                        </p>
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