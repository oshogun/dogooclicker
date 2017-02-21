var gold = 0;
var lumber = 0;
var population = 0;
var pop_limit = 10;
var farms = 0;
var mines = 0;
var miners = 0;
var max_miners = 0;
function init() {
    document.getElementById("gold").innerHTML = gold;
    document.getElementById("lumber").innerHTML = lumber;
    document.getElementById("current_pop").innerHTML = population;
    document.getElementById("pop_limit").innerHTML = pop_limit;
    document.getElementById("farms").innerHTML = farms
    document.getElementById("max_miners").innerHTML= max_miners;
}
function increaseGold(factor) {
    gold += factor;
    document.getElementById("gold").innerHTML = gold;
}

function increaseLumber(factor) {
    lumber += factor;
    document.getElementById("lumber").innerHTML = lumber;
}
function buildFarm() {
    var farmGoldCost = Math.floor(10 * Math.pow(1.1, farms));
    var farmLumberCost = Math.floor(5 * Math.pow(1.1, farms));
    if (gold >= farmGoldCost && lumber >= farmLumberCost) {
        farms++;
        gold = gold - farmGoldCost;
        lumber = lumber - farmLumberCost;
        pop_limit += 10;
    }
    var nextGoldCost = Math.floor(10 * Math.pow(1.1, farms));
    var nextLumberCost = Math.floor(5 * Math.pow(1.1, farms));
    document.getElementById("farms").innerHTML = farms;
    document.getElementById("farmGoldCost").innerHTML = nextGoldCost;
    document.getElementById("farmLumberCost").innerHTML = nextLumberCost;
    document.getElementById("gold").innerHTML = gold;
    document.getElementById("lumber").innerHTML = lumber;
    document.getElementById("pop_limit").innerHTML = pop_limit;
}

function buildMine() {
    var mineGoldCost = Math.floor(30 * Math.pow(1.1, mines));
    var mineLumberCost = Math.floor(50 * Math.pow(1.1, mines));
    if (gold >= mineGoldCost && lumber >= mineLumberCost) {
        mines = mines + 1;
        max_miners = max_miners + 5;
        gold = gold - mineGoldCost;
        lumber = lumber - mineLumberCost;
        
    }
    var nextGoldCost = Math.floor(30 * Math.pow(1.1, mines));
    var nextLumberCost = Math.floor(50 * Math.pow(1.1, mines));
    document.getElementById("mines").innerHTML = mines;
    document.getElementById("mineGoldCost").innerHTML = nextGoldCost;
    document.getElementById("mineLumberCost").innerHTML = nextLumberCost;
    document.getElementById("gold").innerHTML = gold;
    document.getElementById("lumber").innerHTML = lumber;
    document.getElementById("max_miners").innerHTML = max_miners;
}
function buyMiner() {
    var minerGoldCost = Math.floor(5 * Math.pow(1.1, miners));
    if (population < pop_limit && minerGoldCost <= gold && miners < max_miners) {
        miners++;
        gold -= minerGoldCost;
        population++;
    }
    var nextGoldCost = Math.floor(5 * Math.pow(1.1, miners));
    document.getElementById("gold").innerHTML = gold;
    document.getElementById("miners").innerHTML = miners;
    document.getElementById("miner_cost").innerHTML = nextGoldCost;
    document.getElementById("current_pop").innerHTML = population;
}
window.setInterval(function() {
    increaseGold(miners);
}, 1000);
