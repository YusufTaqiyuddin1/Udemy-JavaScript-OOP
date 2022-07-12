// Custom Error 
class ValidationError extends Error{
    constructor(message, field){
        super(message);
        this.field = field;
    }
}

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError("Total parameter harus lebih dari 0", "numbers");
    }

    let result = 0;
    for (const number of numbers) {
      result += number;
    }

    return result;
  }
}

try{
    console.log(MathUtil.sum());
} catch(error){
    if(error instanceof ValidationError){
        console.error(`Terjadi error di field ${error.field} dengan error : ${error.message}`);
    } else{
        console.error(`Terjadi Error : ${error.message}`);
    }
}