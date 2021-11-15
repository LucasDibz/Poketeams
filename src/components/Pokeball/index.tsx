import Image from 'next/image';

import { useSelectedPokemons } from '../../contexts/SelectedPokemonsContext';
import { poketypeColors } from '../../utils/pokeTypeColors';
import BottomPokeballSVG from './BottomPokeballSVG';

import styles from './styles.module.scss';
import TopPokeballSVG from './TopPokeballSVG';

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
      <TopPokeballSVG
        fill={pokemon ? poketypeColors[pokemon?.types[0]] : '#fff'}
      />
      <BottomPokeballSVG />

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
