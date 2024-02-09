export interface Character {
    history: {
        backstory: string;
        hometown: string;
        location: string;
        occupation: string;
    };
    identity: {
        age: string;
        alignment: string;
        gender: string;
        sexuality: string;
    };
    names: {
        fullName: string;
        shortName: string;
        title: string;
    };
    personality: {
        bonds: string;
        flaws: string;
        ideals: string;
        motives: string;
    };
    physical: {
        build: string;
        eyes: string;
        hair: string;
        height: string;
        size: string;
        weight: string;
    };
    relationships: {
        attitude: string;
        enemies: string;
        family: string;
        friends: string;
        partner: string;
        type: string;
    };
}

export class Character {
    
    constructor(character: Character) {}

}