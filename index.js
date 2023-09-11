
// Within our HTML document, find the element whose ID matches 'count-el'
let countEl = document.getElementById("count-el")
let binomialEl = document.getElementById("binomial-distribution")
let probabilityEl = document.getElementById("probability")

let count = 0
let shinyOdds = 1/8192
let masudaOdds = 1

// Function which increases the value of count each time it is called, and sets the text of the count-el element 
// in the HTML file to that value. It is called whenever the button is clicked using the on-click tag.

function setValues(e){
    //Resets all of the counters
    changeGens()
    switch(e.value){
        case "gen3":
            //Do gen 3 specific things
            console.log("You have selected gen3")
            oldOdds()
            break;
        case "gen4":
            //etc
            console.log("You have selected gen4")
            oldOdds()
            break;
        case "gen5":
            console.log("You have selected gen5")
            oldOdds()
            break;
        case "gen6":
            //Do gen 6 specific things
            console.log("You have selected gen6")
            newOdds()
            break;
        case "gen7":
            //etc
            console.log("You have selected gen7")
            newOdds()
            break;
        case "gen8":
            console.log("You have selected gen8")
            newOdds()
            break;
        case "gen9":
            console.log("You have selected gen9")
            newOdds()
            break;
        default:
            console.log("This is the default")
    }
}

function newOdds(){
    shinyOdds = 1/4096
    probabilityEl.textContent = "1/4096"
}

function oldOdds(){
    shinyOdds = 1/8192
    probabilityEl.textContent = "1/8192"
}

// Should I make it so it resets or just updates the probability and odds?
function changeGens(){
    count = 0;
    countEl.textContent = 0;
    binomialEl.textContent = "0.00%"
}

function increment(){
    count += 1
    countEl.textContent = count
    updateAll()
}

function decrement(){
    if(count > 0){
        count -= 1
        countEl.textContent = count
    }

    // If count is reduced to 0, the program will not refresh binomialEl due to having 0 in the denominator
    // This does that manually
    if(count == 0){
        binomialEl.textContent = "0.00%"
    }
    updateAll()
}

function done(){

}

function reset(){
    countEl.textContent = 0
    binomialEl.textContent = "0.00%"
    count = 0

}

function findBinomialDistribution(){
    let binomialProbability = count*(shinyOdds)*((1-shinyOdds)**(count - 1))
    binomialEl.textContent = (binomialProbability * 100).toFixed(2) + "%"
    console.log(binomialProbability)
}

//If I only have one function in this, I can remove it later and replace all instaces of 'updateAll' with whatever is inside
function updateAll(){
    findBinomialDistribution()
}

function changeCount(){
    let temp = prompt("Please enter a number", count);
    count = Number(temp);
    countEl.textContent = count;
    findBinomialDistribution();
}