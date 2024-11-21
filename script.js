
const NUMBER_OF_SQUARES = 16;

const container = document.querySelector('#container');
const grid = document.querySelector('#grid');

// Function for generating grid
function generateGrid(num) {
     
      for (let i = 0; i < num; i++) {
            const col = document.createElement('div');
            col.style.display = 'flex';

            for (let j = 0; j < num; j++) {
                  const row = document.createElement('div');
                  row.classList.add('squares');
                  col.appendChild(row);

                  // Paint squares on hover
                  row.addEventListener('mouseover', () => {
                  row.style.backgroundColor = getRandomColor()
                  })
            }
            container.appendChild(col);
      };  
};

// Function for generating random color
function getRandomColor () {
      return`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6,'0')}`
}

generateGrid(NUMBER_OF_SQUARES);

