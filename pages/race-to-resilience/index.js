//import NextJS dependencies
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

//import other dependencies
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import ModalBox from '../../components/Modal'
import ImageModalBox from '../../components/ImageModal'

//import styling
import frst_style from '../../styles/First.module.scss'

//construct return page-elements
const First_page = () => {

    //setup routing
    const router = useRouter()
    const routePath = router.asPath.split('#')[1]

    //setup the dropbox modal
    const [showQuestions, toggleQuestions] = useState(false);
    const [showPrinciples, togglePrinciples] = useState(false);
    const [showBrainstorm, toggleBrainstorm] = useState(false);
    const [showSitemap, toggleSitemap] = useState(false);
    const [showPositives, togglePositives] = useState(false);
    const [showHeuristic, toggleHeuristic] = useState(false);
    const [showUserflow, toggleUserflow] = useState(false);
    const [showTrends, toggleTrends] = useState(false);

    //video player options
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
            <Head>
                <title>Portfolio | Race to Resilience</title>
            </Head>
            <main className="body_container">

                <div className={frst_style.nav_container}>
                    <nav className={frst_style.nav_block}>
                        <Link href="#inleiding"><p className={(routePath == 'inleiding') ? frst_style.nav_block_selected : null}>Inleiding</p></Link>
                        <Link href="#proces"><p className={(routePath == 'proces') ? frst_style.nav_block_selected : null}>Proces</p></Link>
                        <Link href="#product"><p className={(routePath == 'product') ? frst_style.nav_block_selected : null}>Product</p></Link>
                        <Link href="#conclusie"><p className={(routePath == 'conclusie') ? frst_style.nav_block_selected : null}>Conclusie</p></Link>
                        <Link href="#reflectie"><p className={(routePath == 'reflectie') ? frst_style.nav_block_selected : null}>Reflectie</p></Link>
                    </nav>
                </div>


                <section className={frst_style.intro_container}>
                    <div className={frst_style.intro_container_inherit}>
                        <div className={frst_style.intro_container_textbox}>
                            <h2>De ontwikkeling van een gebruiksvriendelijke mobiele interface voor een kennisplatform</h2>
                            <p>United Nation's Race to Resilience Challenge</p>
                        </div>
                    </div>
                </section>



                <section id="inleiding" className={frst_style.inleiding_container}>

                    <article>
                        <h2>Inleiding</h2>
                        <p>
                            De Ecodorp Boekel initiatiefnemers, Ad Vlems en Ronald Hazelzet, hebben een kennisplatform, Global Goals Community, waarop gebruikers oplossingen kunnen bieden die betrekking hebben tot (één van) de 17 ontwikkelingsdoelen van de Verenigde Naties.
                            <br />
                            <br />
                            Origineel was de opdracht om de huidige Global Goals Community te analyseren en optimaliseren voor mobiel gebruik. Echter startte de Verenigede Naties met een uitdaging aan, de Race to Resilience, waaraan de opdrachtgevers graag wilde deelnemen. Hierdoor werd de opdracht gewijzigd. De nieuwe opdracht vormde zich tot het opzetten van een high-fidelity prototype van een mobiel kennisplatform voor het delen van oplossingen met betrekking tot klimaat verandering.
                        </p>
                    </article>

                    <article>
                        <h2>De opdracht</h2>
                        <p>
                            Het nieuwe doel van de opdracht is om een kennisplatform te ontwerpen en uit te werken tot, minimaal, een functionerende prototype. Dit kennisplatform maakt dan kans om door de UN gebruikt te worden als hun Race to Resilience tool.
                        </p>
                        <h3>Eisen aan de Opdracht</h3>
                        <p>
                            Eisen aan de nieuwe opdracht hebben betrekking tot mobile-first en het bieden van een degelijke mobiele gebruikers ervaring. Verder heeft het als doel om de applicatie internationaal aan te bieden, alles dient daarom in het Engels gemaakt te worden.
                        </p>
                        <h3>MoSCoW</h3>
                        <p>
                            Om structuur aan het project te geven zijn de oplever-doelen omschreven doormiddel van een MoSCoW methode. Hierin staan de belangrijkste zaken die het minimun viable product (MPV) zou moeten bevatten.
                        </p>

                        <div className={frst_style.research_box}>
                            <div className={frst_style.moscow_container}>
                                <p className={frst_style.moscow_title}><b>Must haves</b></p>
                                <p className={frst_style.moscow_text}>
                                    - Digitaal platform onderzoek <br />
                                    - Trendonderzoek <br />
                                    - Technisch onderzoek <br />
                                    - Doelgroep onderzoek <br />
                                    - Huidige website analyse <br />
                                    - Mobile-first ontwerp <br />
                                    - Mobile-first prototypes <br />
                                </p>
                                <p className={frst_style.moscow_title}><b>Should haves</b></p>
                                <p className={frst_style.moscow_text}>
                                    - Scrum methode <br />
                                    - User tests <br />
                                </p>
                                <p className={frst_style.moscow_title}><b>Could haves</b></p>
                                <p className={frst_style.moscow_text}>
                                    - Installeerbare (PWA) <br />
                                    - Offline mogelijkheden <br />
                                </p>
                                <p className={frst_style.moscow_title}><b>Won't haves</b></p>
                                <p className={frst_style.moscow_text}>
                                    - Native Applicatie bouwen <br />
                                    - Marketing <br />
                                </p>
                                <br />
                            </div>
                            <img src="/illustrations/undraw_home_screen_4n7s.svg" />
                        </div>
                        <br />
                    </article>
                </section>




                <section className={frst_style.inbetween01_container}>
                    <div className={frst_style.inbetween01_box}>
                        <a className={frst_style.inbetween_button01}
                            href="/documents/Leeswijzer_EcoDorp_-_Mathijs_van_der_Kuijp.pdf"
                            target="_blank">
                            Leeswijzer
                        </a>
                        <a className={frst_style.inbetween_button02}
                            href="/documents/Individuele_Analyse_Opdracht.pdf"
                            target="_blank">
                            Analyse Opdracht
                        </a>
                        <a className={frst_style.inbetween_button02}
                            href="/documents/Project_document.pdf"
                            target="_blank">
                            Project Document
                        </a>
                    </div>
                </section>




                <section id="proces">
                    <article>
                        <h2>Aanpak</h2>
                        <p>
                            Het project is doorlopen in zes verschillende fases: orientatiefase, onderzoekfase, conceptfase, testfase, prototypefase en overdrachtfase. Deze fases zijn onder te verdelen in drie processen: analyseproces, realisatieproces en het meetproces.
                        </p>
                        <p>
                            Tijdens het project is het <Link href="/misc/woordenlijst"><span className="underline">DOT-framework</span></Link> gehanteerd, meer informatie over dit framework staat op <Link href="https://ictresearchmethods.nl/The_DOT_Framework">ictresearchmethods</Link>.
                        </p>
                    </article>
                </section>


                <section id="orientatie">
                    <article>
                        <div className={frst_style.process_header}>
                            <h3>Oriëntatiefase</h3>
                            <img src="/dot_framework/100px-Logo-library.png" />
                        </div>
                        <p>
                            Tijdens de oriëntatiefase is er verdieping gezocht in de opdracht. Een kennisplatform maken met betrekking tot oplossingen voor de klimaat verandering. Om meer inzicht te krijgen in de opdracht is er een <Link href="/documents/Individuele_Analyse_Opdracht.pdf"><u>individuele opdracht analyse</u></Link> gemaakt. Aan de hand van deze analyse zijn de hoofd- en deelvragen opgesteld.
                        </p>
                    </article>
                </section>

                <section>
                    <div id="vragen_block" className={frst_style.researchquestions_header} onClick={() => toggleQuestions(!showQuestions)} >
                        <p>Bekijk de hoofd- en deelvragen</p>
                    </div>
                    {showQuestions &&
                        <div className="vragen_box">
                            <h3>“HOE ONTWIKKEL JE EEN GEBRUIKSVRIENDELIJKE MOBIELE INTERFACE VOOR EEN KENNISPLATFORM, WAARBIJ REKENING WORDT GEHOUDEN MET HET VOLGEN, DELEN EN REAGEREN OP USER-GENERATED CONTENT?”</h3>
                            <br />
                            <p><b>1. Wat houdt een kennisplatform in?</b></p>
                            <p>1.1 Wat zijn kenmerken van een kennisplatform?</p>
                            <br />
                            <p><b>2. Wat zijn de huidige trends voor mobiele interfaces, met enige betrekking tot kennis-platforms?</b></p>
                            <p>2.1 Waar liggen er kansen voor verbetering?</p>
                            <br />
                            <p><b>3. Wie gaat gebruik maken van de Global Goals Community - Race to Resilience website?</b></p>
                            <p>3.1 Waar komen deze gebruikers vandaan?</p>
                            <p>3.2 Wat komen ze op de website doen?</p>
                            <br />
                            <p><b>4. Hoe vertaal je hjet concept naar een mobiele interface?</b></p>
                            <p>4.1 Wat zijn kwaliteiten van een goede mobiele interface?</p>
                            <br />
                            <p><b>5. Hoe ontwikkel je een mobiele interface?</b></p>
                            <p>5.1 Welke technieken kunnen gebruikt worden voor een mobiele interface?</p>
                            <p>5.2 Is een PWA benodigd voor de doelen van de opdrachtgever?</p>
                            <br />
                            <p><b>6. Hoe kan de "user-generated content" het beste gemodereerd worden?</b></p>
                            <p>6.1 Hoe doen andere kennisplatformen dit?</p>
                        </div>}
                </section>

                <section id="onderzoek">
                    <article>
                        <div className={frst_style.process_header}>
                            <h3>Onderzoekfase</h3>
                            <img src="/dot_framework/100px-Logo-library.png" />
                        </div>
                        <div className={frst_style.research_box}>
                            <div>
                                <p>
                                    In de onderzoeksfase is er onderzoek gedaan naar de opgestelde deelvragen, doormiddel van literatuuronderzoek. Mijn onderzoeken hebben betrekking tot deelvraag 1 en deelvraag 4. Wat houdt een kennisplatform in? En hoe vertaal je het concept naar een mobiele interface?.
                                </p>
                                <p>
                                    Voor het doen van onderzoek is er een <Link href="/documents/Onderzoeksopzet.pdf"><u>onderzoek-opzet</u></Link> gemaakt. Hierin zijn de onderzoeksmethode en uitvoering beschreven. Onderzoek wordt gevormd vanuit een vraag. Deze vraag wordt opgedeeld in kleinere deelvragen. Door deelvragen eerst groot/breed te nemen en vervolgens de vragen steeds verdiepender te stellen, als het waren als een trechter, kan de deelvraag het beste beantwoord worden.
                                </p>
                            </div>
                            <img src="/illustrations/undraw_Process_re_gws7.svg" />
                        </div>

                        <h4>Wat houdt een kennisplatform in?</h4>
                        <p>
                            Om de deelvraag te kunnen beantwoorden is er eerst in de breedte gekeken naar digitale platformen in zijn algemene zin. Hierin is gekeken naar de definitie, soorten, voorbeelden en onderdelen van digitale platformen. Vervolgens is er verdieping gezocht naar wat de definitie van een kennis-platform is en wat de kenmerken en kernpunten zijn.
                        </p>
                        <div id="conclusie_kennisplatform" className={frst_style.conclusion_research_01}>
                            <div className={frst_style.conclusion_research_01_title}>
                                <h3>Conclusie - Wat houdt een kennisplatform in?</h3>
                                <p>BIEB - Literatuur onderzoek</p>
                            </div>
                            <p>
                                Een kennis-platform is een digitaal platform, ook wel te omschrijven als een interactieve online omgeving, waar informatie en kennis over één of meerdere onderwerpen verzamelt, centraal opgeslagen en verspreid worden.
                            </p>
                            <p>
                                Het biedt een brug tussen onwetendheid en expertise; tussen vraag en aanbod van informatie en kennis.
                            </p>
                            <p>
                                Kenmerken van een kennis-platform kunnen opgedeeld worden in 3 onderwerpen: toegankelijkheid, interactie en indexering.
                            </p>
                            <p>
                                Het kennis-platform dient toegankelijk en aantrekkelijk zijn voor gebruikers. Het moet uitnodigen om vragen te stellen, informatie te delen en te reageren op content van andere gebruikers. Kansen liggen er op het ontwikkelen van een API ecosysteem, voor meer interactie binnen en buiten het platform. Verder is het van belang dat een kennis-platform overzichtelijk is ingedeeld. Dit draagt tevens bij aan de toegankelijkheid en interactie.
                            </p>
                        </div>


                        <h4>Hoe vertaal je het concept naar een mobiele interface?</h4>
                        <p>
                            In dit literatuuronderzoek is er gekeken naar de design principes van mobiele interfaces. Hiervoor is er onderzoek gedaan naar de verschillende mobiele schermen/pagina’s relevant zijn en wat de inhoudt betreft. Verder is er gekeken naar welke design principes van belang zijn. Ook is er aandacht besteed aan de psychologie achter een mobiel ontwerp.
                        </p>
                        <div id="conclusie_mobieleinterface" className={frst_style.conclusion_research_01}>
                            <div className={frst_style.conclusion_research_01_title}>
                                <h3>Conclusie - Hoe vertaal je het concept naar een mobiele interface?</h3>
                                <p>BIEB - Literatuur onderzoek</p>
                            </div>
                            <p>
                                Een goed mobiel ontwerp is gebouwd op een degelijk onderzoek naar de opdracht en het onderwerp. Doormiddel van onderzoek kunnen gemaakte keuzes beargumenteerd worden en kan een “False-Consensus Effect” voorkomen worden. Dit effect verwijst naar de neiging van designers om verkeerde aannames te doen.
                            </p>
                            <p>
                                Er zijn verschillende soorten pagina’s voor mobiele websites en applicaties. Iedere pagina heeft zijn eigen doel en eigenschappen. Door in de ontwerpfase de website of applicatie in pagina’s op te delen, kan er een structuur opgebouwd worden.
                            </p>
                            <p>
                                Een van de belangrijkste elementen is eenvoud. Hiermee wordt bedoelt dat de pagina, inhoud en/of interactie zo gemakkelijk mogelijk gemaakt moet worden voor een optimale user-flow in het design. Dit kan bereikt worden door de gebruiker niet te overweldigen met onnodige informatie en duidelijke feedback aan de gebruiker te geven. Dit kan onder andere bereikt worden door flexibel te zijn en tolerant om te gaan met of in te spelen op eventuele fouten van de gebruiker.
                            </p>
                        </div>

                        <section>
                            <div id="vragen_block" className={frst_style.researchquestions_header} onClick={() => togglePrinciples(!showPrinciples)} >
                                <p>Toon de mobiele design principes</p>
                            </div>
                            {showPrinciples &&
                                <div className="vragen_box">

                                    <h3>Eenvoud</h3>
                                    <p>
                                        Een goed design maakt het de gebruiker gemakkelijk. Hiermee wordt bedoelt dat veel voorkomende taken makkelijk en eenvoudig gemaakt moeten worden doormiddel van duidelijke en eenvoudige communicatie en interacties.
                                    </p>

                                    <h3>Zichtbaarheid</h3>
                                    <p>
                                        Een ontwerp dient alle benodigde opties en materialen voor een bepaalde interactie of taak zichtbaar te maken, zonder de gebruiker af te leiden met irrelevante of overbodige informatie.
                                    </p>
                                    <p>
                                        Een goed ontwerp overweldigt de gebruikers niet met alternatieven of verwarren hem/haar niet met onnodige informatie.
                                    </p>

                                    <h3>Feedback</h3>
                                    <p>
                                        Binnen een applicatie moet de gebruiker op de hoogte gehouden worden van alles wat er op de website gebeurt en veranderd (acties, wijzigingen van de staat of toestand en fouten of uitzonderingen die relevant en van belang zijn voor de gebruiker).
                                    </p>
                                    <p>
                                        Het moet voorkomen worden dat een gebruiker op een lege/dode pagina uit komt. Dit blokkeert de user-flow en zorgt voor verwarring bij de gebruiker.
                                    </p>
                                    <p>
                                        Het helpt gebruikers niet om de hoofdoorzaak van het probleem te begrijpen en het geeft geen antwoord op de gebruikers-vragen: "Waarom gebeurt dit en wat kan ik eraan doen?"
                                    </p>

                                </div>}
                        </section>

                    </article>
                </section>

                <br />

                <section className={frst_style.inbetween01_container}>
                    <div className={frst_style.inbetween01_box}>
                        <a className={frst_style.inbetween_button02}
                            href="/documents/Digitale_platformen.pdf"
                            target="_blank">
                            Digitale platformen
                        </a>
                        <a className={frst_style.inbetween_button02}
                            href="/documents/Kwaliteiten_Mobiel_Interface.pdf"
                            target="_blank">
                            Kwaliteiten mobiele interface
                        </a>
                        <a className={frst_style.inbetween_button02}
                            href="/documents/Hoofd_onderzoek_document.pdf"
                            target="_blank">
                            Hoofd onderzoeks document
                        </a>
                    </div>
                </section>

                <br />

                <section id="concept">
                    <article>
                        <div className={frst_style.process_header}>
                            <h3>Conceptfase</h3>
                            <img src="/dot_framework/100px-Logo-workshop.png" />
                            <img src="/dot_framework/100px-Logo-field.png" />
                            <img src="/dot_framework/100px-Logo-showroom.png" />
                        </div>

                        <p>
                            In de conceptfase zijn er verschillende stappen ondernomen om tot een gedegen concept te komen. Een concept die voldoet aan de geldende design principes voor een mobiele applicatie en aansluit bij de opdracht, een mobiel kennisplatform.
                        </p>

                        <div className={frst_style.research_box}>
                            <div>
                                <p>
                                    Om te starten is er door mij een brainstorm sessie met de projectgroep opgezet. Hiervoor is een brainstorm opzet opgemaakt. Doormiddel van de brainstorm 101 methode zijn we in brede zin onderdelen en elementen van het kennisplatform gaan bedenken. Vervolgens zijn doormiddel van dot-voting de belangrijkste elementen uit de brainstorm verzameld. Klik <u onClick={() => toggleBrainstorm(!showBrainstorm)}>hier</u> voor de brainstorm resultaten.
                                </p>
                                <p>
                                    De resultaten van de brainstorm geven inzicht in de benodigdheden voor de web applicatie. Uit onderzoek naar de kwaliteiten van een mobiele interface werd het belang van het uitplannen van de verschillende pagina’s benadrukt. Om deze reden is er een sitemap opgezet met daarop alle pagina’s en ‘routing’ binnen de web applicatie. Klik <u onClick={() => toggleSitemap(!showSitemap)}>hier</u> voor de sitemap.
                                </p>
                            </div>
                            <img src="/illustrations/undraw_mobile_development_8gyo.svg" />
                        </div>

                        {showBrainstorm &&
                            <div>
                                <h4>Feature Brainstorm resulaten</h4>
                                <br />
                                <img className="default_image" src="/documents/Feature_brainstorming_Resultaat.png" />
                            </div>
                        }

                        {showSitemap &&
                            <div>
                                <h4>Sitemap</h4>
                                <br />
                                <img className="default_image" src="/documents/Race_to_Resillience_Sitemap.png" />
                            </div>
                        }

                        <p>
                            Binnen de conceptfase zijn de verschillende pagina’s (aan de hand van de sitemap) verdeeld over de groepsleden. Mijn eerste ontwerpen hebben betrekking tot het aanmaken van een nieuwe klimaat oplossing, deze pagina’s worden in dit portfolio ook wel de “Write a Solution” pagina’s genoemd.
                        </p>
                        <p>
                            Voordat er begonnen is met het schetsen van de eerste ontwerpen zijn er relevante prospectieve trendanalyses van derde partijen (met betrekking tot mobiele designs) geanalyseerd doormiddel van de "Future Funnel" methode. Uit deze trendanalyse zijn relevante trends geselecteerd die toepasbaar zijn op dit project.
                        </p>

                        <div className={frst_style.conclusion_research_01}>
                            <div className={frst_style.conclusion_research_01_title}>
                                <h3>Conclusie - Trendanalyse</h3>
                                <p>BIEB - Literatuur onderzoek</p>
                            </div>
                            <p>
                                Uit het analyseren van verschillende trendanalyses met betrekking tot mobiele ontwerpen kan geconcludeerd worden dat er veel verschillen zitten tussen de trends. Echter zijn er ook overeenkomende trends, welke in deze analyse verder zijn onderzocht.
                            </p>
                            <p>
                                De analyses van individuele trends laten zien dat de trends mogelijkheden bieden, maar dat niet alle trends relevantie hebben tot het project. Daarbij komt kijken dat binnen de scope van het project (negen weken) niet alle trends haalbaar zijn om uit te voeren door onszelf.
                            </p>
                            <p>
                                De trends <b>Micro-animations</b>, <b>(Animated) Illustrations</b> en <b>Rounded (corners) and Organic Shapes</b> zijn relevant en toepasbaar met betrekking tot het project. Dit heeft te maken met het feit dat deze trends klein en eenvoudig toe te passen zijn in de scope van het project.
                            </p>
                        </div>

                        <section>
                            <div id="vragen_block" className={frst_style.researchquestions_header} onClick={() => toggleTrends(!showTrends)} >
                                <p>Toon de relevante trends</p>
                            </div>
                            {showTrends &&
                                <div className="vragen_box">
                                    <h3>Micro-interactions</h3>
                                    <p>
                                        De trend met betrekking tot Micro-interacties, waarbij elementen op de website geanimeerd worden, is zeer relevant en toepasbaar binnen het project. De micro-interacties kunnen een toegevoegde waarde geven aan het ontwerp en de gebruikers-ervaring van gebruikers. Hierbij kan gedacht worden aan het openen van een menu, het inladen van content en het invoeren en verzenden van gegevens.
                                    </p>
                                    <h3>(Animated) Illustrations</h3>
                                    <p>
                                        De trend voor het toepassen van (geanimeerde) illustraties, ter bevordering van de beleving binnen de applicatie, is een relevante trend. Binnen de scope van het project wordt echter niet als haalbaar getracht om als designers zelfstandig illustraties te maken en animeren. Een oplossing is eventueel om een set illustraties te laten maken of online te vinden. Deze trend is relevant en kan toegepast worden binnen het project.
                                    </p>
                                    <h3>Rounded (corners) and Organic Shapes</h3>
                                    <p>
                                        Deze design trend met ronde vormen wordt steeds meer gebruikt. Het komt onder andere door de recent verschenen smartphones met geronde hoeken en optioneel een ronde camera uitsparing in het scherm. De trend is zeer relevant en toepasbaar binnen het project. Verschillende UI-elementen zoals knoppen en vlakken kunnen worden voorzien van rondingen. Deze trend is relevant en kan toegepast worden binnen het project.
                                    </p>
                                </div>}
                        </section>

                        <p>
                            De eerste schetsen zijn ontworpen naar aanleiding van de opdrachtgevers Global Goal Community website. De achtergrond cirkel is gebruikt en de kleuren wit en groen zijn gebruikt. Verder is er gebruik gemaakt van de trends rondom rounded (corners) and organic Shapes en (animated) illustrations. Knoppen en vlakken zijn afgerond en de succes-pagina bevat een relevante illustratie.
                        </p>

                        <div className={frst_style.mockup_container}>
                            <div>
                                <ImageModalBox>
                                    <img className={frst_style.mockup} src="/documents/Design_Mock-up_V1.png" />
                                </ImageModalBox>
                                <p>Eerste iteratie "Write a solution" pagina's</p>
                            </div>
                        </div>

                        <p>
                            Aan de hand van de eerste schetsen is er wederom een brainstorm sessie gehouden. In deze brainstorm sessie zijn alle positieve punten van de verschillende ontwerpen benoemd. Bekijk de positieve punten door <u onClick={() => togglePositives(!showPositives)}>hier</u> te klikken.
                        </p>

                        {showPositives &&
                            <img className="default_image" src="/documents/Prototype_Schets_samenvoeging.png" />
                        }

                        <p>
                            In overleg met de opdrachtgevers Ad Vlems en Ronald Hazelzet, met betrekking tot de eerste ontwerpen, hebben zij aangegeven dat de nieuwe web applicatie geen direct verband hoeft te hebben met de huidige Global Goals Community website. Na deze feedback zijn er nieuwe ontwerpen gemaakt.
                        </p>
                        <p>
                            Voor het maken van nieuwe iteraties op het ontwerp is er meer onderzoek gedaan naar user-flows, met betrekking tot het plaatsen van content, op andere digitale platformen. Daarbij is er ook een heuristische analyse gemaakt.
                        </p>

                        <div className={frst_style.analysis_container}>
                            <div className={frst_style.analysis_box} onClick={() => toggleHeuristic(!showHeuristic)}>
                                <div className={frst_style.analysis_boxer}>
                                    <h3>Heuristische analyse</h3>
                                    <img src="/illustrations/undraw_the_search_s0xf.svg" />
                                    <a className={frst_style.inbetween_button03}
                                        href="/documents/Heuristische_Evaluatie_Wikihow.pdf"
                                        target="_blank">
                                        Heuristische analyse
                                    </a>
                                </div>
                            </div>

                            <div className={frst_style.analysis_box} onClick={() => toggleUserflow(!showUserflow)}>
                                <div className={frst_style.analysis_boxer}>
                                    <h3>Userflow analyse</h3>
                                    <img src="/illustrations/undraw_design_notes_8dmv.svg" />
                                    <a className={frst_style.inbetween_button03}
                                        href="/documents/Userflow_Analyse_Kennis_platform_posten.pdf"
                                        target="_blank">
                                        Userflow analyse
                                    </a>
                                </div>
                            </div>
                        </div>

                        {showHeuristic &&
                            <div className="conclusie_box">
                                <h3>Conclusie Heuristische analyse - Wikihow</h3>
                                <p>Uit de heuristische analyse kan geconcludeerd worden dat het ontwikkelen van een gebruiksvriendelijke web formulier voor het plaatsen van een oplossing nog enorm ingewikkeld kan zijn. Goede uitleg en begeleiding van de gebruiker is genoodzaakt. Dit kan bereikt worden door informatie inclusief uitleg per onderdeel toe te voegen en directe feedback te geven aan de gebruiker.</p>
                                <br />
                                <p>Denk hierbij aan eventueel een vraagteken met uitleg per onderdeel en een auto-correctie binnen de tekst editor.</p>
                            </div>
                        }

                        {showUserflow &&
                            <div className="conclusie_box">
                                <h3>Conclusie Userflow analyse - Op een kennisplatform posten</h3>
                                <p>Uit de analyse van Twitter kan opgemaakt worden dat gebruikers doormiddel ten alle tijden wordt gemotiveerd om iets te plaatsen op het platform. Dit wordt bereikt door het plaatsen van visuele motivatie in de vorm van een grote blauwe “Tweeten” knop.</p>
                                <br />
                                <p>Op de Wikihow pagina zijn veel stappen vereist om een handleiding (wiki how) te kunnen plaatsen. Dit wordt o.a. gedaan om dubbele handleidingen te voorkomen en daarmee een overspoeling van handleidingen met het zelfde of vergelijkbare onderwerpen tegen te gaan.</p>
                                <br />
                                <p>Verder valt op dat ze een betrouwbare indruk willen achterlaten. Dit wordt mede bereikt door duplicatie te voorkomen en door academische en expert handleidingen te onderscheiden. Daarnaast promoot het actief een artikel over hoe gebruikers zich kunnen weren tegen misinformatie.</p>
                            </div>
                        }

                        <p>
                            In de nieuwe iteraties op het ontwerp heb ik naast mijn “Write a solution” pagina’s ook de layout van de web applicatie ontworpen. Er is daarbij rekening gehouden met de eerdere gebruikte trends, de onderzochte design principes, de features uit de eerste brainstorm en de resultaten uit de userflow en heuristische analyse.
                        </p>
                        <p>
                            De design principes eenvoud, zichtbaarheid en feedback zijn gebruikt in het ontwerpen van de nieuwe iteratie. Toepassingen hiervan zijn te vinden in het menu, waarbij ervoor gekozen is maar drie elementen te plaatsen en bijvoorbeeld het profiel knopje rechts bovenin te plaatsen. Verder zijn de “Write a Solution” pagina’s opgedeeld in verschillende stappen om eenvoud en zichtbaarheid te vergroten van de individuele onderdelen.
                        </p>
                        <p>
                            In het midden van het menu zit een grote groene knop, waarmee gebruikers ten alle tijden gemotiveerd worden om een nieuwe oplossing gaan en kunnen schrijven. Dit is naar aanleiding van de userflow analyse.
                        </p>
                        <p>
                            Naar aanleiding van de userflow analyse is er een opzichtige knop in de layout gekomen waarmee een gebruiker ten alle tijden een nieuwe oplossing kan schrijven.
                        </p>
                        <p>
                            En naar aanleiding van een van de features uit de eerste brainstorm en de conclusie uit de heuristische analyse is er meer documentatie gekomen voor de gebruiker. Dit is ontworpen in de vorm van vraagtekens per onderdeel waarmee er een kortbondige uitleg tevoorschijn komt voor de gebruiker.
                        </p>

                        <div className={frst_style.mockup_container}>
                            <div>
                                <ImageModalBox>
                                    <img className={frst_style.mockup} src="/documents/Design_Mock-up_V2.png" />
                                </ImageModalBox>
                                <p>Tweede iteratie "Write a solution" pagina's</p>
                            </div>
                        </div>

                        <p>
                            Tijdens de een terugkoppel moment met de opdrachtgever zijn de nieuwe iteraties gepresenteerd. Mijn feedback betrof het toevoegen van een mogelijkheid om de impact van een oplossing toe te kunnen voegen. Deze feedback is uiteindelijk verwerkt in het uitgewerkte prototype.
                        </p>

                    </article>
                </section>


                <br />

                <section className={frst_style.inbetween01_container}>
                    <div className={frst_style.inbetween01_box}>
                        <a className={frst_style.inbetween_button02}
                            href="/documents/Mobile_Design_Trend_Analyse.pdf"
                            target="_blank">
                            Trendanalyse
                        </a>
                        <a className={frst_style.inbetween_button02}
                            href="/documents/Heuristische_Evaluatie_Wikihow.pdf"
                            target="_blank">
                            Heuristische analyse
                        </a>
                        <a className={frst_style.inbetween_button02}
                            href="/documents/Userflow_Analyse_Kennis_platform_posten.pdf"
                            target="_blank">
                            Userflow analyse
                        </a>
                    </div>
                </section>

                <br />


                <section id="testen">
                    <article>
                        <div className={frst_style.process_header}>
                            <h3>Testfase</h3>
                            <img src="/dot_framework/100px-Logo-lab.png" />
                        </div>
                        <div className={frst_style.research_box}>
                            <div>
                                <p>
                                    In de testfase is er gebruikersonderzoek gedaan naar mijn ontworpen pagina’s, “Write a Solution”. Het doel is om erachter te komen of gebruikers zich kunnen navigeren door het formulier. Voor de gebruikerstest is er een onderzoeksplan opgesteld, waarin de doelen, onderzoeksvragen en -methoden worden vastgesteld.
                                </p>
                                <p>
                                    Het gebruikersonderzoek is afgenomen doormiddel van een online tool, genaamd Maze. Dit is een online usability-test tool, waarin gebruikers digitaal een test kunnen afnemen. Ze kunnen hierin vragen blokken beantwoorden en clickable prototypen uitproberen.
                                </p>
                                <p>
                                    Omdat het gebruikersonderzoek richting het einde van het project uitgevoerd is, is er geen tijd overgebleven om de resultaten te implementeren. De resultaten uit het gebruikersonderzoek dienen daarom als advies en zijn tevens terug te vinden in het overdrachtsdocument.
                                </p>
                            </div>
                            <img src="/illustrations/undraw_mobile_ux_o0e1.svg" />
                        </div>



                        <div className={frst_style.conclusion_research_01}>
                            <div className={frst_style.conclusion_research_01_title}>
                                <h3>Adviezen uit het gebruikersonderzoek</h3>
                                <p>LAB - Usability Testing</p>
                            </div>
                            <p>
                                Uit de <Link href="/misc/woordenlijst"><span className="underline">Heatmaps</span></Link> van de drie missies valt op te merken dat het ontwerp correct geïnterpreteerd wordt. Binnen drie “Clicks” weet zeker tachtig procent van de gebruikers het doel te bereiken. Enkele problemen en vragen betrekken zich tot het clickable prototype dat gebruikt is voor de usability test, waarin gebruikers bijvoorbeeld niet op alle categorieën konden klikken en teksten bij een klik op de knop ingevuld werden.
                                <br />
                                <br />
                                Vier gebruikers gaven aan dat de informatie binnen het formulier hen niet verder heeft geholpen. Hier dient extra aandacht aan besteed te worden. De teksten kunnen verbeterd worden en eventueel kan er een illustratie of kleine animatie toegevoegd worden, die bijdraagt aan het verduidelijken van de opdracht. Ook zou een uitleg pagina, met eventueel een uitleg video, een toevoeging zijn aan de documentatie voor de gebruiker.
                                <br />
                                <br />
                                Als laatste dient er gekeken te worden naar de “Impact meter”. Gebruikers gaven aan dat ze niet weten wat dit inhoudt. Ook hierin kan de documentatie en begeleiding van de gebruiker verbeterd worden.
                            </p>
                        </div>



                        <div className={frst_style.research_file_box}>
                            <a className={frst_style.inbetween_button01}
                                href="/documents/Usability_Test_Write_a_Solution.pdf"
                                target="_blank">
                                Gebruikersonderzoek
                            </a>
                            <a className={frst_style.inbetween_button02}
                                href="/documents/Resultaten_Gebruikersonderzoek_Write_a_Solution.xlsx"
                                target="_blank">
                                Gebruikersonderzoek Resultaten Excel
                            </a>
                            <a className={frst_style.inbetween_button02}
                                href="https://app.maze.co/report/6xsr9u7kn95vhot"
                                target="_blank">
                                Maze Resultaten
                            </a>
                        </div>





                    </article>
                </section>

                <section id="prototype">
                    <article>
                        <div className={frst_style.process_header}>
                            <h3>Prototypefase</h3>
                            <img src="/dot_framework/100px-Logo-workshop.png" />
                        </div>

                        <p>
                            In overleg met de projectgroep is er gekozen om gebruik te maken van het NextJS framework. Dit framework heeft verschillende mogelijkheden om pagina’s en content snel te renderen en laden, zonder dat de gebruiker de web applicatie hoeft te herladen. Verder is er gekozen voor dit framework omdat het goed schaalbaar is, zonder veel performance verlies.
                        </p>
                        <p className="quote">
                            “NextJS is een open-source React front-end framework met functionaliteiten als server-side rendering en het genereren van statische webpaginas.”
                        </p>
                        <p>
                            In samenwerking met Leo hebben we de FHICT GitLab pagina opgezet en de project leden toegevoegd. Wij zijn daarbij de “Maintainers” en regelen de merge-requests, dit om merge-conflicts te voorkomen.
                        </p>

                        <div className={frst_style.research_box}>
                            <div>
                                <p>
                                    Bij gebrek aan initiatief binnen de groep ben ik zelfstandig begonnen met het opzetten van de web applicatie. Omdat het een nieuw en voor mij onbekend framework was, heeft er veel tijd in gezet om alles op orde te krijgen.
                                </p>
                                <p>
                                    Er is door mij begonnen met het aanmaken van alle benodigde componenten. Hierbij gaat het om alle pagina’s die opgemaakt zijn vanuit de sitemap van de web applicatie en de losse onderdelen voor de layout van de applicatie (header, meta, menu, etc.). Door het opzetten van de pagina’s door mij kunnen de andere projectleden eenvoudig hun ontwerpen implementeren.
                                </p>
                            </div>
                            <img src="/illustrations/undraw_Code_review_re_woeb.svg" />
                        </div>

                        <p>
                            Het gehele layout (dus de web applicatie zonder inhoudt) is ontwikkeld door mij. Deze bestaat uit een layout met een header en menu. De header bevat tevens een illustratie die veranderd per categorie pagina waarop je je bevind.
                        </p>
                        <p>
                            In de flow van het programmeren heb ik mij tevens bezig gehouden met het inladen van data (vanuit een statische json-bestand) op de website, om op deze manier de geplaatste oplossingen van gebruikers weer te geven op de website. Door het toevoegen van deze functionaliteit is het overdragen van het project eenvoudiger. Er hoeft op die manier enkel nog een database verbinding gemaakt te worden, waar vanuit de data opgehaald wordt.
                        </p>
                        <p>
                            Bij het ontwikkelen van de layout is er rekening gehouden met de trend micro-interactions. Verschillende onderdelen zijn geanimeerd en verschijnen als het waren op de pagina. Hierdoor lijkt het alsof de pagina op een vloeiende en rustige manier inlaad.
                        </p>
                        <p>
                            Verder is door mij de “Write a Solution” pagina geïmplementeerd. Een formulier waarop gebruikers een oplossing voor klimaatverandering kunnen plaatsen. Binnen deze pagina is alles functioneel en hoeft enkel nog een database verbinding opgezet te worden.
                        </p>

                        <br />

                    </article>
                </section>



                <section className={frst_style.inbetween01_container}>
                    <div className={frst_style.inbetween01_box}>
                        <a className={frst_style.inbetween_button01}
                            href="https://git.fhict.nl/I382255/race-to-resilience"
                            target="_blank">
                            GitLab Repo
                        </a>
                        <a className={frst_style.inbetween_button02}
                            href="https://git.fhict.nl/I382255/race-to-resilience/-/wikis/home"
                            target="_blank">
                            GitLab Wiki
                        </a>
                        <a className={frst_style.inbetween_button02}
                            href="/documents/Overdrachts_Documentatie.pdf"
                            target="_blank">
                            Overdrachts Document
                        </a>
                    </div>
                </section>



                <section id="product">

                    <article>
                        <h2>Product</h2>
                        <p>
                            Een aangepaste ambitieuze opdracht heeft de mogelijkheid gegeven om een gaaf prototypen neer te zetten, gebouwd in een voor mij onbekend en nieuw framework, gebaseerd op degelijk onderzoek en gevalideerd doormiddel van gebruikersonderzoek. Hieronder volgt een lijst met de producten die zijn opgeleverd aan de opdrachtgever.
                        </p>

                        <h3>Prototype</h3>

                        <div className={frst_style.research_box}>
                            <div>
                                <p>
                                    Het belangrijkste opgeleverde product is het prototype. Het opgeleverde product is een low-fidelity clickable prototype van de front-end code. Ook zitten er al back-end functionaliteiten in verwerkt, zoals het ophalen van oplossingen (van nu uit statische data) en het posten van een oplossing. Voor deze onderdelen hoeft in theorie enkel nog een database opgezet en verbonden te worden voor het verwerken en ophalen van oplossingen.
                                </p>
                                <p>
                                    Alle code staat netjes opgeslagen op de Git Repository, inclusief een uitgebreide Git Wiki met daarop alle benodigde uitleg: Introductie, installatie, informatie per onderdeel van de web applicatie en contact gegevens.
                                </p>
                                <p>
                                    Dit alles heeft gezorgd voor een minimaal functionerend prototype van het kennisplatform voor de Race to Resilience Challenge.
                                </p>
                            </div>
                            <ReactPlayer
                                className={frst_style.prototype_box}
                                url='/demo/Front_end_Demo_-_Race_to_Resilience_-_New_Identity_Fontys.mp4'
                                playing={isPlaying}
                                controls
                                config={{
                                    file: {
                                        attributes: {
                                            controlsList: "nodownload"
                                        }
                                    }
                                }}
                            />
                        </div>

                        <h3>Onderzoeken</h3>
                        <p>
                            Tijdens het project zijn er verschillende onderzoeken uitgevoerd om tot het huidige product te komen. Denk daarbij aan het onderzoek naar de deelvragen, waaronder digitale platformen en kwaliteiten van een mobiele. Deze zijn gebundeld in het hoofd onderzoekdocument.
                        </p>

                        <h3>Overdracht</h3>
                        <p>
                            Om het prototype goed over te dragen aan een potentieel nieuwe groep, is er gezorgd voor goede en duidelijke overdracht documentatie. Er is een bestand opgemaakt met daarin informatie over de bestanden, opleveringen, adviezen en wat er nog gedaan moet worden. Om de overdracht van het prototype en de daarbij horende code te verbeteren is er door mij een Wiki aangemaakt op de GitLab repo. Hierin staat het gehele proces, inclusief documenten gelinkt, de verschillende ontwikkelingen en wat er nog gedaan moet en kan worden (beschreven per pagina). Ik hoop hiermee de (eventueel) volgende groep van voldoende informatie te hebben voorzien.
                        </p>

                    </article>
                </section>



                <section id="conclusie">

                    <article>
                        <h2>Conclusie</h2>

                        <h3 className="quote">
                            “HOE ONTWIKKEL JE EEN GEBRUIKSVRIENDELIJKE MOBIELE INTERFACE VOOR EEN KENNISPLATFORM, WAARBIJ REKENING WORDT GEHOUDEN MET HET VOLGEN DELEN EN REAGEREN OP USER-GENERATED CONTENT?”
                        </h3>
                        <p>
                            Het doel van de opdracht was om een kennisplatform te ontwerpen en uit te werken tot, minimaal, een functionerend prototype. Dit doel is bereikt door de drie overkoepelende processen te doorlopen.
                        </p>

                        <p>
                            In het <b>analyseproces</b> is er georiënteerd naar de opdracht, zijn er literatuuronderzoeken gedaan naar de deelvragen, is er UX onderzoek gedaan naar huidige platformen en is er een analyse gemaakt van de mobiele trends.
                        </p>
                        <p>
                            In het <b>realisatieproces</b> is er gebrainstormd en zijn er schetsen gemaakt. Bij de development is er gebruik gemaakt van het NextJS framework om een low-fidelity prototype te realiseren waarin enkele van de benodigde back-end functionaliteiten al werkzaam zijn.
                        </p>
                        <p>
                            In het <b>meetproces</b> is er gekeken naar het ontwerp en de functionaliteiten van de “Write a solution” pagina’s doormiddel van een online gebruikersonderzoek. De resultaten hieruit zijn positief, zijn verder geanalyseerd en vormen een advies in de overdracht.
                        </p>

                    </article>

                </section>



                <section id="reflectie">

                    <article>
                        <h2>Reflectie</h2>

                        <p>
                            Binnen dit project ben k bezig geweest met de gehele ontwikkeling-cycles. Van het onderzoeken, ontwerpen, testen en toepassen tot aan het managen van het project en de projectgroep.
                        </p>
                        <p>
                            Tijdens het project heb ik me verantwoordelijk gevoeld voor de voortgang en de samenwerking binnen de projectgroep. Ik heb me hiervoor sterk gemaakt en naar aanleiding van een door mij aangevraagd gesprek hebben we als groep zijnde duidelijke afspraken gemaakt in de vorm van een samenwerking contract. Verder is er afgesproken dagelijks om 09:30 een opstart moment te hebben en wekelijks op vrijdagmiddag een afsluiting. Ook wordt er elke week een nieuwe projectleider aangesteld, die de voortgang bewaakt en het Trello-bord met alle taken bijhoudt. De communicatie en samenwerking verliep daarna goed en daar ben ik erg tevreden mee.
                        </p>
                        <p>
                            Binnen dit semester wilde ik graag een nieuw en interessant framework leren en daarmee mijn web-development skills verbeteren. In samenspraak met de projectgroep is er gekozen voor het framework NextJS. Voorheen was ik niet bekent met het framework en ik heb veel tijd gestopt in het ontwikkelen van de benodigde vaardigheden om goed gebruik te maken van dit framework. Deze portfolio website is tevens ontwikkeld in het framework. Hiermee toon ik aan dat ik een leergierige en harde werker ben die graag experimenteert en zichzelf ontwikkeld.
                        </p>
                        <p>
                            In de toekomst leer ik graag verder in dit framework. Dit is een toegevoegde waarde op mijn skillset en geeft mij (hopelijk) betere kansen op een goede afstudeer stage en latere een baan in de front-end development.
                        </p>
                    </article>

                </section>

            </main>
        </>
    );
}
//export page-elements
export default First_page;