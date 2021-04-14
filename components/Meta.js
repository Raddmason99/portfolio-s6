//import NextJS libraries
import Head from 'next/head'

//construct general Meta Data
const Meta = ({ children }) => {
    return (
        <Head>
            { children}
        </Head>
    );
}

//export module as
export default Meta;