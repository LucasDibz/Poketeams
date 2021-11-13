import { Pokeball } from '../Pokeball';

import styles from './styles.module.scss';

export const PokeTeams = () => {
  return (
    <>
      <div className={styles.title}>
        <p>My team</p>
        <span>edit</span>
      </div>

      <div className={styles.pokeballsContainer}>
        <Pokeball />
        <Pokeball />
        <Pokeball />
        <Pokeball />
        <Pokeball />
        <Pokeball />
      </div>

      <div className={styles.buttonsContainer}>
        <button>Remove</button>
        <button>Confirm</button>
      </div>
    </>
  );
};
