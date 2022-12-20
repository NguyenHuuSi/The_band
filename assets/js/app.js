var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var modal = document.querySelector(".js-modal");
var modalOverlay = document.querySelector(".js-modal-overlay");
var modalContainer = document.querySelector(".js-modal-container");
var buyBtns = document.querySelectorAll(".js-place-buy");
var modalClose = document.querySelector(".js-modal-close");
var headerHeight = header.clientHeight;
// close/open at mobile menu
mobileMenu.onclick = () => {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
}

// Auto close when choose menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) { 
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}

// show/hide modal

// Function show modal tickets (add class open on modal) 
const showBuyTickets = () => {
    modal.classList.add("open");
}

// Function hide modal tickets (remove class open on modal)
const hideBuyTickets = () => {
    modal.classList.remove("open");
}

// Loop tùng tag button add event lister hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

// Event hide modal dựa vào event lister hành vi click button close
modalClose.addEventListener('click', hideBuyTickets) 

// Event hide modal dựa vào event lister hành vi click modal overlay
modal.addEventListener('click', hideBuyTickets);

// Stop hành nổi bọt form modal container to modal
modalContainer.addEventListener('click', (event) => {
    event.stopPropagation();
})