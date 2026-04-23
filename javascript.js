
function makeGrid(nr) {
    for (let i = 0; i < nr; i++) {
        const container = document.querySelector("#container")
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