console.log(45 + 18);
console.log(45 % 8);
console.log('今日の天気は' + '晴れ');

let userName;
userName = '侍太郎';
let userNunber = 55;
console.log(userName);
console.log(userNunber);
const shippingFee = 500;
console.log(shippingFee);
console.log(45 < 18);
let num = Math.floor(Math.random() * 5);
console.log(num);
if (num === 4) {
    console.log('大当たりです');
} else if (num === 3){
    console.log('当たりです');
} else {
    console.log('はずれです');
}

num = 20;
if (num > 10 && num < 30) {
    console.log('変数numは10より大きく、30より小さいです');
} else {
    console.log('条件が成り立ちませんでした');
}
num = Math.floor(Math.random() * 5);
console.log(num);
switch (num) {
    case 2:
        console.log('小吉です');
        break;
    case 3:
        console.log('中吉です');
        break;
    case 4:
        console.log('大吉です');
        break;
    default:
        console.log('末吉です');
        break;
}
let numb = Math.floor(Math.random() * 5);
while (numb !== 0) {
    num = Math.floor(Math.random() * 5);
    console.log('現在の値は' + numb + 'です');
}
