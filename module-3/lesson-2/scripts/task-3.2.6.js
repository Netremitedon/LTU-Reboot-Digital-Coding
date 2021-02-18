function wearAcoat(temperature){
    blnNotNumber = false;
    if(isNaN(temperature)){
        blnNotNumber = true;
    }
    if(!blnNotNumber){
        if(temperature < 0){
            console.log('Wear a coat');
        } else if (temperature < 10){
            console.log('Wear a coat & hat');
        } else if (temperature < 15){
            console.log('Stay inside');
        } else {
            console.log('You don\'t need a coat')
    } else {
        console.log('temperature needs to be a number')
    }
}
wearAcoat(20);
wearAcoat(14);
wearAcoat(5);
wearAcoat(-3);
wearAcoat('Cedric');
wearAcoat({});
wearAcoat([]);