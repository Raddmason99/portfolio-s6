//import NextJS libraries
import Head from 'next/head'

//construct general Meta Data
const Meta = ({ children }) => {
    return (
        <Head>
            <link rel="manifest" href="/manifest.json" />

            { children}
        </Head>
    );
}

//export module as
export default Meta;