document.addEventListener("DOMContentLoaded", function() {
    initializeSubmenus();
});

document.body.addEventListener("click", function(event) {
    if (!event.target.closest(".menu")) {
        closeAllSubmenus();
    }
});

function toggleSubmenu(event, submenuId) {
    event.preventDefault();
    const submenu = document.getElementById(submenuId);
    if (submenu.classList.contains('open')) {
        submenu.classList.remove('open');
        submenu.style.maxHeight = '0';
    } else {
        closeAllSubmenus();
        submenu.classList.add('open');
        submenu.style.display = 'block';
        submenu.style.maxHeight = submenu.scrollHeight + 'px';
        submenu.style.backgroundColor = '#17B61B';
        const submenuItems = submenu.querySelectorAll('li a');
        submenuItems.forEach(item => {
            item.style.color = '#000000';
        });
    }
}

function initializeSubmenus() {
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(submenu => {
        submenu.style.maxHeight = '0';
        submenu.style.display = 'none';
        submenu.classList.remove('open');
    });
}

function closeAllSubmenus() {
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(submenu => {
        submenu.classList.remove('open');
        submenu.style.maxHeight = '0';
        submenu.style.display = 'none';
    });
}

