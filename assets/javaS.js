//chanllenge 1: Age In Days
function ageInDays(){

    let birthYear = prompt('What is your birth year?');

    let ageDays = (2022 - birthYear) * 365;
    let h1 = document.createElement('h2');
    let flexResult = document.createTextNode('You are ' + ageDays + ' days old...');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(flexResult);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

//chanllenge 2: Cat Generator
function catGenerator(){
    let image = document.createElement('img');
    let imgDisplay = document.getElementById('flex-cat-gen');
    image.src = "https://cdn2.thecatapi.com/images/4bl.gif";
    imgDisplay.appendChild(image);
}
function catReset(){
    location.reload(); // reloads the whole page/window
}

//chanllenge 3: rps game
function rpsGame(yourChoice){

    console.log(yourChoice);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randRpsInt());
    console.log('computer choice: ', botChoice);

    results = decideWinner(humanChoice, botChoice); //[0, 1] human lost | bot won
    console.log(results);

    message = finalMessage(results); // {message: 'You Won' color: green}
    console.log(message);
    rpsFrontEnd (yourChoice.id, botChoice, message);
}

function randRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return['rock', 'paper', 'scissors'] [number];
}

function decideWinner(yourChoice, computerChoice){
    let rpsBackEnd = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };
 
    let yourScore = rpsBackEnd[yourChoice][computerChoice];
    let computerScore = rpsBackEnd[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return{'message': 'You Lost ):', 'color': 'red'};
    }else if(yourScore === 0.5){
        return{'message': 'Its a Tie', 'color': 'blue'};
    }else{
        return{'message': 'You Won (:', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImgChoice, botImgChoice, finalMessage){
    let imgDatabase = {
        'rock': document.getElementById('rock').src="../images/stone_rock.jpg",
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src'" + imgDatabase[humanImgChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src'" + imgDatabase[botImgChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-3').appendChild(humanDiv);
    document.getElementById('flex-box-3').appendChild(messageDiv);
    document.getElementById('flex-box-3').appendChild(botDiv);
}

// Chanllenge 4 Button Color Change

let allButtons = document.getElementsByTagName('button');

let copyAllButtons = [];
for(let i = 0; i < allButtons.length; i++){
    copyAllButtons.push(allButtons[i].classList[1]);
}

function buttonChangeColor(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonRed();
    }else if(buttonThingy.value === 'green'){
        buttonGreen();
    }else if(buttonThingy.value === 'reset'){
        buttonReset();
    }else if(buttonThingy.value === 'random'){
        buttonRandom();
    }
}

function buttonRed(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonReset(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandom (){
    let ourChoices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for(let i = 0; i < allButtons.length; i++){
        let radomColor = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(ourChoices[radomColor]);
    }
}
