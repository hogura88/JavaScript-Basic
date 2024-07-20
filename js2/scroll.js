const backBtn = document.getElementById('back-btn');

window.addEventListener('scroll', () => {
    const scrollVallue = document.scrollingElement.scrollTop;
    if (scrollVallue >= 300) {
        backBtn.style.display = 'inline';
    }
    else {
        backBtn.style.display = 'none';
    }
});

const backBtn = document.getElementById('back-btn');