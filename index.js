
/**
 * Add Mintes to a time string
 * @timeString : [H]H:MM {AM|PM}
 * vadd_minutes : number in minutes to add
 * @return string : AddMinutes ("9:13 AM", 10) would return "9:23 AM"
 */
function AddMinutes( timeString, add_minutes )
{
	//console.log( "timeString = " + timeString + " ---- " +  "add_minutes = " + add_minutes );
	
	if ( !timeString || !add_minutes ) { console.log( "invalid arguments"); return outText; }
	
	var splitOnSpace = timeString.split(" ");
	if ( splitOnSpace.length < 2 ) { console.log( "invalid arguments"); return outText; }
	
	var isAM = splitOnSpace[1].toUpperCase() === "AM";
	
	var splitOnColon = splitOnSpace[0].split(":");
	if ( splitOnColon.length < 2 ) { console.log( "invalid arguments"); return outText; }

	var myDate = new Date( Date.parse("Thu, 01 Jan 1970 "+splitOnSpace[0]+" ") );
	
	myDate  = new Date(myDate.getTime() + add_minutes*60000);
	
	var AM_PM = myDate.getHours() >= 12 ? 'PM' : 'AM';
	var hoursInAM_PM = myDate.getHours() >= 12 ? myDate.getHours() - 12 : myDate.getHours();
	
	outText = hoursInAM_PM + ":" +  myDate.getMinutes() + " " + AM_PM;
	
	return outText;
	
};//end addTime

//AddMinutes( "[H]H:MM {AM|PM}")
console.log( AddMinutes( "9:13 AM", 10));
console.log( AddMinutes( "11:30 AM", 180));
console.log( AddMinutes( "2:13 AM", 10));
console.log( AddMinutes( "9:03 AM", 20));
console.log( AddMinutes( "1:13 PM", 30));

console.log( AddMinutes( "12:13 PM", 50));
console.log( AddMinutes( "9:13 PM", 10));

/*
AddMinutes( null, 10);
AddMinutes( "9:13 AM", null);
AddMinutes( null, null);
*/

