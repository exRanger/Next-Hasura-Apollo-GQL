import Head from 'next/head'
import A from './A'

const Meta = ({children}) => {
    return (
    <>
        <Head>
            <meta keywords="SPA APP"></meta>
        </Head>
        <div>
           <strong>TASK BY</strong>
        </div>
        <div>
            {children}
        </div>
    </>
    )
}

export default Meta
