import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { SessionProvider } from 'next-auth/react'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <SessionProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    )
}

// 앱 실행시 데이터 받아오는부분
App.getInitialProps = async () => {
    const res = await fetch('https://dev-nft.storicha.in/api/cashseries?series_idx=5737');
    const json = await res.json()
    console.log(json);
    return { star: json.stargazers_count }
}

export default App;