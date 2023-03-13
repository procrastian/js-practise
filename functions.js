// Functions
//
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
//

// 1a. Complete the function declaration below by making it
// console log "Hello, world!". Don't return a value.
function sayHello() {
    console.log('Hello world!')
}

// 1b. Call your function below this comment
sayHello()

// 2a. Create a function called sayGoodbye that returns "Goodbye, world!"
function sayGoodbye() {
   return 'Goodbye, world!';
}

// 2b. Call your sayGoodbye function and save what it returns into a
// variable called goodbyeMessage
const goodbyeMessage = sayGoodbye();

// 2c. Console log your goodbyeMessage variable
console.log('calling sayGoodbye - ', goodbyeMessage)

// 3a. Create a function called sayMessage that accepts one input
// parameter called name. Make the function return a string that says
// "Hello NAME", but replace NAME with the value of the name parameter
// const name = ''
// function sayMessage(name) {
//     const myMessage = name
//     console.log('3a sayMessage gives -', `Hello ${name}`)
//     console.log('3c myMessage is - ', myMessage)
//     return
// }
// sayMessage('Ian')

function sayMessage(name) {
    return `Hello ${name}`
}

// 3b. Call your sayMessage function, giving it a value to use for the
// name parameter, and save what it returns into a variable called myMessage
const myMessage = sayMessage('Ian')

// 3c. Console log your myMessage variable
console.log(myMessage)

// 4a. Create a function called subtract that accepts two input parameters
// called num1 and num2. Make the function subtract num2 from num1 and return the result.
function subtract(num1, num2) {
    return num2 - num1
}

// 4b. Call your subtract function and save what it returns into a variable;
// do this 3 times with different input parameters
const res1 = subtract(1, 2)
const res2 = subtract(5, 10)
const res3 = subtract(10, 5)

// 4c. Console log the 3 variables you created
console.log(res1)
console.log(res2)
console.log(res3)

// 5a. Create a function that accepts one input parameter called bool.
// Make your function change the isComplete variable below to whatever
// value is provided to the bool parameter.
// If anything except true or false is provided to the bool parameter,
// console log out "Invalid value provided" without changing the isComplete variable
// You can name your function whatever you think makes sense
let isComplete = false;

function modifyIsComplete(bool) {
    // guard clause
    if (typeof bool !== 'boolean'){
        // requires return to stop at this point, the function is finished
        return console.log('Invalid value provided')
    }
    isComplete = bool
}

// 5b. To test your work, call your function 3 times;
// Once with true provided to your parameter
// Once with false provided to your parameter
// Once with any other value provided to your parameter

// calling with argument that changes original
modifyIsComplete(true)
console.log(isComplete)

modifyIsComplete(false)
console.log(isComplete)

modifyIsComplete('Geoff')