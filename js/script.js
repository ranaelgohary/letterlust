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
    
    
    
    $("#all-projects").click(
        function () {
            $(".brand-identity").show(400);
            $(".sales-decks").show(400);
            $(".web-design").show(400);
            $(".print-design").hide(400);
            
            $("#all-projects").addClass( "selected" );
            $("#brand-identity").removeClass( "selected" );
            $("#sales-decks").removeClass( "selected" );
            $("#web-design").removeClass( "selected" );
            $("#print-design").removeClass( "selected" );
            
            
        }
    );
    
    $("#brand-identity").click(
        function () {
            $(".brand-identity").show(400);
            $(".sales-decks").hide(400);
            $(".web-design").hide(400);
            $(".print-design").hide(400);
            
            $("#all-projects").removeClass("selected");
            $("#brand-identity").addClass("selected");
            $("#sales-decks").removeClass("selected");
            $("#web-design").removeClass("selected");
            $("#print-design").removeClass("selected");
        }
    );
    
    $("#sales-decks").click(
        function () {
            $(".brand-identity").hide(400);
            $(".sales-decks").show(400);
            $(".web-design").hide(400);
            $(".print-design").hide(400);
            
            $("#all-projects").removeClass( "selected" );
            $("#brand-identity").removeClass( "selected" );
            $("#sales-decks").addClass( "selected" );
            $("#web-design").removeClass( "selected" );
            $("#print-design").removeClass( "selected" );
        }
    );
    
    $("#web-design").click(
        function () {
            $(".brand-identity").hide(400);
            $(".sales-decks").hide(400);
            $(".web-design").show(400);
            $(".print-design").hide(400);
            
            $("#all-projects").removeClass( "selected" );
            $("#brand-identity").removeClass( "selected" );
            $("#sales-decks").removeClass( "selected" );
            $("#web-design").addClass( "selected" );
            $("#print-design").removeClass( "selected" );
        }
    );
    
    $("#print-design").click(
        function () {
            $(".brand-identity").hide(400);
            $(".sales-decks").hide(400);
            $(".web-design").hide(400);
            $(".print-design").show(400);
            
            $("#all-projects").removeClass( "selected" );
            $("#brand-identity").removeClass( "selected" );
            $("#sales-decks").removeClass( "selected" );
            $("#web-design").removeClass( "selected" );
            $("#print-design").addClass( "selected" );
        }
    );
    
    
    
    $("#TestimonialsKey1").click(
        function () {
            
            $("#Testimonial1").show(400);
            $("#Testimonial2").hide(400);
            $("#Testimonial3").hide(400);
            
            $("#TestimonialsKey1").addClass( "SelectedKey" );
            $("#TestimonialsKey2").removeClass( "SelectedKey" );
            $("#TestimonialsKey3").removeClass( "SelectedKey" );
        }
    );
    
    $("#TestimonialsKey2").click(
        function () {
            
            $("#Testimonial1").hide(400);
            $("#Testimonial2").show(400);
            $("#Testimonial3").hide(400);
            
            $("#TestimonialsKey1").removeClass( "SelectedKey" );
            $("#TestimonialsKey2").addClass( "SelectedKey" );
            $("#TestimonialsKey3").removeClass( "SelectedKey" );
        }
    );
    
    $("#TestimonialsKey3").click(
        function () {
            
            $("#Testimonial1").hide(400);
            $("#Testimonial2").hide(400);
            $("#Testimonial3").show(400);
            
            $("#TestimonialsKey1").removeClass( "SelectedKey" );
            $("#TestimonialsKey2").removeClass( "SelectedKey" );
            $("#TestimonialsKey3").addClass( "SelectedKey" );
        }
    );

});
