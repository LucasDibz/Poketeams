import Image from 'next/image';

import { Pokeball } from '../Pokeball';

import styles from './styles.module.scss';

export const PokeTeams = () => {
  return (
    <>
      <div className={styles.title}>
        <p>My team</p>
        <Image src='/assets/edit.svg' alt='edit' width={10} height={10} />
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
