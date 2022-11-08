import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider, useMutation } from 'react-query'
import {} from 'react-query'
import * as React from 'react'

const App = ({ Component, pageProps }: AppProps) => {
    const [queryClient] = React.useState(()=> new QueryClient())
    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </QueryClientProvider>
        </SessionProvider>
    )
}

export default App;