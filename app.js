/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
// const words = [{words: 'Tower', char:5} ,
// {words: 'Terror', char:6}
// ]
const words = ['T','O','W','E','R']
console.log(words)

let wordChosen
/*------------------------ Cached Element References ------------------------*/
const letterElement = document.querySelector('#Letters-Rows')
const btnElement = document.querySelectorAll('.Letters')
console.log(btnElement)
/*-------------------------------- Functions --------------------------------*/
const wordRandomizer = (words) => {
num = Math.floor(Math.random()* 2)
wordsRandom = words[num]
}
console.log()

const clickedBtn = (event) => {
    if (event.target.classlist = 'Letters') {
console.log('Am I clicking?')
 } 
}

// word.words.forEach(word() => {
//     (if word.char === ))
// return  document.createElement('input') {
//     input.textContent = '_'
    
// }

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
