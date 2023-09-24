const person = {
    name: "John",   //called properties of the object
    age: 20,
    greet: function() {
        console.log(`hello ${person.name}`)
    }
}

console.log(person)
console.log(person['name'])
person.greet()