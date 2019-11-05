$(document).ready(function(){
	refreshValues();
	setInterval(function(){refreshValues()},5000);
});

function refreshValues(){
	$.getJSON('../data.json',function(data){
		console.log(data);
		$('.temperature').text( fToC(data['tempf']).toFixed(2) );
		$('.barometer').text( hgToMb(data['baromrelin']).toFixed(0) );
		$('.raindaily').text( inchToCm(data['dailyrainin']).toFixed(2) );
		$('.rainevent').text( inchToCm(data['eventrainin']).toFixed(2) );
		$('.raintotal').text( inchToCm(data['totalrainin']).toFixed(2) );
		$('.solarradiation').text( data['solarradiation'] );
		$('.winddirection').text( data['winddir'] );
		$('.windgust').text( mToKmh(data['windgustmph']).toFixed(1) );
		$('.windspeed').text( mToKmh(data['windspeedmph']).toFixed(1) );
	})
}

function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  return fToCel;
} 

function hgToMb(hg) {
  return (hg / 0.075 * 2.54);
} 

function inchToCm(inch) {
  return (inch * 2.54);
} 

function mToKmh(m) {
  return (m * 1.60934);
} 