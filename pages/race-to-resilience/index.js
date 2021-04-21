//import NextJS dependencies
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

//import other dependencies
import React, { useState } from 'react';

//import styling
import frst_style from '../../styles/First.module.scss'

//construct return page-elements
const First_page = () => {

    //setup routing
    const router = useRouter()
    const routePath = router.asPath.split('#')[1]
    console.log(routePath)

    //setup the dropbox modal
    const [showQuestions, toggleQuestions] = useState(false);
    const [showHeuristic, toggleHeuristic] = useState(false);
    const [showUserflow, toggleUserflow] = useState(false);
    const [showTrends, toggleTrends] = useState(false);

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
                        <p>Het nieuwe doel van de opdracht is om een kennisplatform te ontwerpen en uit te werken tot, minimaal, een functionerende prototype. Dit kennisplatform maakt dan kans om door de UN gebruikt te worden als hun Race to Resilience tool.</p>
                        <h3>Eisen aan de Opdracht</h3>
                        <p>Eisen aan de nieuwe opdracht hebben betrekking tot mobile-first en het bieden van een degelijke mobiele gebruikers ervaring. Verder heeft het als doel om de applicatie internationaal aan te bieden, alles dient daarom in het Engels gemaakt te worden.</p>
                        <h3>MoSCoW</h3>
                        <p>Om structuur aan het project te geven zijn de oplever-doelen omschreven doormiddel van een MoSCoW methode. Hierin staan de belangrijkste zaken die het minimun viable product (MPV) zou moeten bevatten.</p>

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
                            href="/documents/Leeswijzer.pdf"
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
                        <h2>Proces</h2>
                        <p>
                            Het project is doorlopen in vijf verschillende fases: orientatiefase, onderzoekfase, conceptfase, testfase en prototypefase. Deze fases zijn onder te verdelen in drie processen: analyseproces, realisatieproces en het meetproces.
                            <br />
                            <br />
                            Tijdens het project is het DOT-framework gehanteerd, meer informatie over dit framework is te vinden op de <Link href="https://ictresearchmethods.nl/The_DOT_Framework"><u>website</u></Link> van ictresearchmethods wiki.
                        </p>
                    </article>
                </section>


                <section id="orientatie">
                    <article>
                        <div className={frst_style.process_header}>
                            <h3>Oriëntatiefase</h3>
                            <img src="/dot_framework/100px-Logo-library.png" />
                        </div>
                        <p>Tijdens de oriëntatiefase is er verdieping gezocht in de opdracht. Een kennisplatform maken met betrekking tot oplossingen voor de klimaat verandering. Om meer inzicht te krijgen in de opdracht is er een <Link href="/documents/"><u>individuele opdracht analyse</u></Link> gemaakt. Aan de hand van deze analyse is er een hoofdvraag en zijn er deelvragen opgesteld. </p>
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
                                    In de onderzoekfase is er onderzoek gedaan naar de opgestelde deelvragen, doormiddel van literatuuronderzoek. Mijn onderzoeken hadden betrekking tot deelvragen 1 (wat houdt een kennisplatform in?) en 4 (hoe vertaal je het concept naar een mobiele interface?).
                                    <br />
                                    <br />
                                    Voor het doen van literatuur onderzoek naar kennisplatforms is er eerst een <Link href="/documents/"><u>onderzoek-opzet</u></Link> gemaakt. Hierin is de onderzoeksmethode en uitvoering beschreven. Het onderzoek naar kennisplatforms wordt verdeeld in meerdere kleinere vragen, waarin er eerst breed gekeken wordt naar het bovenliggende onderwerp (digitale platformen) en er vervolgens via een trechter wordt gekeken naar de specifieke kenmerken van een kennisplatform.
                                </p>
                                <div className={frst_style.research_button_box}>
                                    <a className={frst_style.inbetween_button01}
                                        href="/documents/Onderzoeksopzet.pdf"
                                        target="_blank">
                                        Onderzoek opzet
                                    </a>
                                </div>
                            </div>
                            <img src="/illustrations/undraw_Process_re_gws7.svg" />
                        </div>
                        <br />
                        <p>
                            In mijn onderzoek naar <Link href="/documents/"><u>kennisplatformen</u></Link> is er gekeken digitale platformen en kennisplatformen. Hierbij is er gekeken naar de definitie, soorten en voorbeelden van digitale platformen en de verschillende onderdelen hiervan. Vervolgens is er vanuit de digitale platformen ingezoomd op kennisplatformen, waarbij er gekeken is naar de definitie en kenmerken.
                        </p>
                        <div className={frst_style.conclusion_research_01}>
                            <div className={frst_style.conclusion_research_01_title}>
                                <h3>Conclusie - Digitale platformen</h3>
                                <p>BIEB - Literatuur onderzoek</p>
                            </div>
                            <p>
                                Een kennis-platform is een digitaal platform, ook wel te omschrijven als een interactieve online omgeving, waar informatie en kennis over één of meerdere onderwerpen verzamelt, centraal opgeslagen en verspreid worden. Het biedt een brug tussen onwetendheid en expertise; tussen vraag en aanbod van informatie en kennis.
                                <br />
                                <br />
                                Kenmerken van een kennis-platform kunnen opgedeeld worden in 3 onderwerpen: toegankelijkheid, interactie en indexering.
                                <br />
                                <br />
                                Het kennis-platform dient toegankelijk en aantrekkelijk zijn voor gebruikers. Het moet uitnodigen om vragen te stellen, informatie te delen en te reageren op content van andere gebruikers. Kansen liggen er op het ontwikkelen van een API ecosysteem, voor meer interactie binnen en buiten het platform. Verder is het van belang dat een kennis-platform overzichtelijk is ingedeeld. Dit draagt tevens bij aan de toegankelijkheid en interactie.
                            </p>
                        </div>
                        <p>
                            Tijdens het uitvoeren van mijn tweede literatuuronderzoek naar <Link href="/document"><u>kwaliteiten van een mobiele interface</u></Link> is onderzocht wat de design principes van een mobiele interface zijn.
                        </p>
                        <div className={frst_style.conclusion_research_01}>
                            <div className={frst_style.conclusion_research_01_title}>
                                <h3>Conclusie - Kwaliteiten mobiele interface</h3>
                                <p>BIEB - Literatuur onderzoek</p>
                            </div>
                            <p>
                                Een goed mobiel ontwerp is gebouwd op een degelijk onderzoek naar de opdracht en het onderwerp. Doormiddel van onderzoek kunnen gemaakte keuzes beargumenteerd worden en kan een “False-Consensus Effect” voorkomen worden. Dit effect verwijst naar de neiging van designers om verkeerde aannames te doen.
                                <br />
                                <br />
                                Er zijn verschillende soorten pagina’s voor mobiele websites en applicaties. Iedere pagina heeft zijn eigen doel en eigenschappen. Door in de ontwerpfase de website of applicatie in pagina’s op te delen, kan er een structuur opgebouwd worden.
                                <br />
                                <br />
                                Een van de belangrijkste elementen is eenvoud. Hiermee wordt bedoeld dat de pagina, inhoud en/of interactie zo gemakkelijk mogelijk gemaakt moet worden voor een optimale user-flow in het design. Dit kan bereikt worden door de gebruiker niet te overweldigen met onnodige informatie en duidelijke feedback aan de gebruiker te geven. Dit kan onder andere bereikt worden door flexibel te zijn en tolerant om te gaan met of in te spelen op eventuele fouten van de gebruiker.
                            </p>
                        </div>
                        <p>
                            Mijn uitgevoerde literatuuronderzoeken en de andere onderzoeken met betrekking tot de deelvragen zijn samengevoegd in het een <Link href="/documents/"><u>hoofd onderzoeks document</u></Link>. Hierin staan ook de onderzoeken naar deelvragen van andere project-leden.
                        </p>
                        <div className={frst_style.research_file_box}>
                            <a className={frst_style.inbetween_button01}
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
                        <p>
                            Naast de literatuuronderzoeken met betrekking tot de deelvragen, zijn er ook de volgende onderzoeken afgenomen: heuristische analyse wikihow, userflow analyse kennisplatforms en mobiele design trends analyse. Deze onderzoeken bieden verschillende inzichten die van cruciaal belang zijn voor de conceptfase.
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
                                        href="/documents/Userflow_Analyse _Kennis_platform_posten.pdf"
                                        target="_blank">
                                        Userflow analyse
                                    </a>
                                </div>
                            </div>

                            <div className={frst_style.analysis_box} onClick={() => toggleTrends(!showTrends)}>
                                <div className={frst_style.analysis_boxer}>
                                    <h3>Mobiele trend analyse</h3>
                                    <img src="/illustrations/undraw_mobile_ux_o0e1.svg" />
                                    <a className={frst_style.inbetween_button03}
                                        href="/documents/Mobile_Design_Trend_Analyse.pdf"
                                        target="_blank">
                                        Mobiele trend analyse
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

                        {showTrends &&
                            <div className="conclusie_box">
                                <h3>Conclusie mobiele trend analyse</h3>
                                <p>Door de verschillende analyses te combineren is er een kwalitatief onderzoek gedaan naar de actuele trends binnen mobiel design. Hieruit zijn 7 overeenkomende mobiele trends naar boven gekomen en verder geanalyseerd. </p>
                                <br />
                                <p>Uit de trend analyse kan geconcludeerd worden dat mede door de ontwikkeling in mobiele processor kracht en de (mobiele) browsers veel meer (nieuwe) toepassingen mogelijk zijn. Zo zijn micro-animaties eenvoudiger te draaien en kunnen mobiele applicaties zelfs overweg met 3D graphics en Augmented Reality. Daarbij bevorderen deze trends de beleving van de gebruiker.</p>
                                <br />
                                <p>De volgende trends zijn eenvoudig te implementeren en hebben een grote impact op de gebruikers ervaring: Micro animaties, Illustraties, Rounded Corners.</p>
                            </div>
                        }

                    </article>
                </section>

                <section id="concept">
                    <article>
                        <div className={frst_style.process_header}>
                            <h3>Conceptfase</h3>
                            <img src="/dot_framework/100px-Logo-workshop.png" />
                            <img src="/dot_framework/100px-Logo-field.png" />
                            <img src="/dot_framework/100px-Logo-showroom.png" />
                        </div>
                        <br />
                        <div className={frst_style.research_box}>
                            <img src="/illustrations/undraw_Scrum_board_re_wk7v.svg" />
                            <div>
                                <p>
                                    Het onderzoek naar de kwaliteiten van een mobiele interface toont de relevantie aan van het uitplannen van de verschillende pagina’s voor het ontwerpen. Om een goed beeld te krijgen van wat er ontworpen dient te worden zijn er twee acties ondernomen. Er is een gezamenlijke brainstorm 101 sessie gehouden over de features van de website en er is een sitemap opgezet, met daarin alle pagina’s voor het ontwerp.
                                    <br />
                                    <br />
                                    Om de gezamenlijke brainstorm 101 sessie in goede banen te lijden, is er een <Link href="/documents/"><u>brainstorm opzet</u></Link> gemaakt. Hierin staat het concept voor de brainstorm, de methodes, tools, rolverdeling, planning en het resultaat beschreven.
                                </p>
                                <div className={frst_style.research_button_box}>
                                    <a className={frst_style.inbetween_button01}
                                        href="/documents/Brainstorm_opzet.pdf"
                                        target="_blank">
                                        Brainstorm opzet
                                </a>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <p>
                            <br />
                            Met de features voor de website beschreven uit de brainstorm is er een <Link href="/documents"><u>sitemap</u></Link> opgemaakt. Hierin staan alle verschillende pagina’s voor de website. Dit maakt duidelijke welke pagina’s er zijn, welke er dus ontworpen moeten worden en opgezet dienen te worden voor de development omgeving.
                        </p>
                        <p>
                            Tijdens de conceptfase is er gekozen voor een creatief vrije manier van werken. De verschillende pagina’s werden verdeeld onder de project-leden en zonder verdere voorwaarden heeft iedereen de kans gekregen om een eerste ontwerp schets te maken. Mijn ontwerpen hebben betrekking tot het aanmaken van een nieuwe klimaat oplossing: “Write a Solution”.
                        </p>
                        <p>
                            Na overleg zijn de positieve punten van alle designs gebundeld op <Link href="/documents/"><u>Google Jamboard</u></Link> en zijn er iteraties gegaan over het ontwerp. Er is tevens door een van de project-leden een <Link href="/documents/"><u>style-guide</u></Link> opgezet om bij te dragen aan een uniform ontwerp.
                        </p>
                        <p>
                            Verschillende iteraties van ontwerpen zijn uitgewerkt en getoond aan de opdrachtgevers. Mijn feedback betrof het toevoegen van een mogelijkheid om de impact van een oplossing toe te kunnen voegen.
                        </p>

                        <div className={frst_style.mockup_container}>
                            <div>
                                <img className={frst_style.mockup} src="/documents/Design_Mock-up_V1.png" />
                                <p>Eerste iteratie "Write a solution" pagina's</p>
                            </div>

                            <div>
                                <img className={frst_style.mockup} src="/documents/Design_Mock-up_V2.png" />
                                <p>Tweede iteratie "Write a solution" pagina's</p>
                            </div>
                        </div>


                    </article>
                </section>

                <section id="testen">
                    <article>
                        <div className={frst_style.process_header}>
                            <h3>Testfase</h3>
                            <img src="/dot_framework/100px-Logo-lab.png" />
                        </div>
                        <p>
                            In de testfase is er gebruikersonderzoek gedaan naar mijn ontworpen pagina’s, “Write a Solution”. Het doel is om erachter te komen of gebruikers zich kunnen navigeren door het formulier. Voor de gebruikerstest is er een <Link href="/documents/"><u>onderzoeksplan</u></Link> opgesteld, waarin de doelen, onderzoeksvragen en -methoden worden vastgesteld.
                        </p>
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
                        <p>
                            Het gebruikersonderzoek is afgenomen doormiddel van een online tool, genaamd Maze. Dit is een online usability-test tool, waarin gebruikers digitaal een test kunnen afnemen. Ze kunnen hierin vragen blokken beantwoorden en clickable prototypen uitproberen.
                            <br />
                        </p>

                        <div className={frst_style.conclusion_research_01}>
                            <div className={frst_style.conclusion_research_01_title}>
                                <h3>Resultaten - Gebruikersonderzoek</h3>
                                <p>LAB - Usability Testing</p>
                            </div>
                            <p>
                                Uit de “Heatmaps” van de drie missies valt op te merken dat het ontwerp correct geïnterpreteerd wordt. Binnen drie “Clicks” weet zeker tachtig procent van de gebruikers het doel te bereiken. Enkele problemen en vragen betrekken zich tot het clickable prototype dat gebruikt is voor de usability test, waarin gebruikers bijvoorbeeld niet op alle categorieën konden klikken en teksten bij een klik op de knop ingevuld werden.
                                <br />
                                <br />
                                Vier gebruikers gaven aan dat de informatie binnen het formulier hen niet verder heeft geholpen. Hier dient extra aandacht aan besteed te worden. De teksten kunnen verbeterd worden en eventueel kan er een illustratie of kleine animatie toegevoegd worden, die bijdraagt aan het verduidelijken van de opdracht. Ook zou een uitleg pagina, met eventueel een uitleg video, een toevoeging zijn aan de documentatie voor de gebruiker.
                                <br />
                                <br />
                                Als laatste dient er gekeken te worden naar de “Impact meter”. Gebruikers gaven aan dat ze niet weten wat dit inhoudt. Ook hierin kan de documentatie en begeleiding van de gebruiker verbeterd worden.
                            </p>
                        </div>

                        <p></p>

                    </article>
                </section>

                <section id="prototype">
                    <article>
                        <div className={frst_style.process_header}>
                            <h3>Prototypefase</h3>
                            <img src="/dot_framework/100px-Logo-workshop.png" />
                        </div>
                        <p>De prototypefase was een leerzame fase. Er is, in overleg met de project-groep, gekozen om gebruik te maken van het NextJS framework. De mogelijkheden van server-side rendering en het genereren van statische webpaginas zijn krachtige tools om een kennis-platform schaalbaar maken zonder veel performance verlies.</p>
                        <p className="quote">“NextJS is een open-source React front-end framework met functionaliteiten als server-side rendering en het genereren van statische webpaginas.”</p>
                        <p>In samenwerking met Leo hebben we de FHICT GitLab pagina opgezet en de project leden toegevoegd. Wij zijn daarbij de “Maintainers” en regelen de merge-requests, dit om merge-conflicts te voorkomen.</p>

                        <div className={frst_style.research_box}>
                            <div>
                                <div>
                                    <p>Bij een gebrek aan beslissing(en) heb ik de taak op me genomen om de development omgeving (layout, routing, pagina’s, etc.) op te zetten. Dit stelde de overige groep-leden in staat om hun pagina’s eenvoudiger te implementeren in een framework dat nieuw is voor iedereen. Daarbij zijn onder andere dynamische pagina’s geïmplementeerd aan de hand van statische (test) data en een dynamische header, met illustraties en een go-back-button.</p>
                                    <p>Verder is door mij de “Write a Solution” pagina geïmplementeerd. Een formulier waarop gebruikers een oplossing voor klimaatverandering kunnen plaatsen. Hierbij is input van de opdrachtgevers omtrent de categorieën en de mogelijkheid om de impact van een oplossing weer te geven toegevoegd.</p>
                                    <br />
                                </div>
                            </div>
                            <img src="/illustrations/undraw_Code_review_re_woeb.svg" />
                        </div>

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
                            href="/documents/"
                            target="_blank">
                            Overdrachts Document
                        </a>
                    </div>
                </section>



                <section id="product">

                    <article>
                        <h2>Product</h2>
                        <p>Een aangepaste ambitieuze opdracht heeft de mogelijkheid gegeven om een gaaf prototype neer te zetten, gebaseerd op degelijk onderzoek en gevalideerd doormiddel van gebruikersonderzoek. Hieronder volgt een lijst met opgeleverde producten:</p>

                        <h3>Prototype</h3>
                        <p>Het belangrijkste opgeleverde product is het prototype. Hierin komen verschillende expertises in terug. Binnen dit product ben ik voornamelijk bezig geweest met het opzetten van de development omgeving: Git en de volledige layout, de “write-a-solution” pagina’s en de git documentatie (Wiki). Dit alles heeft gezorgd voor de front-end en een minimaal functionerend prototype van het kennisplatform voor de Race to Resilience Challenge.</p>

                        <h3>Onderzoeken</h3>
                        <p>Tijdens het project zijn er verschillende onderzoeken uitgevoerd om tot het huidige product te komen. Denk daarbij aan het onderzoek naar de deelvragen, waaronder digitale platformen en kwaliteiten van een mobiele. Deze zijn gebundeld in het hoofd onderzoekdocument.</p>

                        <h3>Overdracht</h3>
                        <p>Om het prototype goed over te dragen aan een potentieel nieuwe groep, is er gezorgd voor goede en duidelijke overdracht documentatie. Er is een bestand opgemaakt met daarin informatie over de bestanden, opleveringen, adviezen en wat er nog gedaan moet worden. Om de overdracht van het prototype en de daarbij horende code te verbeteren is er door mij een Wiki aangemaakt op de GitLab repo. Hierin staat het gehele proces, inclusief documenten gelinkt, de verschillende ontwikkelingen en wat er nog gedaan moet en kan worden (beschreven per pagina). Ik hoop hiermee de (eventueel) volgende groep van voldoende informatie te hebben voorzien.</p>

                    </article>

                </section>



                <section id="conclusie">

                    <article>
                        <h2>Conclusie</h2>
                        <h3>“HOE ONTWIKKEL JE EEN GEBRUIKSVRIENDELIJKE MOBIELE INTERFACE VOOR EEN KENNISPLATFORM, WAARBIJ REKENING WORDT GEHOUDEN MET HET VOLGEN DELEN EN REAGEREN OP USER-GENERATED CONTENT?”</h3>
                        <p>Het doel van de opdracht was om een kennisplatform te ontwerpen en uit te werken tot, minimaal, een functionerende prototype. Dit doel is bereikt door de drie overkoepelende processen te doorlopen.</p>
                        <p>
                            In het <b>analyseproces</b> is er georiënteerd naar de opdracht, zijn er literatuuronderzoeken gedaan naar de deelvragen, is er UX onderzoek gedaan naar huidige platformen en is er een analyse gemaakt van de mobiele trends.
                            <br />
                            <br />
                            In het <b>realisatieproces</b> is er gebrainstormd en zijn er schetsen gemaakt. Bij de development is er gebruik gemaakt van het NextJS framework om een low-fidelity prototype te realiseren waarin enkele van de benodigde back-end functionaliteiten al werkzaam zijn.
                            <br />
                            <br />
                            In het <b>meetproces</b> is er gekeken naar het ontwerp en de functionaliteiten van de “Write a solution” pagina’s doormiddel van een online gebruikersonderzoek. De resultaten hieruit zijn positief, zijn verder geanalyseerd en vormen een advies in de overdracht.
                        </p>
                        <p>Er kan dus geconcludeerd worden dat het realiseren van een minimaal functionerende prototype is behaald en dat er een gebruiksvriendelijke mobiele interface is ontwikkeld.</p>
                    </article>

                </section>



                <section id="reflectie">

                    <article>
                        <h2>Reflectie</h2>
                        <p>Binnen dit project heb ik gewerkt aan een hele ontwikkel-cycles. Van het onderzoeken, designen en testen tot de development. Daarnaast ben ik ook bezig geweest met het managen van het project en de project groep. Ik voelde mij verantwoordelijk voor de voortgang en samenwerking binnen de groep. Hiervoor heb ik me sterk gemaakt en naar aanleiding van een gesprek hebben we goede en duidelijke afspraken gemaakt. Het project en de communicatie verliep goed daarna en daar bij ik enorm tevreden mee.</p>
                        <p>Voor de development heb ik, in samenspraak met de projectgroep, gekozen voor een vrij nieuw framework, genaamd NextJS. Voorheen was ik niet bekent met het framework en ik heb veel tijd gestopt in het ontwikkelen van de benodigde vaardigheden om goed gebruik te maken van dit framework. Hiermee toon ik aan dat ik een leergierige en harde werker ben die graag experimenteert en zichzelf ontwikkeld.</p>
                    </article>

                </section>

            </main>
        </>
    );
}
//export page-elements
export default First_page;