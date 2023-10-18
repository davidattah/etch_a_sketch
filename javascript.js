const body = document.querySelector("body")
const div = document.createElement("div")
div.id = "container"
body.appendChild(div)

let numberOfSquares = ''
function calculateSquare(){
    numberOfSquares = 16 
}
function makeSquareDivs(){
    let i = 0;
    while(i < numberOfSquares){
        const div = document.createElement("div")
        div.setAttribute("class","square") 
        document.getElementById("container").appendChild(div)
        i++
        for(let j = 0; j < numberOfSquares; j++){
            const smallerSquare = document.createElement("div")
            smallerSquare.setAttribute("class", "small")
           div.appendChild(smallerSquare)
        }
    }
}

window.addEventListener("load",()=>{
let squares = document.querySelectorAll("div.small")
console.log(squares)
squares.forEach((square)=>{
    square.addEventListener("mouseover",()=>{
        square.setAttribute("style","background-color:red")
    })
   
})
})

calculateSquare()
makeSquareDivs()
    

