let ghShortcutBtns = document.createElement('div');
ghShortcutBtns.classList.add(
	'border-bottom',
	'color-border-secondary',
	'py-3',
	'mt-3',
	'mb-4'
);
document.querySelector('.dashboard-sidebar').prepend(ghShortcutBtns);
ghShortcutBtns.innerText = 'Appended.';
