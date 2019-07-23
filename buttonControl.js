
let btnInit = (betPower) => {
    let moreBtn = document.getElementById('more');
    let lowBtn = document.getElementById('low');
    moreBtn.addEventListener('click', () => {
        if (betPower < 40 && betPower < 5){
            betPower += 1;
        } else if (betPower < 40) {
            betPower += 5;
        }
        document.getElementById('betLevelText').innerText = `Bet Amount: ${betPower}`;
    });
    lowBtn.addEventListener('click', () => {
        if (betPower > 1 && betPower < 6){
            betPower -= 1;
        } else if (betPower > 1){
            betPower -= 5;
        }
        document.getElementById('betLevelText').innerText = `Bet Amount: ${betPower}`;
    });
}

module.exports.btnInit = btnInit;