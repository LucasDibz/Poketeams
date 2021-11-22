import { createContext, ReactNode, useContext, useState } from 'react';

type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

type PokemonsTeam = {
  id: number;
  name: string;
  pokemons: Pokemon[];
};

type TeamsContextData = {
  teams: PokemonsTeam[];
  setTeams: (teams: PokemonsTeam[]) => void;
};

const teamsContext = createContext<TeamsContextData>({} as TeamsContextData);

export function TeamsContextProvider({ children }: { children: ReactNode }) {
  const [teams, setTeams] = useState<PokemonsTeam[]>([
    {
      id: 1,
      name: 'Team Rocketseat',
      pokemons: [
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
      ],
    },
  ]);

  return (
    <teamsContext.Provider value={{ teams, setTeams }}>
      {children}
    </teamsContext.Provider>
  );
}

export const useTeams = () => useContext(teamsContext);
