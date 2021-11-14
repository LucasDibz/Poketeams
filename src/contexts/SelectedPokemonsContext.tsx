import { createContext, ReactNode, useContext, useState } from 'react';

interface SelectedPokemonsContextProps {
  children: ReactNode;
}

type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

type SelectedPokemonsContextData = {
  selectedPokemons: Pokemon[];
  SetSelectedPokemons: (selectedPokemons: Pokemon[]) => void;
};

const selectedPokemonsContext = createContext<SelectedPokemonsContextData>(
  {} as SelectedPokemonsContextData,
);

export function SelectedPokemonsContextProvider({
  children,
}: SelectedPokemonsContextProps) {
  const [selectedPokemons, SetSelectedPokemons] = useState<Pokemon[]>([
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

  return (
    <selectedPokemonsContext.Provider
      value={{ selectedPokemons, SetSelectedPokemons }}
    >
      {children}
    </selectedPokemonsContext.Provider>
  );
}

export const useSelectedPokemons = () => useContext(selectedPokemonsContext);
