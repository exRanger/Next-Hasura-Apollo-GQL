import Head from 'next/head'
import A from './A'

const Meta = ({children}) => {
    return (
    <>
        <Head>
            <meta keywords="headmade, itcompany, it-headmade"></meta>
        </Head>
        <div>
           <strong>TASK BY HEADMADE.</strong>
        </div>
        <div>
            {children}
        </div>
    </>
    )
}

export default Meta