/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

/////////////первое решение///////////////

let evenNumbersResult = '';

for(let i = 10; i >= 0; i--) {
    if (i === 0) {
        evenNumbersResult += i;
            continue;
    }
    if (i === 2) {
    evenNumbersResult += i + "-";
        continue;
    }
    if (i === 4) {
    evenNumbersResult += i + "-";
        continue;
    }
    if (i === 6) {
    evenNumbersResult += i + "-";
        continue;
    }
    if (i === 8) {
    evenNumbersResult += i + "-";
        continue;
    }
    if (i === 10) {
    evenNumbersResult += i + "-";
        continue;
    }
}

console.log(evenNumbersResult);

/////////////второе (более короткое) решение///////////////

let evenNumbersResult = '';

for(let i = 10; i >= 0; i--) {
    if (i % 2 === 0)
        evenNumbersResult += i + "-";
        continue;
    }

    console.log(evenNumbersResult.slice(0, evenNumbersResult.length -1));
/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';

for (let i = 0; i <= 4; i++) {
    if (i === 0) {
        smilePatternResult += ":)\n";
        continue;
    }
    if (i === 1) {
        smilePatternResult +=  ":):)\n";
        continue;
    }
    if (i === 2) {
        smilePatternResult += ":):):)\n";
        continue;
    }
    if (i === 3) {
        smilePatternResult += ":):):):)\n";
        continue;
    }
    if (i === 4) {
        smilePatternResult += ":):):):):)\n";
        continue;
    }
}

    console.log(smilePatternResult);

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */

const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';
replaceSpacesWithOneResult = text.replaceAll(" ", "1");

console.log(replaceSpacesWithOneResult);


export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
