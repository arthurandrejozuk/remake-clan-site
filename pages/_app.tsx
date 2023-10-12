import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../theme/GlobalStyles';
 
export default function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
        
        <Head>
            <title>Julgamento</title>
            <link rel="icon" type="image/x-icon" href="https://i.pinimg.com/564x/0e/5a/f9/0e5af9bce1a3f3e992bb3ca5ff603bc0.jpg"/>
        </Head>
        <GlobalStyles/>
        <Component {...pageProps} />
    </>
 ) 
    
}