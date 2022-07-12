// Operator Instanceof
class Employee{

}

class Manager extends Employee{

}

const ucup = new Employee();
const udin = new Manager();

console.log(ucup instanceof Employee); // true
console.log(ucup instanceof Manager); // false

// true karena Manager adalah turunan dari Employee
console.log(udin instanceof Employee); // true
console.log(udin instanceof Manager); // true