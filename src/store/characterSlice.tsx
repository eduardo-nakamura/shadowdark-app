// IMPORTANTE: Em um projeto real, você precisaria instalar @reduxjs/toolkit
import * as RTK from '@reduxjs/toolkit';


import type { Character } from '../types'; // Supondo que você tenha a interface Character em types/index.ts

// 1. Estado Inicial
const initialCharacterState: Character = {
    name: 'Aventureiro Sem Nome',
    strength: 10,
    dexterity: 10,
    class: 'Sem Classe',
};

const characterSlice = RTK.createSlice({
  name: 'character', 
  initialState: initialCharacterState,
  reducers: {
    // Reducer 1: Muda o nome do personagem
    // Referenciamos PayloadAction através do namespace RTK
    setName: (state, action: RTK.PayloadAction<string>) => {
      state.name = action.payload;
    },
    // Reducer 2: Adiciona um valor a uma estatística específica
    increaseStat: (state, action: RTK.PayloadAction<{ stat: keyof Character, value: number }>) => {
      const { stat, value } = action.payload;
      
      // Validação simples para garantir que a propriedade é um número
      if (typeof state[stat] === 'number') {
        // A asserção 'as number' é necessária aqui devido ao uso de keyof Character
        (state[stat] as number) += value;
      }
    },
    // Reducer 3: Substitui o estado inteiro do personagem (útil para carregamento)
    loadCharacter: (state, action: RTK.PayloadAction<Character>) => {
      return action.payload;
    },
  },
});

export const { setName, increaseStat, loadCharacter } = characterSlice.actions;

export default characterSlice.reducer;