class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let usersArray = [
new Client(1, 'vasya', 'survasya', 'vasya@gmail.com', '+38048001231201',['фен','тв','пилосмок']),
new Client(2, 'petya', 'surpetya', 'petya@gmail.com', '+38048001231202',['пралка','чайник','мультиварка','плойка']),
new Client(3, 'julia', 'surjulia', 'julia@gmail.com', '+38048001231203',['мікрохвильовка','дісплей']),
new Client(4, 'olya', 'surolya', 'olya@gmail.com', '+38048001231204',['праска','телефон','навушники']),
new Client(5, 'mysko', 'surmysko', 'mysko@gmail.com', '+38048001231205',['ноутбук','кавоварка','блендер','годинник','плед']),
new Client(6, 'slava', 'surslava', 'slava@gmail.com', '+38048001231206',['стіл']),
new Client(7, 'lilu', 'lilu', 'lilu@gmail.com', '+38048001231207',['чашка','веделка','ложка','тарілка']),
new Client(8, 'sergio', 'sursergio', 'sergio@gmail.com', '+38048001231208',['диван','шафа','тумба','ваза','табурет','крісло']),
new Client(9, 'dmytro', 'surdmytro', 'dmytro@gmail.com', '+38048001231209',['холодильник']),
new Client(10, 'fangirit', 'surfangirit', 'fangirit@gmail.com', '+38048001231210',['швабра','віник'])
];
console.log(usersArray);