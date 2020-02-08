// THE GAME MAINLY WORKS HOW JEOPARDY WORKS THE MAIN DIFFERENCE IS THE DAILY DOUBLE JUST DOUBLES THE SCORE FOR THAT CURRENT QUESTION INSTEAD OF ALLOWING THE PLAYER TO BET.  IF THEY PICK A QUESTION FOR $500 THEN THAT MEANS THEY WOULD EITHER GET $1000 OR LOSE $1000 DEPENDING ON IF THEY ANSWER CORRECTLY.

//THERE WILL BE COMMENTS LIKE THESE WHERE YOU NEED TO UPDATE QUESTIONS AND ANSWERS



//audio files

let startsound = new Audio('jeopardy-intro-1.mp3');
let correct = new Audio('rightanswer.mp3');
let incorrect = new Audio('times-up.mp3');
let double = new Audio('jeopardy-daily-double-sound-effect-from-youtube_76mCCAq.mp3');


let dailydouble;

window.onload = function () {

    startsound.play();

    setTimeout(function () {
        document.getElementById('load').style.fontSize = "4rem"
    }, 1000);
    setTimeout(function () {
        document.getElementById('load').innerText = " ."
    }, 1000);
    setTimeout(function () {
        document.getElementById('load').innerText = " . ."
    }, 2000);
    setTimeout(function () {
        document.getElementById('load').innerText = " . . ."
    }, 3000);
    setTimeout(function () {
        document.getElementById('load').innerText = " ."
    }, 4000);
    setTimeout(function () {
        document.getElementById('load').innerText = " . ."
    }, 5000);
    setTimeout(function () {
        document.getElementById('load').innerText = " . . ."
    }, 6000);
    setTimeout(function () {
        document.getElementById('load').innerText = " . "
    }, 7000);
    setTimeout(function () {
        document.getElementById('load').innerText = " . . "
    }, 8000);
    setTimeout(function () {
        document.getElementById('load').innerHTML = "<button id='play' onclick='startGame()'>Let's Play</button>";
    }, 9000);

    setTimeout(function () {
        document.getElementById('intromessage1').style.display = "block"
    }, 7000);
    setTimeout(function () {
        document.getElementById('intromessage2').style.display = "block"
    }, 8000);
}

function startGame() {
    document.getElementById('intro').style.display = 'none';
}

//gets all griditems and makes an 'array' called cards

const cards = document.querySelectorAll('.griditem');

//Dynamically Stores Which Card Was Flipped

let selected;

let status;

let randomNum = Math.ceil(Math.random() * (35 - 5) + 5);

console.log(randomNum);

//flips cards unless its 0-5

