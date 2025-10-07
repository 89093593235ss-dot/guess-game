const prompt = require('prompt-sync')();

let num = Math.floor(Math.random() * 100) + 1;
console.log("Игра угадай число на js!");

let lev = prompt("Выбери уровень:\n1 уровень (10 попыток)\n2 уровень (5 попыток): ");
let att;

if (lev == 1) {
  att = 10;
} else if (lev == 2) {
  att = 5;
}
let vvod = prompt("Введи число: ");
while (att > 0) {

  if (vvod > num) {
    vvod = prompt("МЕНЬШЕ: ");
    att = att - 1;
  } else if (vvod < num) {
    vvod = prompt("БОЛЬШЕ: ");
    att = att - 1;
  } else if (vvod == num) {
    console.log("Ты угадал!");
    break;
  }

  if (att == 0) {
    console.log("Попытки закончились! Загаданное число: " + num);
  }
}