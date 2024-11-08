let x = NaN;
if (x === 0 || x === null || x === undefined || x === '' || isNaN(x) || x === false) {
    x = 'default'
}