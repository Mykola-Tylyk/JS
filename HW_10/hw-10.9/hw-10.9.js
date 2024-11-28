if (localStorage.getItem('keyGrn') === null) {
    localStorage.setItem('keyGrn', '100');
    localStorage.setItem('keyTime', `${Date.now()}`);
}

let ls = +localStorage.getItem('keyGrn');
let time = +localStorage.getItem('keyTime');

let timeNow = Date.now();
if (timeNow - time >= 10000) {
ls += 10;
localStorage.setItem('keyGrn', ls);
localStorage.setItem('keyTime', timeNow);
}
document.getElementById('grn').innerText = `${ls} грн`;



