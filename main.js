
    var sidebar = document.querySelector('.nav');
    var menuIcon = document.getElementById('bar');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });