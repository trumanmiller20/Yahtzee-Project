// Declare global variables

// Set score blocks as variables
const scoreAces = document.getElementById("aces-score")
const scoreTwos = document.getElementById("twos-score")
const scoreThrees = document.getElementById("threes-score")
const scoreFours = document.getElementById("fours-score")
const scoreFives = document.getElementById("fives-score")
const scoreSixes = document.getElementById("sixes-score")
const scoreUpper = document.getElementById("upper-score")
const score3Kind = document.getElementById("three-kind-score")
const score4Kind = document.getElementById("four-kind-score")
const scoreFull = document.getElementById("full-house-score")
const scoreSm = document.getElementById("sm-straight-score")
const scoreLg = document.getElementById("lg-straight-score")
const scoreChance = document.getElementById("chance-score")
const scoreYaht = document.getElementById("yahtzee-score")
const scoreBonus = document.getElementById("bonus-score")
const scoreLower = document.getElementById("lower-score")
const scoreTotal = document.getElementById("grand-total-score")

// Set potential die face options
const dieOptions = [1, 2, 3, 4, 5, 6]

let dieRoll = () => {
  return Math.floor(Math.random() * dieOptions.length) + 1
}

