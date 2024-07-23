// 1.
let array = ['asa', 'a', 'sass']
const Palindrom = (arr = ['']) => {
  let result = arr.filter(item => (item == item.split("").reverse().join("")))
  return result
}
// console.log(Palindrom(array));

// 2
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
  { name: 'David', age: 15 }
];

function filterAdultUsers(users = []) {
  users.sort((a, b) => b.age - a.age)
  return users
}
// console.log(filterAdultUsers(users)); 


// 3
function findZeroIndices(matrix = [[]]) {
  let result = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] == 0) {
        result.push([i, j])
      }
    }
  }
  return result
}
// console.log(findZeroIndices([
//   [1, 0, 3],
//   [4, 5, 0],
//   [7, 0, 9]
// ])); 


// 4
function mostFrequentElement(arr = []) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++
        obj[arr[i]] = count
      }
    }
  }
  let index = Object.values(obj).indexOf(Math.max(...Object.values(obj)))
  return Object.keys(obj)[index]
}
// console.log(mostFrequentElement([1, 3, 3, 2, 1, 1, 4, 4, 4, 4, 5, 6, 6])); // 4

// 5
function rotateMatrix(matrix = [[]]) {
  let result = []
  for (let i = 0; i < matrix.length; i++) {
    let result_item = []
    for (let j = 0; j < matrix[i].length; j++) {
      result_item.push(matrix[j][i])
    }
    result.push(result_item.reverse())
  }
  return result
}
// console.log(rotateMatrix([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ])); 

// 6
function filterUniqueElements(arr = []) {
  let result = arr.filter(item => arr.indexOf(item) == arr.lastIndexOf(item))
  return result
}
// console.log(filterUniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 3, 5]