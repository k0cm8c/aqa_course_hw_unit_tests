/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

let vowels = 'aeiouy';
let consonants = 'bcdfghjklmnpqrstvwxyz';
let vowelsCounter = 0;
let consonantsCounter = 0;

for (let i = 0; i <= word.length; i++) {
    if (vowels.includes(word[i])) {
        vowelsCounter +=1;
    } else if (consonants.includes(word[i])) {
        consonantsCounter +=1;
    }
}

vowelsAndConsonantsResult = `${word} contains ${vowelsCounter} vowels and ${consonantsCounter} consonants`;
console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
