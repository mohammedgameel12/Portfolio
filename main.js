function scr() {
    var scrol = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrol > 100) {
        $("header").addClass("shad");
        $(".menu-link").addClass("men");
        $(".menu-but").addClass("op");
        $(".logo").addClass("wid");
    } else {
        $("header").removeClass("shad");
        $(".menu-link").removeClass("men");
        $(".menu-but").removeClass("op");
        $(".logo").removeClass("wid");
    }
}


function openMenu() {
    document.querySelector(".menu-res").style.transform = "translateX(0px)";
    document.querySelector(".open-menu").setAttribute('onclick', 'closeMenu();');
    document.querySelector(".overlayy").style.visibility = 'visible';
    document.querySelector("#bar1").style.position = 'absolute';
    document.querySelector("#bar2").style.display = 'none';
    document.querySelector("#bar3").style.margin = '0px';
    document.querySelector("#bar3").style.position = 'absolute';
    $("header").addClass("saad");
    
    setTimeout(function() {
        document.querySelector("#bar1").style.transform = 'rotate(45deg)';
        document.querySelector("#bar3").style.transform = 'rotate(-45deg)';
    }, 300);

}


function closeMenu() {
    document.querySelector(".menu-res").style.transform = "translateX(103%)";
    document.querySelector(".open-menu").setAttribute('onclick', 'openMenu();');
    document.querySelector("#bar1").style.transform = 'rotate(0deg)';
    document.querySelector("#bar3").style.transform = 'rotate(0deg)';
    $("header").removeClass("saad");

    setTimeout(function() {
        document.querySelector("#bar1").style.position = 'unset';
        document.querySelector("#bar2").style.display = 'block';
        document.querySelector("#bar3").style.marginTop = '7px';
        document.querySelector("#bar3").style.position = 'unset';
        document.querySelector(".overlayy").style.visibility = 'hidden';
    }, 300);
    
}


function proShow() {
    document.querySelector("#button-sec").style.display = 'none';
    for(i = 0; i <= document.querySelectorAll(".project").length; i++) {
        document.querySelectorAll(".project")[i].style.display = 'unset';
    }
}