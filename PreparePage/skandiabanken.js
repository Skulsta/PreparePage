
var input = document.querySelector("input[name = 'search']");
var knapp = document.getElementById("searchbutton");
var main_table = document.getElementById("main_data_table");

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


function handleClick (e) {
	e.preventDefault();

	var tekst = input.value;
	// var textSize = input.value.length;
	var left = document.createTextNode(tekst);
	var right = document.createTextNode(tekst.length);

	if (tekst === "") {
		alert("nope");
	} else {
		add_row(main_table, left, right);

		main_form.reset();
	}
}

	knapp.addEventListener("click", handleClick);
