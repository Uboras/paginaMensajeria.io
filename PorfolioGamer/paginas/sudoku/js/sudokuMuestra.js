document.addEventListener("DOMContentLoaded", () => {
    const sudokuGrid = document.getElementById('sudoku-grid');

    // Generar tablero de Sudoku
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            console.log(cell)
            cell.classList.add(`${row}${col}`);
            cell.contentEditable = true;

            // Estilo para subgrids
             if ((row ==2 ) || (row ==5 ) || (row ==8 )) {
                 cell.classList.add('border-row');
            }
             if ((col ==2 ) || (col ==5 ) || (col ==8 )) {
                 cell.classList.add('border-col');
             }
            
            sudokuGrid.appendChild(cell);
        }
    }

     
    sudokuGrid.addEventListener('input', (event) => {
        if (event.target.classList.contains('cell') && event.target.isContentEditable) {
            let value = event.target.textContent;
            if (!/^[1-9]$/.test(value)) {
                event.target.textContent = '';
            }
        }
    });
});


