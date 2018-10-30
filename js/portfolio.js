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
// $(function() { $("#about").on('click', function() { 
//     var position = $(".home-about-textbox").offset().top;

//     $(this).animate({ 
//             scrollTop: position 
//     }, 1000); 
//     }); 
// });
// $("#about").click(function(e){       
//     e.preventDefault();
//     $('html,body').animate({scrollTop:$(".home-about-textbox").offset().top}, "slow");
// });

// $(document).ready(function(){
//     $("#about").click(function(){
//         var position = $(".home-about-textbox").offset().top;
//         $("body").animate({
//             scrollTop: position;
//         });
//     });
//     $(document).on('click', '#about', function(){
//         var position = $(".home-about-textbox").offset().top;
    
//         $(this).animate({
//             scroll: position
//         }, 1000) 
//     });
// });


// $(document).ready(function(){

//     var scrollLink = $('.scroll');

//     // Smooth scrolling
// scrollLink.click(function(e) {
//     e.preventDefault();
//     $('body,html').animate({
//         scrollTop: $(this.hash).offset().top
//     }, 1000)
//     })

    // //Active status
    // $(window).scroll(function() {
    //     var scrollbarLocation = $(this).scrollTop();

    //     scrollLink.each(function() {

    //         var sectionOffset = $(this.hash).offset()top

    //         if ( sectionOffset <=scrollbarLocation ) {
    //             $(this).parent().addClass('active');
    //             $(this).parent().siblings().removeClass('active');
    //         }
    //     })
    // })
//  })

