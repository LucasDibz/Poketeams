import type { NextPage } from 'next';

import { Header } from '../components/Header';
import { PokeTeams } from '../components/Poketeams';
import { Pokelist } from '../components/Pokelist';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header title='TEAMS' />

      <PokeTeams />

      <Pokelist />
    </div>
  );
};

export default Home;