function flipIt() {

    if (this == cards[0] || this == cards[1] || this == cards[2] || this == cards[3] || this == cards[4] || this == cards[5]) {
        console.log('nothing happens!')
    } else {


        let question = document.getElementById('question');
        let answer = document.getElementById('answer');

        let question2 = document.getElementById('question2');
        let answer2 = document.getElementById('answer2');

        //THIS IS WHERE YOU UPDATE THE QUESTIONS 'question.innerText' & 'question2.innerText' HAVE TO BE THE EXACT SAME THING FOR EACH CARD!!!  PUT THE ACTUAL TEXT BETWEEN THE QUOTES (THE QUOTES ARE REQUIRED)
        //
        //
        //
        //      //FIRST COLUMN 

        if (this == cards[6] && randomNum !== 6) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 6;
            cards[6].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[6] && randomNum == 6) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 6;
            cards[6].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[12] && randomNum !== 12) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 12;
            cards[12].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[12] && randomNum == 12) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 12;
            cards[12].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[18] && randomNum !== 18) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 18;
            cards[18].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[18] && randomNum == 18) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 18;
            cards[18].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[24] && randomNum !== 24) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 24;
            cards[24].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[24] && randomNum == 24) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 24;
            cards[24].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[30] && randomNum !== 30) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 30;
            cards[30].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[30] && randomNum == 30) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 30;
            cards[30].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        //SECOND COLUMN 

        if (this == cards[7] && randomNum !== 7) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 7;
            cards[7].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[7] && randomNum == 7) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 7;
            cards[7].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[13] && randomNum !== 13) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 13;
            cards[13].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[13] && randomNum == 13) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 13;
            cards[13].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[19] && randomNum !== 19) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 19;
            cards[19].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[19] && randomNum == 19) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 19;
            cards[19].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[25] && randomNum !== 25) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 25;
            cards[25].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[25] && randomNum == 25) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 25;
            cards[25].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[31] && randomNum !== 31) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 31;
            cards[31].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[31] && randomNum == 31) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 31;
            cards[31].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        //THIRD COLUMN 

        if (this == cards[8] && randomNum !== 8) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 8;
            cards[8].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[8] && randomNum == 8) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 8;
            cards[8].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[14] && randomNum !== 14) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 14;
            cards[14].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[14] && randomNum == 14) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 14;
            cards[14].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[20] && randomNum !== 20) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 20;
            cards[20].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[20] && randomNum == 20) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 20;
            cards[20].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[26] && randomNum !== 26) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 26;
            cards[26].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[26] && randomNum == 26) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 26;
            cards[26].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[32] && randomNum !== 32) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 32;
            cards[32].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[32] && randomNum == 32) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 32;
            cards[32].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        //FOURTH COLUMN 

        if (this == cards[9] && randomNum !== 9) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 9;
            cards[9].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[9] && randomNum == 9) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 9;
            cards[9].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[15] && randomNum !== 15) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 15;
            cards[15].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[15] && randomNum == 15) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 15;
            cards[15].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[21] && randomNum !== 21) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 21;
            cards[21].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[21] && randomNum == 21) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 21;
            cards[21].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[27] && randomNum !== 27) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 27;
            cards[27].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[27] && randomNum == 27) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 27;
            cards[27].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[33] && randomNum !== 33) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 33;
            cards[33].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[33] && randomNum == 33) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 33;
            cards[33].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        //FIFTH COLUMN 

        if (this == cards[10] && randomNum !== 10) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 10;
            cards[10].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[10] && randomNum == 10) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 10;
            cards[10].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[16] && randomNum !== 16) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 16;
            cards[16].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[16] && randomNum == 16) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 16;
            cards[16].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[22] && randomNum !== 22) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 22;
            cards[22].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[22] && randomNum == 22) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 22;
            cards[22].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[28] && randomNum !== 28) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 28;
            cards[28].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[28] && randomNum == 28) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 28;
            cards[28].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[34] && randomNum !== 34) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 34;
            cards[34].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[34] && randomNum == 34) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 34;
            cards[34].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        //SIXTH COLUMN 

        if (this == cards[11] && randomNum !== 11) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 11;
            cards[11].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[11] && randomNum == 11) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 11;
            cards[11].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[17] && randomNum !== 17) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 17;
            cards[17].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[17] && randomNum == 17) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 17;
            cards[17].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[23] && randomNum !== 23) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 23;
            cards[23].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[23] && randomNum == 23) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 23;
            cards[23].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[29] && randomNum !== 29) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 29;
            cards[29].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[29] && randomNum == 29) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 29;
            cards[29].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

        if (this == cards[35] && randomNum !== 35) {
            setTimeout(function () {
                question.style.display = "block";
                answer.style.display = "block";
            }, 990);
            question.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            selected = 35;
            cards[35].style.visibility = 'hidden';
            document.querySelector('.modal').classList.toggle('popup');
        } else if (this == cards[35] && randomNum == 35) {
            setTimeout(function () {
                question2.style.display = "block";
                answer2.style.display = "block";
            }, 990);
            question2.innerText = "PUT THE QUESTION HERE BETWEEN THESE QUOTES";
            double.play();
            selected = 35;
            cards[35].style.visibility = 'hidden';
            document.querySelector('.modal2').classList.toggle('popup2');
            dailydouble = 1;
        }

    }
}

//listens for click to run the function for each card

cards.forEach(card => card.addEventListener('click', flipIt));

let counter = 0;
let doublescore = 0;

function getAnswer() {

    counter++;

    if (counter % 2 !== 0) {
        answer.innerHTML = "<p>CLOSE</p>";
        answer2.innerHTML = "<p>CLOSE</p>";
    } else {
        answer.innerHTML = "<p>ANSWER</p>";
        answer2.innerHTML = "<p>ANSWER</p>";
        question.style.display = "none";
        answer.style.display = "none";
        question2.style.display = "none";
        answer2.style.display = "none";
        document.getElementById('correctOrNot').style.display = "flex";

        if (dailydouble == 1) {

            doublescore = 1;
        }

        dailydouble = 0;
    }


    //THIS IS WHERE YOU UPDATE THE ANSWERS 'question.innerText' & 'question2.innerText' HAVE TO BE THE EXACT SAME THING FOR EACH CARD!!!  PUT THE ACTUAL TEXT BETWEEN THE QUOTES (THE QUOTES ARE REQUIRED)
    //
    //
    //
    //  //FIRST COLUMN 
    if (selected == 6) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 12) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 18) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 24) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 30) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }

    //SECOND COLUMN 
    if (selected == 7) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 13) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 19) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 25) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 31) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }

    //THIRD COLUMN 
    if (selected == 8) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 14) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 20) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 26) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 32) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }

    //FOURTH COLUMN 
    if (selected == 9) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 15) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 21) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 27) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 33) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }

    //FIFTH COLUMN 
    if (selected == 10) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 16) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 22) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 28) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 34) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }

    //SIXTH COLUMN 
    if (selected == 11) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 17) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 23) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 29) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
    if (selected == 35) {
        question.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
        question2.innerText = "PUT THE ANSWER IN THE FORM OF A QUESTION HERE BETWEEN THE QUOTES";
    }
}


