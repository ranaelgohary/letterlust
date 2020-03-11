<!--    Homepage Case Study Selection -->

$(function () {
    
    $("#homepage-casestudies-title-auccoin").click(
        function () {
            
            $("#homepage-casestudies-auccoin").show();
            $("#homepage-casestudies-vodafonecash").hide();
            $("#homepage-casestudies-MFI").hide();
            $("#homepage-casestudies-nafaqa").hide();
            
            $("#homepage-casestudies-title-auccoin").addClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-title-vodafonecash").removeClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-title-MFI").removeClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-title-nafaqa").removeClass( "homepage-casestudies-title-selected" );
            
            
        }
    );
    
    $("#homepage-casestudies-title-vodafonecash").click(
        function () {
            $("#homepage-casestudies-auccoin").hide();
            $("#homepage-casestudies-vodafonecash").show();
            $("#homepage-casestudies-MFI").hide();
            $("#homepage-casestudies-nafaqa").hide();
            
            $("#homepage-casestudies-title-auccoin").removeClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-title-vodafonecash").addClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-title-MFI").removeClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-title-nafaqa").removeClass( "homepage-casestudies-title-selected" );
        }
    );
    
    $("#homepage-casestudies-title-MFI").click(
        function () {
            $("#homepage-casestudies-auccoin").hide();
            $("#homepage-casestudies-vodafonecash").hide();
            $("#homepage-casestudies-MFI").show();
            $("#homepage-casestudies-nafaqa").hide();
            
            $("#homepage-casestudies-title-auccoin").removeClass("homepage-casestudies-title-selected");
            $("#homepage-casestudies-title-vodafonecash").removeClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-title-MFI").addClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-title-nafaqa").removeClass( "homepage-casestudies-title-selected" );
        }
    );
    
    $("#homepage-casestudies-title-nafaqa").click(
        function () {
            $("#homepage-casestudies-auccoin").hide();
            $("#homepage-casestudies-vodafonecash").hide();
            $("#homepage-casestudies-MFI").hide();
            $("#homepage-casestudies-nafaqa").show();
            
            $("#homepage-casestudies-title-auccoin").removeClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-title-vodafonecash").removeClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-title-MFI").removeClass( "homepage-casestudies-title-selected" );
            $("#homepage-casestudies-title-nafaqa").addClass( "homepage-casestudies-title-selected" );
        }
    );
    
});