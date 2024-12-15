///Task 1
let person = {
  name: "Aviv",
  age: 26,
  isStudent: true,
};
console.log(person);

///Task 2
console.log(person.name, person.age);
console.log(person["isStudent"]);

///Task 3
person.age = 23;
person["Hobby"] = "Scuba diving";
console.log(person);

///Task 4
let movie = {
  title: "The dark knight",
  genre: "Action",
};
console.log(movie);
movie["releaseYear"] = 2008;
movie["isPopular"] = true;
movie.genre = "Superhero";
console.log(movie);

///Task 5
let car = {
  make: "Lamborghini",
  model: "Huracan",
  year: 2023,
  color: "Yellow",
};
for (let key in car) {
  console.log(car[key]);
}

///Task 6
let firstPerson = {};
(firstPerson["First Person Name"] = "Lavi"),
  (firstPerson["First Person Age"] = 1);

let secondPerson = {};
(secondPerson["second Person Name"] = "Lavi"),
  (secondPerson["second Person Age"] = 1);

function combinePeople(obj1, obj2) {
  let newPerson = {};
  for (let key in obj1) {
    newPerson[key] = obj1[key];
  }
  for (let key in obj2) {
    newPerson[key] = obj2[key];
  }
  return newPerson;
}
console.log(combinePeople(firstPerson, secondPerson));

///Task 7
function countProperties(obj) {
  let counter = 0;
  for (let key in obj) {
    if (key != null) {
      counter++;
    }
  }
  return counter;
}
console.log(`The movie has:${countProperties(movie)} properties`);
console.log(`The person has:${countProperties(person)} properties`);

///Task 8
delete person.isStudent;
console.log(person);

///Task 9
function hasProperty(obj, prop) {
  for (let key in obj) {
    if (key === prop) return true;
    return false;
  }
  return false;
}
console.log(hasProperty(car, "make"));
console.log(hasProperty(car, "name"));

///Task 10
function updatePerson(person, key, value) {
  if (!hasProperty(person, key)) {
    person[key] = value;
  } else person.key = value;
}

console.log("Before change:", person);
updatePerson(person, "age", 20);
updatePerson(person, "city", "Haifa");
console.log("After change: ", person);
