import type { AppProps } from 'next/app';

import { SelectedPokemonsContextProvider } from '../contexts/SelectedPokemonsContext';
import { TeamsContextProvider } from '../contexts/TeamsContext';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SelectedPokemonsContextProvider>
      <TeamsContextProvider>
        <Component {...pageProps} />
      </TeamsContextProvider>
    </SelectedPokemonsContextProvider>
  );
}

export default MyApp;
