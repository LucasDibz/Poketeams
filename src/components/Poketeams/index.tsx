import Image from 'next/image';
import { useSelectedPokemons } from '../../contexts/SelectedPokemonsContext';

import { Pokeball } from '../Pokeball';

import styles from './styles.module.scss';

export const PokeTeams = () => {
  const { selectedPokemons } = useSelectedPokemons();
  return (
    <>
      <div className={styles.title}>
        <p>My team</p>
        <Image src='/assets/edit.svg' alt='edit' width={10} height={10} />
      </div>

      <div className={styles.pokeballsContainer}>
        <Pokeball pokemon={selectedPokemons[0]} />
        <Pokeball pokemon={selectedPokemons[1]} />
        <Pokeball pokemon={selectedPokemons[2]} />
        <Pokeball pokemon={selectedPokemons[3]} />
        <Pokeball pokemon={selectedPokemons[4]} />
        <Pokeball pokemon={selectedPokemons[5]} />
      </div>

      <div className={styles.buttonsContainer}>
        <button disabled>
          <Image src='/assets/delete.svg' alt='delete' width={35} height={35} />
        </button>

        <button disabled>
          <Image
            src='/assets/confirm.svg'
            alt='confirm'
            width={35}
            height={35}
          />
        </button>
      </div>
    </>
  );
};
