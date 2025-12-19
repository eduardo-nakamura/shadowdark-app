// IMPORTANTE: Em um projeto real, você precisaria instalar @reduxjs/toolkit
import * as RTK from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

import type { Character } from '../types'; // Supondo que você tenha a interface Character em types/index.ts

export type AttributeKey = 'strength' | 'intelligence' | 'dexterity' | 'wisdom' | 'constitution' | 'charisma';
export type BonusSource = 'equipment' | 'magic' | 'temporary';
const initialCharacterState: Character = {
  name: 'cec',
  ancestry: '',
  level: 0,
  strength: 0,
  dexterity: 0,
  intelligence: 0,
  wisdom: 0,
  constitution: 0,
  charisma: 0,
  allBonuses: {
    equipment: {
      strength: 0,
      dexterity: 0,
      intelligence: 0,
      wisdom: 0,
      constitution: 0,
      charisma: 0,
    },
    magic: {
      strength: 0,
      dexterity: 0,
      intelligence: 0,
      wisdom: 0,
      constitution: 0,
      charisma: 0,
    },
    temporary: {
      strength: 0,
      dexterity: 0,
      intelligence: 0,
      wisdom: 0,
      constitution: 0,
      charisma: 0,
    },
  },
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
    setName: (state, action) => {
      state.name = action.payload;
    },
    updateStatValue: (
      state,
      action: PayloadAction<{ key: AttributeKey, value: number }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
    updateAttributeBonus: (
      state,
      action: PayloadAction<{ source: BonusSource, key: AttributeKey, bonus: number }>
    ) => {
      // Ex: state.allBonuses['equipment']['strength'] = 1
      state.allBonuses[action.payload.source][action.payload.key] = action.payload.bonus;
    },
  },
});

export function modifierCalc(atrVal: number): number {
  if (atrVal <= 3) {
    // 1 a 3
    return -4;
  } else if (atrVal <= 5) {
    // 4 a 5
    return -3;
  } else if (atrVal <= 7) {
    // 6 a 7
    return -2;
  } else if (atrVal <= 9) {
    // 8 a 9
    return -1;
  } else if (atrVal <= 11) {
    // 10 a 11
    return 0;
  } else if (atrVal <= 13) {
    // 12 a 13
    return 1;
  } else if (atrVal <= 15) {
    // 14 a 15
    return 2;
  } else if (atrVal <= 17) {
    // 16 a 17
    return 3;
  } else {
    // 18 e acima
    return 4;
  }
}

export const selectEffectiveStrength = (state: RootState): number => {
  const base = state.character.strength;
  const strBonus = modifierCalc(base)
  const equipmentBonus = state.character.allBonuses.equipment.strength;
  const magicBonus = state.character.allBonuses.magic.strength;
  const temporaryBonus = state.character.allBonuses.temporary.strength;  
  const totalBonus = equipmentBonus + magicBonus + temporaryBonus + strBonus;
  
  return base + totalBonus;
};




export const {
  loadCharacter,
  addEquipment,
  removeEquipment,
  addTalent,
  removeTalent,
  updateHP,
  updateStatValue,
  setName
} = characterSlice.actions;

export const selectCharacter = (state: RootState) => state.character;

export default characterSlice.reducer;