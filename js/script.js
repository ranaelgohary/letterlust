$(document).ready(function () {

    var batchCount = 0; //Initalise counter for backers pages.
    //If we've returned here from the API, scroll down to the menu so we can display success/fail.
    var page_url = String(window.location);
    if (page_url.indexOf('?') > 0) {
        document.getElementById('menu').scrollIntoView();
    }

    $("#openBurgerMenu").click(function () {


        $("#mobileMenu").removeClass("displayNone");
        $("#mobileMenu").addClass("displayBlock");

        $("#openBurgerMenu").removeClass("displayBlock");
        $("#openBurgerMenu").addClass("displayNone");

        $("#closeBurgerMenu").removeClass("displayNone");
        $("#closeBurgerMenu").addClass("displayBlock");

        $("#navlist").removeClass("displayBlock");
        $("#navlist").addClass("displayNone");

    });


    $("#closeBurgerMenu").click(function () {


        $("#mobileMenu").removeClass("displayBlock");
        $("#mobileMenu").addClass("displayNone");

        $("#closeBurgerMenu").removeClass("displayBlock");
        $("#closeBurgerMenu").addClass("displayNone");

        $("#openBurgerMenu").removeClass("displayNone");
        $("#openBurgerMenu").addClass("displayBlock");

        $("#navlist").removeClass("displayNone");
        $("#navlist").addClass("HeaderNavResponsive");

    });

    $("#mobileMenu").click(function () {


        $("#mobileMenu").removeClass("displayBlock");
        $("#mobileMenu").addClass("displayNone");

        $("#closeBurgerMenu").removeClass("displayBlock");
        $("#closeBurgerMenu").addClass("displayNone");

        $("#openBurgerMenu").removeClass("displayNone");
        $("#openBurgerMenu").addClass("displayBlock");

        $("#navlist").removeClass("displayNone");
        $("#navlist").addClass("HeaderNavResponsive");

    });
    
        
        $('nav').delay(200).animate({'marginLeft':'0','opacity':'1'},800);

        $('h1').delay(300).animate({'opacity':'1'},800);
        $('h2').delay(400).animate({'opacity':'1'},800);
        $('.CTA').delay(500).animate({'opacity':'1'},800);

});
