
$(document).ready(function () {

    window.addEventListener("scroll", function () {
        var menu = $(".header-lower");
        if (window.scrollY > 140) {
            menu.addClass("fix-menu-header-top");
            //menu.removeClass("fix-menu-header-top-relative");
            //console.log(window.scrollY)
        } else {
            menu.removeClass("fix-menu-header-top");
            //menu.addClass("fix-menu-header-top-relative");
            //console.log('remove')

        }
    }, true);

    $('#small-search-box-form').addClass("display-none");

    $('.search-box-opener').on('click', function () {

        if (!$(this).hasClass('open')) {
            $('#small-search-box-form').removeClass("display-none");
        }
        else {
            setTimeout(function () {
                
                $('#small-search-box-form').addClass('display-none');
            }, 500); // time should match the css transition delay time
        }
    });


});




