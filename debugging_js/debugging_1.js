function factorial(n) {
  let product = 1
  console.log('what is product before while? -', product)
  while (n > 0) {
    // console.log('what is n at start of while', n)
        n -= 1
    product *= n
    // console.log('what is n at end of while', n)
    console.log('what is product after while? -', product)
  }
  return product
}

console.log('what is product after the factorial function?', factorial(5))

// Expected output:
//
// > factorial(5)
// => 120

// 5 * 4 * 3 * 2 * 1

// debug log
// 
// 1 - called the function to see what it is doing - console.log(factorial(5))
// 2 - see the product variable before and after while statement - console.log(product)
// 3 - see what n is set to at start and end of while loop - console.log(n)
//      - decreasing n by 1 each loop
// 4 - is decreasing n before it is stored in the product
//      - not saving original n into the product 
// proposed solution: move <n -= 1> to after <product *= n>
//      - stores n in product and then will reduce by 1