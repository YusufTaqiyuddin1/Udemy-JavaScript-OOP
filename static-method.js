// Static Method
class MathUtil{
    static sum(...numbers){
        let total = 0;
        for(const number of numbers){
            total += number;
        }
        return total;
    }
}

const sum = MathUtil.sum(2, 5, 6, 3, 11, 4, 9, 21);
console.log(sum); // 61