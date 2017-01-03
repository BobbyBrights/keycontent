//menu toggle

$(document).ready(function () {

    // var url = "http://google.com";
    // console.log($('#testComplete').attr('id'));
    // $('#testComplete').on('hide.bs.modal', function() {
    //
    //     window.location.href = url;
    //     $(location).attr('href',url);
    // });
   

    $('.toggle-mnu').on('click', function () {
        $('.toggle-mnu').toggleClass('on');
        if ($('.toggle-mnu').hasClass('on')) {

            $('.sidebar-dashboard').addClass('open');
            $('.main-private').addClass('canvas-left');

            /*$('.sidebar').css({
             'margin-left': '0'
             });*/
        } else {
            $('.sidebar-dashboard').removeClass('open');
            $('.main-private').removeClass('canvas-left');
            /*/$('.sidebar').css({
             'margin-left': '-300px'
             });*/
        }
    });


    //slider
    $("#slideTransfer").slider();
    $("#slideTransfer").on("slide", function (slideEvt) {
        $("#ex6SliderVal").text(slideEvt.value);
    });

    //tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    //datepicker
    $(function () {
        $('#datetimepicker6').datetimepicker();
        $('#datetimepicker1').datetimepicker();
        $('#datetimepicker9').datetimepicker();
        $('#datetimepicker7').datetimepicker({
            useCurrent: false //Important! See issue #1075
        });
        $("#datetimepicker6").on("dp.change", function (e) {
            $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
        });
        $("#datetimepicker7").on("dp.change", function (e) {
            $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
        });
    });

    $(document).on('change', '.select-upload', function (e) {
        var val = $(e.target).val();
        $('#' + val).removeClass('hide').siblings('.form-upload').addClass('hide');
    });


    $('.inputAddFile').change(function () {
        $('.file-upload-list').removeClass('hide');
    });

    $('.btn-delete').on('click', function () {
        $('.file-upload-list').remove();
    });

    $(document).on('click', '.btn-add', function (e) {
        e.preventDefault();

        var prevInput = $(this).closest('.form-add');


        var newInput = prevInput.clone();
        console.log(newInput);

        var newSelect = newInput.find('select');

        newInput.find('.bootstrap-select').remove();
        newInput.append(newSelect);
        //newInput.find("label").after(newSelect);
        newSelect.selectpicker('refresh');

        prevInput.find('.btn-add').remove();
        newInput.insertAfter(prevInput);

        prevInput.prepend('<button type="submit" class="btn-link btn-delete icon-delete"></button>');

    }).on('click', '.btn-delete', function (e) {
        $(this).parent('.form-add:last').remove();
        e.preventDefault();
        return false;
    });

});