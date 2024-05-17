document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        var preloader = document.getElementById('preloader');
        var content = document.getElementById('content');
        preloader.style.display = 'none';
        content.style.display = 'block';
    });
});
