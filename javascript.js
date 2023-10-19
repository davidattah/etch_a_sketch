const body = document.querySelector("body")
const div = document.createElement("div")
div.id = "container"
body.appendChild(div)

const buttonDiv = document.createElement("div")
body.prepend(buttonDiv)
buttonDiv.id = "button-container"

const buttonCreate = document.createElement("button")
buttonDiv.appendChild(buttonCreate)
buttonCreate.textContent = "Create"
buttonCreate.setAttribute("class","create")

buttonReset = document.createElement("button")
buttonDiv.appendChild(buttonReset)
buttonReset.textContent = "Reset"
buttonReset.setAttribute("class","reset")

 buttonCreate.addEventListener("click",()=>{
        numberOfSquares = +prompt("How many number of squares per slide do you want?")
        while(numberOfSquares > 100){
           numberOfSquares = prompt("Please enter a number less than 100")
       }
       makeSquareDivs(numberOfSquares)
       })



let numberOfSquares = "";
function makeSquareDivs(numberOfSquares){
    let i = 0;
    while(i < numberOfSquares){
        const div = document.createElement("div")
        div.setAttribute("class","square") 
        document.getElementById("container").appendChild(div)
        i++
        for(let j = 0; j < numberOfSquares; j++){
            const smallerSquare = document.createElement("div")
            smallerSquare.classList.add("small")
            smallerSquare.style.width = 400/numberOfSquares + "px"
            smallerSquare.style.height = 400/numberOfSquares + "px"
            div.appendChild(smallerSquare)
        }
    }
    const squares = document.querySelectorAll("div.small")
    squares.forEach((square)=>{
    square.addEventListener("mouseover",()=>{
        square.classList.add("turn-red")
    })
}) 
}

buttonReset.addEventListener("click",()=>{
    let clearSquares = document.querySelectorAll("div.square")
    clearSquares.forEach((clearSquare)=>{
        clearSquare.remove()
    })
})

  







