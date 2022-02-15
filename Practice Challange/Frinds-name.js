
function findMyFriends(){
    let FindMd = 'mD'
    let result = []
    let myFriends = ['Md shovon', 'MD islam', 'Md Mahmudul', 'md Jamil', 'hasan', 'khan', 'rafiq', 'faruk']
    for (let names of myFriends) {
        if (names.toLowerCase().startsWith(FindMd.toLowerCase())) {
            result.push(names)
        }
    }
    return result
}
let updateResult = findMyFriends()
console.log(updateResult);