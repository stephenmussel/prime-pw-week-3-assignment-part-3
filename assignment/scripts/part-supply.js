console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
let partsNeeded = 40;
console.log('1. Number of partsNeeded:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
let supplyChanges = [ 3, 5, -6, 0, 7, 11 ];
console.log('2. Array of supplyChanges:', supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChanges is:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
let removedItem = supplyChanges.pop();
console.log('4. Removed item:', removedItem);

// is this the same as the above and why would you use one over the other?
// console.log('4. Removed item:', supplyChanges.pop());

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
// supplyChanges.push(25); // unlike .pop(), .push() also returns length of array. REFERNCE MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// console.log('5. Adding 25 to supplyChanges.', supplyChanges);

let addingItem = supplyChanges.push(25);
console.log('5. Adding 25 to supplyChanges.', supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'
console.log('6. Showing supplyChanges...');

for (let i = 0; i < 6; i++) { // i++ can also be writte i += 1
  if (supplyChanges[i] > 0){ // if element at [i] is > 0, run code in {}
    console.log('Added', supplyChanges[i], 'parts.');
  } else if (supplyChanges[i] === 0){ // if element at [i] is === 0, run code in {}
    console.log('No change.');
  } else if (supplyChanges[i] < 0) { // if element at [i] is < 0, run code in {}
    console.log('Removed', supplyChanges[i], 'parts.');
  }
} // forgot to add {} prior to submitting assignment

// STRETCH GOALS
console.log('---  Stretch Goals  ---');

// 7. Rewrite the `for` loop from #6 as a `for of` loop
console.log('7. Showing supplyChanges with "for of" loop');

for ( let quantity of supplyChanges ) { // added let after receiving feedback from instructor
  if (quantity > 0) { // if quantity element is > 0, run code in {}
    console.log('Added', quantity, 'parts.');
  } else if (quantity === 0) { // if quantity element is === 0, run code in {}
    console.log('No change.');
  } else if (quantity < 0) { // if quantity element is < 0, run code in {}
    console.log('Removed', quantity,'parts.');
  }
}

// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');

let x = 0; // starts at 0
while (x < supplyChanges.length) { // runs loop thru end of array
  if (supplyChanges[x] > 0) { // if element in array is > 0 run code in {}
    console.log('Added', supplyChanges[x], 'parts.');
  } else if (supplyChanges[x] === 0) { // if element in array is === 0 run code in {
    console.log('Nothing changed.');
  } else if (supplyChanges[x] < 0) { // if element in array is < 0 run code in {
    console.log('Removed', supplyChanges[x], 'parts.');
  }
  x++; // This has to be after the if...else statement block in order for the loop to start at 0. if it's before line 69, then the loop starts at 1
}

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
let totalSupplies = 0; // starts at 0
for (i = 0; i < supplyChanges.length; i++) { // i starts at 0, while i is < length of supplyChanges array (runs thru entire array), runs code in {}, afterwards then increments i by 1 ( can also be written as i += 1)
  totalSupplies += supplyChanges[i]; // adds elements in array
  console.log('9. Total supplies available is :', totalSupplies); // the number 2 in a circle means the same value (same for a string) was logged twice. in this case, 8-6=2 then 2+0=2. it's a chrome feature to consolidate for legibiity.
}
