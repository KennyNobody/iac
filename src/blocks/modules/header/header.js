document.addEventListener(
	"DOMContentLoaded", () => {
		new Mmenu( "#mobile-menu", {
			
		}, {
			classNames: {
				selected: "active"
			},
			language: 'ru'
		},
		);
	});