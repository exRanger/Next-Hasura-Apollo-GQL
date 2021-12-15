import Head from 'next/head'
import A from './A'

const Meta = ({children}) => {
    return (
    <>
        <Head>
            <meta keywords="SPA APP"></meta>
        </Head>
        <div>
           <strong>Aggregator</strong>
        </div>
        <div>
            {children}
        </div>
    </>
    )
}

export default Meta
