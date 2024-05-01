const hintButton = document.querySelector('.next');
const img = document.getElementById('img');
const nextBtn = document.getElementById('continue');
const h2Element = document.getElementById('h2');

const displayNone = () => {
    hintButton.style.display = 'none';
    img.classList.remove('display-none');
    nextBtn.style.display = 'block';
    h2Element.classList.remove('display-none');
};

hintButton.addEventListener('click', displayNone);


/*const hintButton = document.querySelector('.hint');
const img = document.getElementById('img');

const displayNone = () => {
    hintButton.style.display = 'none';
    img.style.display = 'block';
};

hintButton.addEventListener('click', displayNone); */



