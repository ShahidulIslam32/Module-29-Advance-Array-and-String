const slicet = ['java',25,30,'python','korea',50,60,70,80]
const vago = slicet.slice(2, 7)
console.log(vago);

const korea = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const result = korea.splice(3, 4, 8)
console.log(korea);
console.log(result);