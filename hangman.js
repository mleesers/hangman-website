// declaring global variables
var word, letters, blanks, guess;
var chances = 9;
picCounter = 1;
var used = []
var wins = 0;
var losses = 0;
realChances = 9;
var num = 1;



// function chooses word from pokemon list
function pokemon(){
    var pokemons = ["pikachu","gengar","bulbasaur","chimchar","charmander","squirtle","eevee","magikarp","dratini","gardevoir"];
    word = pokemons[Math.floor(Math.random()*pokemons.length)];
    document.getElementById('description').innerHTML = "You chose Pokemon. Good Luck!";
    blankWord(word);
}


// fcuntion chooses word from mortal characters list
function mortal(){
    var mortalCharacters = ["mileena","reptile","johnny cage","scorpion","subzero","raiden","kitana","baraka","shinnok","takeda"];
    word = mortalCharacters[Math.floor(Math.random()*mortalCharacters.length)];
    document.getElementById('description').innerHTML = "You chose Mortal Kombat characters. Good Luck!";
    blankWord(word);
}



// function horror chooses word from horror list
function horror(){
    var horrorCharacters = ["freddie","jason","michael myers","pinhead","ghostface","chucky","hannibal","leatherface","jigsaw","slender man"];
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
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('blanks').innerHTML = blanks.join(' ')
    
    //while loop 
    while(chances >= 1){
        
        document.getElementById("submit").onclick = function(){
            guess = document.getElementById("input").value;
            if(guess.length > 1){
                checkWord(guess.toLowerCase());
            }else if(guess.length == 1){
                checkLetter(guess.toLowerCase());
            }else{
                console.log("please enter a letter");
            }
            document.getElementById("input").value='';
        };
        chances -=1;
    }
    
}

function checkLetter(guess){
   var letterInWord = false;
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

function checkWord(guess){
    if(guess == word){
        document.getElementById('blanks').innerHTML = word;
    }else{
        wrongGuess();
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
    }
    
}

function rightGuess(){
    for(var i = 0;i<blanks.length;i++){
        if(letters[i] === guess){
            blanks[i] = guess;
        }
    }
    document.getElementById('blanks').innerHTML = blanks.join(' ');
}

function win(){

}

function lose(){

}

//gives choice to choose catgeory
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
