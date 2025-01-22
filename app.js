/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
// const words = [{words: 'Tower', char:5} ,
// {words: 'Terror', char:6}
// ]
const words = ['TOWER' ,'TERROR','FIGHTING']
console.log(words.length)
let chosenWord = ''
let playerTried = 0;
let currentChoice = ''
let dashSaved = ''
// const wordCount = ''
// let playerTries 
/*------------------------ Cached Element References ------------------------*/
const letterElement = document.querySelector('.Letters-Rows')
const btnElement = document.querySelectorAll('.Letters')
const choiceElement = document.querySelector('#Choice')
const dashes = document.querySelector('.Word')
// const answerLetter = document.querySelector
// console.log(wordInput)
// console.log(choiceElement)
/*-------------------------------- Functions --------------------------------*/
const wordRandomizer = () => {
    let index = Math.floor(Math.random() * words.length)
    console.log(index)
    chosenWord = words[index]
    console.log(chosenWord)
    const chars = chosenWord.split('');
    console.log(chars[index]) 
    
    //     chosenWord.forEach(() => {
    // const wordElement = document.createElement('p')
    // wordElement.textContent = '_'
    //         console.log(wordElement)});
        
    
    // for each character in the chars array i want to create an element which has a content of "_" and then I want to append that element to the wordInput div
    chars.forEach((character) => {
        // console.log(character)
        const dashElement = document.createElement('h3')
        dashElement.textContent = "_"
        dashes.appendChild(dashElement)
            if (currentChoice === chars[index]);
        
        // document.createElement('h3')
        // return dashElement.textContent = `${chars[index]}`   
            
           
            //     });
               
            // console.log(dash)
       
           
        // console.log(dashElement)
    
    })
}

// for the words that are chosen, if the letter isn't the same as the chosenWord then 

// priority 1: Needed to see if the clickedLetter is in the character array (chars) if it is not in (chars) number will be added 1. If it is 5, then const lose, createelement 'div' and textcontent of the const to You lose 


const clickedBtn = (event) => {
    currentChoice = event.target.id 
    console.log(currentChoice)
 } 

//  for (let i =0; i < 9; i++){
//     if (chosenWord > 10) break;

//  }
//  console.log(i)


// word.words.forEach(word() => {
//     (if word.char === ))
// return  document.createElement('input') {
//     input.textContent = '_'
    
// }
// fn to start the game which is the init (intialization) function
function init(){
    wordRandomizer() //Intitalizes the wordRandomizer Function
    // playerTries()
}

init()
/*----------------------------- Event Listeners -----------------------------*/
letterElement.addEventListener('click', clickedBtn)

/*----------------------------- SCRAPPED CODE -----------------------------*/
// const words = ['Tower','Drawing','Terror','Block']
// const words = [{Word:'Tower' , letter: T: ,'T' }] 
// function letterElement (){
//     if letterElement === 
//     }
// function words(){
    
// }

// function btnFunction () {
//     if (btnElement =
//     return inputBtn.textContent = 'A'
// }
// function btnFunction = () => {
// (btnElement = 'click')
// if (btnElement === word1Element)
// return 


// }

// let words = []

// words = Math.floor(Math.random())
// words.ForEach(word) => {
//     const inputElement = document.createElement('input'); {
// inputElement.textContent = '_'
//     } }



// function playerTries() { //Function for the number of tries the player makes
// if (playerTried != wordRandomizer)
//     document.createElement = 'h1'
//    h1.textContent = "hello"
// console.log(`${clickedBtn}`)
// }
// Set = 0;
// if 5 
// return loss  
// = document.createElement = 'Choices'