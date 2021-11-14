import type { AppProps } from 'next/app';

import { SelectedPokemonsContextProvider } from '../contexts/SelectedPokemonsContext';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SelectedPokemonsContextProvider>
      <Component {...pageProps} />
    </SelectedPokemonsContextProvider>
  );
}

export default MyApp;
