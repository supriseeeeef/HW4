/*
Напиши програму, яка запитує у користувача його вік, а потім перетворює введене значення на число та додає 5 років.
Виведи результат у консоль.
*/

// let getUserAge = +prompt("Enter your age:")
// console.log(getUserAge + 5)


/*
Напиши програму, яка перевіряє, чи є число парним та більшим за 10.
Використай логічні оператори «І» (&&), «АБО» (||) та «НЕ» (!).
*/

// let getUserNumber = Number(prompt("Enter number:"))
// const calculate = getUserNumber > 10 && getUserNumber % 2 === 0 ? "Так" : "Ні"
// console.log(calculate)


/*
Створи програму, яка запитує у користувача число.
Якщо число більше за 50, виведи "Число більше 50", інакше виведи "Число менше або дорівнює 50".
*/

// let getUserNumber = Number(prompt("Enter number:"))
// let calculate = getUserNumber > 50 ? "Число більше 50" : "Число менше або дорівнює 50";
// console.log(calculate)


/* 
Напиши програму, яка запитує у користувача оцінку (від 1 до 5). Використай інструкції if, else...if та else для виводу повідомлення: 
- "Дуже погано" для оцінки 1,
- "Погано" для 2,
- "Задовільно" для 3,
- "Добре" для 4,
- "Відмінно" для 5.
*/

// let getUserNumber = Number(prompt("Введіть оцінку (від 1 до 5)"));
// if (getUserNumber === 1) {
//     console.log("Дуже погано");
// } else if (getUserNumber === 2) {
//     console.log("Погано");
// } else if (getUserNumber === 3) {
//     console.log("Задовільно");
// } else if (getUserNumber === 4) {
//     console.log("Добре");
// } else if (getUserNumber === 5) {
//     console.log("Відмінно");
// } else {
//     alert("Введіть правильне число (від 1 до 5)");
// }


/*
Напиши програму, яка запитує у користувача ім'я. 
Якщо ім'я дорівнює "Адмін", виведи "Вітаю, Адмін!". 
В іншому випадку, виведи "Привіт, [ім'я]!". 
Використай тернарний оператор.
*/

// let getUserName = prompt("Введіть Ім'я:") || "Гість";
// const result = getUserName === "Адмін" ? "Вітаю, Адмін!" : `Привіт, ${getUserName}!`;
// alert(result);