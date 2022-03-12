$(document).ready(function() {
    $(".s-icon").click(function() {
        $(".card-text").slideToggle();

        $(".s-icon").hide();
    });

});



// var icons = $(".s-icon");
// icons.forEach(function(icon) {


//         icon.click(function() {
//             $(".card-text").show();
//         })
//     })
// for (i = 0; i <= icons.length; i++) {

// }
// var curPage = $(".card-text");
// $(".s-icon").click(function() {
//     curPage = $(this).data("moreInfor");
//     $(curPage).show();
//     $(".s-icon").hide();

// })
// var iconn = $('.s-icon');

// function clickIcon() {
//     if (iconn.click() == true) {
//         $(".card-text").show();
//         return false;
//     }
// }


// $(function() {
//     var curPage = "s-icon";
//     $("." + curPage).show();
//     $("#menu a").click(function() {
//         $("." + curPage).hide();
//         if (curPage.length) {
//             $("." + curPage).hide("all");
//         }
//         curPage = $(this).data("page");
//         $("." + curPage).show();
//     });
// });

// curPage = $(this).data("page");
// $("." + curPage).show();