// User Filter Modal

//Disable componenets on load
$(document).ready(function() {
    $("#switch-search").attr('checked', true);
    $("#text-search").attr('disabled', false);
    $("#switch-stage").attr('checked', false);
    $("#select-stage").attr('disabled', true);
    $("#switch-role").attr('checked', false);
    $("#select-role").attr('disabled', true);
    $("#switch-age").attr('checked', false);
    $("#select-age").attr('disabled', true);
    $("#switch-meeting").attr('checked', false);
    $("#select-meeting").attr('disabled', true);
    $("#switch-agent").attr('checked', false);
    $("#select-agent").attr('disabled', true);
    $("#switch-2-agent").attr('checked', false);
    $("#select-2-agent").attr('disabled', true);
    $("#switch-referred").attr('checked', false);
    $("#text-referred").attr('disabled', true);
    $("#switch-bp").attr('checked', false);
    $("#text-bp").attr('disabled', true);
    $("#switch-anybp").attr('checked', false);
    $("#switch-anyref").attr('checked', false);
    $("#switch-city").attr('checked', false);
    $("#text-city").attr('disabled', true);
    $("#switch-event").attr('checked', false);
    $("#text-event").attr('disabled', true);
    $("#switch-follow").attr('checked', false);
    $("#date-follow").attr('disabled', true);
    $("#switch-source").attr('checked', false);
    $("#select-source").attr('disabled', true);
});

// Changing stages of relevant components according to the checkbox behaviour.
$('#switch-search').change(function(){
   $("#text-search").prop("disabled", !$(this).is(':checked'));
});

$('#switch-stage').change(function(){
   $("#select-stage").prop("disabled", !$(this).is(':checked'));
});

$('#switch-role').change(function(){
   $("#select-role").prop("disabled", !$(this).is(':checked'));
});

$('#switch-age').change(function(){
   $("#select-age").prop("disabled", !$(this).is(':checked'));
});

$('#switch-meeting').change(function(){
   $("#select-meeting").prop("disabled", !$(this).is(':checked'));
});

$('#switch-agent').change(function(){
   $("#select-agent").prop("disabled", !$(this).is(':checked'));
});

$('#switch-2-agent').change(function(){
   $("#select-2-agent").prop("disabled", !$(this).is(':checked'));
});

$('#switch-referred').change(function(){
   $("#text-referred").prop("disabled", !$(this).is(':checked'));
});

$('#switch-anyref').change(function(){
   $("#text-referred").prop("disabled", $(this).is(':checked'));
});

$('#switch-bp').change(function(){
   $("#text-bp").prop("disabled", !$(this).is(':checked'));
});

$('#switch-anybp').change(function(){
   $("#text-bp").prop("disabled", $(this).is(':checked'));
});

$('#switch-city').change(function(){
   $("#text-city").prop("disabled", !$(this).is(':checked'));
});

$('#switch-event').change(function(){
   $("#text-event").prop("disabled", !$(this).is(':checked'));
});

$('#switch-follow').change(function(){
   $("#date-follow").prop("disabled", !$(this).is(':checked'));
});

$('#switch-source').change(function(){
   $("#select-source").prop("disabled", !$(this).is(':checked'));
});
