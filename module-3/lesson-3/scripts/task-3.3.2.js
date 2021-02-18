function drinkOrder(size, drink){
    blnValidation = true;
    switch(size){
        case 'small':
        case 'medium':
        case 'large':
            //do nothing
        break;
        default:
           strMessage = 'The drink you have ordered is not valid'
           blnValidation = false;
        break;
    }
    switch(drink){
        case 'cola':
        case 'lemon':
        case 'orange':
            //do nothing
        break;
        default:
           strMessage = 'The Drink you have ordered is not valid';
           blnValidation = false;
        break;
    }
    if(blnValidation){
       strMessage = 'You have ordered a ' + size;
     switch(drink){
        case 'cola':
             strMessage += ' Cola';
        break;
        case 'lemon':
        strMessage += ' Lemonade';
        break;
        case 'orange':
        strMessage += ' Orangeade';
        break;
    }
    return strMessage;
    }
}


order = drinkOrder('medium','cola');
console.log(order)
