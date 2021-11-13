import Image from 'next/image';

import styles from './styles.module.scss';

export function Pokeball() {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src='/assets/pokeball.svg'
          alt='pokeball'
          width={77}
          height={77}
        />
      </div>
    </div>
  );
}
