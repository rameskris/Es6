//spread as single items
const ar=['a','b','c']
const br=[...ar]
console.log(br)
console.log(...ar)
const person={
    name:'ram',
    job:'dev',
    
}

const newPerson={...person,city:'ramnad',name:'sh'}
console.log(newPerson)
console.log({...person})
//spread in dom
const h1=document.querySelectorAll('h1')
const result=document.querySelector('#result')
const text=[...h1].map(h1=>`<span>${h1.textContent}</span>`).join('')
result.innerHTML=text

//sspread in function
const numbers=[123,555,990]
console.log(Math.max(...numbers))


//rest operator

