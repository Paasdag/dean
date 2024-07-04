document.addEventListener('DOMContentLoaded', function() {
    const aboutMe = document.getElementById('About-me');

    function adjustSize() {
        aboutMe.style.height = 'auto'; // Reset height to auto to calculate new height based on content
        aboutMe.style.height = aboutMe.scrollHeight + 'px';
    }

    // Adjust size initially and whenever the window is resized
    adjustSize();
    window.addEventListener('resize', adjustSize);
});