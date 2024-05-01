const rightUser = 'Nina'
const password = 'Bogdanmojaljubav@-`';
let index = 0;
const passwordInput = document.getElementById('passwordInput');
const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const continueBtn = document.getElementById('continue');

function checkPassword() {
    if (passwordInput.value === password && nameInput.value === rightUser) {
        continueBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
    else if (nameInput.value !== rightUser && passwordInput.value !== password && index !== 3) {
        index++;
        return;
    }
    else if (index >= 3) {
        alert('denied');
    } 

};

submitBtn.addEventListener('click', checkPassword);

