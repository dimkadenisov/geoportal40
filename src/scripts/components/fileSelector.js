const inputs = document.querySelectorAll('.inputfile');

for (let i = 0; i < inputs.length; i++) {
	const input = inputs[i];
	const label = input.nextElementSibling;
	const labelVal = label.innerHTML;

	input.addEventListener('change', function (e) {
		const fileName =
			this.files && this.files.length > 1
				? 'Выбрано ' + this.files.length + ' файлов'
				: e.target.value.split('\\').pop();

		if (fileName) label.innerHTML = fileName;
		else label.innerHTML = labelVal;
	});
}

document.body.addEventListener('change', (e) => {
	const fileInput = e.target.closest('.file-selector__input');

	if (!fileInput) return;

	const fileName = e.target.value.split('\\').pop();
	fileInput.parentNode.parentNode.querySelector(
		'.file-selector__filename',
	).innerText = fileName;
});

document.body.addEventListener('submit', (e) => {
	const form = e.target.closest('form');

	if (!form) return;

	e.preventDefault();
	document.querySelector('#biba');
	console.log(e);
});
