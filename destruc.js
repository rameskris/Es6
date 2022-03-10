//destructuring
//faster easier way to unpack or destructure arrays or object
//objects in to variables

const names=['ram','pooja','today','come','home']

const [a,b,c]=names
console.log(a,b,c)//ram pooja today

const [,,,d,e]=names
console.log(d,e)//come home

let f,g;

[f,g]=[1,2]

console.log(f,g)//1 2

let[h=1,i]=[2,3]
console.log(h,i)//2 3

//object destructuring
//in object destructuring property names need to match
const rames ={
    first:'raam',
    second:'krish',
    sibil:{
        sis:'ragnark'
    }


}
//if u want different prop name just give alises
const {first,second:secondName,sibil:{sis}}=rames
console.log(first,secondName,sis)

//object destructing in fuction

function ramDetails(persoon){
    const {first,second,sibil:{sis}}=persoon
    console.log(`${first}`)
}
ramDetails(rames)



