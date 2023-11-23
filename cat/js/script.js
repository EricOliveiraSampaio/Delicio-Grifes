document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', function () {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    // Fechar o menu se clicar fora dele
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickInsideBtn = menuBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideBtn) {
            menu.style.display = 'none';
        }
    });
});
