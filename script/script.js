// //context loosing
// class User {
//     constructor(nickname){
//         this.nickname = nickname;
//     }

//     infoFunc = function (greeting, simbol) {
//         console.log(`${greeting} Nickname : ${this.nickname}${simbol}`);
//     }

//     infoArrow = () => console.log(`Nickname : ${this.nickname}`);

// }

// const peter = new User('Peter');
// console.log('func');
// peter.infoFunc('Mr.', '!');
// console.log('arrow');
// peter.infoArrow();
// fn(peter.infoArrow);
// const john = new User('John');
// console.log('call, apply');
// peter.infoFunc.apply(john, ['Mr.', '!']);
// john.infoFunc.call(peter, 'Mr.', '!');

// function fn(info){
//     info();
// }

//asinchron
console.log('one');
setTimeout(function(){
    console.log('two');
}, 2000);
setTimeout(function(){
    console.log('two 1/2');
}, 1500);
console.log('three');
