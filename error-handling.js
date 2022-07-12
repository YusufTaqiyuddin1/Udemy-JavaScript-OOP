// Error Handling
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

try{
    console.log(MathUtil.sum());
    console.log("Kode Block try akan berhenti");
} catch(error){
    console.log(`Terjadi error : ${error.message}`);
} finally{
    console.log("Kode Program selesai")
}

console.log("kode program selanjutnya tidak akan berhenti");