function stringToArray(str) {
    if (typeof str === 'string') {
        return str.split(' ');
    }
    return 'Не вірно';
}


let str = 'Ревуть воли як ясла повні';
let arr = stringToArray(str);
console.log(arr);


str = true;
console.log(stringToArray(str));
console.log(stringToArray(0));
console.log(stringToArray(NaN));
console.log(stringToArray(undefined));
console.log(stringToArray('undefined'));