$(document).ready(function() {

    $("#s-icon1").click(function() {
        $(".txt1").toggle();
        $("#s-icon1").hide();
    });
    $("#s-icon2").click(function() {
        $(".txt2").toggle();
        $("#s-icon2").hide();
    });
    $("#s-icon3").click(function() {
        $(".txt3").toggle();
        $("#s-icon3").hide();
    });
    $(".txt1").click(function() {
        $("#s-icon1").toggle();
        $(".txt1").hide();
    });
    $(".txt2").click(function() {
        $("#s-icon2").toggle();
        $(".txt2").hide();
    });
    $(".txt3").click(function() {
        $("#s-icon3").toggle();
        $(".txt3").hide();
    });
    $('.submit').click(function() {
        var userName = $('#username').val();
        var email = $('#email').val();
        var message = $('#message').val();
        $('#exampleModal').show();
        if (userName == "" || email == "" || message == "") {
            $(".fa-rectangle-xmark").show();
            $('.popmsg').text("Kindly fill in all the fields");
        } else {
            $('.fa-circle-check').show();
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
//         curPage =(this).data("page");
//         $("." + curPage).show();
//     });
// });

// curPage = $(this).data("page");
// $("." + curPage).show();