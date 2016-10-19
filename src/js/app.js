// (function($) {
//     "use strict";
//
//     $('li').on('click', function() {
//         var page = $(this).data('id');
//         $('html, body').animate({
//             scrollTop: $(".content-container." + page).offset().top
//         }, 2000);
//     });
//
//     $('.seasons').find('span').on('click', function() {
//       var season = $(this).data('id');
//       $('.seasons').find('span.active').removeClass('active');
//       $(this).addClass('active');
//       $('.seasons').find('p.active').removeClass('active').fadeOut(function() {
//         $('.'+ season).addClass('active').fadeIn();
//       });
//     });
//
// })(jQuery);
