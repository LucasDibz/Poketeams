import Image from 'next/image';

import styles from './styles.module.scss';

export const Pokelist = () => {
  return (
    <>
      <p className={styles.title}>Choose 6 Pokémons</p>

      <div className={styles.pokelistContainer}>
        <Image
          src='https://picsum.photos/40'
          alt='pokemon'
          height={60}
          width={60}
          unoptimized
        />
        <Image
          src='https://picsum.photos/40'
          alt='pokemon'
          height={60}
          width={60}
          unoptimized
        />
        <Image
          src='https://picsum.photos/40'
          alt='pokemon'
          height={60}
          width={60}
          unoptimized
        />
        <Image
          src='https://picsum.photos/40'
          alt='pokemon'
          height={60}
          width={60}
          unoptimized
        />
      </div>
    </>
  );
};
