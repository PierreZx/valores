document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os elementos que devem ter a animação
    const fadeElements = document.querySelectorAll('.fade-in-section');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.9; // O elemento aparece quando atinge 90% da altura da tela

        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            } else {
                // Opcional: remover a classe para a animação acontecer toda vez
                // element.classList.remove('visible'); 
            }
        });
    };

    // Adiciona o listener de scroll na janela
    window.addEventListener('scroll', checkVisibility);

    // Verifica a visibilidade uma vez no carregamento da página
    checkVisibility();
});