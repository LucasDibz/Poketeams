import Image from 'next/image';

import { useSelectedPokemons } from '../../contexts/SelectedPokemonsContext';
import { poketypeColors } from '../../utils/pokeTypeColors';

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
  const { isEditing, setIsEditing } = useSelectedPokemons();

  function handleEditSelectedPokemon() {
    isEditing ? setIsEditing(undefined) : setIsEditing(pokemon?.id);
  }

  return (
    <div
      className={styles.container}
      style={
        isEditing && isEditing !== pokemon?.id
          ? {
              filter: 'brightness(80%) grayscale(70%)',
            }
          : {}
      }
      onClick={handleEditSelectedPokemon}
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
        <div
          className={styles.selectedPokemon}
          draggable={false}
          style={
            isEditing && isEditing === pokemon?.id
              ? {
                  filter: `drop-shadow(2px 4px 6px ${
                    poketypeColors[pokemon.types[0]]
                  })`,
                }
              : {}
          }
        >
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
