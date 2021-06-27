//import NextJS dependencies
import Head from 'next/head'
import Link from 'next/link'

//import other dependencies
import React, { useState } from 'react';

//import styling
import sec_style from '../../styles/Second.module.scss'

//construct return page-elements
const Second_page = () => {

    //setup the dropbox modal
    const [showQuestions, toggleQuestions] = useState(false);

    return (
        <>
            <Head>
                <title>Portfolio | Bierens Group</title>
            </Head>
            <main className="body_container">

                <section className={sec_style.intro_container}>
                    <div className={sec_style.intro_container_inherit}>
                        <div className={sec_style.intro_container_textbox}>
                            <h2>De ontwikkeling van een online interactief 360-graden/Panorama ervaring voor Bierens Advocaten Incasso</h2>
                            <p>Bierens group Advocaten Incasso</p>
                        </div>
                    </div>
                </section>

                <section className={sec_style.inbetween01_container}>
                    <div className={sec_style.inbetween01_box}>
                        <a className={sec_style.inbetween_button01}
                            href="/documents/Leeswijzer.pdf"
                            target="_blank">
                            Leeswijzer
                        </a>
                        <a className={sec_style.inbetween_button02}
                            onClick={() => toggleQuestions(!showQuestions)}>
                            Onderzoeksvragen
                        </a>
                        <a className={sec_style.inbetween_button02}
                            href="http://demo.fluxpuck.com/demo5/index.html"
                            target="_blank">
                            Eindproduct
                        </a>
                    </div>
                </section>

                <section>
                    {showQuestions &&
                        <div className="vragen_box">
                            <h3>Design Challenge</h3>
                            <p>Design een <b>online user experience</b> om <b>nieuwe klanten</b> in staat te stellen <b>de processen van Bierens group te ervaren</b> in een <b>digitale omgeving</b> zodat <b>nieuwe klanten beter weten wat hun te wachten staat en zo voor een samenwerking met Bieren Group kiezen</b>.</p>
                            <br />
                            <h3>User Story</h3>
                            <p>Als <b>crediteur van een MKV bedrijf</b>, wil ik <b>inzicht krijgen in de processen van Bierens group</b>, om zo een <b>weloverwogen keuze te kunnen maken</b> met betrekking tot een <b>zakelijke advocaten incasso</b>.</p>
                            <br />
                            <h3>Deelvragen</h3>
                            <p><b>1. Wat is een online user experience?</b></p>
                            <p>1.1. Welke verschillende soorten online experiences zijn er?</p>
                            <p>1.2. Wat zijn de voordelen van een online experience?</p>
                            <p>1.3. Wat zijn kenmerken van een goede online experience?</p>
                            <br />
                            <p><b>2. Hoe kan een dienstverlening ervaren worden binnen een online experience?</b></p>
                            <p>2.1. Welke trends zijn er binnen web development?</p>
                            <br />
                            <p><b>3. Hoe vertaal je de dienstverlening naar een online experience?</b></p>
                        </div>
                    }
                </section>

                <section id='products' className={sec_style.products_container}>
                    <h2>Products</h2>
                    <p>Alle deel producten van dit project zijn te vinden op de onderstaande kaartjes en dragen ieder bij aan de user-story van mijn deel van het gezamenlijke project. Lees de leeswijzer om heel het proces te volgen.</p>
                </section>

                <section id='cards' className={sec_style.cards_container}>

                    <div className={sec_style.analysis_box}>
                        <Link href="/bierens-group/article/online-experience">
                            <div className={sec_style.analysis_boxer}>
                                <h3>Online Experience</h3>
                                <img src="/illustrations/undraw_Freelancer_re_irh4.svg" />
                            </div>
                        </Link>
                    </div>

                    <div className={sec_style.analysis_box}>
                        <Link href="/bierens-group/article/trend-analyse">
                            <div className={sec_style.analysis_boxer}>
                                <h3>Trend Analyse</h3>
                                <img src="/illustrations/undraw_mobile_ux_o0e1.svg" />
                            </div>
                        </Link>
                    </div>

                    <div className={sec_style.analysis_box}>
                        <Link href="/bierens-group/article/eerste-iteratie">
                            <div className={sec_style.analysis_boxer}>
                                <h3>Eerste Iteratie</h3>
                                <img src="/illustrations/undraw_mobile_development_8gyo.svg" />
                            </div>
                        </Link>
                    </div>

                    <div className={sec_style.analysis_box}>
                        <Link href="/bierens-group/article/samenvatting-brainstorm">
                            <div className={sec_style.analysis_boxer}>
                                <h3>Samenvatting Brainstorm</h3>
                                <img src="/illustrations/undraw_teamwork_hpdk.svg" />
                            </div>
                        </Link>
                    </div>

                    <div className={sec_style.analysis_box}>
                        <Link href="/bierens-group/article/tweede-iteratie">
                            <div className={sec_style.analysis_boxer}>
                                <h3>Tweede Iteratie</h3>
                                <img src="/illustrations/undraw_Web_developer_re_h7ie.svg" />
                            </div>
                        </Link>
                    </div>

                    <div className={sec_style.analysis_box}>
                        <Link href="/bierens-group/article/gebruikersonderzoek-een">
                            <div className={sec_style.analysis_boxer}>
                                <h3>Gebruikersonderzoek #1</h3>
                                <img src="/illustrations/undraw_the_search_s0xf.svg" />
                            </div>
                        </Link>
                    </div>

                    <div className={sec_style.analysis_box}>
                        <Link href="/bierens-group/article/derde-iteratie">
                            <div className={sec_style.analysis_boxer}>
                                <h3>Derde Iteratie</h3>
                                <img src="/illustrations/undraw_fixing_bugs_w7gi.svg" />
                            </div>
                        </Link>
                    </div>

                    <div className={sec_style.analysis_box}>
                        <Link href="/bierens-group/article/vierde-iteratie">
                            <div className={sec_style.analysis_boxer}>
                                <h3>Vierde Iteratie</h3>
                                <img src="/illustrations/undraw_Web_developer_re_h7ie.svg" />
                            </div>
                        </Link>
                    </div>

                    <div className={sec_style.analysis_box}>
                        <Link href="/bierens-group/article/gebruikersonderzoek-twee">
                            <div className={sec_style.analysis_boxer}>
                                <h3>Gebruikersonderzoek #2</h3>
                                <img src="/illustrations/undraw_Scrum_board_re_wk7v.svg" />
                            </div>
                        </Link>
                    </div>

                    <div className={sec_style.analysis_box}>
                        <Link href="/bierens-group/article/vijfde-iteratie">
                            <div className={sec_style.analysis_boxer}>
                                <h3>Vijfde Iteratie</h3>
                                <img src="/illustrations/undraw_Code_review_re_woeb.svg" />
                            </div>
                        </Link>
                    </div>

                    <div className={sec_style.analysis_box}>
                        <Link href="/bierens-group/article/business-canvas">
                            <div className={sec_style.analysis_boxer}>
                                <h3>Business Canvas</h3>
                                <img src="/illustrations/undraw_All_the_data_re_hh4w.svg" />
                            </div>
                        </Link>
                    </div>

                    <div className={sec_style.analysis_box}>
                        <Link href="/bierens-group/article/marketing-strategie">
                            <div className={sec_style.analysis_boxer}>
                                <h3>Marketing Strategie</h3>
                                <img src="/illustrations/undraw_Analytics_re_dkf8.svg" />
                            </div>
                        </Link>
                    </div>

                </section>

            </main>

        </>
    );
}
//export page-elements
export default Second_page;