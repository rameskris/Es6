//new string  methods
//startsWith(),endsWith(),includes(),repeat()

const name='hare krishna'
const empNo='23455-ramkrish-4556'

//starts with
//case sensitive accepts second parameter
console.log(name.startsWith('rd'))//false
console.log(name.startsWith('ram'))//true

console.log(empNo.startsWith('r',5))

//endswith same as startswith case sentive
//look with iin 9 charatcters

console.log(empNo.endsWith('krish',14))

//repeat
const multiRepeat=(name,amount=5)=>name.repeat(amount)

console.log(multiRepeat(name,1000))

