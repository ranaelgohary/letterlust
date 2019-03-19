<!--    Product Filter-->

$(function () {
    
    $("#all-industries-selector").click(
        function () {
            $(".product").show();
            $("#relevant-to-your-industry").hide();
            $("h7").text("All Industries");
        }
    );
    
    $("#banks-selector").click(
        function () {
            $(".product").hide();
            $(".banks").show();
            $("#relevant-to-your-industry").show();
            $("h7").text("Banks");
        }
    );
    
    $("#closed-community-selector").click(
        function () {
            $(".product").hide();
            $(".closed-community").show();
            $("#relevant-to-your-industry").show();
            $("h7").text("Closed Comunities");
        }
    );
    
    $("#FMCG-selector").click(
        function () {
            $(".product").hide();
            $(".FMCG").show();
            $("#relevant-to-your-industry").show();
            $("h7").text("FMCG");
        }
    );
    
    $("#government-selector").click(
        function () {
            $(".product").hide();
            $(".government").show();
            $("#relevant-to-your-industry").show();
            $("h7").text("Government");
        }
    );
    
    $("#microfinance-selector").click(
        function () {
            $(".product").hide();
            $(".microfinance").show();
            $("#relevant-to-your-industry").show();
            $("h7").text("Microfinance");
        }
    );
    
    $("#telecom-operator-selector").click(
        function () {
            $(".product").hide();
            $(".telecom-operator").show();
            $("#relevant-to-your-industry").show();
            $("h7").text("Telecom Operators");
        }
    );
    
});