
// Define los elementos del menú
const menuItems = `
    <ul>
        <li><a href="https://www.facebook.com/emanuel.maggi">Facebook</a></li>
        <li><a href="#">Instagram</a>
            <ul>                
            </ul>
        </li>
        <li><a href="#">Portafolio</a></li>
        <li><a href="tel:+5493516990418">Whatsapp</a></li>
    </ul>
`;

// Captura el botón de menú y el contenedor del menú
const toggleMenuButton = document.getElementById("toggleMenu");
const menuContainer = document.getElementById("menuContainer");

// Agrega un controlador de eventos al botón de menú para mostrar/ocultar el menú
toggleMenuButton.addEventListener("click", function() {
    if (menuContainer.style.left === "0px") {
        // Si el menú está abierto, ciérralo (oculta)
        menuContainer.style.left = "-300px";
    } else {
        // Si el menú está cerrado, ábrelo (mostrar)
        menuContainer.style.left = "0px";
    }
});

