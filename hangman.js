// declaring global variables
var word, letters, blanks, guess;
var chances = 9;
picCounter = 1;
var used = []
realChances = 9;
var num = 1;
var wins = localStorage.getItem('wins');
var losses = localStorage.getItem('losses');

if (wins === undefined || wins === null || wins.length === 0)
{
    wins = 0;
    localStorage.setItem('wins',wins);
}else{
    var wins = localStorage.getItem('wins');
}
if (losses === undefined || losses === null || losses.length === 0)
{
    losses = 0;
    localStorage.getItem('losses');
}else{
    var losses = localStorage.getItem('losses');
}

// function chooses word from pokemon list
function pokemon(){
    var pokemons = ["pikachu","gengar","bulbasaur","chimchar","charmander","squirtle","eevee","magikarp","dratini","gardevoir"];
    word = pokemons[Math.floor(Math.random()*pokemons.length)];
    document.getElementById('description').innerHTML = "You chose Pokemon. Good Luck!";
    blankWord(word);
}


// fcuntion chooses word from mortal characters list
function mortal(){
    var mortalCharacters = ["mileena","reptile","johnnycage","scorpion","subzero","raiden","kitana","baraka","shinnok","takeda"];
    word = mortalCharacters[Math.floor(Math.random()*mortalCharacters.length)];
    document.getElementById('description').innerHTML = "You chose Mortal Kombat characters. Good Luck!";
    blankWord(word);
}



// function horror chooses word from horror list
function horror(){
    var horrorCharacters = ["freddie","jason","michaelmyers","pinhead","ghostface","chucky","hannibal","leatherface","jigsaw","slenderman"];
    word = horrorCharacters[Math.floor(Math.random()*horrorCharacters.length)];
    document.getElementById('description').innerHTML = "You chose Horror Characters. Good Luck!"
    blankWord(word);
}


// function turns word into blank
function blankWord(word){
    letters = [];
    blanks = [];
    for(var i = 0; i < word.length; i++){
        letters.push(word[i]);
        blanks.push('_');
    }
    main();
}

function main(){
    console.log(blanks, letters);
    //change display
    document.getElementById('container').style.display = 'none';
    document.getElementById('wordBlank').style.display = 'block';
    document.getElementById('mainScreen').style.display = 'block';
    document.getElementById('lettersUsed').innerHTML = "Letters Used: [" + used.join(' ') + "]";
    document.getElementById('chances').innerHTML = "Chances: " + realChances;
    document.getElementById('wins').innerHTML = "Wins: " + wins + "  Losses: " + losses;
    document.getElementById('blanks').innerHTML = blanks.join(' ')
    
    //while loop 
    while(chances >= 1){
        
        document.addEventListener("keyup", function(event) {
            if (event.code === 'Enter') {
                guess = document.getElementById("input").value;
                if(guess.length > 1){
                    checkWord(guess.toLowerCase());
                }else if(guess.length == 1){
                    checkLetter(guess.toLowerCase());
                }else{
                    console.log("please enter a letter");
                }
                document.getElementById("input").value='';
            }
        });  
        chances -= 1;
    }
}
function checkLetter(guess){
    var onlyLetters = /^[a-z]*$/.test(guess);
    var letterInWord = false;
   if(onlyLetters == false){
        console.log("try again")
   }else{
        for(var i =0;i < letters.length; i++){
            if(letters[i] == guess){
                letterInWord = true;
            }
        }
        if(letterInWord == true){
                rightGuess();
        }else if(letterInWord == false){
                wrongGuess();
        }
   }
   
}

function checkWord(guess){
    if(guess == word){
        document.getElementById('blanks').innerHTML = word;
        win();
    }else{
        lose();
    }
}

function wrongGuess(){
    var currImg = "img" + num;
    used.push(guess);
    document.getElementById('lettersUsed').innerHTML = "Letters Used: [" + used.join(' ') + "]";
    realChances -= 1;
    document.getElementById('chances').innerHTML = "Chances: " + realChances;
    if(currImg != 'img10'){
        document.getElementById("img"+num).style.display = 'none';
        num += 1;
        document.getElementById("img"+num).style.display = 'block';
    }else{
        lose();
    }
    
}

function rightGuess(){
   
    for(var i = 0;i<blanks.length;i++){
        if(letters[i] === guess){
            blanks[i] = guess;
        }
    }
    console.log(blanks,letters);
    document.getElementById('blanks').innerHTML = blanks.join(' ');
    winCheck(blanks,letters);

}
function winCheck(blanks,letters){
    if(blanks === letters){
        console.log("why")
        win();
    }else{
        console.log(blanks,letters)
    }
}
function win(){
    document.getElementById('description').innerHTML = "You win!";
    document.getElementById('mainScreen').style.display = 'none';
    document.getElementById('end').style.display='block';
    wins ++;
    localStorage.setItem('wins',wins);
    document.getElementById("yes").onclick = function(){
        location.reload();
    };
    document.getElementById("no").onclick = function(){
        location.reload();
    };
    

}

function lose(){
    document.getElementById('description').innerHTML = "You lost! The word was " + word;
    document.getElementById('wordBlank').style.display = 'none';
    document.getElementById('mainScreen').style.display = 'none';
    document.getElementById('end').style.display='block';
    losses ++;
    localStorage.setItem('losses',losses);
    document.getElementById("yes").onclick = function(event){
        event.preventDefault();
        location.reload();
    };
    document.getElementById("no").onclick = function(){
        location.reload();
    };
}

//gives choice to choose category
function menu(){

    document.getElementById('button1').addEventListener('click', () => {
        horror();
    });
    document.getElementById('button2').addEventListener('click', () => {
        pokemon();
    });
    document.getElementById('button3').addEventListener('click', () => {
        mortal();
    });
}

menu();
