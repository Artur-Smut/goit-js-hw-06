const spanRef = document.querySelector("#text")
const controlRef = document.querySelector("#font-size-control")
console.log(controlRef);

controlRef.addEventListener("input",textSize)

function textSize(event) {
    spanRef.style.fontSize = event.currentTarget.value + "px";
}