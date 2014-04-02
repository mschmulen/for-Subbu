
var timeFactory = require('./timeFactory.js');

//AddMinutes( "[H]H:MM {AM|PM}")
console.log( timeFactory.useDateTime);
console.log( timeFactory.AddMinutes( "9:13 AM", 10));


console.log( timeFactory.AddMinutes( "11:30 AM", 180));
console.log( timeFactory.AddMinutes( "2:13 AM", 10));
console.log( timeFactory.AddMinutes( "9:03 AM", 20));
console.log( timeFactory.AddMinutes( "1:13 PM", 30));

console.log( timeFactory.AddMinutes( "12:13 PM", 50));
console.log( timeFactory.AddMinutes( "9:13 PM", 10));

/*
AddMinutes( null, 10);
AddMinutes( "9:13 AM", null);
AddMinutes( null, null);
*/
