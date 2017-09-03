$(document).ready(function(){
    
    $('#ru-kitchen-btn').click(function(e){
        e.preventDefault();
        $('.ru-kitchen').toggleClass('show');
    });
    
    $('#uk-kitchen-btn').click(function(e){
        e.preventDefault();
        $('.uk-kitchen').toggleClass('show');
    });
    
    $('#kavkaz-kitchen-btn').click(function(e){
        e.preventDefault();
        $('.kavkaz-kitchen').toggleClass('show');
    });
    
        $('.brd').click(function(e){
        e.preventDefault();
    });
    
    $('.settings').click(function(e){
        e.preventDefault();
            $('.settings-menu').toggleClass('visible');
    });
    
        $('#vegan-menu').change(function() {

            if ( $(this).is(':checked') ) {
                  $('.vegan').hide(300);
                } 
            else {
                  $('.vegan').show(300);
            } 

        });
});