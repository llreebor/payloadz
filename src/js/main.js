// Password Visibility
const togglePasswordVisibility = () => {
	const btns = document.querySelectorAll('.show-password-btn')
	if (btns) {
		btns.forEach((button) => {
			button.addEventListener('click', function () {
				const passwordInput = this.previousElementSibling

				if (passwordInput.type === 'password') {
					passwordInput.type = 'text'
				} else {
					passwordInput.type = 'password'
				}
			})
		})
	}
}
togglePasswordVisibility()

// Dropzone
function handleDropZone() {
	const dropZone = document.getElementById('drop-zone')
	if (dropZone) {
		dropZone.addEventListener('dragover', (event) => {
			event.preventDefault()
			dropZone.classList.add('bg-gray-100')
		})

		dropZone.addEventListener('dragleave', () => {
			dropZone.classList.remove('bg-gray-100')
		})

		dropZone.addEventListener('drop', (event) => {
			event.preventDefault()
			dropZone.classList.remove('bg-gray-100')
			const files = event.dataTransfer.files

			// Processing dropped files
			console.log('Dropped files:', files)
		})
	}
}
handleDropZone()

// Select
function togglePriceSelect() {
	const selectTrigger = document.querySelector('.select-trigger')
	const options = document.querySelector('.options')
	const currencyText = document.querySelector('.currency-text')

	if (selectTrigger) {
		selectTrigger.addEventListener('click', () => {
			options.classList.toggle('hidden')
		})

		document.querySelectorAll('.option').forEach((option) => {
			option.addEventListener('click', () => {
				const flag = option.querySelector('img').src
				const text = option.textContent.trim()

				// Обновление выбранного значения
				currencyText.textContent = text
				selectTrigger.querySelector('img').src = flag

				options.classList.add('hidden')
			})
		})

		document.addEventListener('click', (e) => {
			if (!e.target.closest('.relative')) {
				options.classList.add('hidden')
			}
		})
	}
}
togglePriceSelect()
