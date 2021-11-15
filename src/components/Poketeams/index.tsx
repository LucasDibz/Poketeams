import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useSelectedPokemons } from '../../contexts/SelectedPokemonsContext';
import { useTeams } from '../../contexts/TeamsContext';
import { Pokeball } from '../Pokeball';

import styles from './styles.module.scss';

export const PokeTeams = () => {
  const [teamName, SetTeamName] = useState('My team');
  const [isEditingTeamName, setIsEditingTeamName] = useState(false);

  const { isEditing, setIsEditing } = useSelectedPokemons();
  const { selectedPokemons, setSelectedPokemons } = useSelectedPokemons();
  const { teams, setTeams } = useTeams();

  const router = useRouter();

  function handleRemoveSelectedPokemon() {
    const pokemon = selectedPokemons.find((poke) => poke.id === isEditing);

    if (pokemon) {
      const newSelectedPokemons = selectedPokemons.filter(
        (poke) => poke.id !== isEditing,
      );

      setSelectedPokemons(newSelectedPokemons);
      setIsEditing(undefined);
    }
  }

  function handleCreateNewTeam() {
    console.log('create new team', selectedPokemons.length);
    if (selectedPokemons.length < 6) return;

    const newTeam = {
      id: Math.random() * 1000,
      name: teamName,
      pokemons: selectedPokemons,
    };
    console.log('new team', newTeam);
    setTeams([...teams, newTeam]);
    router.push('/teams');
  }

  return (
    <>
      <div className={styles.title}>
        <input
          type='text'
          value={teamName}
          onChange={(e) => SetTeamName(e.target.value)}
          style={{
            width: `${teamName.length + 2}ch`,
          }}
          disabled={!isEditingTeamName}
        />
        <Image
          src='/assets/edit.svg'
          alt='edit'
          width={10}
          height={10}
          onClick={() => setIsEditingTeamName(!isEditingTeamName)}
        />
      </div>

      <div className={styles.pokeballsContainer}>
        <Pokeball pokemon={selectedPokemons[0]} />
        <Pokeball pokemon={selectedPokemons[1]} />
        <Pokeball pokemon={selectedPokemons[2]} />
        <Pokeball pokemon={selectedPokemons[3]} />
        <Pokeball pokemon={selectedPokemons[4]} />
        <Pokeball pokemon={selectedPokemons[5]} />
      </div>

      <div className={styles.buttonsContainer}>
        <button disabled={!isEditing} onClick={handleRemoveSelectedPokemon}>
          <Image src='/assets/delete.svg' alt='delete' width={35} height={35} />
        </button>

        <button
          disabled={selectedPokemons.length < 6}
          onClick={handleCreateNewTeam}
        >
          <Image
            src='/assets/confirm.svg'
            alt='confirm'
            width={35}
            height={35}
          />
        </button>
      </div>
    </>
  );
};
