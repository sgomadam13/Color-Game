var randomRed;
var randomGreen;
var randomBlue;
var randomColorsArray = [];
var headerTextContent = document.getElementById("colorDisplay").textContent;
var modeButtons = document.querySelectorAll(".mode");
var numSquares = 6;
var chosenColor;
var squares = document.querySelectorAll(".square");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

document.getElementById("reset").addEventListener("click", function() {
        setupModeButtons();
        reset();
    });



function setupModeButtons() {
    for(var i=0; i<modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY"? numSquares= 3 : numSquares = 6;       
        });
    }
}

function setupSquares() {

    for(var i=0; i<squares.length; i++) {
        squares[i].addEventListener("click", function (){
           console.log("click listener");
            //grab the clicked background color
            var clickedColor = this.style.backgroundColor;

            //compare with the picked color
            if(clickedColor === chosenColor) {
                //color the header background chosen color
                document.querySelector("h1").style.background = chosenColor;

                //Write the message "correct"
                document.getElementById("message").textContent = "Correct!";
                document.querySelector("#reset").textContent = "Play Again"

                //color all the squares the chosen color
                for(var i = 0; i < squares.length; i++) {
                    squares[i].style.background = chosenColor;
                }
            } else {
   
                this.style.background = "#232323";
                //ask if the player wants to play again
                document.getElementById("message").textContent = "Try Again";

            }
        });
    }
}

function reset() {
    //delete any existing message
    document.getElementById("message").textContent = "";
    document.querySelector("h1").style.background = "steelblue";
    document.querySelector("#reset").textContent = "New Colors"

    generateRandomColors(numSquares);

}

function generateRandomColors(num) {
    emptyArray();

//add random colors to the array
    for(var i=0; i<num; i++) {
       randomColorsArray.push(randomColors());
    }

//Pick a random color from the array as the chosen color
    chosenColor = pickColor();

//Write the chosen color on the header
colorTextDisplay();  

//color the squares
colorTheSquares();

}

function pickColor() {
    var random = Math.floor(Math.random() * randomColorsArray.length);
    return randomColorsArray[random];
}

function emptyArray() {
    randomColorsArray = [];
}

function randomColors() {
    //pick a "red" from 0 - 255
    var randomRed = Math.floor(Math.random() * 256);

    //pick a "green" from 0 - 255
    var randomGreen = Math.floor(Math.random() * 256);

    //pick a "blue" from 0 - 255
    var randomBlue = Math.floor(Math.random() * 256);

    return ("rgb("+ randomRed + ", " + randomGreen + ", " + randomBlue + ")" );
    
}

function colorTextDisplay() {
    document.getElementById("colorDisplay").innerHTML = chosenColor;
}

function colorTheSquares() {
    for (var i=0; i<squares.length; i++) {
        if(randomColorsArray[i]) {
            squares[i].style.display = "block"
            squares[i].style.background = randomColorsArray[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}