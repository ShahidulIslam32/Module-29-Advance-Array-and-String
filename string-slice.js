// split 
const anthem = 'amar sonar bangla'
const words = anthem.split('')
console.log(words);

// slice 

const small = 'my name is shahidul islam'
const resultOne = small.slice(0, 19)
console.log(resultOne);

// substr

const smallTwo ='i am a developer'
const resultTwo = smallTwo.substr(4,15)
console.log(resultTwo);

// concate

let Concate = 'Admin'
let password = 'Password'
//let resultThree = Concate + " " + password
let update = Concate.concat(" ").concat(password)
console.log(update);

// join 

let join = ['red','green', 'orange', 'yellow']
let wrod = join.join(" ")
console.log(wrod);


