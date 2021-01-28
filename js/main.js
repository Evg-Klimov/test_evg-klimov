const menuActive = () => {
	const responsBtn = document.querySelector('.respons-btn');
	const list = document.querySelector('.nav-menu__inner');

	responsBtn.addEventListener('click', () => {
		list.classList.toggle('nav-menu__active');
	});
}
menuActive();

