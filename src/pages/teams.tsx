import { NextPage } from 'next';

import { Header } from '../components/Header';
import { Pokeball } from '../components/Pokeball';

import { useTeams } from '../contexts/TeamsContext';

import styles from '../styles/Teams.module.scss';

const Teams: NextPage = () => {
  const { teams } = useTeams();

  return (
    <div className={styles.container}>
      <Header title='CREATE NEW TEAM' />

      <div className={styles.pokeballsContainer}>
        {teams.map((team) => (
          <div key={team.id}>
            <h2>{team.name}</h2>
            <div>
              {team.pokemons.map((pokemon) => (
                <Pokeball key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
            <span className={styles.divisor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
