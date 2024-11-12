function arrayMinNumber(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let namber = numbers[i];
        if (namber < min) {
            min = namber
        }
    }
    return min;
}


console.log(arrayMinNumber([92, 438, 85, 28747, -847, 49, -937, 5]));