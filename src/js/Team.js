/* eslint-disable no-plusplus */
class Team {
  constructor(Character) {
    this.Character = Character;
  }

  iter() {
    let index = 0;
    const { Character } = this;
    return {

      next() {
        if (index < Character.length) {
          const character = Character[index];
          index++;
          return {
            value: character,
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}
export default Team;
