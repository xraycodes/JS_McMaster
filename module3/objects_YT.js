
//object literals
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function() {
        console.log('draw')
    }
};

//Factory function
function createCircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circles = createCircle(1);
console.log(circles.radius)
circles.draw()

//constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(5);

//dynamically adding properties
another.location = {x: 1};
console.log(another.location)
console.log(another['location'])  // use bracket notation to access value, good for if key has space or - or special char
//or you can also declare a variable and just pass that in the bracket

//deleting property 
console.log(another.radius)
delete another.radius // can use delete another['radius']

