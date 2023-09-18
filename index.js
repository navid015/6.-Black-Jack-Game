let firstCard = 7
let secondCard = 9

let sum = firstCard + secondCard

if (sum<= 20) {
    console.log("You want to draw a new card?")
}else if (sum === 21){
    console.log("Wooooo....You got blackjack!")
} else {
    console.log("You're out of the game!")
}