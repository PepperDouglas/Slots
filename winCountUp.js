async function winCount(fw) {
    let winContainer = document.getElementsByClassName('winCountUp');
    let i = 1;
    while (i <= fw){
        let timeout = (0.99**i)*200;
        console.log(`WIN: ${fw}, TIMEOUT: ${timeout}, COUNT: ${i}`);
        let promise = new Promise(function(resolve, reject){
            setTimeout(function(){
                winContainer[0].innerText = i;
                resolve();
            }, timeout);
        });
        await promise;
        i++;
    }
    document.getElementById('spinButton').style.visibility = "visible";
}

module.exports.winCount = winCount;