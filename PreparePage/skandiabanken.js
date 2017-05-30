
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

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://wildboy.uib.no/mongodb/profiles/", true);
	xhr.responseType = "json";
	xhr.onload = function() {
		profile = xhr.response["rows"];

		for (rows in profile) {
			overview = profile[rows];
			if (overview["username"].includes(tekst))
				console.log(overview["mylist"])
		}

    // show mylist
    if (tekst) {
    	for (movie_id_index in profile.mylist) {
    		movie_id = profile.mylist[movie_id_index];
    		var left = document.createTextNode(tekst);
    		var right = document.createTextNode(movie_id);
    		add_row(main_table, left, right);
    	}
    }
};
xhr.send();
main_form.reset();
}



knapp.addEventListener("click", handleClick);
