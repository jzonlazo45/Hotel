
$(document).ready(function(){
    $("#navbar").load("fragments/navbar/navbar-logo.html"); 
    $("#footer").load("fragments/footer/footer-basic.html");       
});

var isNightMode=false;

function nightmodeToggle(){

    console.log('click works');

    if (isNightMode){
        $(':root').css('--main-primary-color', '#dd7631');
        $(':root').css('--main-primary-color-hover', '#708160');
        $(':root').css('--body-bg', 'white');
        $(':root').css('--body-text-color', 'black');
        isNightMode = false;
    }
    else{
        $(':root').css('--main-primary-color', '#1f1f1f');
        $(':root').css('--main-primary-color-hover', '#32DBA3');
        $(':root').css('--body-bg', '#121212');
        $(':root').css('--body-text-color', 'white');
        isNightMode = true;        
    }

}