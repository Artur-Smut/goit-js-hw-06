const btnDecr = document.querySelectorAll("button")[0];
const btnIncrem = document.querySelectorAll("button")[1];
const valueEl = document.querySelector("#value")
let counterValue = 0;


btnDecr.addEventListener('click', (event) => {
    counterValue = counterValue - 1;
    valueEl.textContent = counterValue;
});

btnIncrem.addEventListener('click', (event) => {
    counterValue += 1;
    valueEl.textContent = counterValue;
})

