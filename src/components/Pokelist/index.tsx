import Image from 'next/image';
import { useState } from 'react';

import { useSelectedPokemons } from '../../contexts/SelectedPokemonsContext';
import { poketypeColors } from '../../utils/pokeTypeColors';

import styles from './styles.module.scss';

type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

interface PokelistProps {
  pokemons: Pokemon[];
}

export const Pokelist = ({ pokemons }: PokelistProps) => {
  const { selectedPokemons, setSelectedPokemons } = useSelectedPokemons();
  const [isFull, SetIsFull] = useState(selectedPokemons.length === 6);

  function handleSelectPokemon(id: number) {
    if (selectedPokemons.some((pokemon) => pokemon.id === id)) {
      setSelectedPokemons(
        selectedPokemons.filter((pokemon) => pokemon.id !== id),
      );
    } else {
      if (selectedPokemons.length >= 6) {
        SetIsFull(true);
        setTimeout(() => {
          SetIsFull(false);
        }, 500);
        return;
      }

      const pokemon = pokemons.find((p) => p.id === id);
      if (pokemon) setSelectedPokemons([...selectedPokemons, pokemon]);
    }
  }

  return (
    <>
      <p className={styles.title}>Choose 6 Pokémons</p>

      <div className={styles.pokelistContainer}>
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className={styles.pokemonContainer}
            draggable
            onClick={() => handleSelectPokemon(pokemon.id)}
          >
            {/* Pokemon ID, fontsize based on pokemon ID length */}
            <div className={styles.pokemonId}>
              <span
                style={{
                  fontSize: `${0.8 - `#${pokemon.id}`.length * 0.05}rem`,
                }}
              >
                #{pokemon.id}
              </span>
            </div>

            {/* Pokemon Image */}
            <div>
              <Image
                src={pokemon.image}
                alt='pokemon'
                height={70}
                width={70}
                unoptimized
                layout='responsive'
                draggable={false}
              />
              {/* Selected Pokemon Image */}
              {selectedPokemons.find((p) => p.id === pokemon.id) && (
                <div
                  className={styles.selectedPokemonImage}
                  style={
                    isFull
                      ? {
                          filter: `
                    sepia(80%)
                    brightness(.4) 
                    grayscale(80%)
                    `,
                        }
                      : {}
                  }
                >
                  <Image
                    src='/assets/confirm.svg'
                    height={70}
                    width={70}
                    alt='selected pokemon'
                    draggable={false}
                  />
                </div>
              )}
            </div>

            <div
              className={styles.pokemonName}
              style={{
                fontSize: `${1.1 - pokemon.name.length * 0.05}rem`,
              }}
            >
              {pokemon.name}
            </div>

            {/* Pokemon Types */}
            <div className={styles.pokemonTypes}>
              <div style={{ background: poketypeColors[pokemon.types[0]] }} />
              <div style={{ background: poketypeColors[pokemon.types[1]] }} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
