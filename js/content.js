window.addEventListener("hashchange", function() {
    displayPageFromHash();
    closeAllSubmenus();
});

document.addEventListener("DOMContentLoaded", function() {
    displayPageFromHash();
});

function displayPageFromHash() {
    const hash = window.location.hash.substring(1);
    const pageId = hash || 'homepage';
    displayPage(pageId);
}

function displayPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.style.display = 'block';
    }
}

window.addEventListener("hashchange", function() {
    displayPageFromHash();
    closeAllSubmenus();
    closeMobileMenuUnconditional(); // Close the mobile menu when navigating
});

