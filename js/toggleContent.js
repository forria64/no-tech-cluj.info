// Initialize the hidden content on page load
document.addEventListener("DOMContentLoaded", function() {
    const hiddenContent = document.querySelector('.hidden-content');
    const readMoreButton = document.querySelector('.read-more');
    hiddenContent.style.display = 'none';
    readMoreButton.style.display = 'block'; // Show the button when content is hidden
});

function toggleHiddenContent() {
    const hiddenContent = document.querySelector('.hidden-content');
    const readMoreButton = document.querySelector('.read-more');
    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'block';
        readMoreButton.style.display = 'none';  // Hide the button when content is shown
    }
}

