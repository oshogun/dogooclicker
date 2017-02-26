var gold_multiplier = 1;
var lumber_multiplier = 1;
var gold = 0;
var lumber = 0;
var population = 0;
var pop_limit = 10;
var farms = 0;

var mines = 0;
var miners = 0;
var max_miners = 0;

var lumber_camps = 0;
var lumberjacks = 0;
var max_lumberjacks = 0;

var markets = 0;
var traders = 0;
var max_traders = 0;

var sawmills = 0;
var workers = 0;
var max_workers = 0;

function init() {
    document.getElementById("gold").innerHTML = gold;
    document.getElementById("lumber").innerHTML = lumber;
    document.getElementById("current_pop").innerHTML = population;
    document.getElementById("pop_limit").innerHTML = pop_limit;
    document.getElementById("farms").innerHTML = farms;
    document.getElementById("max_miners").innerHTML = max_miners;
    alert("Task failed succesfully");
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


function buildLumberCamp() {
    var lcGoldCost = Math.floor(50 * Math.pow(1.1, lumber_camps));
    var lcLumberCost = Math.floor(30 * Math.pow(1.1, lumber_camps));
    if (gold >= lcGoldCost && lumber >= lcLumberCost) {
        lumber_camps = lumber_camps + 1;
        max_lumberjacks = max_lumberjacks + 5;
        gold = gold - lcGoldCost;
        lumber = lumber - lcLumberCost;
        
    }
    var nextGoldCost = Math.floor(50 * Math.pow(1.1, lumber_camps));
    var nextLumberCost = Math.floor(30 * Math.pow(1.1, lumber_camps));
    document.getElementById("lumber_camps").innerHTML = lumber_camps;
    document.getElementById("lcGoldCost").innerHTML = nextGoldCost;
    document.getElementById("lcLumberCost").innerHTML = nextLumberCost;
    document.getElementById("gold").innerHTML = gold;
    document.getElementById("lumber").innerHTML = lumber;
    document.getElementById("max_lumberjacks").innerHTML = max_lumberjacks;
}

function buyLumberjack() {
    var ljGoldCost = Math.floor(5 * Math.pow(1.1, lumberjacks));
    if (population < pop_limit && ljGoldCost <= gold && lumberjacks < max_lumberjacks) {
        lumberjacks++;
        gold -= ljGoldCost;
        population++;
    }
    var nextGoldCost = Math.floor(5 * Math.pow(1.1, lumberjacks));
    document.getElementById("gold").innerHTML = gold;
    document.getElementById("lumberjacks").innerHTML = lumberjacks;
    document.getElementById("ljGoldCost").innerHTML = nextGoldCost;
    document.getElementById("current_pop").innerHTML = population;
}

function buildMarket() {
    var marketGoldCost = Math.floor(1000 * Math.pow(1.1, markets));
    var marketLumberCost = Math.floor(680 * Math.pow(1.1, markets));
    if (gold >= marketGoldCost && lumber >= marketLumberCost) {
        markets = markets + 1;
        max_traders = max_traders + 5;
        gold = gold -marketGoldCost;
        lumber = lumber - marketLumberCost;
        
    }
    var nextGoldCost = Math.floor(1000 * Math.pow(1.1, markets));
    var nextLumberCost = Math.floor(680 * Math.pow(1.1, markets));
    document.getElementById("markets").innerHTML = markets;
    document.getElementById("marketGoldCost").innerHTML = nextGoldCost;
    document.getElementById("marketLumberCost").innerHTML = nextLumberCost;
    document.getElementById("gold").innerHTML = gold;
    document.getElementById("lumber").innerHTML = lumber;
    document.getElementById("max_traders").innerHTML = max_traders;
}

function buyTrader() {
    var traderCost = Math.floor(40 * Math.pow(1.1, traders));
    if (population < pop_limit && traderCost <= gold && traders < max_traders) {
        traders = traders + 1;
        gold -= traderCost;
        population++;
        gold_multiplier+= Math.floor(Math.pow(traders, Math.E));
    }
    var nextGoldCost = Math.floor(40 * Math.pow(1.1, traders));
    document.getElementById("gold").innerHTML = gold;
    document.getElementById("traders").innerHTML = traders;
    document.getElementById("traderCost").innerHTML = nextGoldCost;
    document.getElementById("current_pop").innerHTML = population;
}

function buildSawmill() {
    var sawmillGoldCost = Math.floor(1000 * Math.pow(1.1, sawmills));
    var sawmillLumberCost = Math.floor(680 * Math.pow(1.1, sawmills));
    if (gold >= sawmillGoldCost && lumber >= sawmillLumberCost) {
        sawmills = sawmills + 1;
        max_workers = max_workers + 5;
        gold = gold -sawmillGoldCost;
        lumber = lumber - sawmillLumberCost;
        
    }
    var nextGoldCost = Math.floor(1000 * Math.pow(1.1, sawmills));
    var nextLumberCost = Math.floor(680 * Math.pow(1.1, sawmills));
    document.getElementById("sawmills").innerHTML = sawmills;
    document.getElementById("marketGoldCost").innerHTML = nextGoldCost;
    document.getElementById("marketLumberCost").innerHTML = nextLumberCost;
    document.getElementById("gold").innerHTML = gold;
    document.getElementById("lumber").innerHTML = lumber;
    document.getElementById("max_workers").innerHTML = max_workers;
}

function buyWorker() {
    var workerCost = Math.floor(40 * Math.pow(1.1, workers));
    if (population < pop_limit && workerCost <= gold && workers < max_workers) {
        workers = workers + 1;
        gold -= workerCost;
        population++;
        lumber_multiplier += Math.floor(Math.pow(workers, Math.E));
    }
    var nextGoldCost = Math.floor(40 * Math.pow(1.1, workers));
    document.getElementById("gold").innerHTML = gold;
    document.getElementById("workers").innerHTML = workers;
    document.getElementById("workerCost").innerHTML = nextGoldCost;
    document.getElementById("current_pop").innerHTML = population;
}

window.setInterval(function() {
    document.getElementById("goldPerSec").innerHTML = miners * gold_multiplier;
    document.getElementById("lumberPerSec").innerHTML = lumberjacks * lumber_multiplier;
    increaseGold((miners * gold_multiplier) / 2);
    increaseLumber((lumberjacks * lumber_multiplier) / 2);
}, 500);
