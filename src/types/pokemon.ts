export interface Pokemon {
  objectID?: string,
  id: number;
  name?: {
    english: string,
    japanese: string,
    chinese: string,
    french: string,
  };
  type?: string[];
  base?: {
    HP: number,
    Attack: number,
    Defense: number,
    "Sp. Attack": number,
    "Sp. Defense": number,
    Speed: number,
  }
  imageUrl?: string;
  game_versions: string[];
}