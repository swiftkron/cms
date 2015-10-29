$(document).ready(function () {
    // Common vars 
    var width = $(window).width();
    // Custom Functions
    $(document).click(function () {
        $('.uDropdown').hide();
    });
    $('.uBrand').click(function (event) {
        event.stopPropagation();
        location.href = "/";
    });
    $('.uIntl').click(function (event) {
        event.stopPropagation();
        $('.lang').slideToggle(400);
    });
    $('.navToggle').click(function (event) {
        event.stopPropagation();
        $('nav').slideToggle(400);
    });
    $('.uToggle').click(function (event) {
        event.stopPropagation();
        $('.uAlt').slideToggle(400);
    });

    // Modal Window
    $('.modalClose').click(function () {
        $('.modal').css('opacity', '0');
        $('.modal').css('pointer-events', 'none');
    });
    // Chat
    $('#open_chatModal').click(function () {
        $('#chatModal').css('opacity', '1');
        $('#chatModal').css('pointer-events', 'auto');
    });
    
    // Submit forms to 3rd Party
    $('#form1').removeAttr('runat');
    $('#form1').removeAttr('action');
    $('#form1').removeAttr('method');
    // enewsletter (footer)
    $('#enews_button').click(function () {
        $('input[name=elqFormName]').attr('value', 'emailsubscribehome')
        $('input[name=LeadSource]').attr('value', 'LCRMAA0001WQ')
        $('#form1').attr('action', 'https://s1966950654.t.eloqua.com/e/f2');
        $('#form1').attr('method', 'post');
        $('#form1').submit();
    })
    // partner application
    $('#acc_apply_button').click(function () {
        $('input[name=elqFormName]').attr('value', 'ACCSelect')
        $('input[name=LeadSource]').attr('value', 'LCRMAA0001X3')
        $('#form1').attr('action', 'https://s1966950654.t.eloqua.com/e/f2');
        $('#form1').attr('method', 'post');
        $('#form1').submit();
    })

});