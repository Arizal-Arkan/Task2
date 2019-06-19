let arrayHuruf = ['arkan', 'rizal', 'dedi', 'dikun', 'elda'];
let arrayPerintah = [true,false,false,true,true];

for(x = 0; x < arrayPerintah.length ; x++){
    if(arrayPerintah[x] === true){
        console.log(arrayHuruf[x])
    }
}