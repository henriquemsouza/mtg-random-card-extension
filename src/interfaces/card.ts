export interface Cards {
    cards: Card[]
  }
  
  export interface Card {
    name: string;
    manaCost: string;
    cmc: number;
    colors: string[];
    colorIdentity: string[];
    type: string
    supertypes: string[];
    types: string[];
    subtypes: string[];
    rarity: string;
    set: string;
    setName: string;
    text: string;
    artist: string;
    number: string;
    power: string;
    toughness: string;
    layout: string;
    rulings: Ruling[];
    printings: string[];
    legalities: Legality[];
    id: string;
    imageUrl: string;
    flavor?: string;
    foreignNames?: ForeignName[]
  }
  
  export interface Ruling {
    date: string
    text: string
  }
  
  export interface Legality {
    format: string
    legality: string
  }
  

  export interface ForeignName {
    name: string
    text: string
    type: string
    flavor: any
    imageUrl: string
    language: string
    multiverseid: any
  }
  