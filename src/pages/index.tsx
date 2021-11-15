import type { GetServerSideProps, NextPage } from 'next';

import { Header } from '../components/Header';
import { PokeTeams } from '../components/Poketeams';
import { Pokelist } from '../components/Pokelist';

import styles from '../styles/Home.module.scss';

type Pokemons = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

interface HomeProps {
  pokemons: Pokemons[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { results } = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=50',
  ).then((res) => res.json());

  const pokemons: Pokemons[] = [];

  for await (const pokemon of results) {
    const { name, url } = pokemon;
    const result = await fetch(url).then((res) => res.json());
    const image = result.sprites.other['official-artwork'].front_default;
    const types = result.types.map(
      (type: { type: { name: string } }) => type.type.name,
    );

    pokemons.push({ id: result.id, name, image, types });
  }

  pokemons.sort((a, b) => (a.name > b.name ? 1 : -1));

  return {
    props: {
      pokemons,
    },
  };
};

const Home: NextPage<HomeProps> = ({ pokemons }) => {
  return (
    <div className={styles.container}>
      <Header title='TEAMS' />

      <PokeTeams />

      <Pokelist pokemons={pokemons} />
    </div>
  );
};

export default Home;
