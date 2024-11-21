function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let usersArray = [];

usersArray.push(new User(5, 'mysko', 'surmysko', 'mysko@gmail.com', '+38048001231205'));
usersArray.push(new User(1, 'vasya', 'survasya', 'vasya@gmail.com', '+38048001231201'));
usersArray.push(new User(3, 'julia', 'surjulia', 'julia@gmail.com', '+38048001231203'));
usersArray.push(new User(2, 'petya', 'surpetya', 'petya@gmail.com', '+38048001231202'));
usersArray.push(new User(6, 'slava', 'surslava', 'slava@gmail.com', '+38048001231206'));
usersArray.push(new User(9, 'dmytro', 'surdmytro', 'dmytro@gmail.com', '+38048001231209'));
usersArray.push(new User(10, 'fangirit', 'surfangirit', 'fangirit@gmail.com', '+38048001231210'));
usersArray.push(new User(4, 'olya', 'surolya', 'olya@gmail.com', '+38048001231204'));
usersArray.push(new User(8, 'sergio', 'sursergio', 'sergio@gmail.com', '+38048001231208'));
usersArray.push(new User(7, 'lilu', 'lilu', 'lilu@gmail.com', '+38048001231207'));

let usersArraySorts = usersArray.sort((user1, user2) => user1.id - user2.id);
console.log(usersArraySorts);