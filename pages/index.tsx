import { deleteCookie, getCookie, getCookies, setCookie } from "cookies-next";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Welcome to{" "}
                    <a className="text-blue-600" href="https://nextjs.org">
                      Next.js!
                    </a>
                </h1>
            </main>
        </div>
    );
};

export const getServerSideProps = ({req, res}:any) => {
    setCookie('test', 'value', { req, res, maxAge: 60 * 6 * 24 });
    getCookie('test', { req, res });
    getCookies({ req, res });
    deleteCookie('test', { req, res });

    return { props: {} };
}

export default Home;