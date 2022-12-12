(() => {
	const accordionButtons = document.querySelectorAll('.accordion button');
	accordionButtons.forEach((button) => {
		button.addEventListener('click', (e) => {
			const allAccordions = document.querySelectorAll('.accordion');
			const expandedAccordions = [...allAccordions].filter((accordion) => {
				return accordion.classList.contains('expanded');
			});
			const accordion = e.target.closest('.accordion');
			if (expandedAccordions.includes(accordion)) {
				accordion.classList.remove('expanded');
			} else {
				accordion.classList.add('expanded');
			}
		});
	});
})();