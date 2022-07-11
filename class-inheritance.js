// Class Inheritance
class Employee{
    constructor(firstName){
        this.firstName = firstName;
    }

    greet(name){
        console.log(`Hello, ${name} my name is Employee ${this.firstName}`);
    }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }
  greet(name) {
    console.log(`Hello, ${name} my name is Manager ${this.firstName} ${this.lastName}`);
  }
}

const ucup = new Employee("Yusuf");
ucup.greet("Bambang");

const udin = new Manager("Yusuf", "Taqiyuddin");
udin.greet("Bambang");