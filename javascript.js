
function makeGrid(nr) {
    const container = document.querySelector("#container")
    const square = document.querySelectorAll(".square-style")
    square.forEach(square => square.remove())
    for (let i = 0; i < nr; i++) {
        const squareLine = document.createElement("div")
        squareLine.classList.add("square-line")
        container.appendChild(squareLine)
        for (let j = 0; j < nr; j++) {
            const square = document.createElement("div")
            square.addEventListener("mouseenter", () => square.style.backgroundColor = "blue")
            square.classList.add("square-style")
            squareLine.appendChild(square)
        }
    }
}

makeGrid(16)
const button = document.querySelector("#buttonNew")
button.addEventListener("click", (e) => { const input = prompt("How many squares per side?", "16"); makeGrid(input) })