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
    console.log("step into setupModeButtons()");
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
    console.log("step into setupSquares()");

    for(var i=0; i<squares.length; i++) {
        squares[i].addEventListener("click", function (){
           console.log("click listener");
            //grab the clicked background color
            var clickedColor = this.style.backgroundColor;
            console.log("clicked color " + clickedColor);

            //compare with the picked color
            if(clickedColor === chosenColor) {
                console.log("chosen color " + chosenColor);
                console.log("clicked color " + clickedColor);
                //color the header background chosen color
                document.querySelector("h1").style.background = chosenColor;

                //Write the message "correct"
                document.getElementById("message").textContent = "Correct!";

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
    console.log("step into reset() " + numSquares);
    //delete any existing message
    document.getElementById("message").textContent = "";
    document.querySelector("h1").style.background = "steelblue";
    generateRandomColors(numSquares);

}

function generateRandomColors(num) {
    console.log("step into generateRandomColors(num) " + num);
    emptyArray();

//add random colors to the array
    for(var i=0; i<num; i++) {
       randomColorsArray.push(randomColors());
    }

    console.log("random colors "+ randomColorsArray[0]);

//Pick a random color from the array as the chosen color
    chosenColor = pickColor();
    console.log(chosenColor);

//Write the chosen color on the header
colorTextDisplay();  

//color the squares
colorTheSquares();

}

function pickColor() {
    console.log("step into pickColor()");
    var random = Math.floor(Math.random() * randomColorsArray.length);
    console.log("random "+ random);
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

    console.log("red " + randomRed + " green " + randomGreen + " blue " + randomBlue)
    return ("rgb("+ randomRed + ", " + randomGreen + ", " + randomBlue + ")" );
    
}

function colorTextDisplay() {
    document.getElementById("colorDisplay").innerHTML = chosenColor;
}

function colorTheSquares() {
    console.log("step into colorTheSquares() " + squares.length);
    for (var i=0; i<squares.length; i++) {
        if(randomColorsArray[i]) {
            squares[i].style.display = "block"
            squares[i].style.background = randomColorsArray[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}