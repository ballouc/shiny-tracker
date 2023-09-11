
// Within our HTML document, find the element whose ID matches 'count-el'
let countEl = document.getElementById("count-el")
let binomialEl = document.getElementById("binomial-distribution")
let probabilityEl = document.getElementById("probability")
let shinyCharmEl = document.getElementById("shiny-charm")
let generationsEl = document.getElementById("generations")

let count = 0
// Make the shiny odds update with whatever gen is currently selected :3
let shinyOdds = 8192
let rolls = 1

// If the page is refreshed, and SV is selected as the default, it will update the rest of the webpage to reflect that.
setValues(generationsEl)

// Function which increases the value of count each time it is called, and sets the text of the count-el element 
// in the HTML file to that value. It is called whenever the button is clicked using the on-click tag.

function setValues(e){
    //Resets all of the counters
    updateAll()
    switch(e.value){
        case "gen3":
            //Do gen 3 specific things
            oldOdds()
            break;
        case "gen4":
            //etc
            oldOdds()
            break;
        case "gen5":
            // Gen 5 was the first to introduce Shiny Charm but still had old odds, so have to do this manually here
            break;
        case "gen6":
            //Do gen 6 specific things
            newOdds()
            break;
        case "gen7":
            //etc
            newOdds()
            break;
        case "gen8":
            newOdds()
            break;
        case "gen9":
            newOdds()
            break;
        default:
            console.log("This is the default")
    }
}

shinyCharmEl.addEventListener("change", () => {
    if (shinyCharmEl.checked){
        rolls = 3
        updateAll()
    } else {
        rolls = 1
        updateAll()
    }
})

// Sets new odds and updates
function newOdds(){
    shinyOdds = 4096
    updateAll()
}

// Sets old odds and updates
function oldOdds(){
    shinyOdds = 8192
    updateAll()
}

// Function to increase count and update on press
function increment(){
    count += 1
    countEl.textContent = count
    updateAll()
}

// Function to decrease count and update on press
// cannot fall below 0
function decrement(){
    if(count > 0){
        count -= 1
        countEl.textContent = count
    }
    updateAll()
}

// I would like this button to 'complete' the hunt and save the data
function done(){

}

function reset(){
    countEl.textContent = 0
    binomialEl.textContent = "0.00%"
    count = 0

}

// Calculates the probability of finding at least one shiny in 'count' encounters using selected odds
function findBinomialDistribution(){
    let binomialProbability = count*(rolls/shinyOdds)*((1-(rolls/shinyOdds))**(count - 1))
    binomialEl.textContent = (binomialProbability * 100).toFixed(2) + "%"
}

function updateAll(){
    findBinomialDistribution()
    probabilityEl.textContent = rolls + "/" + shinyOdds
}

function changeCount(){
    let temp = prompt("Please enter a number", count);
    count = Number(temp);
    countEl.textContent = count;
    updateAll()
}