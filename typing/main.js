let untyped = '';

const untypedfield = document.getElementById('untyped');

const textLists = [
    'Hello World',
    'This is my App',
    'How are you?'
];

const createText = () => {
    untyped = textLists[0];
    untypedfield.textContent = untyped;
};
createText();

const keyPress = e => {};

const rankCheck = score => {};

const gameOver = id => {};

const timer = () => {};