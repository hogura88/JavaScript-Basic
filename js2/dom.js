console.log(document.head);
console.log(document.body);

console.log(document.getElementById('first-list'));
console.log(document.getElementsByClassName('heading'));

const headings = document.getElementsByClassName('heading');

for (let i = 0; i < headings.length; i++) {
    console.log(headings[i]);
}