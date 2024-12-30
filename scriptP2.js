///Homework 2 Part B
let fruits = ["Apple", "Banana", "Mango", "Grape", "Orange"];
console.log(fruits);

///Task 2
console.log(fruits[0]); //First element
console.log(fruits[4]); //Last element
console.log(fruits[2]); //Third element

///Task 3
fruits.push("Strawberry");
console.log(fruits);
fruits.unshift("Kiwi");
console.log(fruits);
fruits.pop();
console.log(fruits);

///Task 4
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (key in fruits) {
  console.log(key, fruits[key]);
}

for (fruit of fruits) {
  console.log(fruit);
}

///Task 5
let length = 0;
for (let ind = 0; ind < fruits.length; ind++) {
  if (fruits[ind] != null) {
    length++;
  }
}
console.log(length);
///I dont know what you meant in the question so ill show another way
console.log(fruits.length - 1);

///Task 6
function isInArray(array, element) {
  for (item of array) {
    if (item === element) {
      return true;
    }
  }
  return false;
}
console.log(isInArray(fruits, "Peach")); //False
console.log(isInArray(fruits, "Mango")); //True

///Task 7
fruits.sort();
console.log("Sorted: ", fruits);

///Task 8
fruits.sort().reverse();
console.log("Reversed sorted: ", fruits);

///Task 9
let numbers = [];
for (let i = 0; i <= 10; i++) {
  numbers.push(Math.round(Math.random() * 100));
}

console.log(numbers);
function filterEvenNumbers(array) {
  for (num of array) {
    if (!isNaN(num) && num % 2 == 0) {
      console.log(num);
    }
  }
}
filterEvenNumbers(numbers);

///Task 10
let vegetables = ["Carrot", "Broccoli", "Spinach"];

function combineArrays(array, arr) {
  let newArr = [];
  for (elem of array) {
    if (elem != null) {
      newArr.push(elem);
    }
  }
  for (item of arr) {
    if (item != null) {
      newArr.push(item);
    }
  }
  return newArr;
}
let groceries = combineArrays(fruits, vegetables);
console.log(groceries);
