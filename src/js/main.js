// Initialize mobile menu functionality
function initializeMobileMenu() {
	// Select DOM elements
	const menu = document.querySelector("#mobile-menu")
	const overlay = document.querySelector("#mobile-menu-overlay")
	const burger = document.querySelector("#burger")
	const body = document.querySelector("body")

	// Define mobile breakpoint for responsive behavior
	const MOBILE_BREAKPOINT = 992

	// Exit if required elements are missing
	if (!menu || !burger || !body || !overlay) return

	// Function to update menu state
	const updateMenuState = (isOpen) => {
		// Update ARIA attribute for accessibility
		burger.setAttribute("aria-expanded", isOpen)
		// Toggle active class for burger button styling
		burger.classList.toggle("active", isOpen)
		// Toggle menu visibility with animation
		menu.classList.toggle("is-open", isOpen)
		menu.classList.toggle("-translate-x-full", !isOpen)
		menu.classList.toggle("translate-x-0", isOpen)
		// Toggle overlay visibility and interaction
		overlay.classList.toggle("opacity-0", !isOpen)
		overlay.classList.toggle("opacity-100", isOpen)
		overlay.classList.toggle("pointer-events-none", !isOpen)
		overlay.classList.toggle("pointer-events-auto", isOpen)
		// Toggle body scroll lock
		body.classList.toggle("overflow-hidden", isOpen)
	}

	// Handle burger button click to toggle menu
	const handleBurgerClick = () => {
		const isOpening = !menu.classList.contains("is-open")
		updateMenuState(isOpening)
	}

	// Handle overlay click to close the menu
	const handleOverlayClick = (event) => {
		if (event.target === overlay) {
			updateMenuState(false)
		}
	}

	// Handle Escape key to close the menu
	const handleEscapeKey = (event) => {
		if (event.key === "Escape" && menu.classList.contains("is-open")) {
			updateMenuState(false)
		}
	}

	// Handle window resize to reset menu state on desktop
	const handleWindowResize = () => {
		if (window.innerWidth >= MOBILE_BREAKPOINT) {
			updateMenuState(false)
		}
	}

	// Add event listeners
	burger.addEventListener("click", handleBurgerClick)
	overlay.addEventListener("click", handleOverlayClick)
	document.addEventListener("keydown", handleEscapeKey)
	window.addEventListener("resize", handleWindowResize)

	// Initialize menu state on page load
	burger.setAttribute("aria-expanded", "false")
	handleWindowResize()
}

// Run initialization
initializeMobileMenu()

// Initialize mobile submenu functionality (unchanged)
function initializeMobileSubmenu() {
	const menuContainer = document.querySelector("#mobile-menu")

	// Exit if menu container is missing
	if (!menuContainer) return

	// Use event delegation for submenu triggers
	menuContainer.addEventListener("click", (event) => {
		const trigger = event.target.closest(".submenu-trigger")

		// Exit if clicked element is not a submenu trigger
		if (!trigger) return

		const submenuItem = trigger.closest(".with-submenu")

		// Toggle active state for submenu
		if (submenuItem) {
			submenuItem.classList.toggle("active")
		}
	})
}
initializeMobileSubmenu()

// // Toggle Password Visibility
// function togglePasswordVisibility() {
// 	const passwordInput = document.querySelectorAll(".password-input")

// 	if (!passwordInput) return
// 	const togglePasswordButtons = document.querySelectorAll(
// 		".toggle-password-btn",
// 	)
// 	const iconsVisible = document.querySelectorAll(".pswd-icon-visible")
// 	const iconsHidden = document.querySelectorAll(".pswd-icon-hidden")

// 	togglePasswordButtons.forEach((toggleBtn, idx) => {
// 		toggleBtn.addEventListener("click", (e) => {
// 			e.preventDefault()
// 			if (passwordInput[idx].type === "password") {
// 				passwordInput[idx].type = "text"
// 				iconsVisible[idx].style.display = "block"
// 				iconsHidden[idx].style.display = "none"
// 			} else {
// 				passwordInput[idx].type = "password"
// 				iconsVisible[idx].style.display = "none"
// 				iconsHidden[idx].style.display = "block"
// 			}
// 		})
// 	})
// }

// togglePasswordVisibility()
