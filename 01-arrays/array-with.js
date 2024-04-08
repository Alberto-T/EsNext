
const state = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    },
    {
        id: 3,
        name: 'Flash'
    },
    {
        id: 4,
        name: 'Aquaman'
    },
];

const index = 1;
const newName = 'Green Lantern';

const newState = state.map( (hero, i) => {

    if( i === index ){
        hero.name = newName;
    }
    
    return hero;

});

console.table(newState);

