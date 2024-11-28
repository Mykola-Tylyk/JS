let age = document.getElementById('age');
let btn = document.getElementsByTagName('button')[0];
let p = document.createElement('p');
document.body.appendChild(p);
btn.onclick = function () {
    if (age.value <= 0 || age.value > 120) {
        p.innerText = 'Значення не коректне';
    } else if (age.value < 18) {
        p.innerText = 'Вхід заборонено';
    } else {
        p.innerText = 'Вхід дозволено';
    }
};



