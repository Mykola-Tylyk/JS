let nums = [11,21,3];
function sortNums(array,direction) {
if (direction === 'ascending') return  array.sort((num1, num2) => num1 - num2);
if (direction === 'descending') return  array.sort((num1, num2) => num2 - num1);
}
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));