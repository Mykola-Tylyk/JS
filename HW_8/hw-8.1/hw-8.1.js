let user = {
    id: 1,
    name: 'vasya',
    skills() {'html', 'js'},
    shoes() {42}
}

function deepClone(objectName) {
    if (objectName) {
        let functionArray = [];
        for (const objectKey in objectName) {
            if (typeof objectName[objectKey] === 'function') {
                const functionClon = objectName[objectKey].bind({});
                functionArray.push({functionClon, objectKey});
            }
        }
        let cloneObjectName = JSON.parse(JSON.stringify(objectName));
        for (const array of functionArray) {
            cloneObjectName[array.objectKey] = array.functionClon;
        }
        return cloneObjectName;
    }
    throw new Error('!!!')
}


let userDeepClone = deepClone(user);
console.log(userDeepClone);









