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

    $(".back-img").hover(
        function() {
            $('.infor').show();

        },
        function() {
            $('.infor').hide();
        }
    );





});