$(document).ready(function () {
    var allWells = $('div.form-group-box'),
        allNextBtn = $('.nextBtn'),
        allPrevBtn = $('.prevBtn');

    //Init wizard
    allWells.hide();
    $('ul.check-list-step li:first').addClass('step-current');
    $('div.form-group-box:first').show();
    $('.wizard-form').removeClass('hide');


    allNextBtn.click(function(){
        var curStep = $(this).closest("div.form-group-box"),
            curListItem = $('ul.check-list-step li.step-current'),
            nextListItem = $(curListItem).next('ul.check-list-step li');
        //Change step
        if($(curStep).find('input:first').val() != '' && !$(curStep).find('.has-error').length)
        {
            $(curStep).hide();
            var nextStep = $(curStep).next('div.form-group-box');

            $(nextStep).show(100, function () {
                $(this).find('.has-error').removeClass('has-error');
                $(this).find('.help-block').text('');
                $(this).removeClass('hide');
            });
            //Change button
            $(curListItem).removeClass('step-current');
            $(curListItem).addClass('step-active');
            $(nextListItem).addClass('step-current');
        }
    });

    allPrevBtn.click(function(){
        var curStep = $(this).closest("div.form-group-box"),
            curListItem = $('ul.check-list-step li.step-current'),
            prevListItem = $(curListItem).prev('ul.check-list-step li');
        //Change step
        $(curStep).hide();
        $(curStep).prev('div.form-group-box').show();
        //Change button
        $(curListItem).removeClass('step-current');
        $(prevListItem).removeClass('step-active');
        $(prevListItem).addClass('step-current');
    });

    //disable press Enter in Input fields
    $('.wizard-form input').on('keyup keypress', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            e.preventDefault();
            return false;
        }
    });

    //enable next button
    // $('.wizard-form').find('input, select, textarea').blur(function () {
    //     var curStep = $(this).closest("div.form-group-box");
    //     $(curStep).find('.nextBtn').removeAttr('disabled');
    // });
});