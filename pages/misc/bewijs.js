//import NextJS dependencies
import Head from 'next/head'
import Link from 'next/link'

//import styling
import wrd_style from '../../styles/Woorden.module.scss'

//construct return page-elements
const vw_page = () => {
    return (
        <>
            <Head>
                <title>Portfolio | Bewijs</title>
            </Head>
            <main className="body_container">


                <section>
                    <h2>Bewijslast</h2>

                    <div className={wrd_style.table_container}>

                    </div>

                    <table className={wrd_style.table_box}>
                        <tr>
                            <th>Categorie</th>
                            <th>Rubrix</th>
                            <th>Product</th>
                        </tr>

                        <tr>
                            <td colSpan="3"></td>
                        </tr>

                        <tr className={wrd_style.table_header}>
                            <td colSpan="3">Strategie & Concept: <span>De student kan in maatschappelijke context door middel van exploratief onderzoek trends & kansen signaleren en deze vertalen naar zinvolle en vernieuwende productconcepten.</span></td>
                        </tr>

                        <tr>
                            <td colSpan="3"></td>
                        </tr>

                        <tr>
                            <td>Trends</td>
                            <td>De student kan belangrijke trends signaleren, zichtbaar maken en vastleggen in een gevalideerde methode.</td>
                            <td><a href="https://fhict-fluxpuck.vercel.app/documents/Mobile_Design_Trend_Analyse.pdf">Trend Analyse</a> Ecodorp | <a href="https://fhict-fluxpuck.vercel.app/bierens-group/article/trend-analyse">Trend Analyse</a> Bierens Group</td>
                        </tr>

                        <tr>
                            <td>Concept</td>
                            <td>De student kan een onderbouwd productconcept creeren met een aantoonbare meerwaarde in de huidige maatschappij.</td>
                            <td><a href="https://fhict-fluxpuck.vercel.app/race-to-resilience#concept">Site-map</a>, <a href="https://fhict-fluxpuck.vercel.app/documents/Userflow_Analyse_Kennis_platform_posten.pdf">Analyse</a>, <a href="https://fhict-fluxpuck.vercel.app/documents/Heuristische_Evaluatie_Wikihow.pdf">Heuristische analyse</a>, <a href="https://fhict-fluxpuck.vercel.app/race-to-resilience#concept">Ontwerp</a> Ecodorp | <a href="https://fhict-fluxpuck.vercel.app/bierens-group/article/eerste-iteratie">Technisch concept</a>, <a href="https://fhict-fluxpuck.vercel.app/bierens-group/article/samenvatting-brainstorm">Brainstorm</a> Bierens Group </td>
                        </tr>

                        <tr>
                            <td colSpan="3"></td>
                        </tr>

                        <tr className={wrd_style.table_header}>
                            <td colSpan="3">Strategie & Concept: <span>De student kan de commerciele haalbaarheid van het product(concept) onderbouwen en uitvoeren.</span></td>
                        </tr>

                        <tr>
                            <td colSpan="3"></td>
                        </tr>

                        <tr>
                            <td>Business-Model</td>
                            <td>De student heeft een business-model gemaakt op basis van onderzoek.</td>
                            <td><a href="https://fhict-fluxpuck.vercel.app/bierens-group/article/business-canvas">Business Model Canvas</a> Bierens Group</td>
                        </tr>

                        <tr>
                            <td>Marketing</td>
                            <td>De student heeft de communicatie strategie bepaald door een vergelijking te maken tussen de mogelijke middelen. Duidelijke doelstellingen, doelgroep, positionering en propositie zijn onderdelen van de strategie en worden op basis van onderzoek bepaald.</td>
                            <td><a href="https://fhict-fluxpuck.vercel.app/bierens-group/article/marketing-strategie">Marketing Strategie</a> Bierens Group</td>
                        </tr>

                        <tr>
                            <td>Communicatie</td>
                            <td>De student kan zijn werk op een heldere gestructureerde manier presenteren (mondeling, tekstueel en visueel).</td>
                            <td><a href="https://drive.google.com/drive/folders/1PcaWj1VfJvccxL6_1niRjFciLoEg2kpn">Presentatie-template</a> Ecodorp | <a href="https://drive.google.com/drive/folders/1ewEoiX1-9c1_YTKjn-2CfQaqnHy6QbnZ">Presentatie-template</a> <a href="https://fhict-fluxpuck.vercel.app/bierens-group/article/samenvatting-brainstorm">Brainstorm sessies</a> Bierens Group</td>
                        </tr>

                        <tr>
                            <td colSpan="3"></td>
                        </tr>

                        <tr className={wrd_style.table_header}>
                            <td colSpan="3">Professionele ontwikkeling: <span>De kwaliteiten en talenten van de student komen tot uiting in zijn studie- en beroepshouding.</span></td>
                        </tr>

                        <tr>
                            <td colSpan="3"></td>
                        </tr>

                        <tr>
                            <td>Professionele houding</td>
                            <td>De student betrekt zelfreflectie en ontvangen feedback op eigen functioneren. Hij toont initiatief en werkt resultaatgericht.</td>
                            <td><a href="https://fhict-fluxpuck.vercel.app/documents/EcoDorp_Trello.png">Trello</a> Ecodorp | <a href="https://fhict-fluxpuck.vercel.app/documents/Bierensgroup_Trello.png">Trello</a>,<a href="https://fhict-fluxpuck.vercel.app/documents/Natasha_feedback.pdf">Feedback Natasha</a>  Bierens Group | <a href="https://fhict-fluxpuck.vercel.app/documents/Peer_feedback.pdf">Peer Feedback</a></td>
                        </tr>

                        <tr>
                            <td colSpan="3"></td>
                        </tr>

                        <tr className={wrd_style.table_header}>
                            <td colSpan="3">User Experience en User Centered Design: <span>De student kan door middel van een UCD process alle raakvlakken van de gebruiker met het product zo vormgeven dat de bedoelde gebruikerservaring bereikt wordt.</span></td>
                        </tr>

                        <tr>
                            <td colSpan="3"></td>
                        </tr>

                        <tr>
                            <td>Design</td>
                            <td>De student gebruikt verschillende design technieken in de projecten die voldoen aan de algemeen geldende design guidelines.</td>
                            <td><a href="https://fhict-fluxpuck.vercel.app/race-to-resilience#onderzoek">Design principes</a>, <a href="https://fhict-fluxpuck.vercel.app/documents/Userflow_Analyse_Kennis_platform_posten.pdf">Analyse kennisplatforms</a>, <a href="https://fhict-fluxpuck.vercel.app/documents/Mobile_Design_Trend_Analyse.pdf">mobiele design trends</a> Ecodorp | <a href="https://fhict-fluxpuck.vercel.app/bierens-group/article/eerste-iteratie">Technisch Prototype</a>, <a href="http://demo.fluxpuck.com/">Prototypes</a> Bierens</td>
                        </tr>

                        <tr>
                            <td>User Experience</td>
                            <td>De student reflecteerd op basis van een gevalideerd framework in relatie tot zijn product, waardoor de kwaliteit van de gebruikerservaring toeneemt.</td>
                            <td><a href="https://fhict-fluxpuck.vercel.app/documents/Heuristische_Evaluatie_Wikihow.pdf">Heuristische Analyse</a> Ecodorp</td>
                        </tr>

                        <tr>
                            <td>Gebruikersonderzoek</td>
                            <td>De student heeft op drie momenten gebruikersonderzoek gedaan en de resultaten zijn gebruikt om het product te verbeteren.</td>
                            <td><a href="https://fhict-fluxpuck.vercel.app/documents/Usability_Test_Write_a_Solution.pdf">Gebruikersonderzoek - Write a solution</a> Ecodorp | <a href="https://fhict-fluxpuck.vercel.app/bierens-group/article/gebruikersonderzoek-een">Gebruikersonderzoek Hotspots</a>, <a href="https://fhict-fluxpuck.vercel.app/bierens-group/article/gebruikersonderzoek-twee">Gebruikersonderzoek Navigatie</a> Bierens</td>
                        </tr>

                        <tr>
                            <td colSpan="3"></td>
                        </tr>

                        <tr className={wrd_style.table_header}>
                            <td colSpan="3">Design en Development: <span>De student kan zelfstandig ICT & Media Design oplossingen realiseren, testen en overdragen.</span></td>
                        </tr>

                        <tr>
                            <td colSpan="3"></td>
                        </tr>

                        <tr>
                            <td>Development</td>
                            <td>De student kan zelfstandig ICT & Media Design oplossingen realiseren, testen en overdragen.</td>
                            <td><a href="https://docs.google.com/document/d/1VHl7L82AVpqUz4ym-aPivCQOPWPyQ7K8xioUilUDZBE/edit#heading=h.8uiub4ywhusu">Overdracht documentatie</a>, <a href="https://git.fhict.nl/I382255/race-to-resilience/-/wikis/home">Overdracht Wiki</a>, <a href="https://race-to-resillience.vercel.app/">Online Prototype</a> <a href="https://git.fhict.nl/I382255/race-to-resilience/">Project Code Gitlab</a> Ecodorp | <a href="http://demo.fluxpuck.com/">Prototypes</a>, <a href="https://git.fhict.nl/I370416/bierensgroup/">Product Code Gitlab</a> Bierens</td>
                        </tr>

                    </table>
                </section>

            </main>
        </>
    );
}
//export page-elements
export default vw_page;