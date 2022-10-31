// Question 2
let numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// Expected Array = arr2 = [-4,1,2,3,5,6,7];

function sortArray(array) {
  let done = false;

  while (!done) {
    done = true;

    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        let temporary = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temporary;
      }
    }
  }
  return array;
}

sortArray(numbers);
console.log(numbers);

// Question 4 - Write a JavaScript program to find the most frequent item of an array
let firstArray = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let mostFrequent = 1;
let index = 0;
var item;
for (let i = 0; i < firstArray.length; i++) {
  for (let j = i; j < firstArray.length; j++) {
    if (firstArray[i] == firstArray[j]) index++;
    if (mostFrequent < index) {
      mostFrequent = index;
      item = firstArray[i];
    }
  }
  index = 0;
}
console.log(`${item} (${mostFrequent} times)`);

// Question 6 - Iterate through object “obj” to find respectivelly all values of property 'find'.

const obj = {
  a: [
    {
      b: {
        v: [
          {
            g: [1, 2, 3],
          },
        ],
      },
    },
    {
      c: ["one", "two", "three"],
      d: [
        {
          a: "",
        },
        {
          find: "that",
        },
      ],
    },
  ],
  find: "hard",
};

// Iteration
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`${key}: ${obj[key]}`);
  }
}
