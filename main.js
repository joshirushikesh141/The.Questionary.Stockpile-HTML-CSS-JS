
//-------------------------TIME------------------------------------
const time = document.getElementById('time');
const showAmPm = true;

function timeDisplay(){
	let today = new Date(),
		hour = today.getHours(),
		min = today.getMinutes(),
		sec = today.getSeconds();
	
	// set am or pm
	const ampm = hour > 12 ? 'PM' : 'AM';
	
	// 12hour format
	hour = hour % 12;
	
	//output time
	time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? ampm: ''}`;
	
	//`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? ampm: ''}`;

	setTimeout(timeDisplay,1000);
}

function addZero(n) {
	return(parseInt(n,10)< 10 ? '0' : '') + n; 
}

timeDisplay();