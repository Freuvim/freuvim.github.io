$(document).ready(function($) { 
        $(".scroll").click(function(event){        
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
        });
    $(document).scroll(function(){
        if (window.scrollY > 570) {
            $("#navbar").addClass("efeito")
        } else {
            $("#navbar").removeClass("efeito");
        }
        var divs = $('.fade');
        var st = $(this).scrollTop();
        divs.css({ 'opacity' : (1 - st/120) });
    },false);
});