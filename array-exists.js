
function friendsName(friends){
    if(Array.isArray(friends) == false){
        return 'Please insert an array'
    }
    let mega = friends[0]
    for(let friend of friends){
        if(friend.length > mega.length){
            mega = friend
        }
       
    }
    return mega 
}
let friends = ['Jack', 'Mack', 'Tom', 'Aaladin', 'Jelly'] 
let result = friendsName(friends)
console.log(result);

// searching a item of an array 

if(friends.indexOf('Jack') != -1){
    console.log('jack exists using indexOf');
}
else{
    console.log('jack not found');
}

if (friends.includes('Jack') == true) {
    console.log('jack exists using includes ');
}
else {
    console.log('jack not found in includes');
}

// concate an array 

let first = [1,2,3,5,7,8]
let second = [10,13,15,16,20]
let combined = first.concat("second array").concat(second)
console.log(combined);