// LOOP from 0 to 100
for(counter=0;counter<=100;counter++){
    // SET output = "";
    var output = "";    
    // IF number divides by 3
    if(counter % 3 == 0){
        // THEN output += "Fizz"
        output += 'Fizz';
    }
    // IF number divides by 5
    if(counter % 5 == 0){
        // THEN output += "Buzz"
        output += 'Buzz';
    }
    // IF output == ""
    if(output == ""){
        // THEN output = number
        output = counter;
    }
    //OUTPUT the output
    console.log(output);
}


// FUNCTION fixStart(string)
function fixStart(string){
    // SET {firstCharacter} = first character of the string
    var firstCharacter = string[0].toLowerCase();
    console.log(firstCharacter);
    // SET {newString} equal "";
    var newString = "";
    // LOOP through each character of string
    for(counter=0;counter < string.length;counter++){
        var currentCharacter = string[counter].toLowerCase();
        // IF {newString} is empty
        if(!newString){
            // THEN {newString} equal {firstCharacter}
            newString = currentCharacter;
        }
        // ELSE 
        else {
            // IF current character equals {firstCharacter}
            if(currentCharacter == firstCharacter){
                // THEN newString += *
                newString += '*';
            }
            // ELSE 
            else {
                // THEN newString += current character
                newString += currentCharacter;
            }
        }
    }
    return newString;
}

var string = fixStart('bubble');
console.log(string);
string = fixStart('alexander');
console.log(string);
string = fixStart('goggle');
console.log(string);