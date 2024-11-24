let array = ['Main', 'Products', 'About us', 'Contacts'];

let menu = document.createElement('ul');
menu.classList.add('about');
document.body.appendChild(menu);

for (let arr of array) {
    let li = document.createElement('li');
    li.innerText = arr;
    menu.appendChild(li);
}


