export type Result = {
  title: string,
  value: string
}

export const results: Result[] = []
const addResult = (title: string, value: any) => results.push({ title, value: value ? JSON.stringify(value) : 'undefined' })

let name // variable declaration
addResult('declared variable', name)

name = 'Lewis Walker' // variable assignment
addResult('value assigned', name)


let forename = 'Lewis' // combined variable declaration and assignment
addResult('declaration and assignment', forename)

let age = 47
addResult('numeric variable', age)


let person = {
  forename, // shorthand for forename: forename
  surname: 'Walker',
  age // shorthand for age: age
}

addResult('person (object)', person)

person.age = 48
addResult('After person.age = 48', person)

let person2 = person
addResult('person2', person2)

person.age = 47
addResult('person2 after person.age = 47', person2)

let count = 0
while (count < 5) { // repeat the following statements for as long as count is less than 5
  person.age = person.age + 1
  count += 1 // shorthand for count = count + 1
  addResult('after another birthday', person)
}

for (count = 0; count < 5; count += 1) { // shorthand for the above while loop
  person.age = person.age + 1
  addResult('after another birthday', person)
}

function add5(v: number) { // this function will only accept a number
  return v + 5
}

addResult('add5(5)', add5(5))

let add10 = (v: number) => v + 10

addResult('add10(5)', add10(5))

let adder = add5
addResult('adder(5)', adder(5))

adder = add10
addResult('adder(5)', adder(5))








