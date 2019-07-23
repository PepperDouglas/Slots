let values = require('../values.js');
let symbols = values.symbols;
let prizeArr = values.prizeArr;
//import { symbols, prizeArr } from './values.js';

//function to create new array below
function createReel(symbols){
    let arr = [];
    let lengths = diffToHundred(symbols);
    for (let i = 0; i < 8; i++){
        let randNum = Math.floor(Math.random() * 100) + 1;
        switch (true){
            case randNum <= lengths[0] : arr.push(symbols[0][1]);
            break;
            case randNum > lengths[0] && randNum <= lengths[1] : arr.push(symbols[1][1]);
            break;
            case randNum > lengths[1] && randNum <= lengths[2] : arr.push(symbols[2][1]);
            break;
            case randNum > lengths[2] && randNum <= lengths[3] : arr.push(symbols[3][1]);
            break;
            case randNum > lengths[3] && randNum <= lengths[4] : arr.push(symbols[4][1]);
            break;
            case randNum > lengths[4] : arr.push(symbols[5][1]);
            break;
        }    
    }
    return arr;
}
//function to get difference between weigths
function diffToHundred(symbols){
    let arr = [];
    for (let i = 0; i < symbols.length; i++){
        if (i === 0){
            arr.push(symbols[i][0]);
        } else {
            arr.push(symbols[i][0] + arr[i - 1]);
        }
    }
    return arr;
}

//function to get an array of 12 reels
function allReels(symbols){
    let arr = [];
    for (let i = 0; i < 12; i++){
        arr.push(createReel(symbols));
    }
    return arr;
}

//function to make a log of three by four template literal
function reelStopMessage(stopArr, win){
    let message = `${stopArr[0]} - ${stopArr[1]} - ${stopArr[2]} - ${stopArr[3]}\n`;
    message += `${stopArr[4]} - ${stopArr[5]} - ${stopArr[6]} - ${stopArr[7]}\n`;
    message += `${stopArr[8]} - ${stopArr[9]} - ${stopArr[10]} - ${stopArr[11]}\n`;
    console.log(message);
    if (win > 0){
        console.log(`You have won ${win} currency!`);
    } else {
        console.log(`No win!`);
    }
}

//function to go over an array parameter times
function loopArray(jumps, startPos, reel){
    let i = startPos;
    for (let j = 0; j < jumps; j++){
        i += 1;
        if (i === reel.length){
            i = 0;
        }
    }
    return reel[i];
}

/*function to loop over the array of reels and for each reel get a random starting point and then
use the loopArray function to go over it five times (this is real-time in active game) */
function getWinSymbolReel(symbols){
    let winReel = [];
    let reelPool = allReels(symbols);
    let initPos = 0;
    for (let i = 0; i < reelPool.length; i++){
        initPos = Math.floor(Math.random() * 7) + 1;
        winReel.push(loopArray(5, initPos, reelPool[i]));
    }
    return winReel;
}

//function to see if any of the three lines has a win
function checkWin(winSymbols){
    let winArr = [];
    let reel = winSymbols;
    if (reel[0] === reel[1] && reel[0] === reel[2] && reel[1] === reel[3]){
        winArr.push(reel[0]);
    }
    if (reel[4] === reel[5] && reel[4] === reel[6] && reel[5] === reel[7]){
        winArr.push(reel[4]);
    }
    if (reel[8] === reel[9] && reel[8] === reel[10] && reel[9] === reel[11]){
        winArr.push(reel[8]);
    }
    return winArr;
}


let betMoney = 1000;

//function to calculate the total win
function calcTotalWin(winArr){
    let totalWin = 0;
    //let winArr = checkWin(symbols)
    if (winArr.length > 0){
        for (let i = 0; i < winArr.length; i++){
            switch(winArr[i]){
                case 'Circle' : totalWin += prizeArr[0];
                break;
                case 'Drop' : totalWin += prizeArr[1];
                break;
                case 'Eye' : totalWin += prizeArr[2];
                break;
                case 'Triangle' : totalWin += prizeArr[3];
                break;
                case 'Square' : totalWin += prizeArr[4];
                break;
                case 'Pentagram' : totalWin += prizeArr[5];
                break;
            }
        }
    }
    return totalWin;
}
/*totalPlays is for functionality testing
let totalPlays = 10000;*/
let winSymbols = [];
let theWin = 0;
let plays = 0;
let betPower = 1;
document.getElementById('cashAmount').innerText = betMoney;

    //Commented below is for testing----
//while(plays < totalPlays){
    //plays += 1;
    //betMoney -= 1;
let initCaller = () => {
    betMoney -= betPower;
    for (let i = 0; i < 12; i++){
        let reelPos = document.getElementById(i);
        reelPos.innerHTML = '';
    }
    winSymbols = getWinSymbolReel(symbols);
    if (checkWin(winSymbols).length > 0){
        let winArr = checkWin(winSymbols);
        theWin += calcTotalWin(winArr);
        betMoney += theWin;
        //    betMoney += theWin;
    }
    document.getElementById('cashAmount').innerText = betMoney;
    reelStopMessage(winSymbols, theWin);
    //function for displaying the symbols below
    selectAndAssign(winSymbols);
    theWin = 0;
}
//}
let spinButton = document.getElementById('spinButton');
spinButton.addEventListener('click', initCaller);

//console.log(betMoney + 'money you have left!');
    //Commented above is for testing----


//function to tie it all together
function selectAndAssign(winSymbols){
    for (let i = 0; i < 12; i++){
        let reelPos = document.getElementById(i);
        setTimeout(function(){
        reelPos.insertAdjacentHTML('afterbegin', `<img src="../img/${winSymbols[i]}.png" width="90" height="120" title="image" alt="symbol"></img>`);
        }, 50*i);
    }
}


//exports
module.exports.symbols = symbols;
module.exports.diffToHundred = diffToHundred;
module.exports.createReel = createReel;
module.exports.allReels = allReels;
module.exports.loopArray = loopArray;

