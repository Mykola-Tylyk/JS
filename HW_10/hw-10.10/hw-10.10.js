let divArr = document.getElementById('arr');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

array = [];
for (let i = 0; i < 100; i++) {
    array.push({number: i + 1})
}

let min = 0;
let max = 10;

function updateDisplay() {
    divArr.innerHTML = '';
    for (let i = min; i < max; i++) {
        let p = document.createElement('p');
        p.innerText = array[i].number;
        divArr.appendChild(p);
    }
}

updateDisplay();

next.addEventListener('click', function () {
    if (max < array.length) {
        min += 10;
        max += 10;
        updateDisplay();
    }
});

prev.addEventListener('click', function () {
    if (min > 0) {
        min -= 10;
        max -= 10;
        updateDisplay();
    }
});