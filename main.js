function fugirDoCursor(btn) {
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    btn.style.position = 'fixed';
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
    
    const mensagens = [
        "😜",
        "Hoje não!",
        "Vai sim! 😅",
        "Olé!",
    ];
    
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    btn.textContent = mensagemAleatoria;
}

function aceitarConvite() {
    const modal = new bootstrap.Modal(document.getElementById('modalAceitacao'));
    modal.show();
    
    document.querySelector('.btn-sim').classList.add('animacao-coracao');
    
    const audio = new Audio('sound.mp3');
    audio.play();
}

document.addEventListener('DOMContentLoaded', function() {
    const modalElement = document.getElementById('modalAceitacao');
    if (modalElement) {
        new bootstrap.Modal(modalElement);
    }
});
