const getBudget = (people) => {
    // Начало
    return people.reduce((a, b) => a + b.budget, 0)
    // Конец
};

const family = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
];
console.log(getBudget(family));  // 65700