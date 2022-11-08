import axios from "axios";
import type { NextPage } from "next";
import { AppContext, AppInitialProps } from "next/app";
import Head from "next/head";
import * as React from 'react';

const Home: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold" onClick={()=> console.log('123')}>
                    Welcome to{" "}
                    <a className="text-blue-600" href="https://nextjs.org">
                      Next.js!
                    </a>
                </h1>
            </main>
        </div>
    );
};

export default Home;