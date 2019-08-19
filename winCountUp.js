async function winCount(fw) {
    let winContainer = document.getElementsByClassName('winCountUp');
    let hasStopped = false;
    document.addEventListener('click', function instantCount() {
        winContainer[0].innerText = fw;
        document.getElementById('spinButton').style.visibility = "visible";
        hasStopped = true;
        document.removeEventListener('click', instantCount, true);
        return;
    }, true);
    let i = 1;
    let timeout = 200;
    while (i <= fw){
        //also, the timeout must be limited to 1
        timeout <= 1 ? timeout = 1 : timeout = (0.99**i)*200;
        timeout < 1 ? console.log('lesser') : console.log('higher');
        console.log(`WIN: ${fw}, TIMEOUT: ${timeout}, COUNT: ${i}`);
        let promise = new Promise(function(resolve, reject){
            setTimeout(function(){
                if (hasStopped === true){
                    return;
                }
                winContainer[0].innerText = i;
                resolve();
            }, timeout);
        });
        await promise;
        //increase i more if timeout has hit 1 ms
        i > 100000 ? i += 1000 : 
            i > 10000 ? i += 100 :
                i > 1000 ? i += 10 :
                    i > 400 ? i += 4 :
                        i++;
        
    }
    document.removeEventListener('click', instantCount, true);
    i < fw ? winContainer[0].innerText = fw : null;
    document.getElementById('spinButton').style.visibility = "visible";
}



module.exports.winCount = winCount;