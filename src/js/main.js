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

// Copy to Clipboard
function copyToClipboard(textId, buttonId) {
	const text = document.getElementById(textId)
	const button = document.getElementById(buttonId)

	if (button) {
		button.addEventListener('click', () => {
			navigator.clipboard.writeText(text.textContent)
		})
	}
}

copyToClipboard('link-text', 'link-btn')
copyToClipboard('code-text', 'code-btn')

// Toggle Hidden Content in step 4
function toggleVisibility() {
	const items = document.querySelectorAll('.radio-item input[type="radio"]')
	items.forEach((radio) => {
		radio.addEventListener('change', function () {
			// Hide all hidden blocks first
			document.querySelectorAll('.radio-hidden').forEach((block) => {
				block.classList.add('hidden')
			})

			// Show the hidden block corresponding to the checked radio
			if (this.checked) {
				const hiddenBlock =
					this.closest('.radio-item').querySelector('.radio-hidden')
				hiddenBlock.classList.remove('hidden')
			}
		})
	})
}
toggleVisibility()
