// Giving the context switcher on the dashboard a title + deboldifying the context switcher title
document
	.querySelector('.dashboard-sidebar')
	.childNodes[1].childNodes[1].childNodes[1].classList.remove('text-bold');

let contextSwitcherSign = document.createElement('h2');
contextSwitcherSign.classList.value = 'hide-sm hide-md f5 mb-1';
document
	.querySelector('.dashboard-sidebar')
	.childNodes[1].childNodes[1].childNodes[1].prepend(contextSwitcherSign);
contextSwitcherSign.innerText = 'Context Switch';

// Adding the profile button + misc buttons to the top of the dashboard sidebar
let ghShortcutBtns = document.createElement('div');
ghShortcutBtns.classList.add(
	'border-bottom',
	'color-border-secondary',
	'py-3',
	'mt-3'
);
document.querySelector('.dashboard-sidebar').prepend(ghShortcutBtns);
ghShortcutBtns.innerText = 'Appended.';
