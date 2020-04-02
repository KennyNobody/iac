document.addEventListener(
	"DOMContentLoaded", () => {
		let linksArray = [];

		(function() {
			const socLinks = socials;
			let vkLink, fbLink, twitterLink, okLink;

			if (socials.vk) {
				vkLink = '<a href="' + socials.vk + '" class="social__link social__link--footer"><svg class="icon-svg"><use xlink:href="img/sprites/sprite.svg#vk"></use></svg></a>';
				linksArray.push(vkLink)
			}

			if (socials.fb) {
				fbLink = '<a href="' + socials.fb + '" class="social__link social__link--footer"><svg class="icon-svg"><use xlink:href="img/sprites/sprite.svg#fb"></use></svg></a>';
				linksArray.push(fbLink)
			}

			if (socials.twitter) {
				twitterLink = '<a href="' + socials.twitter + '" class="social__link social__link--footer"><svg class="icon-svg"><use xlink:href="img/sprites/sprite.svg#twitter"></use></svg></a>';
				linksArray.push(twitterLink)
			}

			if (socials.ok) {
				okLink = '<a href="' + socials.ok + '" class="social__link social__link--footer"><svg class="icon-svg"><use xlink:href="img/sprites/sprite.svg#ok"></use></svg></a>';
				linksArray.push(okLink)
			}

			if (socials.tg) {
				tgLink = '<a href="' + socials.tg + '" class="social__link social__link--footer"><svg class="icon-svg"><use xlink:href="img/sprites/sprite.svg#tg"></use></svg></a>';
				linksArray.push(tgLink)
			}

		})();
		new Mmenu( "#mobile-menu", {
			"navbars": [
			{
				"position": "bottom",
				"content": linksArray
			}
			]
		}, {
			classNames: {
				selected: "active"
			},
			language: 'ru'
		},
		);
	});

(function toggleSearch() {
	const searchBtn = document.querySelector('.header__open-search');
	const searchBlock = document.querySelector('.header__mob-search');

	if (searchBtn && searchBlock) {
		searchBtn.addEventListener('click', function() {
			searchBlock.classList.toggle('header__mob-search--open');
		})
	}
})();