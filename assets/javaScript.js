var juice = 'smoothie';
console.log(juice);

/*var favJuice = prompt('what is your favorite juice?');

document.getElementById('span').innerHTML = favJuice;

function greetings(){

    var promptQtn = prompt('hey what says the time');
    result = 'Dude the time says ' + promptQtn;
   
    return result;
}

console.log (greetings());*/

let word = 'abracatabra';
let word2 = ['boy, girl, man, woman, child'];
let fruit = ['mangoes', 'guava', 'banana', 'orange', 'apple', 'cashew'];

let mainArray = word2.concat(fruit);
console.log(mainArray);

console.log (word.slice (3, 6));
console.log(word.split(''));
console.log(mainArray.slice(2, 4));
console.log(mainArray.sort()); //orr
console.log(mainArray.reverse());

// console.log(word2.split(','));
// console.log(fruit.pop()); //displays only the last word
// console.log(fruit.pop(), fruit); //removes the last word from the array and displays the rest
// console.log(fruit.push('berries'), fruit); // adds berries to the array
// console.log(fruit.shift(), fruit); //removes the first element from the array
// console.log(fruit.unshift('anoda fruit'),fruit); //add a first element to the array


let emptyArray = [];
for (let i = 0; i <= 10; i++){
    emptyArray.push(i);
}
console.log(emptyArray); // adds 0 to 10 nos to the array

// this is an object
let student = {
    name: 'Ade', 
    age: 12, 
    health: 'sick', 
    status: 'single', 
    studentInfo: function() {return this.name + '\n' + this.status + '\n' + this.age;}
    // '\n\' is for new line..
};
console.log(student.studentInfo());

//using switch
function weekDays (){

    var checkPrompt = prompt('what number from 0 to 6 is it in the weekdays');
    
    let day;

    switch(checkPrompt){
        case '0':
            day = 'Sunday';
            break;
        case '1':
            day = 'Monday';
            break;
        case '2':
            day = 'Tuesday';
            break;
        case '3':
            day = 'Wednesday';
            break;
        case '4':
            day = 'Thursday';
            break;
        case '5':
            day = 'Friday';
            break;
        case '6':
            day = 'Saturday';
            break;
        default: 
            day = 'not correct';
    }
    return day;
}

let msg = 'The day is ';
console.log(msg + weekDays());


