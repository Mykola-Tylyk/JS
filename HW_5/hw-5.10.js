let minNumberInArray = (arrayNumbers) => {
    let min = arrayNumbers[0];
    for (let i = 1; i <arrayNumbers.length ; i++) {
        let number = arrayNumbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(minNumberInArray([92, 438, 85, 28747, -847, 49, -937, 5]));