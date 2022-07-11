// Prototype
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName
    this.greet = function(name){
        console.log(`Hallo ${name}`);
    }
}

Person.prototype.sayBy = function(){
    console.log(`Good By`);
}

Person.prototype.run = function(){
    console.log(`${this.firstName} is running`);
}

const ucup = new Person("Yusuf", "Taqiyuddin");
ucup.sayBy()