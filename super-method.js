// Super Method
class Shape{
    paint(name = "Ucup"){
        console.log(`${name}, Paint Shape`);
    }
}

class Circle extends Shape{
    paint(name){
        super.paint();
        console.log(`${name}, Paint Circle`);
    }
}

const circle = new Circle();
circle.paint("Udin");

/* Output 
Ucup, Paint Shape
Udin, Paint Circle
*/