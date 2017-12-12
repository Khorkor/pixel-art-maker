//variables
let rows;
let cols;
let color;

//grid function
function makeGrid() {
  let table = document.getElementById("pixel_canvas");
  table.innerHTML = "";
  
  rows = document.getElementById("input_height").value;
  cols = document.getElementById("input_width").value;
  
  for (let i = 0; i < rows; i++) {
    let row_elem = table.insertRow(i);
    row_elem.setAttribute("class", "row");
    for (let j = 0; j < cols; j++) {
      let cell= row_elem.insertCell(j);
      cell.addEventListener('click', function(evt) {
        evt.target.style.backgroundColor = document.getElementById("colorPicker").value;      
      });
    }
  }
}

document.getElementById("sizePicker").addEventListener("submit", function(evt) {
  evt.preventDefault();
  makeGrid();
});