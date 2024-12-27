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
