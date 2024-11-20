
const NUMBER_OF_SQUARES = 16;

const container = document.querySelector('#container');
const grid = document.querySelector('#grid');

function generateGrid(num) {
     
      for (let i = 0; i < num; i++) {
            const col = document.createElement('div');
            col.style.display = 'flex';

            for (let j = 0; j < num; j++) {
                  const row = document.createElement('div');
                  row.classList.add('squares');
                  col.appendChild(row);
            }

            container.appendChild(col);
      };  
};



generateGrid(NUMBER_OF_SQUARES);
