
const  handleKeydown = (e) => {
	const menu = document.getElementById('menu');
	if (e.key === 'ArrowDown') {
		const current = document.querySelector('.nav-link.active');
		const next = current.parentElement.nextElementSibling;
		if (next) {
			current.classList.remove('active');
			next.firstElementChild.classList.add('active');
			next.firstElementChild.focus();
		}
	}
	if (e.key === 'ArrowUp') {
		const current = document.querySelector('.nav-link.active');
		const prev = current.parentElement.previousElementSibling;
		if (prev) {
			current.classList.remove('active');
			prev.firstElementChild.classList.add('active');
			prev.firstElementChild.focus();
		}
	}
}

export function addKeyboardEvent() {
	document.querySelector('#menu').addEventListener('keydown', handleKeydown);
}

export function removeKeyboardEvent() {
	document.removeEventListener('keydown', handleKeydown);
}
