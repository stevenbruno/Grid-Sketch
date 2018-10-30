let container = document.querySelector('#grid_container');


function createGrid(numRows) {
    let container = document.querySelector('#grid_container');
    let rowWidth = 35.2/numRows;
    container.style.grid = `repeat(${numRows}, ${rowWidth}vw) / repeat(${numRows}, ${rowWidth}vw)`;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numRows; j++) {
            let box = document.createElement('div');
            box.classList.toggle('grid_item')
            if (numRows > 30) {
                box.style.border = '2px solid white';
            }
            container.appendChild(box);
        }
    }
}


//set and change selected color
const colorButtons = document.querySelector('.colorButtons');
colorButtons.addEventListener('click', colorSelect, false);
let selectedColor = "black";

function colorSelect(e) {
    if (e.target !== e.currentTarget) {
        let compStyles = window.getComputedStyle(e.target);
        selectedColor = compStyles.getPropertyValue('background-color');
    }
    e.stopPropagation();
}


function startDraw(e) {
    e.target.style.backgroundColor = selectedColor;
}

function draw(e) {
    if (mouseDown == 1) {
        e.target.style.backgroundColor = selectedColor;
    }
}


function resetBoard() {
    //include option to ask how many cells they want from predefined list (12, 24, 36, 48)
    for (var i = 0; i < grid_items.length; i++) {
        // grid_items[i].style.backgroundColor = 
    }
}


createGrid(24);


// record state of left mouse button
let mouseDown = 0;
document.body.onmousedown = function() {
    mouseDown = 1;
}
document.body.onmouseup = function() {
    mouseDown = 0;
}


// add drawing event listener to grid items
let grid_items = document.querySelectorAll('.grid_item');
for (var i = 0; i < grid_items.length; i++) {
    grid_items[i].addEventListener('mousedown', startDraw, false);
    grid_items[i].addEventListener('mouseenter', draw, false);
}


// add event listner for reset board button
reset = document.querySelector('#reset');
reset.addEventListener('click', resetBoard, false);