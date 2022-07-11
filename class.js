// Method Class
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet(){
        console.log(`Hallo, My Name is ${this.firstName} ${this.lastName}`);
    }
}

const ucup = new Person("Yusuf", "Taqiyuddin");
ucup.greet();