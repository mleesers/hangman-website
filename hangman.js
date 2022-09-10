// declaring global variables
var word, letters, blanks;



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

//where actual gameplay happens
function game(letters,blanks, word){
    var chances = 9;
    var used = [1,2,3];
    document.getElementById('container').style.display = 'none';
    document.getElementById('wordBlank').style.display = 'block';
    document.getElementById('mainScreen').style.display = 'block';
    
    while(chances > 0){
        document.getElementById('lettersUsed').innerHTML = "Letters Used: " + used;
        document.getElementById('chances').innerHTML = "Chances " + chances;
        if (blanks == letters){
            print("Congrats! You won");
            end();
        }
        if(choice == 'l'){
            var check = 0;
            var letterChoice =console.log("what letter would you like to choose?:");
            letterInWord = false;
            for(var i = 0; i < letters.length; i++){
                if(letters[i] == letterChoice){
                    letterInWord == true;
                }
            }
            if(letterChoice in used){
                console.log("letter already chosen");
            }
            else if(letterInWord = false){
                chances -= 1;
                used.push(letterChoice);
                if(chances > 0){
                    console.log("incorrect!, You have " + chances + "chances remaining");
                }
                else{
                    console.log("you're out of chances");
                    end();
                }
            }
            else if(letterInWord == true){
                used.push(letterChoice);
                for(var i = 0; i < blanks.length; i++){
                    blanks[i] = letterChoice;
                }
                console.log("Correct!");
            }
        }
    }
}
function end(){
    console.log("you have lost")
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
