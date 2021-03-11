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
