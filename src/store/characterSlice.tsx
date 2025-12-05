// IMPORTANTE: Em um projeto real, você precisaria instalar @reduxjs/toolkit
import * as RTK from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

import type { Character } from '../types'; // Supondo que você tenha a interface Character em types/index.ts

// 1. Estado Inicial
const initialCharacterState: Character = {
  name: 'cec',
  ancestry: '',
  level:0,
  strength: 0,
  dexterity: 0,
  intelligence: 0,
  wisdom: 0,
  constitution: 0,
  charisma: 0,
  hp: 0,
  background: '',
  alignment: '',
  class: '',
  gp: 0,
  sp: 0,
  cp: 0,
  xp: 0,
  equipments: [],
  talents: []
};


const characterSlice = RTK.createSlice({
  name: 'character',
  initialState: initialCharacterState,
  reducers: {
    // 1. Reducer para carregar um personagem inteiro de uma vez
    loadCharacter: (state, action: PayloadAction<Character>) => {
      // Redux Toolkit usa Immer, permitindo mutação direta (que é segura)
      return action.payload; 
    },
    // 2. Reducer para adicionar um item ao inventário
    addEquipment: (state, action: PayloadAction<string>) => {
      state.equipments.push(action.payload);
    },
    // 3. Reducer para remover um item do inventário
    removeEquipment: (state, action: PayloadAction<string>) => {
      state.equipments = state.equipments.filter(eq => eq !== action.payload);
    },
    // 4. Reducer para adicionar um talento
    addTalent: (state, action: PayloadAction<string>) => {
      state.talents.push(action.payload);
    },
    // 5. Reducer para remover um talento
    removeTalent: (state, action: PayloadAction<string>) => {
      state.talents = state.talents.filter(t => t !== action.payload);
    },
    // 6. Exemplo: Reducer para atualizar o HP
    updateHP: (state, action: PayloadAction<number>) => {
      state.hp = action.payload;
    },
  },
});

export const { 
    loadCharacter, 
    addEquipment, 
    removeEquipment, 
    addTalent, 
    removeTalent, 
    updateHP 
} = characterSlice.actions;

export const selectCharacter = (state: RootState) => state.character;

export default characterSlice.reducer;