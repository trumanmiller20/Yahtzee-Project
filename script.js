// Declare global variables

// Assign variables for score blocks
let scoreEach = document.querySelectorAll(".score")

// Assign variables for each die element
const allDice = document.querySelectorAll(".dice")

// Assign potential die face options
const dieOptions = [1, 2, 3, 4, 5, 6]

// Assign buttons to DOM queries
const scoreButtons = document.querySelectorAll(".score-button")

let scoreSections = document.querySelectorAll(".score")

const holdButtons = document.querySelectorAll(".hold")

const rollButton = document.querySelector("#roll")

const resetButton = document.querySelector("#reset-game")

// Assign each score block to DOM for use in game logic
let aces = scoreSections[0]
let twos = scoreSections[1]
let threes = scoreSections[2]
let fours = scoreSections[3]
let fives = scoreSections[4]
let sixes = scoreSections[5]
let upper = scoreSections[6]
let threeKind = scoreSections[7]
let fourKind = scoreSections[8]
let fullHouse = scoreSections[9]
let smStraight = scoreSections[10]
let lgStraight = scoreSections[11]
let chance = scoreSections[12]
let yahtzee = scoreSections[13]
let lower = scoreSections[14]
let bonus = scoreSections[15]
let grandTotal = scoreSections[16]

// Assign boolean to hold buttons
let holdOne = false
let holdTwo = false
let holdThree = false
let holdFour = false
let holdFive = false

// Assign inital value to the roll number and disable all scoring options
let roll = 0

// Function to disable all score buttons
const disableScoring = () => {
  scoreButtons.forEach((button) => {
  button.disabled = true
})
}

// Function to enable all score buttons
const enableScoring = () => {
  scoreButtons.forEach((button) => {
  button.disabled = false
})
}

// Function to enable all score buttons
const disableHold = () => {
  holdButtons.forEach((button) => {
  button.disabled = true
})
}

// Function to enable all hold buttons
const enableHold = () => {
  holdButtons.forEach((button) => {
  button.disabled = false
})
}

// Function to total threeKind and fourKind scores
const kindTotal = () => {
  let kind = 0
  allDice.forEach((die) => {
    kind += parseInt(die.innerText)
  })
  console.log(kind)
  return kind
}

// Disable all hold and score buttons on site load
disableScoring()
disableHold()

// Function to establish allotted rolls (3), and determine when scoring and holding are enabled based on roll value
let rollNumber = () => {
  if (roll === 2) {
    rollButton.disabled = true
    disableHold()
  } else {
    roll ++
    enableScoring()
    enableHold()
    }
  }


