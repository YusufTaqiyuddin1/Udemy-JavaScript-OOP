// Public Class
class Customer{
    firstName;
    lastName;
    balance = 0;

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet(){
        console.log(`Hello ${this.firstName} ${this.lastName}, your balance is ${this.balance}`)
    }
}

const ucup = new Customer("Yusuf", "Taqiyuddin");
ucup.greet();