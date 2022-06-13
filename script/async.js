//Problem -> console 10 times 10

for (var i = 0; i < 10; i++) {
    const fn = function (i){
        setTimeout(function () {
            console.log(i);
        },1000);  
    }
    fn(i);
};

//Solution 1 -> use let
// for(let i = 0; i < 10; i++){
//     setTimeout(function () {
//         console.log(i);
//     },1000);
// }