function percentageCalculator(number, percent){
   var blnValidated = true;
   if(isNaN(number)){
       blnValidated = false;
   }
   if(isNaN(percent)){
    blnValidated = false;
}
if(blnValidated){
    var onePercent = number / 100;
    var percentValue = onePercent * percent;
    return percentValue;
} else{
    console.log('Both arguments need to be numbers')
}
}
var sum = percentageCalculator(100, 50);
console.log(sum);

sum = percentageCalculator(60,20);
console.log(sum);
