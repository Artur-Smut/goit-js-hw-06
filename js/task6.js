let inputRef = document.querySelector('#validation-input');

let inputLength = inputRef.dataset.length;

const input = document.querySelector('input');
inputRef.addEventListener('change', event => {
    const text = event.target.value;
    if (text.length === +inputLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid')
} else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
}
});


