let formInput = document.forms['formInput'];
let table = document.getElementById('table');

formInput.onsubmit = function (ev) {
    table.innerText = '';
    ev.preventDefault();
    let lines = +formInput.lines.value;
    let cells = +formInput.cells.value;
    let info = formInput.info.value;

    for (let i = 0; i < lines; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cells; j++) {
            let td = document.createElement('td');
            td.innerText = info;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};