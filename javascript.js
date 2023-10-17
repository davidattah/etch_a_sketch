const body = document.querySelector("body")
const div = document.createElement("div")
div.id = "container"
body.appendChild(div)

let numberOfSquares = ''
function calculateSqaure(){
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


calculateSqaure()
makeSquareDivs()
