function foArray(array) {
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

let mas = [10, 33, 82, 'zina', 42, 'torba','zhozefa',true];
foArray(mas);