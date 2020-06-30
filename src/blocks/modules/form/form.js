import fancybox from '@fancyapps/fancybox';

$(document).ready(function() {
	$('.form__select').select2();
	$('.select-date').datepicker();

	(function toggleCheckboxForm(){
		const checkbox = document.querySelector('#write__form .checkbox__input');
		const btn = document.querySelector('#write__form .write__btn');

		if (checkbox && btn) {
			checkbox.addEventListener('change', function(){
				if (checkbox.checked == true) {
					btn.classList.remove('write__btn--disabled');
				} else {
					btn.classList.add('write__btn--disabled');
				}
			})
		}
	})();

	// $('.single--han .single__content a').fancybox({

	// });

	$('.single--han .single__content a').each(function () {
		if ($(this).has('img').length) {
			$(this).addClass('fancybox-single');
		}
	});

	$().fancybox({
		selector : '.fancybox-single'
	});
	
});