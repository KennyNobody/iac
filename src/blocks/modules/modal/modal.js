import MicroModal from 'micromodal';

window.addEventListener('load', function () {
	MicroModal.init({
		onShow: modal => console.info(`${modal.id} is shown`),
		onClose: modal => console.info(`${modal.id} is hidden`),
		openTrigger: 'data-custom-open',
		closeTrigger: 'data-custom-close',
		openClass: 'is-open',
		disableFocus: false,
	});

	let flag;
	let subscribeCheckbox = document.querySelector('.modal__save-input--subscribe');

	subscribeCheckbox.addEventListener('change', function() {
		if (this.checked == true) {
			localStorage.setItem('flag', 'true')
		} else {
			localStorage.setItem('flag', 'false')
		}
	})

	if (localStorage.getItem('flag') != 'true') {
		
		setTimeout( function(){
			MicroModal.show('modal-1');
		}, 10000);
	}

	function setState () {

	}
})

