//rest operator
//gathers or collec items

const fruit=['apple','orange','grapes']

const [fir,...rest]=fruit


console.log(fir,rest)

//rest in objects
const rames ={
    first:'raam',
    second:'krish'

}

const {first,...other}=rames
console.log(first,other)

const {...ot}=rames
console.log(ot)

//rest in functions
const averageF=(name,...scores)=>{
    console.log(name)
    console.log(scores)//[24, 56, 77, 89]
    let total=0
    for(let score of scores){
        total+=score
    }
    console.log(total/scores.length)
}


averageF(rames.first,24,56,77,89)

//rest collects use it in parameters
//spread spreaded values use it arguments

const totScore=[24,56,77,89,298]

averageF(rames.first,...totScore)//here spreaded(arguments) the values using spread