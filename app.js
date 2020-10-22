console.log('hello world');


let my = 'Alex';

function name(name) {
    console.log(`${name} Добрый вечер!`); 
}

name(my);

let user = {
    name: 'RED',
    age: '27',
    read() {
        console.log(`${this.name} read`);
        if  (this.name == 'RED') {
            sayHi();
        }
    }
 } 
function sayHi() {
    console.log('hi');
}
 user.read();

 admin = user;
 admin.name = 'YURA';
 admin.read();

 user.read();