let numbers = [10, 20, 30, 50, 44, 45, 21, 29, 60]
let sortNumber = numbers.sort()
console.log(sortNumber);

let friends = ['jack', 'Alim', 'kawser', 'catrina', 'bhuban', 'sisir', 'islam','david']
// let shortFriends = friends.sort()
// console.log(shortFriends);
let reverseFriends = friends.reverse()

let bigNumbers = [20,19,77,55,88,65,23,89,100,102,300,299]
let sortedBigNumbers = bigNumbers.sort(function(a,b){
    return a - b 
})
console.log(sortedBigNumbers);