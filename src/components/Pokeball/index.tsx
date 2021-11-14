import Image from 'next/image';

import styles from './styles.module.scss';

type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

interface PokeballProps {
  pokemon?: Pokemon;
}

export function Pokeball({ pokemon }: PokeballProps) {
  return (
    <div
      className={styles.container}
      style={{
        filter: 'brightness(80%) grayscale(70%)',
      }}
    >
      <div>
        <Image
          src='/assets/pokeball.svg'
          alt='pokeball'
          width={77}
          height={77}
        />
      </div>

      {pokemon && (
        <div className={styles.selectedPokemon} draggable={false}>
          <Image
            src={pokemon.image}
            width={77}
            height={77}
            alt={pokemon?.name}
            unoptimized
          />
        </div>
      )}
    </div>
  );
}
