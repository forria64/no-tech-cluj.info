document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.copy-mail-link');
  const fallbackArea = document.getElementById('fallbackArea');

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const mailtoLink = link.getAttribute('data-mailto');

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(mailtoLink)
          .then(() => {
            alert("Textul scrisorii a fost copiat.");
          })
          .catch(() => {
            fallbackCopyText(mailtoLink, fallbackArea);
          });
      } else {
        fallbackCopyText(mailtoLink, fallbackArea);
      }
    });
  });
});

function fallbackCopyText(text, fallbackArea) {
  fallbackArea.value = text;
  fallbackArea.select();
  try {
    document.execCommand('copy');
    alert("Textul scrisorii a fost copiat.");
  } catch (err) {
    console.error("Fallback: Could not copy text: ", err);
  }
  window.getSelection().removeAllRanges();
}

