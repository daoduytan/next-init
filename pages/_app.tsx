import { AppProps } from 'next/app';
import { ReactQueryCacheProvider, QueryCache } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import '../styles/globals.css';

const queryCache = new QueryCache();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </ReactQueryCacheProvider>
  );
}

export default MyApp;
