let div = document.createElement('div');

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

document.body.appendChild(div);
let clonDiv = div.cloneNode(true);
document.body.appendChild(clonDiv);


