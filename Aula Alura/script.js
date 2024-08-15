document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Verifica se o modo escuro está armazenado no localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        themeIcon.src = 'sun-icon.png'; // Muda o ícone para o sol
    } else {
        body.classList.remove('dark-mode');
        themeIcon.src = 'moon-icon.png'; // Muda o ícone para a lua
    }

    // Função para alternar entre os modos
    function toggleTheme() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            themeIcon.src = 'images/moon-icon.png'; // Muda o ícone para a lua
            localStorage.setItem('dark-mode', 'disabled');
        } else {
            body.classList.add('dark-mode');
            themeIcon.src = 'images/sun-icon.png'; // Muda o ícone para o sol
            localStorage.setItem('dark-mode', 'enabled');
        }
    }

    // Evento de clique no botão
    toggleButton.addEventListener('click', toggleTheme);
});
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('icon');

    // Verifica o tema atual do localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        icon.src = 'images/sun-icon.png'; // Muda o ícone para sol
    } else {
        document.body.classList.remove('dark-mode');
        icon.src = 'images/moon-icon.png'; // Muda o ícone para lua
    }

    // Alterna entre modos claro e escuro
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            icon.src = 'images/sun-icon.png'; // Muda o ícone para sol
        } else {
            localStorage.setItem('theme', 'light');
            icon.src = 'images/moon-icon.png'; // Muda o ícone para lua
        }
    });
});
