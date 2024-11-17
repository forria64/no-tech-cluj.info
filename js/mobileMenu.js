function toggleMobileMenu() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.style.maxHeight = '0';
        closeAllSubmenus();
    } else {
        menu.classList.add('open');
        menu.style.maxHeight = menu.scrollHeight + 'px';
    }
}

function closeMobileMenu(event) {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('open') && !event.target.closest('.menu') && !event.target.closest('.menu-icon')) {
        menu.classList.remove('open');
        menu.style.maxHeight = '0';
        closeAllSubmenus();
    }
}

function toggleSubmenuHandler(event, submenuId) {
    event.stopPropagation();
    if (window.innerWidth <= 768) {
        // Mobile
        toggleMobileSubmenu(event, submenuId);
    } else {
        // Desktop
        toggleSubmenu(event, submenuId);
    }
}

function toggleMobileSubmenu(event, submenuId) {
    event.preventDefault();
    const submenu = document.getElementById(submenuId);
    if (submenu.classList.contains('open')) {
        submenu.classList.remove('open');
        submenu.style.maxHeight = '0';
        submenu.style.display = 'none'; // Hide the submenu
    } else {
        closeAllSubmenus();
        submenu.classList.add('open');
        submenu.style.display = 'block'; // Show the submenu
        submenu.style.maxHeight = submenu.scrollHeight + 'px';
    }
    // Adjust menu's max-height to accommodate submenu
    adjustMenuHeight();
}


function adjustMenuHeight() {
    const menu = document.getElementById('menu');
    menu.style.maxHeight = menu.scrollHeight + 'px';
}

function closeMobileMenuUnconditional() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.style.maxHeight = '0';
        closeAllSubmenus();
    }
}

