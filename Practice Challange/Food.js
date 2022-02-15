

// let result = myFavFood
// console.log(result);

let myFavFood = [
    'mango', 
    'pizza', 
    'malta', 
    'orange', 
    'Meet', 
    'chicken',
    'molt'
]

let Find = 'm'
let result = []
for(let food of myFavFood){
    if(food.toLocaleLowerCase().includes(Find.toLowerCase())){
        result.push(food)
    }
}
 
console.log(result);


