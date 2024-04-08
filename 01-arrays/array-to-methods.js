
const heroes = ['Capitán América', 'Iron Man', 'Spiderman', 'Hulk',];
// heroes.sort();
// const heroesCopy = heroes;

const deletedHeroes = heroes.splice(0, 2, 'Green');

// const deletedHeroes = heroes.toSpliced(0, 2, 'Green Lantern')

// const sortedHeroes = heroes.toSorted();
// const reversedHeroes = heroes.toReversed();



console.table(heroes);
// console.table(sortedHeroes);
// console.table(reversedHeroes);
console.table({deletedHeroes});
