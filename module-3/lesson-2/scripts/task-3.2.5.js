function wearAcoat(temperature){
    if(temperature < 0){
        console.log('Wear a coat');
    } else if (temperature < 10){
        console.log('Wear a coat & hat');
    } else if (temperature < 15){
        console.log('Stay inside');
    } else {
        console.log('You don\'t need a coat')
    }
}
wearAcoat(20);
wearAcoat(14);
wearAcoat(5);
wearAcoat(-3);