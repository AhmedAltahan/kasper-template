

// *************************************************
// Make toggle link to show links

function appear(id) {
    var element = document.getElementById("a-appear");

    if (element) {
        var display = element.style.display;

        if (display == "none") {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    }
}

// *************************************************
// *************************************************
