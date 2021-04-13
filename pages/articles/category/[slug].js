//import NextJS dependencies
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router'

//import styling
import art_style from '../../../styles/Articles.module.scss'

//import database
import { results } from '../../../test_data.json';


/*  Fetching results from database and create
    static paths for the render engine
    based on result id, hash... */
export const getStaticPaths = async () => {

    //construct paths based on slugs of all results
    const paths = results.map(solution => {
        return { params: { slug: solution.category.toString() } }
    })

    return {
        paths,
        fallback: false
    }
}

/*  Fetch specific database item, based on 
    slug from getStaticPaths paths */
export const getStaticProps = async (context) => {

    //construct slug from getStaticPaths
    const slug = context.params.slug

    //fetch data, based on slug
    const data = results.filter(solution => solution.category == slug)

    return { props: { solutions: data } }
}

//construct return page-elements
const Articles = () => {
    return (
        <>
            <Head>
                <title></title>
            </Head>
            <main className={ }>



            </main>
        </>
    );
}
//export page-elements
export default Articles;