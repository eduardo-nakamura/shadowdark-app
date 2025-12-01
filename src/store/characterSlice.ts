// IMPORTANTE: Em um projeto real, você precisaria instalar @reduxjs/toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../types'; // Supondo que você tenha a interface Character em types/index.ts

// 1. Estado Inicial
const initialCharacterState: Character = {
    name: 'Aventureiro Sem Nome',
    strength: 10,
    dexterity: 10,
    class: 'Sem Classe',
};

const characterSlice = createSlice({
    name: 'character', // Nome único para esta fatia de estado
    initialState: initialCharacterState,
    reducers: {
        // Reducer 1: Muda o nome do personagem
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        // Reducer 2: Adiciona um valor a uma estatística específica
        increaseStat: (state, action: PayloadAction<{ stat: keyof Character, value: number }>) => {
            const { stat, value } = action.payload;
            // Nota: Esta lógica precisaria de verificações de tipo mais robustas em uma implementação real
            if (typeof state[stat] === 'number') {
                (state[stat] as number) += value;
            }
        },
        // Reducer 3: Substitui o estado inteiro do personagem (útil para carregamento)
        loadCharacter: (state, action: PayloadAction<Character>) => {
            return action.payload; // Retorna o novo estado
        },
    },
})

export const { setName, increaseStat, loadCharacter } = characterSlice.actions;
export default characterSlice.reducer;