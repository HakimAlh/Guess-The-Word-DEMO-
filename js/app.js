/*-------------------------------- Constants --------------------------------*/
const words = ['TOWER' ,'TERROR','FIGHTING','GAMING','STICKMAN','PARALLELOGRAM','SKIBIDI','AMAZING']
/*-------------------------------- Variables --------------------------------*/


console.log(words.length)
let chosenWord = ''
let playerTried = 0;
let currentChoice = ''
let indexWord = ''
let convertWord = ''
let chars = []
let dashElement = ''
let wrongChoice = ''
let loseCount = 0;
let winCount = 0;
/*------------------------ Cached Element References ------------------------*/
const letterElement = document.querySelector('.Letters-Rows')
const btnElement = document.querySelectorAll('.Letters')
const choiceElement = document.querySelector('#Choice')
const dashes = document.querySelector('.Word')

/*-------------------------------- Functions --------------------------------*/
const wordRandomizer = () => {
    let index = Math.floor(Math.random() * words.length)
    console.log(index)
    chosenWord = words[index]
    console.log(chosenWord)
    chars = chosenWord.split('');
    console.log(chars) 
    
    chars.forEach((character) => {
        // console.log(character)
        dashElement = document.createElement('h3')
        dashElement.classList.add('dash')
        dashElement.textContent = "_"
        dashes.appendChild(dashElement)
        // console.log(dashes)
        'h3' === convertWord
        // console.log(convertWord)
    })
}
   


const clickedBtn = (event) => {
    currentChoice = event.target.id 
    console.log(currentChoice)
    const dashes = document.querySelectorAll('.dash')
    document.getElementById(currentChoice).disabled = true;
    chars.forEach((char, idx)=> {
    
        if(currentChoice === char){
            console.log(idx)
            dashes[idx].textContent = currentChoice
            winCount++
            if (winCount == chars.length){
                
                document.getElementById('Win').hidden = false;
                document.getElementById('Reset').hidden = false;
            }
        }
    })
    

    if(!chosenWord.includes(currentChoice)){
        wrongChoice = document.createElement('div')
        wrongChoice.textContent = currentChoice
        console.log('WRONG:' , wrongChoice)
        loseCount++
        console.log(loseCount)
        if(loseCount == 5){
        document.getElementById('Lose').hidden = false;
        document.getElementById('Reset').hidden = false;

        }
    }
 } 


function init(){
    wordRandomizer() 
}

init()

/*----------------------------- Event Listeners -----------------------------*/
letterElement.addEventListener('click', clickedBtn)

/*----------------------------- SCRAPPED CODE -----------------------------*/

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

    // const test = ()=> {
    //     chars.forEach((character) => {
    //         console.log('salman')
    //     })
    // }
    // test()
        
        
        // document.createElement('h3')
        // return dashElement.textContent = 'A'   
            
           
            //     });
               
            // console.log(dash)
       
           
        // console.log(dashElement)
    
//  for (let i =0; i < 9; i++){
//     if (chosenWord > 10) break;

//  }
//  console.log(i)


// word.words.forEach(word() => {
//     (if word.char === ))
// return  document.createElement('input') {
//     input.textContent = '_'
    
// }
// if (currentChoice === chars)
//     msg = 'am i working?'
// console.log(msg)
// const words = [{words: 'Tower', char:5} ,
// {words: 'Terror', char:6}
// ]
    //  const buttonA = document.getElementById("A");{
        //     buttonA.disabled = true;
        //  }
            // const buttonB = document.getElementById("B");
            // buttonB.disabled = true;
//     chosenWord.forEach(() => {
    // const wordElement = document.createElement('p')
    // wordElement.textContent = '_'
    //         console.log(wordElement)});
        
    
    // for each character in the chars array i want to create an element which has a content of "_" and then I want to append that element to the wordInput div
    // for the words that are chosen, if the letter isn't the same as the chosenWord then 

// priority 1: Needed to see if the clickedLetter is in the character array (chars) if it is not in (chars) number will be added 1. If it is 5, then const lose, createelement 'div' and textcontent of the const to You lose 