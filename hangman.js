// declaring global variables
var word, letters, blanks, guess;
var chances = 9;
picCounter = 1;



// function chooses word from pokemon list
function pokemon(){
    var pokemons = ["pikachu","gengar","bulbasaur","chimchar","charmander","squirtle","eevee","magikarp","dratini","gardevoir"];
    word = pokemons[Math.floor(Math.random()*pokemons.length)];
    console.log("you chose pokemon");
    console.log(word);
    blankWord(word);
    return;
}


// fcuntion chooses word from mortal characters list
function mortal(){
    var mortalCharacters = ["mileena","reptile","johnny cage","scorpion","subzero","raiden","kitana","baraka","shinnok","takeda"];
    word = mortalCharacters[Math.floor(Math.random()*mortalCharacters.length)];
    console.log("you chose mortal");
    console.log(word);
    blankWord(word);
    return;
}



// function horror chooses word from horror list
function horror(){
    var horrorCharacters = ["freddie","jason","michael myers","pinhead","ghostface","chucky","hannibal","leatherface","jigsaw","slender man"];
    word = horrorCharacters[Math.floor(Math.random()*horrorCharacters.length)];
    blankWord(word);
    return;
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
function gamePlay(){
    console.log(word);
}
function main(){
    console.log(blanks, letters);
    //change display
    document.getElementById('container').style.display = 'none';
    document.getElementById('wordBlank').style.display = 'block';
    document.getElementById('mainScreen').style.display = 'block';
    //while loop 
    while(chances > 0){
        document.getElementById("submit").onclick = function(){
            guess = document.getElementById("input").value;
            if(guess.length > 1){
                checkWord(guess);
            }else if(guess.length == 1){
                checkLetter(guess);
            }else{
                console.log("please enter a letter");
            }
        };
        chances -=1;
    }
    
}

function checkLetter(guess){
    console.log(guess + word + " letter");
}

function checkWord(guess){
    console.log(guess + word + " word");
}

function wrongGuess(guess){

}

function rightGuess(guess,blanks, letters){

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
