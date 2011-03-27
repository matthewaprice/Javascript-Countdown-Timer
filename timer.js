$(document).ready(function() {

	function makeTimer() {
		
		$('#timer').each(function() {
			
			var endTime = new Date("September 01, 2011 00:00:00");			
			var endTime = (Date.parse(endTime)) / 1000;
			
			var now = new Date();
			var now = (Date.parse(now) / 1000);
			
			var timeLeft = endTime - now;
			
			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
			
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }
										
			$("#timer #days").html("<span>Days</span>" + days);
			$("#timer #hours").html("<span>Hours</span>" + hours);
			$("#timer #minutes").html("<span>Minutes</span>" + minutes);
			$("#timer #seconds").html("<span>Seconds</span>" + seconds);		
			
		});
		
	}
	
	setInterval(function() { makeTimer(); }, 1000);
	
});

// HTML output with this method
// <div id="timer">
//     <ul>
//           <li id="days">...</li>
//           <li id="hours">...</li>
//           <li id="minutes">...</li>
//           <li id="seconds">...</li>
//     </ul>
// </div>
