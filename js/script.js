$(document).ready(function() {
    $(".s-icon").click(function() {
        $(".card-text").slideToggle();

        $(".s-icon").hide();
    });

    $('.submit').click(function() {
        var userName = $('#username').val();
        var email = $('#email').val();
        var message = $('#message').val();
        $('#exampleModal').show();
        if (userName == "" || email == "" || message == "") {
            $('.popmsg').text("Kindly fill in all the fields");
        } else {
            $('.popmsg').text(userName + " we have received your message. Thank you for reaching out!");

        }
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