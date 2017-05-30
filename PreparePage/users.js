// var current_user = "bruker1"
var current_user = document.querySelector("input[name = 'search']");

function getUserInfo() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://wildboy.uib.no/mongodb/profiles/?filter_username=" + current_user + "&limit=1", true);
    xhr.responseType = "json";
    xhr.onload = function() {
    profile = xhr.response.rows[0];

    console.log("Can't find the user. Input value was" + current_user.value);

    // show mylist
    if (current_user) {
        for (movie_id_index in profile.mylist) {
        movie_id = profile.mylist[movie_id_index];
        var left = document.createTextNode(current_user);
        var right = document.createTextNode(movie_id);
        add_row(main_table, left, right);
        }
    }
        else 
            console.log("Can't find the user. Input value was" + current_user);
};
    xhr.send();

}