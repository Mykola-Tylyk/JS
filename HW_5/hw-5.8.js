let arrayInLi = (array) => {
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}
arrayInLi([11,22,33,'hello',true])