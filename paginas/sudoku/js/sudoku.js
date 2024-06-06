class Sudoku {
  constructor(rows = 9, cols = 9) {
    this.number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.array2D = this.creacion(rows, cols);
    this.asignacionNumerosFilas();
    this.dificultad();
    
  }

  creacion(rows = 9, cols = 9) {
    let array2D = new Array(rows);
    for (let i = 0; i < rows; i++) {
      array2D[i] = new Array(cols).fill(0);
    }
    return array2D;
  }

  asignacionNumerosFilas() {
    for (let i = 0; i < this.array2D.length; i++) {
      for (let j = 0; j < this.array2D[i].length; j++) {
        let possibleNumbers = this.getPossibleNumbers(i, j);
        if (possibleNumbers.length > 0) {
          this.array2D[i][j] = (possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)]);
        }
      }
    }
    this.verificaciondeCeros()
  }
  random(){
    return  (Math.floor(Math.random()*8)+1)
  }
  verificaciondeCeros(){
   let contadas = this.array2D.map(elem => elem).filter(0);
   console.log("son las contadas "+ contadas)
    return (contadas>0)
  }
  /**
   * Devuelve una posicion y el valor del sudoku secreto generado
   * @return rows , column , value 
   */
   dificultad(){
    let row1 = this.random();
    let col1 = this.random();
    let i = [];
    i = this.array2D[row1][col1];
    console.log(row1, col1, i)
  return [row1, col1,i];
  }
  
  getPossibleNumbers(row, col) {
    let usedNumbers = new Set([...this.agruparnumerosfila(row), ...this.agruparnumeroscolumnas(col), ...this.getNumbersInBlock(row, col)]);
    return this.number.filter(num => !usedNumbers.has(num));
  }

  agruparnumerosfila(row) {
    return this.array2D[row].filter(num => num !== 0);
  }

  agruparnumeroscolumnas(col) {
    return this.array2D.map(row => row[col]).filter(num => num !== 0);
  }

  getNumbersInBlock(row, col) {
    let block = [];
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (this.array2D[i][j] !== 0) {
          block.push(this.array2D[i][j]);
        }
      }
    }
    return block;
  }
}
  

// Instantiate the Sudoku class and display the result
let sudokuhtml = document.getElementById("sudoku");
let sudokuGenerado = new Sudoku(9, 9);

function array2DToHTMLTable(array2D) {
  let table = '<table border="1">';
  for (let row of array2D) {
    table += "<tr>";
    for (let cell of row) {
      table += `<td>${cell}</td>`;
    }
    table += "</tr>";
  }
  table += "</table>";
  
  
  return table;
}
function mostrar(){
sudokuhtml.innerHTML = array2DToHTMLTable(sudokuGenerado.array2D);}

function dificultadSelecionada(value1) {
  let randoms;
  let component;
  let id = "";
  if (value1 == "easy") {
    for (let i = 0; i < 2; i++) {
         randoms = sudokuGenerado.dificultad();
        id = `cell-${randoms[0]}-${randoms[1]}`;
        component = document.getElementsByClassName(id);
        console.log(component)
        component.innerText = randoms[2];
        mostrar() 
               
    }
  } else if (value1 == "medium") {
    for (let i = 0; i < 20; i++) {
      randoms = sudokuGenerado.dificultad();
      id = `${randoms[0]}${randoms[1]}`;
      document.getElementsByClassName(id).contentEditable = true;
    }
  } else if (value1 == "hard") {
    for (let i = 0; i < 10; i++) {
      randoms = sudokuGenerado.dificultad();
      id = `${randoms[0]}${randoms[1]}`;
      document.getElementById(id).contentEditable = true;
    }
  }
}
   
  



