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
    $("#back-img1").hover(
        function() {
            $("#infors1").show();
        },
        function() {
            $("#infors1").hide();
        }
    );
    $("#back-img2").hover(
        function() {
            $("#infors2").show();
        },
        function() {
            $("#infors2").hide();
        }
    );

    $("#back-img3").hover(
        function() {
            $("#infors3").show();
        },
        function() {
            $("#infors3").hide();
        }
    );

    $("#back-img4").hover(
        function() {
            $("#infors4").show();
        },
        function() {
            $("#infors4").hide();
        }
    );
    $("#back-img5").hover(
        function() {
            $("#infors5").show();
        },
        function() {
            $("#infors5").hide();
        }
    );

    $("#back-img6").hover(
        function() {
            $("#infors6").show();
        },
        function() {
            $("#infors6").hide();
        }
    );

    $("#back-img7").hover(
        function() {
            $("#infors7").show();
        },
        function() {
            $("#infors7").hide();
        }
    );

    $("#back-img8").hover(
        function() {
            $("#infors8").show();
        },
        function() {
            $("#infors8").hide();
        }
    );



});