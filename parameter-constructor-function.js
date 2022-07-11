// Parameter Constructor Function
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.greet = function(name){
        console.log(`Hallo ${name}, my name is ${this.firstName} ${this.lastName}`);
    }
}

const ucup = new Person("Yusuf", "Taqiyuddin");
ucup.greet("Bambang");