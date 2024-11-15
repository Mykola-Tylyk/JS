function arrayMinNumber(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    }
    return min;
}


console.log(arrayMinNumber([92, 438, 85, 28747, -847, 49, -937, 5]));