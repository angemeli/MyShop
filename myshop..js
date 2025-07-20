const bouton_politique = document.getElementById("politique");
const bouton_close_politique = document.getElementById("close-politique");
const popup_politique = document.getElementById("popup-politique");
const overlay_politique = document.getElementById("overlay-politique");
bouton_politique.onclick = function() {
    overlay_politique.style.display = 'block';
    popup_politique.style.display = 'block';
}
bouton_close_politique.onclick = function() {
    overlay_politique.style.display = 'none';
    popup_politique.style.display = 'none';
}
overlay_politique.onclick = function() {
    bouton_close_politique.onclick(); // Fermer la pop-up si l'utilisateur clique sur l'overlay
}

const bouton_conditions = document.getElementById("conditions");
const bouton_close_conditions = document.getElementById("close-conditions");
const popup_conditions = document.getElementById("popup-conditions");
const overlay_conditions = document.getElementById("overlay-conditions");
bouton_conditions.onclick = function() {
    popup_conditions.style.display = 'block';
    overlay_conditions.style.display = 'block';
}
const checkbox_accept_conditions = document.getElementById("accept-conditions");
function ma_fonction() {
    if (checkbox_accept_conditions.checked == true) {
        bouton_close_conditions.style.opacity = "1";
        bouton_close_conditions.onclick = function() {
            popup_conditions.style.display = 'none';
            overlay_conditions.style.display = 'none';
        }
    }
    else {
        bouton_close_conditions.style.opacity = "0.5";
    }
}
overlay_conditions.onclick = function() {
    bouton_close_conditions.onclick(); // Fermer la pop-up si l'utilisateur clique sur l'overlay
}

const bouton_cookie = document.getElementById("cookie");
const bouton_close_cookie = document.getElementById("close-cookie");
const popup_cookie = document.getElementById("popup-cookie");
const overlay_cookie = document.getElementById("overlay-cookie");
bouton_cookie.onclick = function() {
    popup_cookie.style.display = 'block';
    overlay_cookie.style.display = 'block';
}
bouton_close_cookie.onclick = function() {
    popup_cookie.style.display = 'none';
    overlay_cookie.style.display = 'none';
}
overlay_cookie.onclick = function() {
    bouton_close_cookie.onclick(); // Fermer la pop-up si l'utilisateur clique sur l'overlay
}
