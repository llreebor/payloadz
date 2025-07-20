function initializeCustomSelect(selectId, optionsId, selectedOptionId) {
	const customSelect = document.getElementById(selectId)
	const selectedOption = document.getElementById(selectedOptionId)
	const customOptions = document.getElementById(optionsId)
	const options = customOptions.getElementsByClassName("option")

	if (!customSelect) return

	customSelect.addEventListener("click", () => {
		customOptions.classList.toggle("hidden")
	})

	for (let option of options) {
		option.addEventListener("click", () => {
			selectedOption.innerText = option.innerText
			customOptions.classList.add("hidden")
		})
	}

	document.addEventListener("click", (event) => {
		const target = event.target
		if (!customSelect.contains(target) && !customOptions.contains(target)) {
			customOptions.classList.add("hidden")
		}
	})
}
initializeCustomSelect("select-lang", "options-lang", "selected-option-lang")
initializeCustomSelect(
	"select-currency",
	"options-currency",
	"selected-option-currency",
)
