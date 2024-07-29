let untyped = '';

const untypedfield = document.getElementById('untyped');

const textLists = [
    'Hello World',
    'This is my App',
    'How are you?'
];

const createText = () => {

    console.log(Math.floor(Math.random() * textLists.length));

    untyped = textLists[1];
    untypedfield.textContent = untyped;
};
createText();

const keyPress = e => {};

const rankCheck = score => {};

const gameOver = id => {};

const timer = () => {};