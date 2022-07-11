// Method Constructor Function
function Person(){
    this.firstName = '';
    this.lastName = '';
    this.greet = function(name){
        console.log(`Hallo ${name} my name is ${this.firstName} ${this.lastName}`);
    }
}

const ucup = new Person();
ucup.firstName = "Yusuf";
ucup.lastName = "Taqiyuddin";
ucup.greet("Bambang");