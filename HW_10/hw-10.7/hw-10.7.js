function addToLocalStorage(arrayName, objToAdd) {
    if (!arrayName) {
        throw new Error('!!!');
    }
    let array = JSON.parse(localStorage.getItem(arrayName));
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(array));
    }
}

addToLocalStorage('pageViews', {});