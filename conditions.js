// Conditional Flow
//
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
//

// Use console.log to check your conditions and the values you end up using for the answers
// e.g. console.log(10 > 5)
// console.log(isRefreshing)

const beverage1 = "Ice Water";

// 1. Use a condition to set isRefreshing to true if beverage1 is Ice Water
console.log("1. Condition test:", 10 > 2); // test your condition here by replacing 0 < 1

if (beverage1 === "Ice Water") {
  let isRefreshing = true;

  console.log("isRefreshing is:", isRefreshing);
}

const beverage2 = "Double Cream";

// 2. Use a condition to set isHealthy to true if beverage2 is not Double Cream

if (beverage2 !== "Double Cream") {
    let isHealthy = true;

    console.log("isHealthy is:", isHealthy);
} else {
    let isHealthy = false;
    console.log(`${beverage2} ${isHealthy}`);
}

const beverage3 = "Orange Juice";

// 3. Use a condition to set isEnergizing to true if beverage3 is Coffee,
// otherwise set it to false
let isEnergizing;

