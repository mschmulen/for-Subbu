
var timeFactory = exports = module.exports;

timeFactory.useDateTime = false;

/**
 * Add Mintes to a time string
 * @timeString : [H]H:MM {AM|PM}
 * @add_minutes : number in minutes to add
 * @return string : AddMinutes ("9:13 AM", 10) would return "9:23 AM"
 */
function AddMinutesWithDateTime( timeString, add_minutes )
{
	var outText  = "-";
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

/**
 * Add Mintes to a time string
 * @timeString : [H]H:MM {AM|PM}
 * @add_minutes : number in minutes to add
 * @return string : AddMinutes ("9:13 AM", 10) would return "9:23 AM"
 */
function AddMinutesWithoutDateTime( timeString, add_minutes )
{
	var outText  = "-";
	//console.log( "timeString = " + timeString + " ---- " +  "add_minutes = " + add_minutes );
	
	if ( !timeString || !add_minutes ) { console.log( "invalid arguments"); return outText; }
	
	var splitOnSpace = timeString.split(" ");
	if ( splitOnSpace.length < 2 ) { console.log( "invalid arguments"); return outText; }
	
	var isAM = splitOnSpace[1].toUpperCase() === "AM";
	
	var splitOnColon = splitOnSpace[0].split(":");
	if ( splitOnColon.length < 2 ) { console.log( "invalid arguments"); return outText; }
	
	var hours = parseInt( splitOnColon[0]);
	var minutes = parseInt( splitOnColon[1]);
	
	if ( isAM == false ){ hours = hours + 12;}
	
	var totalMinutes = hours * 60 + minutes + add_minutes;
	
	var finalHours = parseInt(totalMinutes / 60);
	
	var finalMinutes = totalMinutes % 60;
	
	var AM_PM = finalHours >= 12 ? 'PM' : 'AM';
	
	var hoursInAM_PM = finalHours >= 12 ? finalHours - 12 : finalHours;
	
	outText = hoursInAM_PM + ":" + finalMinutes + " " + AM_PM;
	
	return outText;
}//end AddMinutesWithoutDateTime

timeFactory.AddMinutes = function ( timeString, add_minutes )
{
	if ( timeFactory.useDateTime == true ) {
		return AddMinutesWithDateTime( timeString, add_minutes); 
	}
	return AddMinutesWithoutDateTime( timeString, add_minutes);
}

