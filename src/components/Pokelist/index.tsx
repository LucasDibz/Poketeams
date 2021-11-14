import Image from 'next/image';

import styles from './styles.module.scss';

const pokemons = new Array(16).fill(0);

export const Pokelist = () => {
  return (
    <>
      <p className={styles.title}>Choose 6 Pokémons</p>

      <div className={styles.pokelistContainer}>
        {pokemons.map((pokemon) => (
          <div key={pokemon}>
            {/* Pokemon ID, fontsize based on pokemon ID length */}
            <span
              style={{
                fontSize: `${0.8 - '#123'.length * 0.05}rem`,
              }}
            >
              #123
            </span>

            {/* Pokemon Image */}
            <div>
              <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
                alt='pokemon'
                height={70}
                width={70}
                unoptimized
                layout='responsive'
              />
            </div>

            {/* Pokemon Types */}
            <div className={styles.pokemonTypes}>
              <div style={{ background: 'orange' }} />
              <div style={{ background: 'grey' }} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
