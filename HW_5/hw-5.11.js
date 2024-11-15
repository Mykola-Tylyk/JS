let sum = (arr) => {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let sumNum = result + arr[i];
        result = sumNum;
    }
    return result;
}
console.log(sum([1,2,10]));