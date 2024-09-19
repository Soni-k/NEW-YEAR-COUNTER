const days = document.querySelector("#day")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#min")
const seconds = document.querySelector("#sec")

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

console.log("currentYear:", currentYear);
console.log("nextYear:", nextYear);

setInterval(() => {

	const currentDate = new Date();
	const newYearDate = new Date(`january 01 ${nextYear} 00:00:00`);
	const totalSeconds = (newYearDate - currentDate) / 1000;

	const daysLeft = Math.floor(totalSeconds / 3600 / 24);
	const hoursLeft = Math.floor(totalSeconds / 3600) % 24;
	const minutesLeft = Math.floor(totalSeconds / 60) % 60;
	const secondsLeft = Math.floor(totalSeconds) % 60;

	days.innerHTML = daysLeft;
	hours.innerHTML = hoursLeft;
	minutes.innerHTML = minutesLeft;
	seconds.innerHTML = secondsLeft

}, 1000);

