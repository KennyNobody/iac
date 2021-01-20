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
})