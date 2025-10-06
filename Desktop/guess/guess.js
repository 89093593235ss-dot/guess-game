const prompt = require('prompt-sync')();

let num = Math.floor(Math.random() * 100) + 1;
console.log("Игра угадай число на js!");
let vvod = prompt("Введи число: ");
let att = 5;


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
