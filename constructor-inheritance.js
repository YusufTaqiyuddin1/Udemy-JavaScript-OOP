// Constructor Inheritance
function Employee(firstName){
    this.firstName = firstName;
    this.greet = function(name){
        console.log(`Hello ${name} my name is ${firstName}`);
    }
}

function Manager(firstName, lastName){
    this.lastName = lastName;
    Employee.call(this, firstName);
}

const ucup = new Manager("Yusuf", "Taqiyuddin");
ucup.greet("Bambang");