

let $menu = document.querySelector("header .menu");

let $nav = document.querySelector("header .nav");


function showmenu(){
    $nav.classList.toggle("active");
    $menu.classList.toggle("active");
}


$menu.addEventListener("click", showmenu);