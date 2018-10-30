$(document).ready(function(){
    
    $(document).on('click','.nav-links', function(e){
        e.preventDefault();
        var linkToAttr = $(this).attr('data-link-to');
        
        window.scroll({
            top: $(linkToAttr).offset().top, 
            left: 0, 
            behavior: 'smooth' 
        });
        
        this.blur();
    });

});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
