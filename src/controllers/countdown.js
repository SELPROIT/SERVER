// simplyCountdown('#cuenta', { //ponerle el selector al que le quiero aplicar la cuenta regresiva
// 	year: 2023, // required
// 	month: 8, // required
// 	day: 20, // required
// 	hours: 7, // Default is 0 [0-23] integer
// 	minutes: 31, // Default is 0 [0-59] integer
// 	seconds: 0, // Default is 0 [0-59] integer
// 	words: { //words displayed into the countdown
// 		days: 'Día',
// 		hours: 'Hora',
// 		minutes: 'Minuto',
// 		seconds: 'Segundo',
// 		pluralLetter: 's'
// 	},
// 	plural: true, //use plurals
// 	// inline: false, //esto es para el css
// 	// inlineClass: 'simply-countdown-inline', //css
// 	// in case of inline set to false
// 	enableUtc: true, //Use UTC as default
// 	onEnd: function() {
// 		document.getElementById('portada').classList.add('oculta'); //esta función se ejecuta cuando finaliza el contador
// 		return; 
// 	}, //Callback on countdown end, put your own function here
// 	refresh: 1000, // default refresh every 1s
// 	// sectionClass: 'simply-section', //section css class
// 	// amountClass: 'simply-amount', // amount css class
// 	// wordClass: 'simply-word', // word css class
// 	zeroPad: false,
// 	countUp: false //cuando llega a 0 si lo pongo en true, cuenta hacia arriba
// });