let gamecount = 0;
let calc = document.getElementById('calcScore').innerText;
let add = parseInt(calc);



function earnPoints() {

    console.log(dailydouble);

    if (doublescore == 0) {
        document.querySelector('.modal').classList.toggle('popup');
    }

    if (doublescore == 1) {
        document.querySelector('.modal2').classList.toggle('popup2');
    }

    console.log(doublescore);

    correct.play();
    document.getElementById('correctOrNot').style.display = "none";


    if (doublescore == 0 && (selected == 6 || selected == 7 || selected == 8 || selected == 9 || selected == 10 || selected == 11)) {
        document.getElementById('calcScore').innerText = add += 100;
    } else if ((selected == 6 || selected == 7 || selected == 8 || selected == 9 || selected == 10 || selected == 11) && doublescore == 1) {
        document.getElementById('calcScore').innerText = add += 200;
        doublescore = 0;
    }

    if (doublescore == 0 && (selected == 12 || selected == 13 || selected == 14 || selected == 15 || selected == 16 || selected == 17)) {
        document.getElementById('calcScore').innerText = add += 200;
    } else if ((selected == 12 || selected == 13 || selected == 14 || selected == 15 || selected == 16 || selected == 17) && doublescore == 1) {
        document.getElementById('calcScore').innerText = add += 400;
        doublescore = 0;
    }

    if (doublescore == 0 && (selected == 18 || selected == 19 || selected == 20 || selected == 21 || selected == 22 || selected == 23)) {
        document.getElementById('calcScore').innerText = add += 300;
    } else if ((selected == 18 || selected == 19 || selected == 20 || selected == 21 || selected == 22 || selected == 23) && doublescore == 1) {
        document.getElementById('calcScore').innerText = add += 600;
        doublescore = 0;
    }

    if (doublescore == 0 && (selected == 24 || selected == 25 || selected == 26 || selected == 27 || selected == 28 || selected == 29)) {
        document.getElementById('calcScore').innerText = add += 400;
    } else if ((selected == 24 || selected == 25 || selected == 26 || selected == 27 || selected == 28 || selected == 29) && doublescore == 1) {
        document.getElementById('calcScore').innerText = add += 800;
        doublescore = 0;
    }

    if (doublescore == 0 && (selected == 30 || selected == 31 || selected == 32 || selected == 33 || selected == 34 || selected == 35)) {
        document.getElementById('calcScore').innerText = add += 500;
    } else if ((selected == 30 || selected == 31 || selected == 32 || selected == 33 || selected == 34 || selected == 35) && doublescore == 1) {
        document.getElementById('calcScore').innerText = add += 1000;
        doublescore = 0;
    }

    gamecount++;
    console.log(gamecount);

    if (gamecount == 30) {
        // This is where you put the code for the end of the game!
        document.getElementById('end').style.display = "block";
        document.getElementById('totalscore').innerText = `You scored a total of ${add} points!`;

    }
};

function noPoints() {
    incorrect.play();
    document.getElementById('correctOrNot').style.display = "none";
    gamecount++;
    console.log(gamecount);

    if (doublescore == 0) {
        document.querySelector('.modal').classList.toggle('popup');
    }

    if ((selected == 6 || selected == 7 || selected == 8 || selected == 9 || selected == 10 || selected == 11) && doublescore == 1) {
        document.querySelector('.modal2').classList.toggle('popup2');
        document.getElementById('calcScore').innerText = add -= 200;
    }

    if ((selected == 12 || selected == 13 || selected == 14 || selected == 15 || selected == 16 || selected == 17) && doublescore == 1) {
        document.querySelector('.modal2').classList.toggle('popup2');
        document.getElementById('calcScore').innerText = add -= 400;
    }

    if ((selected == 18 || selected == 19 || selected == 20 || selected == 21 || selected == 22 || selected == 23) && doublescore == 1) {
        document.querySelector('.modal2').classList.toggle('popup2');
        document.getElementById('calcScore').innerText = add -= 600;
    }

    if ((selected == 24 || selected == 25 || selected == 26 || selected == 27 || selected == 28 || selected == 29) && doublescore == 1) {
        document.querySelector('.modal2').classList.toggle('popup2');
        document.getElementById('calcScore').innerText = add -= 800;
    }

    if ((selected == 30 || selected == 31 || selected == 32 || selected == 33 || selected == 34 || selected == 35) && doublescore == 1) {
        document.querySelector('.modal2').classList.toggle('popup2');
        document.getElementById('calcScore').innerText = add -= 1000;
    }



    if (gamecount == 30) {
        // This is where you put the code for the end of the game!
        document.getElementById('end').style.display = "block";
        document.getElementById('totalscore').innerText = `You scored a total of ${add} points!`;
    };

};