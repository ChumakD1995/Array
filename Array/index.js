let arr = [];
let length = prompt("Введіть довжину масиву:");
for (let i = 0; i < length; i++) {
  let element = prompt("Введіть елемент масиву:");
  arr.push(element);
}

arr.sort(function(a, b){return a-b}); 

console.log("Відсортований масив: " + arr + "<br>");

arr.splice(1, 3);

console.log("Масив після видалення елементів з 2 по 4 (включно!): " + arr);