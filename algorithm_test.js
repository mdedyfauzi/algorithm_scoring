// anagram('aaz', 'zza'); => false
// anagram('nagaram', 'anagram'); => true

// define a function with two parameter to be compared
const anagram = (str1, str2) => {
  // use array method split to split parameter value into array
  // and then use array method sort to sorting parameter value into descending
  // finally use join to merge the array value again
  let a = str1.split('').sort().join('');
  let b = str2.split('').sort().join('');
  return console.log(a === b);
};

anagram('aaz', 'zza');
anagram('nagaram', 'anagram');

//credit https://stackoverflow.com/questions/23785465/javascript-anagram-comparison
