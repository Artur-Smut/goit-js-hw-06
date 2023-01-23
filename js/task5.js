const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener("input", (event) => {
    const inputValue = event.target.value;

    if (inputValue === '') {
        spanRef.textContent = 'Anonymous';
    } else {
        spanRef.textContent = inputValue;
    }
})