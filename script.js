// Declare global variables

// Assign variables for score blocks
let scoreEach = document.querySelectorAll(".score")

// Assign variables for each die element
const allDice = document.querySelectorAll(".dice")

// Assign potential die face options
const dieOptions = [1, 2, 3, 4, 5, 6]

// Assign variables to each button
const scoreButtons = document.querySelectorAll(".score-button")

let scoreSections = document.querySelectorAll(".score")

const holdButtons = document.querySelectorAll(".hold")

const rollButton = document.querySelector("#roll")

const resetButton = document.querySelector("#reset-game")

// Assign boolean to hold buttons
let holdOne = false
let holdTwo = false
let holdThree = false
let holdFour = false
let holdFive = false

// Assign inital value to the roll number
let rollNumber = 0

const rollDice = () => {
  if (holdOne = true) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo = true) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdThree = true) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdFour = true) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdFive = true) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdTwo === true) {
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdThree === true) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdFour === true) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdFive === true) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo === true && holdThree === true) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo === true && holdFour === true) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo === true && holdFive === true) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdThree === true && holdFour === true) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdThree === true && holdFive === true) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdFour === true && holdFive === true) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdTwo === true && holdThree === true) {
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdTwo === true && holdFour === true) {
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdTwo === true && holdFive === true) {
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo === true && holdThree === true && holdFour === true) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo === true && holdThree === true && holdFive === true) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdThree === true && holdFour === true && holdFive === true) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdFour === true && holdFive === true) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo === true && holdFour === true && holdFive === true) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdThree === true && holdFive === true) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdThree === true && holdFour === true) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdTwo === true && holdThree === true && holdFour === true) {
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo === true && holdThree === true && holdFour === true && holdFive === true) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdThree === true && holdFour === true && holdFive === true) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdTwo === true && holdFour === true && holdFive === true) {
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdTwo === true && holdThree === true && holdFive === true) {
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdTwo === true && holdThree === true && holdFour === true && holdFive === true) {
    allDice[0].innerHTML = allDice[0].innerHTML
    allDice[1].innerHTML = allDice[1].innerHTML
    allDice[2].innerHTML = allDice[2].innerHTML
    allDice[3].innerHTML = allDice[3].innerHTML
    allDice[4].innerHTML = allDice[4].innerHTML
    alert("Are you sure you want to use a roll while holding all dice?")
  } else {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  }
}

  // dieOption[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  // dieOption[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  // dieOption[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  // dieOption[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  // dieOption[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1

// Add event listener to each button
scoreButtons[0].addEventListener("click", () =>{})
scoreButtons[1].addEventListener("click", () =>{})
scoreButtons[2].addEventListener("click", () =>{})
scoreButtons[3].addEventListener("click", () =>{})
scoreButtons[4].addEventListener("click", () =>{})
scoreButtons[5].addEventListener("click", () =>{})
scoreButtons[6].addEventListener("click", () =>{})
scoreButtons[7].addEventListener("click", () =>{})
scoreButtons[8].addEventListener("click", () =>{})
scoreButtons[9].addEventListener("click", () =>{})
scoreButtons[10].addEventListener("click", () =>{})
scoreButtons[11].addEventListener("click", () =>{})
scoreButtons[12].addEventListener("click", () =>{})
holdButtons[0].addEventListener("click", () => {
    holdOne = !holdOne
  })
holdButtons[1].addEventListener("click", () => {
  holdTwo = !holdTwo
})
holdButtons[2].addEventListener("click", () => {
  holdThree = !holdThree
})
holdButtons[3].addEventListener("click", () => {
  holdFour = !holdFour
})
holdButtons[4].addEventListener("click", () => {
  holdFive = !holdFive
})
rollButton.addEventListener("click", () => {
  rollDice()
})
console.log(rollButton)
// resetGame.addEventListener("click", () =>{})