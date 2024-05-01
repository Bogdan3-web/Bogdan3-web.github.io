const hintButton = document.querySelector('.hint');
const img = document.getElementById('img');

const displayNone = () => {
    hintButton.style.display = 'none';
    img.classList.remove('display-none');
};

hintButton.addEventListener('click', displayNone);