<!--    Product Filter-->

$(function () {
    
    $("#all-industries-selector").click(
        function () {
            $(".product").show();
            $(".homepage-casestudies-title").show();
            $(".homepage-casestudy").show();
            $("#relevant-to-your-industry").hide();
            $("h7").text("All Industries");
        }
    );
    
    $("#banks-selector").click(
        function () {
            $(".product").hide();
            $(".homepage-casestudies-title").hide();
            $(".homepage-casestudy").hide();
            $("#homepage-casestudies-title-vodafonecash").show();
            $("#homepage-casestudies-title-vodafonecash").addClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-vodafonecash").show();
            $(".banks").show();
            $("#relevant-to-your-industry").show();
            $("h7").text("Banks");
        }
    );
    
    $("#closed-community-selector").click(
        function () {
            $(".product").hide();
            $(".homepage-casestudies-title").hide();
            $(".homepage-casestudy").hide();
            $("#homepage-casestudies-title-auccoin").show();
            $("#homepage-casestudies-title-auccoin").addClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-auccoin").show();
            $(".closed-community").show();
            $("#relevant-to-your-industry").show();
            $("h7").text("Closed Comunities");
        }
    );
    
    $("#FMCG-selector").click(
        function () {
            $(".product").hide();
            $(".homepage-casestudy").hide();
            $(".homepage-casestudies-title").show();
            $("#homepage-casestudies-title-auccoin").show();
            $(".homepage-casestudies-title").removeClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-title-auccoin").addClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-auccoin").show();
            $(".FMCG").show();
            $("#relevant-to-your-industry").show();
            $("h7").text("FMCG");
        }
    );
    
    $("#government-selector").click(
        function () {
            $(".product").hide();
            $(".homepage-casestudies-title").hide();
            $(".homepage-casestudy").hide();
            $("#homepage-casestudies-title-nafaqa").show();
            $("#homepage-casestudies-title-nafaqa").addClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-nafaqa").show();
            $(".government").show();
            $("#relevant-to-your-industry").show();
            $("h7").text("Government");
        }
    );
    
    $("#microfinance-selector").click(
        function () {
            $(".product").hide();
            $(".homepage-casestudies-title").hide();
            $(".homepage-casestudy").hide();
            $("#homepage-casestudies-title-MFI").show();
            $("#homepage-casestudies-title-MFI").addClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-MFI").show();
            $(".microfinance").show();
            $("#relevant-to-your-industry").show();
            $("h7").text("Microfinance");
        }
    );
    
    $("#telecom-operator-selector").click(
        function () {
            $(".product").hide();
            $(".homepage-casestudies-title").hide();
            $(".homepage-casestudy").hide();
            $("#homepage-casestudies-title-vodafonecash").show();
            $("#homepage-casestudies-title-vodafonecash").addClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-vodafonecash").show();
            $(".telecom-operator").show();
            $("#relevant-to-your-industry").show();
            $("h7").text("Telecom Operators");
        }
    );
    
});