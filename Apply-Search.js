let products = [
    'Dell Laptop 200 GB',
    'Hp laptop',
    'Dell MotherBoard',
    'Gigabyte Processor Core I3',
    'Apple Watch',
    'dell Watch',
    'hP Keyboard',
    'Samsung Galaxy Note 10',
    'Apple Headphone',
    'BMW 10CC Racing Car',
]

//Find Item Using IndexOf

let seraching = '10'
let output = []
for (let product of products) {
    if(product.toLowerCase().indexOf(seraching.toLowerCase()) != -1){
        output.push(product)

    }
}

console.log(output);


//Find Item Using Includes

let Find = 'Apple'
let result = []
for(let product of products){
    if(product.toLowerCase().includes(Find.toLowerCase())){
        result.push(product)
    }
}

console.log(result);


// Find Item Using Starts With 

let Starts = 'Dell'
let final = []

for(let product of products){
   if(product.toLowerCase().startsWith(Starts.toLowerCase())){
       final.push(product)
   }
}
console.log(final);


//Find Item Using Ends With 

let Ends = 'Watch'
let EndsFInal = []

for (let product of products) {
    if (product.toLowerCase().endsWith(Ends.toLowerCase())) {
        EndsFInal.push(product)
    }
}
console.log(EndsFInal);