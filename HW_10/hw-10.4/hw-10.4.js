let ls = +localStorage.getItem('num');
ls = ++ls;
localStorage.setItem('num',ls);

document.getElementById('number').innerText = ls;