import { createContext, ReactNode, useContext, useState } from 'react';

type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

type SelectedPokemonsContextData = {
  selectedPokemons: Pokemon[];
  setSelectedPokemons: (selectedPokemons: Pokemon[]) => void;
  isEditing?: number;
  setIsEditing: (isEditing?: number) => void;
};

const selectedPokemonsContext = createContext<SelectedPokemonsContextData>(
  {} as SelectedPokemonsContextData,
);

export function SelectedPokemonsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([
    {
      id: 1,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      name: 'bulbasaur',
      types: ['grass', 'poison'],
    },
    {
      id: 6,
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
      name: 'charizard',
      types: ['fire', 'flying'],
    },
  ]);
  const [isEditing, setIsEditing] = useState<number>();

  return (
    <selectedPokemonsContext.Provider
      value={{ selectedPokemons, setSelectedPokemons, isEditing, setIsEditing }}
    >
      {children}
    </selectedPokemonsContext.Provider>
  );
}

export const useSelectedPokemons = () => useContext(selectedPokemonsContext);
