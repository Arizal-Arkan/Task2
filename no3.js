let numbers = [9,5,4,4,5,1,1,1,6];

let median = 0, numsLen = numbers.length;
    numbers.sort();
 
    if (
        numsLen % 2 === 0
    ) {
        
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { 

        median = numbers[(numsLen - 1) / 2];
    }

let mean = numbers.reduce((semua, jumlah) => semua + jumlah) / numbers.length;

let modus
let sering = 0 
    for(i = 0; i < numsLen; i++){
        let muncul = 0
        for(y = 0; y < numsLen; y++){
            if(numbers[i] === numbers[y] && i!==y){
                muncul++
                if(muncul > sering){
                    modus = numbers[i]
                    sering = muncul
                }
            }
        }
    }

    console.log("hasil median :" + median)
    console.log("hasil mean :" + mean)
    console.log("hasil modus :" + modus)
