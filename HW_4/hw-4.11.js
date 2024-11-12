function sum(arr) {
    let bascet = 0;
    for (const arrElement of arr) {
        bascet = bascet + arrElement;
    }
    return bascet;
}


console.log(sum([1, 2, 10]));