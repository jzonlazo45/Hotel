// Generate Navbar + Footer Start

$(document).ready(function(){
    $("#navbar").load("fragments/navbar/navbar-logo.html"); 
    $("#footer").load("fragments/footer/footer-basic.html");       
});

// Generate Navbar + Footer End

// Night Mode Start

if (localStorage.getItem("isNightMode") === null) {
    localStorage.setItem("isNightMode", false);
}else if(localStorage.getItem("isNightMode") === "false"){
    $(':root').css('--main-primary-color', '#dd7631');
    $(':root').css('--main-primary-color-hover', '#708160');
    $(':root').css('--body-bg', 'white');
    $(':root').css('--body-text-color', 'black');
}else{
    $(':root').css('--main-primary-color', '#1f1f1f');
    $(':root').css('--main-primary-color-hover', '#32DBA3');
    $(':root').css('--body-bg', '#121212');
    $(':root').css('--body-text-color', 'white');
}

function nightmodeToggle(){
    if (localStorage.getItem("isNightMode") === "true"){
        $(':root').css('--main-primary-color', '#dd7631');
        $(':root').css('--main-primary-color-hover', '#708160');
        $(':root').css('--body-bg', 'white');
        $(':root').css('--body-text-color', 'black');
        localStorage.setItem("isNightMode", false);
    }
    else{
        $(':root').css('--main-primary-color', '#1f1f1f');
        $(':root').css('--main-primary-color-hover', '#32DBA3');
        $(':root').css('--body-bg', '#121212');
        $(':root').css('--body-text-color', 'white');
        localStorage.setItem("isNightMode", true);
    }

}

// Night Mode End