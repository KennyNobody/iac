import {$,jQuery} from 'jquery';
import fancybox from '@fancyapps/fancybox';
import select2 from 'select2';
import datepicker from 'air-datepicker';
import Mmenu from 'mmenu-js';
import "%modules%/modal/modal";
import "%modules%/header/header";
import "%modules%/form/form";
import "%modules%/footer/footer";

document.addEventListener('DOMContentLoaded', function() {
	function temporary(link) {
		var elem = document.getElementById('temporary_1');
		elem.click = function() {
            // location.href('http://inflowtech.ru/' + link);
            location.href = 'newPage.html';
        };
    }


});

$(document).ready(function() {
    // изображения внутри публикации
    $('.single__content.text img:not(.image-custom)').css("width", "calc(100% + 88px)");
    $('.single__content.text p').css("font-family", "Roboto");
    $('.single__content.text span').css("font-family", "Roboto");
    $('.iac-article a > img').css("width", "100%");
    $('.mm-navbar__title > span').html('Меню');
});

$(document).ready(function () {
	$('#modal-1 .modal__button').click(function (e) {
		e.stopPropagation();
		e.preventDefault();
		var $form = $(this).closest('form');
		var action = $form.attr('action');
		var data = $form.serialize();

		console.log(data);
		$.ajax({
			url: action,
			data: data,
			type: "post",
			dataType: "JSON",
			success: function (result) {
				console.log('success');
				console.log(result);
				MicroModal.close('modal-1');
				MicroModal.show('modal-2');

			},
			error: function (result) {
				console.log('error');
				console.log(result);
			}
		})
	})
});