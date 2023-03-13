//
// Arrays
//
// MDN: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//

// Use console.log to check your answers
// Don't change this array directly
const teachers = ["Nathan", "Ed", "Steve", "Phil", "Carlo", "Lewis", "Shahzad"];

// 1. Using an index on the teachers array, change the value of the
// fourthTeacher variable below to be the fourth teacher listed in the array
const fourthTeacher = teachers[3];
console.log('1 - who is the fourth teacher:', fourthTeacher);

// 2. Replace the fifth teacher in the teachers array with Patrick
const splice = teachers.splice(4, 1, 'Patrick');
console.log('2 - updated to replace Carlo with Patrick', teachers);
console.log('removed from original list', splice);

// 3. Remove the last teacher from the array and save them in lastTeacher below
const lastTeacher = teachers.pop();
console.log('3 - last teacher removed:', lastTeacher);

// 4. Remove the first teacher from the array and save them in firstTeacher below
const firstTeacher = teachers.shift();
console.log('4 - first teacher removed:', firstTeacher);
// console.log(teachers);

// 5. Add a teacher named Vanessa to the end of the teachers array
teachers.push('Vanessa');
console.log('5 - added Vanessa to list', teachers);
// console.log(teachers);

// 6. Remove Ed from the teachers array
// teachers.splice(0, 1);
// console.log('6 - remove Ed from list', teachers);
const edIndex = teachers.indexOf('Ed');
console.log('current index of Ed', edIndex);
teachers.splice (edIndex, 1);
console.log('updated teachers to remove Ed', teachers);


// 7. Add a teacher named Sarah to the beginning of the teachers array
teachers.unshift('Sarah')
console.log('7 - added Sarah to start of list', teachers);

// 8. Use slice() to set the following to the first two entries in the teachers array
const firstTwoTeachersNow = teachers.slice(0,2);
console.log ('8 - first two entries in the teachers list:', firstTwoTeachersNow);