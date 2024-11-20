
const NUMBER_OF_SQUARES = 16;

const container = document.querySelector('#container');
const grid = document.querySelector('#grid');

function makeRow(num) {
     
      for (let i = 0; i < num; i++) {
            const row = document.createElement('div');
            row.classList.add('squares');
            grid.appendChild(row);
      };  
};

function generateGrid(num) {
      const col = document.createElement('div');
      col.classList.add('column');
      container.appendChild(makeRow(NUMBER_OF_SQUARES));
}

//makeRow(NUMBER_OF_SQUARES);
generateGrid(16)