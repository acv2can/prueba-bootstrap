document.querySelector('button[type=button]').onclick = resaltarBotones;

function resaltarBotones() {
    const $botones = document.querySelector('button');
    $botones.style.opacity = 1;
    setTimeout (function() {
        $botones.style.opacity= 0.5;
    }, 500);
}