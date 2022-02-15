function addNumbers(){
    let result = 0
    for(let num of arguments){
        result = result + num
        
    }
    return result
}

let sum = addNumbers(20, 5, 53, 33, 45,)
console.log(sum);