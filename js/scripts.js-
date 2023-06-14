const body = document.querySelector('body')

const square = document.querySelectorAll('.square')

body.addEventListener('click', (e) => {
    const piece = event.target.closest('[data-pieces]')

    if (!piece) return

    const selectedPiece = document.querySelector('.selected-piece');

    if (selectedPiece) {
        selectedPiece.classList.remove('selected-piece')
    }

    piece.classList.add('selected-piece')
})

square.forEach(block => {
    block.addEventListener('click', () => {
        const selectedPiece = document.querySelector('.selected-piece');

        if(selectedPiece && block.innerHTML === '') {
            block.appendChild(selectedPiece);
            selectedPiece.classList.remove('selectedPiece')
        }
    })
})
