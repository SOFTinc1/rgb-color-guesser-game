let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easyBtn");
let hardButton = document.querySelector("#hardBtn");
let modeButton = document.querySelectorAll(".mode");

init();

function init(){
    setupmodeButtons();
    setupsquares();
}

function randomColors(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g +", " + b + ")" 
}

function generateRandomColors(num){
    let arr = [];
    for(i = 0; i < num; i++){
        arr.push(randomColors());
        console.log(randomColors());
    }
    return arr;
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function setupsquares(){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].classList.remove("animated");
    
        squares[i].addEventListener("click", function(){
            let clickedColor = this.style.background;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct !";
                changeColors(clickedColor);
                resetButton.textContent = "Play Again!";
                h1.style.background = clickedColor;
            } else{
                this.style.background= "#232323";
                this.classList.add("animated");
                messageDisplay.textContent = "Try Again";
            }
        })
    } 
}

function setupmodeButtons(){
    for(var i = 0; i < modeButton.length; i++){
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            // if(this.textContent === "Easy"){
            //     numSquares = 3;
            // } else{
            //     numSquares = 6;
            // }
            reset();
        })
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
            squares[i].classList.remove("animated");
        } else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colours";
}

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
        squares[i].classList.remove("animated");
    }
}







// easyButton.addEventListener("click", function(){
//     easyButton.classList.add("selected");
//     hardButton.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.background = colors[i];
//         } else{
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardButton.addEventListener("click", function(){
//     hardButton.classList.add("selected");
//     easyButton.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";
//     }
// })