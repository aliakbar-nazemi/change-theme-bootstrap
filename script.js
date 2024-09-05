let $Main = document.querySelector('body');
let $Darkbtn = document.querySelector('#dark_btn');
let $Lightbtn = document.querySelector('#light_btn');

function darkMode(){
    $Main.setAttribute('data-bs-theme','dark');
    $Darkbtn.classList.add('d-none');
    $Lightbtn.classList.remove('d-none');
}

function LightMode(){
    $Main.setAttribute('data-bs-theme','light');
    $Darkbtn.classList.remove('d-none');
    $Lightbtn.classList.add('d-none');
}