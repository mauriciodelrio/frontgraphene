import App from "next/app";
import Head from "next/head";
// import own css
import '../assets/css/style.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@uiw/react-markdown-preview/markdown.css';
import 'tailwindcss/tailwind.css'
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { DefaultSeo } from 'next-seo';

import { UserProvider } from '@auth0/nextjs-auth0';

import SEO from '../next-seo-config'
config.autoAddCss = false

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
      <DefaultSeo {... SEO} />
      <Head>

          <link rel="icon" href="/carbon2.svg" />
       </Head>   
       <UserProvider>
        <GlobalContext.Provider value={global}>
          <Component {...pageProps} />
        </GlobalContext.Provider>
       </UserProvider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  // const global = await fetchAPI("/global");
  // Pass the data to our page via props
  return { ...appProps };
};

export default MyApp;
