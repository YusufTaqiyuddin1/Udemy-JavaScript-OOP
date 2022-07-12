// Throw Error
class MathUtil{
    static sum(...numbers){
        if(numbers.length === 0){
            throw new Error("Total parameter harus lebih dari 0");
        }

        let result = 0;
        for(const number of numbers){
            result += number;
        }

        return result;
    }
}

console.log(MathUtil.sum());
console.log(MathUtil.sum(3, 5, 1, 6, 7, 2, 9, 0));
