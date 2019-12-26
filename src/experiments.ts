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


type Person = {
    forename: string
    surname: string
    age: number
}

let person: Person = {
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


function makeOlder (p: Person, years: number) { // makeOlder is a function which is a pointer to code that CAN run
    const result = {
        surname: p.surname,
        forename: p.forename,
        age: p.age + years
    }

    return result
}

let olderPerson = makeOlder(person, 5) // olderPerson takes the value that results from CALLING the function

addResult('after calling the function, person = ', person)
addResult('after calling the function, olderPerson = ', olderPerson)

const ageByOneYear = (p: Person) => { // An alternative way of defining a variable pointing to a function / code that can run
    return {
        surname: p.surname,
        forename: p.forename,
        age: p.age + 1
    }
}

const codeICanRun = ageByOneYear // Now codeICanRun is a variable that points to the same bit of code as ageByOneYear

codeICanRun(person) // So now we can call that variable as a function, because it is
