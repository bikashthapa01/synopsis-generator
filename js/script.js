
$(document).ready(function(){
    $('li').click(function(){

        $('.active').removeClass('active');
        $(this).addClass('active');


    });


    $('.btn-std').click(function(){
        var i = 0;
        var input  = $('<p><input type="text" name="std_name'+i+'" id="std_name'+i+'" placeholder="Full Name"> '
            +'<input type="text" name="std_usn'+i+'" id="std_usn'+i+'" placeholder="USN"></p>');
        $('#project-team').append(input);
    });


    $('.btn-tch').click(function(){
        var i = 0;
        var input  = $('<p><input type="text" name="tch_name'+i+'" id="tch_name'+i+'" placeholder="Full Name"> '
            +'<input type="text" name="tch_post'+i+'" id="tch_post'+i+'" placeholder="Desigination"></p>');
        $('#project-mentors').append(input);
    });

    $('#intro').click(function(){
        
    });







});


