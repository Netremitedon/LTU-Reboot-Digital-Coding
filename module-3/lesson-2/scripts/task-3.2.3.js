function getFullName(firstName, lastName){
  let fullName = firstName + ' ' + lastName;
  return fullName;
}

var fName = 'Cedric';
var lName = 'Demolis'

var fName2 = 'Cedric';
var lName2 = 'Netremitedon';

var fullName1 = getFullName(fName, lName);
console.log(fullName1);
var fullName2 = getFullName(fName2, lName2);
console.log(fullName2);
