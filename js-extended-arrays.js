const numbers = [19, 83, 291, 57, 3014, 69, 42, 670, 15]

// 1. Use .forEach and an arrow function to console log
// each item in the numbers array

numbers.forEach((number, idx, originalArray) => {
console.log('number: ', number);
console.log('idx: ', idx);
console.log(originalArray);
console.log('----------')
})

// 2. Use .filter and an arrow function to create a new array
// based on the numbers array, but only containing numbers less than
// three digits long
const lessThanThreeDigits = numbers.filter(number => {
    return number < 100
}
)
console.log('less than 3 digits: ', lessThanThreeDigits)

// 3. Use .find and an arrow function to get the first
// even number in the array

const firstEvenNumber = numbers.find(number => {
    return number % 2 === 0
}
)
console.log('first even number: ', firstEvenNumber)

// 4. Use .map and an arrow function to create a new array based
// on the numbers array, but each element should be halved

const halvedNumbers = numbers.map((number) => {
    const half = number / 2;
    return half
}
)
console.log('halved numbers in new array: ', numbers, halvedNumbers)

// 5. Use .forEach and an arrow function to double every number in the
// numbers array. Modify the original array, don't create a new one

const doubleNumbersInOrig = numbers.forEach((num, idx, arr) => {
    arr[idx] = num * 2
})
console.log('double numbers overwritten: ', numbers)