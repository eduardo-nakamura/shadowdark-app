export interface Character {
  name: string;
  ancestry: string;
  class: string;
  alignment: string;
  background: string;
  level:number;
  strength: number;
  intelligence: number;
  dexterity: number;
  wisdom: number;
  constitution: number;
  charisma: number;
  allBonuses: {
    equipment: { strength: number, dexterity: number,intelligence: number,wisdom: number, constitution: number, charisma: number, };
    magic: { strength: number, dexterity: number,intelligence: number,wisdom: number, constitution: number, charisma: number, };
    temporary: { strength: number, dexterity: number,intelligence: number,wisdom: number, constitution: number,charisma: number, };
  };
  hp: number;
  gp: number;
  sp: number;
  cp: number;
  title?: string;
  deity?: string;
  xp:number;
  ac?: number;
  attacks?: number;
  equipments: string[]; // Lista de equipamentos como strings
  talents: string[];    // Lista de talentos como strings
}
