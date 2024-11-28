let kg = document.getElementById('kg');
let lb = document.getElementById('lb');
kg.oninput = function () {
    lb.innerText = +this.value * 2.2046 + ' фунтів';
};