/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number


*/

////////////////////////////Через оператор "if"///////////////////////////////////////

  let minAge = 18;
  let maxAge = 60;
  let age = "10";

  if (isNaN(age)) {
    console.log("Incorrect data type");
  } else if (age < minAge) {
    console.log("You don't have access cause your age is " + age + ". It's less then 18.");
  } else if (age >= minAge && age < maxAge) {
    console.log("Welcome  !");
  } else if (age > maxAge) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work");
  }

  ////////////////////////////Через оператор "?"///////////////////////////////////////

  

  let minAge = 18;
  let maxAge = 60;
  let age = "18";
  let userName = "Василий";
  
  let message = (isNaN(age)) ? "Incorrect data type" :
    (age < minAge) ? "You don't have access cause your age is " + age + ". It's less then 18." :
    (age >= minAge && age < maxAge) ? "Welcome, " + userName + "!" :
    (age > maxAge) ? "Keep calm and look Culture channel" :
    "Technical work";

  console.log(message);
