// declaring global variables
var word, letters, blanks, chances;



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
    console.log("you chose horror");
    console.log(word);
    blankWord(word);
    return;
}


// function turns word into blank
function blankWord(word){
    letters = [];
    blanks = [];
    for(var i = 0; i < word.length; i++){
        letters.push(word[i]);
        blanks.push('_')
    }
    console.log(blanks, letters)
    game(letters,blanks,word)

}

function main(){
    //change display
    //while loop 
    //take guess
    //call checkLetter(or word based on length)
}

function checkLetter(letterGuess,word){

}

function checkWord(wordGuess){

}

function wrongGuess(letterGuess){

}

function rightGuess(letterGuess,blanks, letters){

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
