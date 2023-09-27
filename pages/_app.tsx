import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../theme/GlobalStyles';
 
export default function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
        
        <Head>
            <title>Julgamento</title>
        </Head>
        <GlobalStyles/>
        <Component {...pageProps} />
    </>
 ) 
    
}