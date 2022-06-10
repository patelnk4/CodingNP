// Sum without highest and lowest number
// DESCRIPTION:
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


function sumArray(array) {
    if(array == null || !array.length ) return 0;
    array.sort((a, b) => a-b);
    var sum = 0;
    for(var i = 1; i < array.length-1; i++)sum+=array[i];
    return sum;
  }