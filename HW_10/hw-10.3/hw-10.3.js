let form = document.forms[0];
form.onsubmit = function (ev) {
    ev.preventDefault();
    let user = {name: this.name.value, surname: this.surname.value, age: this.age.value}
    console.log(user);
    let p = document.getElementById('output');
    p.innerText = user.name + ' ' + user.surname + ' ' + user.age;
};



