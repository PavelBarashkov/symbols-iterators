class Team {
    constructor(Character) {
        this.Character = Character;
    }
    iter() {
        let index = 0;
        const { Character } = this;
        return {
            
            next() {
                if (index >= Character.length) {
                    return {
                        value: undefined,
                        done: true,
                    }
                }
                const character = Character[index];
                index++;
                return {
                    value: character,
                    done: false,
                }
            }
        }
    }
}
export default Team
