//import NextJS dependencies
import Head from 'next/head'
import Link from 'next/link'

//import styling
import wrd_style from '../../styles/Woorden.module.scss'

//import static data
const results = require('../../data/woordenlijst.json')

//fetch props (from static data)
export const getStaticProps = async () => {

    //create array from results
    let woorden = Array.from(results.results)
    //sort on alphabetic order
    woorden.sort(function (a, b) {
        if (a.woord < b.woord) { return -1 }
        if (a.woord > b.woord) { return 1 }
        return 0
    })

    return {
        props: {
            woordenlijst: woorden
        }
    }
}

//construct return page-elements
const woordenlijst_page = ({ woordenlijst }) => {
    return (
        <>
            <Head>
                <title>Portfolio | Woordenlijst</title>
            </Head>
            <main className="body_container">

                <section>
                    <h2>Verklarende woordenlijst</h2>

                    <div className={wrd_style.table_container}>

                    </div>
                    <table className={wrd_style.table_box}>
                        <tr>
                            <th>Woord</th>
                            <th>Verklaring</th>
                        </tr>

                        {woordenlijst.map((item) => (
                            <tr>
                                <td>{item.woord}</td>
                                <td>{item.verklaring}</td>
                            </tr>
                        ))}

                    </table>
                </section>

            </main>
        </>
    );
}
//export page-elements
export default woordenlijst_page;