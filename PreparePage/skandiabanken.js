
function add_row(table, left, right) {
    new_row = document.createElement("TR");
    left_cell = document.createElement("TD");
    left_cell.appendChild(left);
    new_row.appendChild(left_cell);
    
    right_cell = document.createElement("TD");
    right_cell.appendChild(right);
    new_row.appendChild(right_cell);
    
    table.appendChild(new_row);
}


function getRow () {
	main_table = document.getElementById("main_data_table");

	for (i = 0; i < 5; i++) {
            left = document.createTextNode(document.getElementById(i));
            right = document.createTextNode((i + 1));
            add_row(main_table, left, right);
	}
}
