window.addEventListener("hashchange", function() {
    displayPageFromHash();
    closeAllSubmenus();
    closeMobileMenuUnconditional(); // Close the mobile menu when navigating
});

document.addEventListener("DOMContentLoaded", function() {
    displayPageFromHash();
});

// Function to display the appropriate page based on the hash
function displayPageFromHash() {
    const hash = window.location.hash.substring(1);
    const pageId = hash || 'homepage';
    displayPage(pageId);
}

// Function to display the selected page and hide others
function displayPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.style.display = 'block';
        // Scroll to the top of the page to keep the menu in view
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Smooth scrolling for all anchor links with the 'call-to-action' class
document.querySelectorAll('a.call-to-action').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor click behavior

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Update the URL hash without jumping
            history.pushState(null, null, `#${targetId}`);

            // Display the target page
            displayPage(targetId);

            // Optionally, you can add a slight delay to ensure smooth scrolling
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 300); // Adjust the delay as needed
        }
    });
});

