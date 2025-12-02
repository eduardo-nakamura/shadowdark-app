import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import Page from '../components/Page'

const useCharacterName = () => useSelector((state: RootState) => state.character.name);

export default function CharCreator() {
  const characterName = useCharacterName();

  return (
    <Page>CharCreator {characterName}</Page>
  )
}
