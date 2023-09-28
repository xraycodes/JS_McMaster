
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

//object initializer
const Brian = {
    age : 29,
    job : 'X-Ray tech',
    hobby: "Golf",
    print: function call() {
        return `${this} is ${this.age} years old`
    },
    hello(){
        console.log("hello")
    }
}

Brian.hello()


//constructor function

function Car(brand, year, model) {
    this.brand = brand;
    this.year = year;
    this.model = model;
}

let Tesla = new Car("Tesla", 2020, "Y")  // don't forget new
console.log(Tesla.brand)
