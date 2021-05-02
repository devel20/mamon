document.querySelector('.menu-icon').onclick = function () {
	document.querySelector('.menu-icon').classList.toggle('active');
	document.querySelector('.nav-wrap').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
}


