import Team from "../Team"

let Character = [
    {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
    },
    {
        name: 'Воин',
        type: 'Var',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
    }
];

test('Team test var', () => {
    const team = new Team(Character).iter();
    const Bowman = team.next();
    const Var = team.next().value;
    expect(Character[1]).toEqual(Var)
})

test('test value > team.length', () => {
    const team = new Team(Character).iter();
    const Bowman = team.next();
    const Var = team.next().value;
    const result = team.next().value;
    expect(undefined).toEqual(result)
})