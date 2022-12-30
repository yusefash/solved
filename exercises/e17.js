const oldestPerson = maxBy(
  [
    { name: "jon", age: 29 },
    { name: "andrey", age: 22 },
  ],
  (person) => person.age
);
