/** @format */

let h = document.querySelector('#hr');
let m = document.querySelector('#min');
let s = document.querySelector('#sec');
let f = document.querySelector('#format');
let hhr = document.querySelector('#hr-c');

function clockLive() {
	let date = new Date();

	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	hr = hr % 12;
	hr = hr === 0 ? 12 : hr;

	h.innerHTML = hr < 10 ? '0' + hr : hr;
	m.innerHTML = min < 10 ? '0' + min : min;
	s.innerHTML = sec < 10 ? '0' + sec : sec;
	f.innerHTML = hr > 11 ? 'pm' : 'am';

	hhr.style.width = (sec / 60) * 100 + '%';
}

setInterval(() => {
	clockLive();
}, 1000);

clockLive();
