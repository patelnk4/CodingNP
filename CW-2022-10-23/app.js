// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    const removed= str.replace(/[aeiou]/ig,'' )
     return(str.length-removed.length)
   }
   
   console.log(getCount("abracadabra"), 5)