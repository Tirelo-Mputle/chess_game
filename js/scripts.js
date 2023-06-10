// Neo's code:
// const cells = document.querySelectorAll('td');
// const piecesContainer = document.getElementById('pieces-container');

// piecesContainer.addEventListener('click', (event) => {
//   const piece = event.target.closest('.container');
//   if (!piece) return;

//   const selectedPiece = document.querySelector('.selected-piece');
//   if (selectedPiece) {
//     selectedPiece.classList.remove('selected-piece');
//   }
//   piece.classList.add('selected-piece');
// });

// cells.forEach(cell => {
//   cell.addEventListener('click', () => {
//     const selectedPiece = document.querySelector('.selected-piece');
//     if (selectedPiece && cell.innerHTML === '') {
//       cell.appendChild(selectedPiece);
//       selectedPiece.classList.remove('selected-piece');
//     }
//   });
// });
