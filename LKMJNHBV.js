const hintButton = document.querySelector('.hint');
const img = document.getElementById('img');
const lastNextBtn = document.getElementById('lastNextBtn');

const displayNone = () => {
    hintButton.style.display = 'none';
    img.classList.remove('display-none');
    setTimeout(() => {
        img.classList.add('display-none');
        lastNextBtn.classList.remove('display-none');
    }, 5000);
};

hintButton.addEventListener('click', displayNone);

