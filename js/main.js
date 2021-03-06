
/*--------- preloader ---------*/
$(window).on("load", function () {
    $(".preloader").fadeOut("slow");
});


$(document).ready(function () {

    /*---------NavBar Shrink ---------*/
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink");
        }

    });

    /*--------- Video Popup ---------*/

    const videosrc = $("#video-play1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {

            $(".video-popup").removeClass("open");
            $("#video-play1").attr("src", "")
        }
        else {
            $(".video-popup").addClass("open");
            if ($("#video-play1").attr("src") == '') {
                $("#video-play1").attr("src", videosrc);
            }
        }
    });


    /*------- features-carousel ----------*/
    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });


    /*------- App SreenShots carousel ----------*/
    $('.screenshots-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });

    /*------Testimonials carousel------------- */
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });

    /*------Team carousel------------- */
    $('.team-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });

    /*--------- Page scrolling - scrollIt -------- */

    $.scrollIt({
        topOffset: -50
    });

    /*------------ Navbar Collapse ----------  */
    $(".nav-link").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    /*-------- Toggle Theme - Light and dark mode ----- */
    function toggletheme() {
        if(localStorage.getItem("Aya-theme") !==null){
            if(localStorage.getItem("Aya-theme") === "dark"){
                $("body").addClass("dark");
            }
            else{
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }
    toggletheme();

    $(".toggle-theme").on("click", function () {
        $("body").toggleClass("dark");
        // To Use ocalStorage.setItem --
        // Hint: the function can do without the following if, else 
        if ($("body").hasClass("dark")) {
            localStorage.setItem("Aya-theme", "dark");
        }
        else {
            localStorage.setItem("Aya-theme", "light");
        }
        updateIcon();
    });

    function updateIcon() {
        if ($("body").hasClass("dark")) {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
        else {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
    }

});










