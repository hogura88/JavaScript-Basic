let untyped = '';
let typed = '';

const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');

const textLists = [
   'Hello World','This is my App','How are you?',
   'Today is sunny','I love JavaScript!','Good morning',
   'I am Japanese','Let it be','Samurai',
   'Typing Game','Information Technology',
   'I want to be a programmer','What day is today?',
   'I want to build a web app','Nice to meet you',
   'Chrome Firefox Edge Safari','machine learning',
   'Brendan Eich','John Resig','React Vue Angular',
   'Netscape Communications','undefined null NaN',
   'Thank you very much','Google Apple Facebook Amazon',
   'ECMAScript','console.log','for while if switch',
   'var let const','Windows Mac Linux iOS Android',
   'programming'
];

const createText = () => {

    typed = '';
    typedfield.textContent = typed;

    let random = Math.floor(Math.random() * textLists.length);

    untyped = textLists[random];
    untypedfield.textContent = untyped;
};

const keyPress = e => {
    if(e.key !== untyped.substring(0, 1)) {
        wrap.classList.add('mistyped');
        return;
    }
    wrap.classList.remove('mistyped');
    typed += untyped.substring(0,1);
    untyped = untyped.substring(1);
    typedfield.textContent = typed;
    untypedfield.textContent = untyped;
    if(untyped === '') {
        createText();
    }
};

const rankCheck = score => {};

const gameOver = id => {};

const timer = () => {};

document.addEventListener('keypress', keyPress);