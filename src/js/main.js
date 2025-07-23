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

// Sliders
new Swiper(".swiper-category-1", {
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-category-1-next",
		prevEl: ".swiper-category-1-prev",
	},
	spaceBetween: 12,

	breakpoints: {
		320: {
			slidesPerView: 1.5,
		},
		460: {
			slidesPerView: 2.1,
		},
		768: {
			slidesPerView: 2.3,
		},
		992: {
			slidesPerView: 4,
		},
	},
})
new Swiper(".swiper-category-2", {
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-category-2-next",
		prevEl: ".swiper-category-2-prev",
	},
	spaceBetween: 12,

	breakpoints: {
		320: {
			slidesPerView: 1.5,
		},
		460: {
			slidesPerView: 2.1,
		},
		768: {
			slidesPerView: 2.3,
		},
		992: {
			slidesPerView: 4,
		},
	},
})
new Swiper(".swiper-category-3", {
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-category-3-next",
		prevEl: ".swiper-category-3-prev",
	},
	spaceBetween: 12,

	breakpoints: {
		320: {
			slidesPerView: 1.5,
		},
		460: {
			slidesPerView: 2.1,
		},
		768: {
			slidesPerView: 2.3,
		},
		992: {
			slidesPerView: 4,
		},
	},
})
new Swiper(".swiper-reviews", {
	// Navigation arrows

	spaceBetween: 20,

	breakpoints: {
		320: {
			slidesPerView: 1.2,
		},
		480: {
			slidesPerView: 1.4,
		},
		768: {
			slidesPerView: 2.1,
		},
		1024: {
			slidesPerView: 6,
		},
		fill: "row",
		rows: 2,
	},
})
new Swiper(".swiper-similar", {
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-similar-next",
		prevEl: ".swiper-similar-prev",
	},
	spaceBetween: 12,

	breakpoints: {
		320: {
			slidesPerView: 1.5,
		},
		460: {
			slidesPerView: 2.1,
		},
		768: {
			slidesPerView: 2.3,
		},
		992: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 5,
		},
	},
})
const thumbs = new Swiper(".swiper-selected-home-thumbnails", {
	// Optional parameters
	loop: false,
	breakpoints: {
		1024: {
			slidesPerView: 5.1,
		},
		1280: {
			slidesPerView: 7.1,
		},
	},
	navigation: {
		nextEl: ".thumb-next",
		prevEl: ".thumb-prev",
	},
})

new Swiper(".swiper-selected-home", {
	spaceBetween: 12,
	slidesPerView: 1,
	loop: false,
	on: {
		init: function () {
			document.querySelector(".total").textContent = this.slides.length
			document.querySelector(".current").textContent = this.realIndex + 1
		},
		slideChange: function () {
			document.querySelector(".current").textContent = this.realIndex + 1
		},
	},
	thumbs: {
		swiper: thumbs,
	},
	navigation: {
		nextEl: ".thumb-next",
		prevEl: ".thumb-prev",
	},
})
// Show More Review
function showMoreReviews() {
	const buttons = document.querySelectorAll(".show-more-btn")
	const content = document.querySelectorAll(".hidden-text")

	buttons.forEach((btn, idx) => {
		btn.addEventListener("click", () => {
			if (content[idx].classList.contains("hidden")) {
				content[idx].classList.remove("hidden", "opacity-0")
				btn.textContent = "Show less"
			} else {
				content[idx].classList.add("hidden", "opacity-0")
				btn.textContent = "Show more"
			}
		})
	})
}
showMoreReviews()
