
function makeGrid(nr) {
    if (nr <= 100) {
        const container = document.querySelector("#container")
        const square = document.querySelectorAll(".square-style")
        square.forEach(square => square.remove())
        for (let i = 0; i < nr; i++) {
            const squareLine = document.createElement("div")
            squareLine.classList.add("square-line")
            container.appendChild(squareLine)
            for (let j = 0; j < nr; j++) {
                const square = document.createElement("div")
                const rand = Math.random();
                if (rand < 0.33)
                    square.addEventListener("mouseenter", () => square.style.backgroundColor = "blue")
                else if (rand > 0.66)
                    square.addEventListener("mouseenter", () => square.style.backgroundColor = "red")
                else
                    square.addEventListener("mouseenter", () => square.style.backgroundColor = "green")
                square.classList.add("square-style")
                squareLine.appendChild(square)
            }
        }
    }
    else alert("Maximum 100x100 allowed.")
}

makeGrid(16)
const button = document.querySelector("#buttonNew")
button.addEventListener("click", (e) => { const input = prompt("How many squares per side?", "16"); makeGrid(input) })