// Roll dice function to randomize non-held dice
const rollDice = () => {
  if (holdOne === true && holdTwo === false && holdThree === false && holdFour === false && holdFive === false) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo === true && holdOne === false && holdThree === false && holdFour === false && holdFive === false) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdThree === true && holdTwo === false && holdOne === false && holdFour === false && holdFive === false) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdFour === true && holdTwo === false && holdThree === false && holdOne === false && holdFive === false) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdFive === true && holdTwo === false && holdThree === false && holdFour === false && holdOne === false) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdTwo === true && holdThree === false && holdFour === false && holdFive === false) {
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdThree === true && holdTwo === false && holdFour === false && holdFive === false) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdFour === true && holdTwo === false && holdThree === false && holdFive === false) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdFive === true && holdTwo === false && holdThree === false && holdFour === false) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo === true && holdThree === true && holdOne === false && holdFour === false && holdFive === false) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo === true && holdFour === true && holdOne === false && holdThree === false && holdFive === false) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo === true && holdFive === true && holdOne === false && holdThree === false && holdFour === false) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdThree === true && holdFour === true && holdOne === false && holdFour === false && holdFive === false) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdThree === true && holdFive === true && holdOne === false && holdTwo === false && holdFour === false) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdFour === true && holdFive === true && holdOne === false && holdTwo === false && holdThree === false) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdTwo === true && holdThree === true && holdFour === false && holdFive === false) {
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdTwo === true && holdFour === true && holdThree === false && holdFive === false) {
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdTwo === true && holdFive === true && holdThree === false && holdFour === false) {
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo === true && holdThree === true && holdFour === true && holdOne === false && holdFive === false) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo === true && holdThree === true && holdFive === true && holdOne === false && holdFour === false) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdThree === true && holdFour === true && holdFive === true && holdOne === false && holdTwo === false) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdFour === true && holdFive === true && holdTwo === false && holdThree === false) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo === true && holdFour === true && holdFive === true && holdOne === false && holdThree === false) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdThree === true && holdFive === true && holdTwo === false && holdFour === false) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[3].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdThree === true && holdFour === true && holdTwo === false && holdFive === false) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdTwo === true && holdThree === true && holdFour === true && holdFive === false) {
    allDice[4].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdTwo === true && holdThree === true && holdFour === true && holdFive === true && holdOne === false) {
    allDice[0].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdThree === true && holdFour === true && holdFive === true && holdTwo === false) {
    allDice[1].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdTwo === true && holdFour === true && holdFive === true && holdThree === false) {
    allDice[2].innerHTML = Math.floor(Math.random() * dieOptions.length) + 1
  } else if (holdOne === true && holdTwo === true && holdThree === true && holdFive === true && holdFour === false) {
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

// Add event listener to each score button and nested functions to allow for dynamic scoring

scoreButtons[0].addEventListener("click", () => {
  scoreButtons[0].disabled = true
  if (allDice[0].innerHTML === "1" && allDice[1].innerHTML !== "1" && allDice[2].innerHTML !== "1" && allDice[3].innerHTML !== "1" & allDice[4].innerHTML !== "1") {
    aces.innerHTML = "1"
  } else if (allDice[1].innerHTML === "1" && allDice[0].innerHTML !== "1" && allDice[2].innerHTML !== "1" && allDice[3].innerHTML !== "1" & allDice[4].innerHTML !== "1") {
    aces.innerHTML = "1"
  } else if (allDice[2].innerHTML === "1" && allDice[0].innerHTML !== "1" && allDice[1].innerHTML !== "1" && allDice[3].innerHTML !== "1" & allDice[4].innerHTML !== "1") {
    aces.innerHTML = "1"
  } else if (allDice[3].innerHTML === "1" && allDice[0].innerHTML !== "1" && allDice[1].innerHTML !== "1" && allDice[2].innerHTML !== "1" & allDice[4].innerHTML !== "1") {
    aces.innerHTML = "1"
  } else if (allDice[4].innerHTML === "1" && allDice[0].innerHTML !== "1" && allDice[1].innerHTML !== "1" && allDice[2].innerHTML !== "1" & allDice[3].innerHTML !== "1") {
    aces.innerHTML = "1"
  } else if (allDice[0].innerHTML === "1" && allDice[1].innerHTML === "1" && allDice[2].innerHTML !== "1" && allDice[3].innerHTML !== "1" & allDice[4].innerHTML !== "1") {
    aces.innerHTML = "2"
  } else if (allDice[0].innerHTML === "1" && allDice[2].innerHTML === "1" && allDice[1].innerHTML !== "1" && allDice[3].innerHTML !== "1" & allDice[4].innerHTML !== "1") {
    aces.innerHTML = "2"
  } else if (allDice[0].innerHTML === "1" && allDice[3].innerHTML === "1" && allDice[1].innerHTML !== "1" && allDice[2].innerHTML !== "1" & allDice[4].innerHTML !== "1") {
    aces.innerHTML = "2"
  } else if (allDice[0].innerHTML === "1" && allDice[4].innerHTML === "1" && allDice[1].innerHTML !== "1" && allDice[2].innerHTML !== "1" & allDice[3].innerHTML !== "1") {
    aces.innerHTML = "2"
  } else if (allDice[1].innerHTML === "1" && allDice[2].innerHTML === "1" && allDice[0].innerHTML !== "1" && allDice[3].innerHTML !== "1" & allDice[4].innerHTML !== "1") {
    aces.innerHTML = "2"
  } else if (allDice[1].innerHTML === "1" && allDice[3].innerHTML === "1" && allDice[0].innerHTML !== "1" && allDice[2].innerHTML !== "1" & allDice[4].innerHTML !== "1") {
    aces.innerHTML = "2"
  } else if (allDice[1].innerHTML === "1" && allDice[4].innerHTML === "1" && allDice[0].innerHTML !== "1" && allDice[2].innerHTML !== "1" & allDice[3].innerHTML !== "1") {
    aces.innerHTML = "2"
  } else if (allDice[2].innerHTML === "1" && allDice[3].innerHTML === "1" && allDice[0].innerHTML !== "1" && allDice[1].innerHTML !== "1" & allDice[4].innerHTML !== "1") {
    aces.innerHTML = "2"
  } else if (allDice[2].innerHTML === "1" && allDice[4].innerHTML === "1" && allDice[0].innerHTML !== "1" && allDice[1].innerHTML !== "1" & allDice[3].innerHTML !== "1") {
    aces.innerHTML = "2"
  } else if (allDice[3].innerHTML === "1" && allDice[4].innerHTML === "1" && allDice[0].innerHTML !== "1" && allDice[1].innerHTML !== "1" & allDice[2].innerHTML !== "1") {
    aces.innerHTML = "2"
  } else if (allDice[0].innerHTML === "1" && allDice[1].innerHTML === "1" && allDice[2].innerHTML === "1" && allDice[3].innerHTML !== "1" & allDice[4].innerHTML !== "1") {
    aces.innerHTML = "3"
  } else if (allDice[0].innerHTML === "1" && allDice[1].innerHTML === "1" && allDice[3].innerHTML === "1" && allDice[2].innerHTML !== "1" & allDice[4].innerHTML !== "1") {
    aces.innerHTML = "3"
  } else if (allDice[0].innerHTML === "1" && allDice[1].innerHTML === "1" && allDice[4].innerHTML === "1" && allDice[2].innerHTML !== "1" & allDice[3].innerHTML !== "1") {
    aces.innerHTML = "3"
  } else if (allDice[1].innerHTML === "1" && allDice[2].innerHTML === "1" && allDice[3].innerHTML === "1" && allDice[0].innerHTML !== "1" & allDice[4].innerHTML !== "1") {
    aces.innerHTML = "3"
  } else if (allDice[1].innerHTML === "1" && allDice[2].innerHTML === "1" && allDice[4].innerHTML === "1" && allDice[0].innerHTML !== "1" & allDice[3].innerHTML !== "1") {
    aces.innerHTML = "3"
  } else if (allDice[2].innerHTML === "1" && allDice[3].innerHTML === "1" && allDice[4].innerHTML === "1" && allDice[0].innerHTML !== "1" & allDice[1].innerHTML !== "1") {
    aces.innerHTML = "3"
  } else if (allDice[0].innerHTML === "1" && allDice[3].innerHTML === "1" && allDice[4].innerHTML === "1" && allDice[1].innerHTML !== "1" & allDice[2].innerHTML !== "1") {
    aces.innerHTML = "3"
  } else if (allDice[1].innerHTML === "1" && allDice[3].innerHTML === "1" && allDice[4].innerHTML === "1" && allDice[0].innerHTML !== "1" & allDice[2].innerHTML !== "1") {
    aces.innerHTML = "3"
  } else if (allDice[0].innerHTML === "1" && allDice[2].innerHTML === "1" && allDice[4].innerHTML === "1" && allDice[1].innerHTML !== "1" & allDice[3].innerHTML !== "1") {
    aces.innerHTML = "3"
  } else if (allDice[0].innerHTML === "1" && allDice[2].innerHTML === "1" && allDice[3].innerHTML === "1" && allDice[1].innerHTML !== "1" & allDice[4].innerHTML !== "1") {
    aces.innerHTML = "3"
  } else if (allDice[0].innerHTML === "1" && allDice[1].innerHTML === "1" && allDice[2].innerHTML === "1" && allDice[3].innerHTML === "1" & allDice[4].innerHTML !== "1") {
    aces.innerHTML = "4"
  } else if (allDice[1].innerHTML === "1" && allDice[2].innerHTML === "1" && allDice[3].innerHTML === "1" && allDice[4].innerHTML === "1" & allDice[0].innerHTML !== "1") {
    aces.innerHTML = "4"
  } else if (allDice[0].innerHTML === "1" && allDice[2].innerHTML === "1" && allDice[3].innerHTML === "1" && allDice[4].innerHTML === "1" & allDice[1].innerHTML !== "1") {
    aces.innerHTML = "4"
  } else if (allDice[0].innerHTML === "1" && allDice[1].innerHTML === "1" && allDice[3].innerHTML === "1" && allDice[4].innerHTML === "1" & allDice[2].innerHTML !== "1") {
    aces.innerHTML = "4"
  } else if (allDice[0].innerHTML === "1" && allDice[1].innerHTML === "1" && allDice[2].innerHTML === "1" && allDice[4].innerHTML === "1" & allDice[3].innerHTML !== "1") {
    aces.innerHTML = "4"
  } else if (allDice[0].innerHTML === "1" && allDice[1].innerHTML === "1" && allDice[2].innerHTML === "1" && allDice[3].innerHTML === "1" & allDice[4].innerHTML === "1") {
    aces.innerHTML = "5"
  } else {
    aces.innerHTML = "0"
  }                  
})

scoreButtons[1].addEventListener("click", () => {
  scoreButtons[1].disabled = true
  if (allDice[0].innerHTML === "2" && allDice[1].innerHTML !== "2" && allDice[2].innerHTML !== "2" && allDice[3].innerHTML !== "2" & allDice[4].innerHTML !== "2") {
    twos.innerHTML = "2"
  } else if (allDice[1].innerHTML === "2" && allDice[0].innerHTML !== "2" && allDice[2].innerHTML !== "2" && allDice[3].innerHTML !== "2" & allDice[4].innerHTML !== "2") {
    twos.innerHTML = "2"
  } else if (allDice[2].innerHTML === "2" && allDice[0].innerHTML !== "2" && allDice[1].innerHTML !== "2" && allDice[3].innerHTML !== "2" & allDice[4].innerHTML !== "2") {
    twos.innerHTML = "2"
  } else if (allDice[3].innerHTML === "2" && allDice[0].innerHTML !== "2" && allDice[1].innerHTML !== "2" && allDice[2].innerHTML !== "2" & allDice[4].innerHTML !== "2") {
    twos.innerHTML = "2"
  } else if (allDice[4].innerHTML === "2" && allDice[0].innerHTML !== "2" && allDice[1].innerHTML !== "2" && allDice[2].innerHTML !== "2" & allDice[3].innerHTML !== "2") {
    twos.innerHTML = "2"
  } else if (allDice[0].innerHTML === "2" && allDice[1].innerHTML === "2" && allDice[2].innerHTML !== "2" && allDice[3].innerHTML !== "2" & allDice[4].innerHTML !== "2") {
    twos.innerHTML = "4"
  } else if (allDice[0].innerHTML === "2" && allDice[2].innerHTML === "2" && allDice[1].innerHTML !== "2" && allDice[3].innerHTML !== "2" & allDice[4].innerHTML !== "2") {
    twos.innerHTML = "4"
  } else if (allDice[0].innerHTML === "2" && allDice[3].innerHTML === "2" && allDice[1].innerHTML !== "2" && allDice[2].innerHTML !== "2" & allDice[4].innerHTML !== "2") {
    twos.innerHTML = "4"
  } else if (allDice[0].innerHTML === "2" && allDice[4].innerHTML === "2" && allDice[1].innerHTML !== "2" && allDice[2].innerHTML !== "2" & allDice[3].innerHTML !== "2") {
    twos.innerHTML = "4"
  } else if (allDice[1].innerHTML === "2" && allDice[2].innerHTML === "2" && allDice[0].innerHTML !== "2" && allDice[3].innerHTML !== "2" & allDice[4].innerHTML !== "2") {
    twos.innerHTML = "4"
  } else if (allDice[1].innerHTML === "2" && allDice[3].innerHTML === "2" && allDice[0].innerHTML !== "2" && allDice[2].innerHTML !== "2" & allDice[4].innerHTML !== "2") {
    twos.innerHTML = "4"
  } else if (allDice[1].innerHTML === "2" && allDice[4].innerHTML === "2" && allDice[0].innerHTML !== "2" && allDice[2].innerHTML !== "2" & allDice[3].innerHTML !== "2") {
    twos.innerHTML = "4"
  } else if (allDice[2].innerHTML === "2" && allDice[3].innerHTML === "2" && allDice[0].innerHTML !== "2" && allDice[1].innerHTML !== "2" & allDice[4].innerHTML !== "2") {
    twos.innerHTML = "4"
  } else if (allDice[2].innerHTML === "2" && allDice[4].innerHTML === "2" && allDice[0].innerHTML !== "2" && allDice[1].innerHTML !== "2" & allDice[3].innerHTML !== "2") {
    twos.innerHTML = "4"
  } else if (allDice[3].innerHTML === "2" && allDice[4].innerHTML === "2" && allDice[0].innerHTML !== "2" && allDice[1].innerHTML !== "2" & allDice[2].innerHTML !== "2") {
    twos.innerHTML = "4"
  } else if (allDice[0].innerHTML === "2" && allDice[1].innerHTML === "2" && allDice[2].innerHTML === "2" && allDice[3].innerHTML !== "2" & allDice[4].innerHTML !== "2") {
    twos.innerHTML = "6"
  } else if (allDice[0].innerHTML === "2" && allDice[1].innerHTML === "2" && allDice[3].innerHTML === "2" && allDice[2].innerHTML !== "2" & allDice[4].innerHTML !== "2") {
    twos.innerHTML = "6"
  } else if (allDice[0].innerHTML === "2" && allDice[1].innerHTML === "2" && allDice[4].innerHTML === "2" && allDice[2].innerHTML !== "2" & allDice[3].innerHTML !== "2") {
    twos.innerHTML = "6"
  } else if (allDice[1].innerHTML === "2" && allDice[2].innerHTML === "2" && allDice[3].innerHTML === "2" && allDice[0].innerHTML !== "2" & allDice[4].innerHTML !== "2") {
    twos.innerHTML = "6"
  } else if (allDice[1].innerHTML === "2" && allDice[2].innerHTML === "2" && allDice[4].innerHTML === "2" && allDice[0].innerHTML !== "2" & allDice[3].innerHTML !== "2") {
    twos.innerHTML = "6"
  } else if (allDice[2].innerHTML === "2" && allDice[3].innerHTML === "2" && allDice[4].innerHTML === "2" && allDice[0].innerHTML !== "2" & allDice[1].innerHTML !== "2") {
    twos.innerHTML = "6"
  } else if (allDice[0].innerHTML === "2" && allDice[3].innerHTML === "2" && allDice[4].innerHTML === "2" && allDice[1].innerHTML !== "2" & allDice[2].innerHTML !== "2") {
    twos.innerHTML = "6"
  } else if (allDice[1].innerHTML === "2" && allDice[3].innerHTML === "2" && allDice[4].innerHTML === "2" && allDice[0].innerHTML !== "2" & allDice[2].innerHTML !== "2") {
    twos.innerHTML = "6"
  } else if (allDice[0].innerHTML === "2" && allDice[2].innerHTML === "2" && allDice[4].innerHTML === "2" && allDice[1].innerHTML !== "2" & allDice[3].innerHTML !== "2") {
    twos.innerHTML = "6"
  } else if (allDice[0].innerHTML === "2" && allDice[2].innerHTML === "2" && allDice[3].innerHTML === "2" && allDice[1].innerHTML !== "2" & allDice[4].innerHTML !== "2") {
    twos.innerHTML = "6"
  } else if (allDice[0].innerHTML === "2" && allDice[1].innerHTML === "2" && allDice[2].innerHTML === "2" && allDice[3].innerHTML === "2" & allDice[4].innerHTML !== "2") {
    twos.innerHTML = "8"
  } else if (allDice[1].innerHTML === "2" && allDice[2].innerHTML === "2" && allDice[3].innerHTML === "2" && allDice[4].innerHTML === "2" & allDice[0].innerHTML !== "2") {
    twos.innerHTML = "8"
  } else if (allDice[0].innerHTML === "2" && allDice[2].innerHTML === "2" && allDice[3].innerHTML === "2" && allDice[4].innerHTML === "2" & allDice[1].innerHTML !== "2") {
    twos.innerHTML = "8"
  } else if (allDice[0].innerHTML === "2" && allDice[1].innerHTML === "2" && allDice[3].innerHTML === "2" && allDice[4].innerHTML === "2" & allDice[2].innerHTML !== "2") {
    twos.innerHTML = "8"
  } else if (allDice[0].innerHTML === "2" && allDice[1].innerHTML === "2" && allDice[2].innerHTML === "2" && allDice[4].innerHTML === "2" & allDice[3].innerHTML !== "2") {
    twos.innerHTML = "8"
  } else if (allDice[0].innerHTML === "2" && allDice[1].innerHTML === "2" && allDice[2].innerHTML === "2" && allDice[3].innerHTML === "2" & allDice[4].innerHTML === "2") {
    twos.innerHTML = "10"
  } else {
    twos.innerHTML = "0"
  }     
})

scoreButtons[2].addEventListener("click", () => {
  scoreButtons[2].disabled = true
    if (allDice[0].innerHTML === "3" && allDice[1].innerHTML !== "3" && allDice[2].innerHTML !== "3" && allDice[3].innerHTML !== "3" & allDice[4].innerHTML !== "3") {
    threes.innerHTML = "3"
  } else if (allDice[1].innerHTML === "3" && allDice[0].innerHTML !== "3" && allDice[2].innerHTML !== "3" && allDice[3].innerHTML !== "3" & allDice[4].innerHTML !== "3") {
    threes.innerHTML = "3"
  } else if (allDice[2].innerHTML === "3" && allDice[0].innerHTML !== "3" && allDice[1].innerHTML !== "3" && allDice[3].innerHTML !== "3" & allDice[4].innerHTML !== "3") {
    threes.innerHTML = "3"
  } else if (allDice[3].innerHTML === "3" && allDice[0].innerHTML !== "3" && allDice[1].innerHTML !== "3" && allDice[2].innerHTML !== "3" & allDice[4].innerHTML !== "3") {
    threes.innerHTML = "3"
  } else if (allDice[4].innerHTML === "3" && allDice[0].innerHTML !== "3" && allDice[1].innerHTML !== "3" && allDice[2].innerHTML !== "3" & allDice[3].innerHTML !== "3") {
    threes.innerHTML = "3"
  } else if (allDice[0].innerHTML === "3" && allDice[1].innerHTML === "3" && allDice[2].innerHTML !== "3" && allDice[3].innerHTML !== "3" & allDice[4].innerHTML !== "3") {
    threes.innerHTML = "6"
  } else if (allDice[0].innerHTML === "3" && allDice[2].innerHTML === "3" && allDice[1].innerHTML !== "3" && allDice[3].innerHTML !== "3" & allDice[4].innerHTML !== "3") {
    threes.innerHTML = "6"
  } else if (allDice[0].innerHTML === "3" && allDice[3].innerHTML === "3" && allDice[1].innerHTML !== "3" && allDice[2].innerHTML !== "3" & allDice[4].innerHTML !== "3") {
    threes.innerHTML = "6"
  } else if (allDice[0].innerHTML === "3" && allDice[4].innerHTML === "3" && allDice[1].innerHTML !== "3" && allDice[2].innerHTML !== "3" & allDice[3].innerHTML !== "3") {
    threes.innerHTML = "6"
  } else if (allDice[1].innerHTML === "3" && allDice[2].innerHTML === "3" && allDice[0].innerHTML !== "3" && allDice[3].innerHTML !== "3" & allDice[4].innerHTML !== "3") {
    threes.innerHTML = "6"
  } else if (allDice[1].innerHTML === "3" && allDice[3].innerHTML === "3" && allDice[0].innerHTML !== "3" && allDice[2].innerHTML !== "3" & allDice[4].innerHTML !== "3") {
    threes.innerHTML = "6"
  } else if (allDice[1].innerHTML === "3" && allDice[4].innerHTML === "3" && allDice[0].innerHTML !== "3" && allDice[2].innerHTML !== "3" & allDice[3].innerHTML !== "3") {
    threes.innerHTML = "6"
  } else if (allDice[2].innerHTML === "3" && allDice[3].innerHTML === "3" && allDice[0].innerHTML !== "3" && allDice[1].innerHTML !== "3" & allDice[4].innerHTML !== "3") {
    threes.innerHTML = "6"
  } else if (allDice[2].innerHTML === "3" && allDice[4].innerHTML === "3" && allDice[0].innerHTML !== "3" && allDice[1].innerHTML !== "3" & allDice[3].innerHTML !== "3") {
    threes.innerHTML = "6"
  } else if (allDice[3].innerHTML === "3" && allDice[4].innerHTML === "3" && allDice[0].innerHTML !== "3" && allDice[1].innerHTML !== "3" & allDice[2].innerHTML !== "3") {
    threes.innerHTML = "6"
  } else if (allDice[0].innerHTML === "3" && allDice[1].innerHTML === "3" && allDice[2].innerHTML === "3" && allDice[3].innerHTML !== "3" & allDice[4].innerHTML !== "3") {
    threes.innerHTML = "9"
  } else if (allDice[0].innerHTML === "3" && allDice[1].innerHTML === "3" && allDice[3].innerHTML === "3" && allDice[2].innerHTML !== "3" & allDice[4].innerHTML !== "3") {
    threes.innerHTML = "9"
  } else if (allDice[0].innerHTML === "3" && allDice[1].innerHTML === "3" && allDice[4].innerHTML === "3" && allDice[2].innerHTML !== "3" & allDice[3].innerHTML !== "3") {
    threes.innerHTML = "9"
  } else if (allDice[1].innerHTML === "3" && allDice[2].innerHTML === "3" && allDice[3].innerHTML === "3" && allDice[0].innerHTML !== "3" & allDice[4].innerHTML !== "3") {
    threes.innerHTML = "9"
  } else if (allDice[1].innerHTML === "3" && allDice[2].innerHTML === "3" && allDice[4].innerHTML === "3" && allDice[0].innerHTML !== "3" & allDice[3].innerHTML !== "3") {
    threes.innerHTML = "9"
  } else if (allDice[2].innerHTML === "3" && allDice[3].innerHTML === "3" && allDice[4].innerHTML === "3" && allDice[0].innerHTML !== "3" & allDice[1].innerHTML !== "3") {
    threes.innerHTML = "9"
  } else if (allDice[0].innerHTML === "3" && allDice[3].innerHTML === "3" && allDice[4].innerHTML === "3" && allDice[1].innerHTML !== "3" & allDice[2].innerHTML !== "3") {
    threes.innerHTML = "9"
  } else if (allDice[1].innerHTML === "3" && allDice[3].innerHTML === "3" && allDice[4].innerHTML === "3" && allDice[0].innerHTML !== "3" & allDice[2].innerHTML !== "3") {
    threes.innerHTML = "9"
  } else if (allDice[0].innerHTML === "3" && allDice[2].innerHTML === "3" && allDice[4].innerHTML === "3" && allDice[1].innerHTML !== "3" & allDice[3].innerHTML !== "3") {
    threes.innerHTML = "9"
  } else if (allDice[0].innerHTML === "3" && allDice[2].innerHTML === "3" && allDice[3].innerHTML === "3" && allDice[1].innerHTML !== "3" & allDice[4].innerHTML !== "3") {
    threes.innerHTML = "9"
  } else if (allDice[0].innerHTML === "3" && allDice[1].innerHTML === "3" && allDice[2].innerHTML === "3" && allDice[3].innerHTML === "3" & allDice[4].innerHTML !== "3") {
    threes.innerHTML = "12"
  } else if (allDice[1].innerHTML === "3" && allDice[2].innerHTML === "3" && allDice[3].innerHTML === "3" && allDice[4].innerHTML === "3" & allDice[0].innerHTML !== "3") {
    threes.innerHTML = "12"
  } else if (allDice[0].innerHTML === "3" && allDice[2].innerHTML === "3" && allDice[3].innerHTML === "3" && allDice[4].innerHTML === "3" & allDice[1].innerHTML !== "3") {
    threes.innerHTML = "12"
  } else if (allDice[0].innerHTML === "3" && allDice[1].innerHTML === "3" && allDice[3].innerHTML === "3" && allDice[4].innerHTML === "3" & allDice[2].innerHTML !== "3") {
    threes.innerHTML = "12"
  } else if (allDice[0].innerHTML === "3" && allDice[1].innerHTML === "3" && allDice[2].innerHTML === "3" && allDice[4].innerHTML === "3" & allDice[3].innerHTML !== "3") {
    threes.innerHTML = "12"
  } else if (allDice[0].innerHTML === "3" && allDice[1].innerHTML === "3" && allDice[2].innerHTML === "3" && allDice[3].innerHTML === "3" & allDice[4].innerHTML === "3") {
    threes.innerHTML = "15"
  } else {
    threes.innerHTML = "0"
  }
})

scoreButtons[3].addEventListener("click", () => {
  scoreButtons[3].disabled = true
  if (allDice[0].innerHTML === "4" && allDice[1].innerHTML !== "4" && allDice[2].innerHTML !== "4" && allDice[3].innerHTML !== "4" & allDice[4].innerHTML !== "4") {
    fours.innerHTML = "4"
  } else if (allDice[1].innerHTML === "4" && allDice[0].innerHTML !== "4" && allDice[2].innerHTML !== "4" && allDice[3].innerHTML !== "4" & allDice[4].innerHTML !== "4") {
    fours.innerHTML = "4"
  } else if (allDice[2].innerHTML === "4" && allDice[0].innerHTML !== "4" && allDice[1].innerHTML !== "4" && allDice[3].innerHTML !== "4" & allDice[4].innerHTML !== "4") {
    fours.innerHTML = "4"
  } else if (allDice[3].innerHTML === "4" && allDice[0].innerHTML !== "4" && allDice[1].innerHTML !== "4" && allDice[2].innerHTML !== "4" & allDice[4].innerHTML !== "4") {
    fours.innerHTML = "4"
  } else if (allDice[4].innerHTML === "4" && allDice[0].innerHTML !== "4" && allDice[1].innerHTML !== "4" && allDice[2].innerHTML !== "4" & allDice[3].innerHTML !== "4") {
    fours.innerHTML = "4"
  } else if (allDice[0].innerHTML === "4" && allDice[1].innerHTML === "4" && allDice[2].innerHTML !== "4" && allDice[3].innerHTML !== "4" & allDice[4].innerHTML !== "4") {
    fours.innerHTML = "8"
  } else if (allDice[0].innerHTML === "4" && allDice[2].innerHTML === "4" && allDice[1].innerHTML !== "4" && allDice[3].innerHTML !== "4" & allDice[4].innerHTML !== "4") {
    fours.innerHTML = "8"
  } else if (allDice[0].innerHTML === "4" && allDice[3].innerHTML === "4" && allDice[1].innerHTML !== "4" && allDice[2].innerHTML !== "4" & allDice[4].innerHTML !== "4") {
    fours.innerHTML = "8"
  } else if (allDice[0].innerHTML === "4" && allDice[4].innerHTML === "4" && allDice[1].innerHTML !== "4" && allDice[2].innerHTML !== "4" & allDice[3].innerHTML !== "4") {
    fours.innerHTML = "8"
  } else if (allDice[1].innerHTML === "4" && allDice[2].innerHTML === "4" && allDice[0].innerHTML !== "4" && allDice[3].innerHTML !== "4" & allDice[4].innerHTML !== "4") {
    fours.innerHTML = "8"
  } else if (allDice[1].innerHTML === "4" && allDice[3].innerHTML === "4" && allDice[0].innerHTML !== "4" && allDice[2].innerHTML !== "4" & allDice[4].innerHTML !== "4") {
    fours.innerHTML = "8"
  } else if (allDice[1].innerHTML === "4" && allDice[4].innerHTML === "4" && allDice[0].innerHTML !== "4" && allDice[2].innerHTML !== "4" & allDice[3].innerHTML !== "4") {
    fours.innerHTML = "8"
  } else if (allDice[2].innerHTML === "4" && allDice[3].innerHTML === "4" && allDice[0].innerHTML !== "4" && allDice[1].innerHTML !== "4" & allDice[4].innerHTML !== "4") {
    fours.innerHTML = "8"
  } else if (allDice[2].innerHTML === "4" && allDice[4].innerHTML === "4" && allDice[0].innerHTML !== "4" && allDice[1].innerHTML !== "4" & allDice[3].innerHTML !== "4") {
    fours.innerHTML = "8"
  } else if (allDice[3].innerHTML === "4" && allDice[4].innerHTML === "4" && allDice[0].innerHTML !== "4" && allDice[1].innerHTML !== "4" & allDice[2].innerHTML !== "4") {
    fours.innerHTML = "8"
  } else if (allDice[0].innerHTML === "4" && allDice[1].innerHTML === "4" && allDice[2].innerHTML === "4" && allDice[3].innerHTML !== "4" & allDice[4].innerHTML !== "4") {
    fours.innerHTML = "12"
  } else if (allDice[0].innerHTML === "4" && allDice[1].innerHTML === "4" && allDice[3].innerHTML === "4" && allDice[2].innerHTML !== "4" & allDice[4].innerHTML !== "4") {
    fours.innerHTML = "12"
  } else if (allDice[0].innerHTML === "4" && allDice[1].innerHTML === "4" && allDice[4].innerHTML === "4" && allDice[2].innerHTML !== "4" & allDice[3].innerHTML !== "4") {
    fours.innerHTML = "12"
  } else if (allDice[1].innerHTML === "4" && allDice[2].innerHTML === "4" && allDice[3].innerHTML === "4" && allDice[0].innerHTML !== "4" & allDice[4].innerHTML !== "4") {
    fours.innerHTML = "12"
  } else if (allDice[1].innerHTML === "4" && allDice[2].innerHTML === "4" && allDice[4].innerHTML === "4" && allDice[0].innerHTML !== "4" & allDice[3].innerHTML !== "4") {
    fours.innerHTML = "12"
  } else if (allDice[2].innerHTML === "4" && allDice[3].innerHTML === "4" && allDice[4].innerHTML === "4" && allDice[0].innerHTML !== "4" & allDice[1].innerHTML !== "4") {
    fours.innerHTML = "12"
  } else if (allDice[0].innerHTML === "4" && allDice[3].innerHTML === "4" && allDice[4].innerHTML === "4" && allDice[1].innerHTML !== "4" & allDice[2].innerHTML !== "4") {
    fours.innerHTML = "12"
  } else if (allDice[1].innerHTML === "4" && allDice[3].innerHTML === "4" && allDice[4].innerHTML === "4" && allDice[0].innerHTML !== "4" & allDice[2].innerHTML !== "4") {
    fours.innerHTML = "12"
  } else if (allDice[0].innerHTML === "4" && allDice[2].innerHTML === "4" && allDice[4].innerHTML === "4" && allDice[1].innerHTML !== "4" & allDice[3].innerHTML !== "4") {
    fours.innerHTML = "12"
  } else if (allDice[0].innerHTML === "4" && allDice[2].innerHTML === "4" && allDice[3].innerHTML === "4" && allDice[1].innerHTML !== "4" & allDice[4].innerHTML !== "4") {
    fours.innerHTML = "12"
  } else if (allDice[0].innerHTML === "4" && allDice[1].innerHTML === "4" && allDice[2].innerHTML === "4" && allDice[3].innerHTML === "4" & allDice[4].innerHTML !== "4") {
    fours.innerHTML = "16"
  } else if (allDice[1].innerHTML === "4" && allDice[2].innerHTML === "4" && allDice[3].innerHTML === "4" && allDice[4].innerHTML === "4" & allDice[0].innerHTML !== "4") {
    fours.innerHTML = "16"
  } else if (allDice[0].innerHTML === "4" && allDice[2].innerHTML === "4" && allDice[3].innerHTML === "4" && allDice[4].innerHTML === "4" & allDice[1].innerHTML !== "4") {
    fours.innerHTML = "16"
  } else if (allDice[0].innerHTML === "4" && allDice[1].innerHTML === "4" && allDice[3].innerHTML === "4" && allDice[4].innerHTML === "4" & allDice[2].innerHTML !== "4") {
    fours.innerHTML = "16"
  } else if (allDice[0].innerHTML === "4" && allDice[1].innerHTML === "4" && allDice[2].innerHTML === "4" && allDice[4].innerHTML === "4" & allDice[3].innerHTML !== "4") {
    fours.innerHTML = "16"
  } else if (allDice[0].innerHTML === "4" && allDice[1].innerHTML === "4" && allDice[2].innerHTML === "4" && allDice[3].innerHTML === "4" & allDice[4].innerHTML === "3") {
    fours.innerHTML = "20"
  } else {
    fours.innerHTML = "0"
  }
})

scoreButtons[4].addEventListener("click", () => {
  scoreButtons[4].disabled = true
  if (allDice[0].innerHTML === "5" && allDice[1].innerHTML !== "5" && allDice[2].innerHTML !== "5" && allDice[3].innerHTML !== "5" & allDice[4].innerHTML !== "5") {
    fives.innerHTML = "5"
  } else if (allDice[1].innerHTML === "5" && allDice[0].innerHTML !== "5" && allDice[2].innerHTML !== "5" && allDice[3].innerHTML !== "5" & allDice[4].innerHTML !== "5") {
    fives.innerHTML = "5"
  } else if (allDice[2].innerHTML === "5" && allDice[0].innerHTML !== "5" && allDice[1].innerHTML !== "5" && allDice[3].innerHTML !== "5" & allDice[4].innerHTML !== "5") {
    fives.innerHTML = "5"
  } else if (allDice[3].innerHTML === "5" && allDice[0].innerHTML !== "5" && allDice[1].innerHTML !== "5" && allDice[2].innerHTML !== "5" & allDice[4].innerHTML !== "5") {
    fives.innerHTML = "5"
  } else if (allDice[4].innerHTML === "5" && allDice[0].innerHTML !== "5" && allDice[1].innerHTML !== "5" && allDice[2].innerHTML !== "5" & allDice[3].innerHTML !== "5") {
    fives.innerHTML = "5"
  } else if (allDice[0].innerHTML === "5" && allDice[1].innerHTML === "5" && allDice[2].innerHTML !== "5" && allDice[3].innerHTML !== "5" & allDice[4].innerHTML !== "5") {
    fives.innerHTML = "10"
  } else if (allDice[0].innerHTML === "5" && allDice[2].innerHTML === "5" && allDice[1].innerHTML !== "5" && allDice[3].innerHTML !== "5" & allDice[4].innerHTML !== "5") {
    fives.innerHTML = "10"
  } else if (allDice[0].innerHTML === "5" && allDice[3].innerHTML === "5" && allDice[1].innerHTML !== "5" && allDice[2].innerHTML !== "5" & allDice[4].innerHTML !== "5") {
    fives.innerHTML = "10"
  } else if (allDice[0].innerHTML === "5" && allDice[4].innerHTML === "5" && allDice[1].innerHTML !== "5" && allDice[2].innerHTML !== "5" & allDice[3].innerHTML !== "5") {
    fives.innerHTML = "10"
  } else if (allDice[1].innerHTML === "5" && allDice[2].innerHTML === "5" && allDice[0].innerHTML !== "5" && allDice[3].innerHTML !== "5" & allDice[4].innerHTML !== "5") {
    fives.innerHTML = "10"
  } else if (allDice[1].innerHTML === "5" && allDice[3].innerHTML === "5" && allDice[0].innerHTML !== "5" && allDice[2].innerHTML !== "5" & allDice[4].innerHTML !== "5") {
    fives.innerHTML = "10"
  } else if (allDice[1].innerHTML === "5" && allDice[4].innerHTML === "5" && allDice[0].innerHTML !== "5" && allDice[2].innerHTML !== "5" & allDice[3].innerHTML !== "5") {
    fives.innerHTML = "10"
  } else if (allDice[2].innerHTML === "5" && allDice[3].innerHTML === "5" && allDice[0].innerHTML !== "5" && allDice[1].innerHTML !== "5" & allDice[4].innerHTML !== "5") {
    fives.innerHTML = "10"
  } else if (allDice[2].innerHTML === "5" && allDice[4].innerHTML === "5" && allDice[0].innerHTML !== "5" && allDice[1].innerHTML !== "5" & allDice[3].innerHTML !== "5") {
    fives.innerHTML = "10"
  } else if (allDice[3].innerHTML === "5" && allDice[4].innerHTML === "5" && allDice[0].innerHTML !== "5" && allDice[1].innerHTML !== "5" & allDice[2].innerHTML !== "5") {
    fives.innerHTML = "10"
  } else if (allDice[0].innerHTML === "5" && allDice[1].innerHTML === "5" && allDice[2].innerHTML === "5" && allDice[3].innerHTML !== "5" & allDice[4].innerHTML !== "5") {
    fives.innerHTML = "15"
  } else if (allDice[0].innerHTML === "5" && allDice[1].innerHTML === "5" && allDice[3].innerHTML === "5" && allDice[2].innerHTML !== "5" & allDice[4].innerHTML !== "5") {
    fives.innerHTML = "15"
  } else if (allDice[0].innerHTML === "5" && allDice[1].innerHTML === "5" && allDice[4].innerHTML === "5" && allDice[2].innerHTML !== "5" & allDice[3].innerHTML !== "5") {
    fives.innerHTML = "15"
  } else if (allDice[1].innerHTML === "5" && allDice[2].innerHTML === "5" && allDice[3].innerHTML === "5" && allDice[0].innerHTML !== "5" & allDice[4].innerHTML !== "5") {
    fives.innerHTML = "15"
  } else if (allDice[1].innerHTML === "5" && allDice[2].innerHTML === "5" && allDice[4].innerHTML === "5" && allDice[0].innerHTML !== "5" & allDice[3].innerHTML !== "5") {
    fives.innerHTML = "15"
  } else if (allDice[2].innerHTML === "5" && allDice[3].innerHTML === "5" && allDice[4].innerHTML === "5" && allDice[0].innerHTML !== "5" & allDice[1].innerHTML !== "5") {
    fives.innerHTML = "15"
  } else if (allDice[0].innerHTML === "5" && allDice[3].innerHTML === "5" && allDice[4].innerHTML === "5" && allDice[1].innerHTML !== "5" & allDice[2].innerHTML !== "5") {
    fives.innerHTML = "15"
  } else if (allDice[1].innerHTML === "5" && allDice[3].innerHTML === "5" && allDice[4].innerHTML === "5" && allDice[0].innerHTML !== "5" & allDice[2].innerHTML !== "5") {
    fives.innerHTML = "15"
  } else if (allDice[0].innerHTML === "5" && allDice[2].innerHTML === "5" && allDice[4].innerHTML === "5" && allDice[1].innerHTML !== "5" & allDice[3].innerHTML !== "5") {
    fives.innerHTML = "15"
  } else if (allDice[0].innerHTML === "5" && allDice[2].innerHTML === "5" && allDice[3].innerHTML === "5" && allDice[1].innerHTML !== "5" & allDice[4].innerHTML !== "5") {
    fives.innerHTML = "15"
  } else if (allDice[0].innerHTML === "5" && allDice[1].innerHTML === "5" && allDice[2].innerHTML === "5" && allDice[3].innerHTML === "5" & allDice[4].innerHTML !== "5") {
    fives.innerHTML = "20"
  } else if (allDice[1].innerHTML === "5" && allDice[2].innerHTML === "5" && allDice[3].innerHTML === "5" && allDice[4].innerHTML === "5" & allDice[0].innerHTML !== "5") {
    fives.innerHTML = "20"
  } else if (allDice[0].innerHTML === "5" && allDice[2].innerHTML === "5" && allDice[3].innerHTML === "5" && allDice[4].innerHTML === "5" & allDice[1].innerHTML !== "5") {
    fives.innerHTML = "20"
  } else if (allDice[0].innerHTML === "5" && allDice[1].innerHTML === "5" && allDice[3].innerHTML === "5" && allDice[4].innerHTML === "5" & allDice[2].innerHTML !== "5") {
    fives.innerHTML = "20"
  } else if (allDice[0].innerHTML === "5" && allDice[1].innerHTML === "5" && allDice[2].innerHTML === "5" && allDice[4].innerHTML === "5" & allDice[3].innerHTML !== "5") {
    fives.innerHTML = "20"
  } else if (allDice[0].innerHTML === "5" && allDice[1].innerHTML === "5" && allDice[2].innerHTML === "5" && allDice[3].innerHTML === "5" & allDice[4].innerHTML === "5") {
    fives.innerHTML = "25"
  } else {
    fives.innerHTML = "0"
  }
})

scoreButtons[5].addEventListener("click", () => {
  scoreButtons[5].disabled = true
  if (allDice[0].innerHTML === "6" && allDice[1].innerHTML !== "6" && allDice[2].innerHTML !== "6" && allDice[3].innerHTML !== "6" & allDice[4].innerHTML !== "6") {
    sixes.innerHTML = "6"
  } else if (allDice[1].innerHTML === "6" && allDice[0].innerHTML !== "6" && allDice[2].innerHTML !== "6" && allDice[3].innerHTML !== "6" & allDice[4].innerHTML !== "6") {
    sixes.innerHTML = "6"
  } else if (allDice[2].innerHTML === "6" && allDice[0].innerHTML !== "6" && allDice[1].innerHTML !== "6" && allDice[3].innerHTML !== "6" & allDice[4].innerHTML !== "6") {
    sixes.innerHTML = "6"
  } else if (allDice[3].innerHTML === "6" && allDice[0].innerHTML !== "6" && allDice[1].innerHTML !== "6" && allDice[2].innerHTML !== "6" & allDice[4].innerHTML !== "6") {
    sixes.innerHTML = "6"
  } else if (allDice[4].innerHTML === "6" && allDice[0].innerHTML !== "6" && allDice[1].innerHTML !== "6" && allDice[2].innerHTML !== "6" & allDice[3].innerHTML !== "6") {
    sixes.innerHTML = "6"
  } else if (allDice[0].innerHTML === "6" && allDice[1].innerHTML === "6" && allDice[2].innerHTML !== "6" && allDice[3].innerHTML !== "6" & allDice[4].innerHTML !== "6") {
    sixes.innerHTML = "12"
  } else if (allDice[0].innerHTML === "6" && allDice[2].innerHTML === "6" && allDice[1].innerHTML !== "6" && allDice[3].innerHTML !== "6" & allDice[4].innerHTML !== "6") {
    sixes.innerHTML = "12"
  } else if (allDice[0].innerHTML === "6" && allDice[3].innerHTML === "6" && allDice[1].innerHTML !== "6" && allDice[2].innerHTML !== "6" & allDice[4].innerHTML !== "6") {
    sixes.innerHTML = "12"
  } else if (allDice[0].innerHTML === "6" && allDice[4].innerHTML === "6" && allDice[1].innerHTML !== "6" && allDice[2].innerHTML !== "6" & allDice[3].innerHTML !== "6") {
    sixes.innerHTML = "12"
  } else if (allDice[1].innerHTML === "6" && allDice[2].innerHTML === "6" && allDice[0].innerHTML !== "6" && allDice[3].innerHTML !== "6" & allDice[4].innerHTML !== "6") {
    sixes.innerHTML = "12"
  } else if (allDice[1].innerHTML === "6" && allDice[3].innerHTML === "6" && allDice[0].innerHTML !== "6" && allDice[2].innerHTML !== "6" & allDice[4].innerHTML !== "6") {
    sixes.innerHTML = "12"
  } else if (allDice[1].innerHTML === "6" && allDice[4].innerHTML === "6" && allDice[0].innerHTML !== "6" && allDice[2].innerHTML !== "6" & allDice[3].innerHTML !== "6") {
    sixes.innerHTML = "12"
  } else if (allDice[2].innerHTML === "6" && allDice[3].innerHTML === "6" && allDice[0].innerHTML !== "6" && allDice[1].innerHTML !== "6" & allDice[4].innerHTML !== "6") {
    sixes.innerHTML = "12"
  } else if (allDice[2].innerHTML === "6" && allDice[4].innerHTML === "6" && allDice[0].innerHTML !== "6" && allDice[1].innerHTML !== "6" & allDice[3].innerHTML !== "6") {
    sixes.innerHTML = "12"
  } else if (allDice[3].innerHTML === "6" && allDice[4].innerHTML === "6" && allDice[0].innerHTML !== "6" && allDice[1].innerHTML !== "6" & allDice[2].innerHTML !== "6") {
    sixes.innerHTML = "12"
  } else if (allDice[0].innerHTML === "6" && allDice[1].innerHTML === "6" && allDice[2].innerHTML === "6" && allDice[3].innerHTML !== "6" & allDice[4].innerHTML !== "6") {
    sixes.innerHTML = "18"
  } else if (allDice[0].innerHTML === "6" && allDice[1].innerHTML === "6" && allDice[3].innerHTML === "6" && allDice[2].innerHTML !== "6" & allDice[4].innerHTML !== "6") {
    sixes.innerHTML = "18"
  } else if (allDice[0].innerHTML === "6" && allDice[1].innerHTML === "6" && allDice[4].innerHTML === "6" && allDice[2].innerHTML !== "6" & allDice[3].innerHTML !== "6") {
    sixes.innerHTML = "18"
  } else if (allDice[1].innerHTML === "6" && allDice[2].innerHTML === "6" && allDice[3].innerHTML === "6" && allDice[0].innerHTML !== "6" & allDice[4].innerHTML !== "6") {
    sixes.innerHTML = "18"
  } else if (allDice[1].innerHTML === "6" && allDice[2].innerHTML === "6" && allDice[4].innerHTML === "6" && allDice[0].innerHTML !== "6" & allDice[3].innerHTML !== "6") {
    sixes.innerHTML = "18"
  } else if (allDice[2].innerHTML === "6" && allDice[3].innerHTML === "6" && allDice[4].innerHTML === "6" && allDice[0].innerHTML !== "6" & allDice[1].innerHTML !== "6") {
    sixes.innerHTML = "18"
  } else if (allDice[0].innerHTML === "6" && allDice[3].innerHTML === "6" && allDice[4].innerHTML === "6" && allDice[1].innerHTML !== "6" & allDice[2].innerHTML !== "6") {
    sixes.innerHTML = "18"
  } else if (allDice[1].innerHTML === "6" && allDice[3].innerHTML === "6" && allDice[4].innerHTML === "6" && allDice[0].innerHTML !== "6" & allDice[2].innerHTML !== "6") {
    sixes.innerHTML = "18"
  } else if (allDice[0].innerHTML === "6" && allDice[2].innerHTML === "6" && allDice[4].innerHTML === "6" && allDice[1].innerHTML !== "6" & allDice[3].innerHTML !== "6") {
    sixes.innerHTML = "18"
  } else if (allDice[0].innerHTML === "6" && allDice[2].innerHTML === "6" && allDice[3].innerHTML === "6" && allDice[1].innerHTML !== "6" & allDice[4].innerHTML !== "6") {
    sixes.innerHTML = "18"
  } else if (allDice[0].innerHTML === "6" && allDice[1].innerHTML === "6" && allDice[2].innerHTML === "6" && allDice[3].innerHTML === "6" & allDice[4].innerHTML !== "6") {
    sixes.innerHTML = "24"
  } else if (allDice[1].innerHTML === "6" && allDice[2].innerHTML === "6" && allDice[3].innerHTML === "6" && allDice[4].innerHTML === "6" & allDice[0].innerHTML !== "6") {
    sixes.innerHTML = "24"
  } else if (allDice[0].innerHTML === "6" && allDice[2].innerHTML === "6" && allDice[3].innerHTML === "6" && allDice[4].innerHTML === "6" & allDice[1].innerHTML !== "6") {
    sixes.innerHTML = "24"
  } else if (allDice[0].innerHTML === "6" && allDice[1].innerHTML === "6" && allDice[3].innerHTML === "6" && allDice[4].innerHTML === "6" & allDice[2].innerHTML !== "6") {
    sixes.innerHTML = "24"
  } else if (allDice[0].innerHTML === "6" && allDice[1].innerHTML === "6" && allDice[2].innerHTML === "6" && allDice[4].innerHTML === "6" & allDice[3].innerHTML !== "6") {
    sixes.innerHTML = "24"
  } else if (allDice[0].innerHTML === "6" && allDice[1].innerHTML === "6" && allDice[2].innerHTML === "6" && allDice[3].innerHTML === "6" & allDice[4].innerHTML === "6") {
    sixes.innerHTML = "30"
  } else {
    sixes.innerHTML = "0"
  }
})

scoreButtons[6].addEventListener("click", () => {
  scoreButtons[6].disabled = true
  if (allDice[0].innerHTML === allDice[1].innerHTML && allDice[0].innerHTML === allDice[2].innerHTML && allDice[3].innerHTML !== allDice[0] && allDice[4] !== allDice[0].innerHTML) {
    threeKind.innerHTML = kindTotal().toString()
  } else if (allDice[0].innerHTML === allDice[1].innerHTML && allDice[3].innerHTML === allDice[0].innerHTML && allDice[2].innerHTML !== allDice[0].innerHTML && allDice[4].innerHTML !== allDice[0].innerHTML) {
    threeKind.innerHTML = kindTotal().toString()
  } else if (allDice[0].innerHTML === allDice[1].innerHTML && allDice[4].innerHTML === allDice[0].innerHTML && allDice[2].innerHTML !== allDice[0].innerHTML && allDice[3].innerHTML !== allDice[0].innerHTML) {
    threeKind.innerHTML = kindTotal().toString()
  } else if (allDice[0].innerHTML === allDice[2].innerHTML && allDice[3].innerHTML === allDice[0].innerHTML && allDice[1].innerHTML !== allDice[0].innerHTML && allDice[4].innerHTML !== allDice[0].innerHTML) {
    threeKind.innerHTML = kindTotal().toString()
  } else if (allDice[0].innerHTML === allDice[2].innerHTML && allDice[4].innerHTML === allDice[0].innerHTML && allDice[1].innerHTML !== allDice[0].innerHTML && allDice[3].innerHTML !== allDice[0].innerHTML) {
    threeKind.innerHTML = kindTotal().toString()
  } else if (allDice[0].innerHTML === allDice[3].innerHTML && allDice[4].innerHTML === allDice[0].innerHTML && allDice[1].innerHTML !== allDice[0].innerHTML && allDice[2].innerHTML !== allDice[0].innerHTML) {
    threeKind.innerHTML = kindTotal().toString()
  } else if (allDice[1].innerHTML === allDice[2].innerHTML && allDice[3].innerHTML === allDice[1].innerHTML && allDice[0].innerHTML !== allDice[2].innerHTML && allDice[4].innerHTML !== allDice[1].innerHTML) {
    threeKind.innerHTML = kindTotal().toString()
  } else if (allDice[1].innerHTML === allDice[2].innerHTML && allDice[4].innerHTML === allDice[1].innerHTML && allDice[0].innerHTML !== allDice[1].innerHTML && allDice[3].innerHTML !== allDice[1].innerHTML) {
    threeKind.innerHTML = kindTotal().toString()
  } else if (allDice[1].innerHTML === allDice[3].innerHTML && allDice[4].innerHTML === allDice[1].innerHTML && allDice[0].innerHTML !== allDice[1].innerHTML && allDice[2].innerHTML !== allDice[1].innerHTML) {
    threeKind.innerHTML = kindTotal().toString()
  } else if (allDice[2].innerHTML === allDice[3].innerHTML && allDice[4].innerHTML === allDice[2].innerHTML && allDice[0].innerHTML !== allDice[2].innerHTML && allDice[1].innerHTML !== allDice[2].innerHTML) {
    threeKind.innerHTML = kindTotal().toString()
  } else {
    threeKind.innerHTML = "0"
  }
})

scoreButtons[7].addEventListener("click", () => {
  scoreButtons[7].disabled = true
  if (allDice[0].innerHTML === allDice[1].innerHTML && allDice[2].innerHTML === allDice[0].innerHTML && allDice[3].innerHTML === allDice[0].innerHTML && allDice[4].innerHTML !== allDice[0].innerHTML) {
    fourKind.innerHTML = kindTotal().toString()
  } else if (allDice[0].innerHTML === allDice[1].innerHTML && allDice[2].innerHTML === allDice[0].innerHTML && allDice[4].innerHTML === allDice[0].innerHTML && allDice[3].innerHTML !== allDice[0].innerHTML) {
    fourKind.innerHTML = kindTotal().toString()
  } else if (allDice[0].innerHTML === allDice[1].innerHTML && allDice[3].innerHTML === allDice[0].innerHTML && allDice[4].innerHTML === allDice[0].innerHTML && allDice[2].innerHTML !== allDice[0].innerHTML) {
    fourKind.innerHTML = kindTotal().toString()
  } else if (allDice[0].innerHTML === allDice[2].innerHTML && allDice[3].innerHTML === allDice[0].innerHTML && allDice[4].innerHTML === allDice[0].innerHTML && allDice[1].innerHTML !== allDice[0].innerHTML) {
    fourKind.innerHTML = kindTotal().toString()
  } else if (allDice[1].innerHTML === allDice[2].innerHTML && allDice[3].innerHTML === allDice[1].innerHTML && allDice[4].innerHTML === allDice[1].innerHTML && allDice[0].innerHTML !== allDice[1].innerHTML) {
    fourKind.innerHTML = kindTotal().toString()
  } else {
    fourKind.innerHTML = "0"
  }
})

scoreButtons[8].addEventListener("click", () => {
  scoreButtons[8].disabled = true
})

scoreButtons[9].addEventListener("click", () => {
  scoreButtons[9].disabled = true
})

scoreButtons[10].addEventListener("click", () => {
  scoreButtons[10].disabled = true
})

scoreButtons[11].addEventListener("click", () => {
  scoreButtons[11].disabled = true
})

scoreButtons[12].addEventListener("click", () => {
  scoreButtons[12].disabled = true
})

// Assign hold button event listeners to toggle the boolean value onclick
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
  rollNumber()
})

// resetGame.addEventListener("click", () =>{})