// input to track
var naam = document.getElementById("naam");
var nummer = document.getElementById("nummer");

if (sessionStorage.getItem("autosave")) { 
// Restore a content of the input
    naam.value = sessionStorage.getItem("autosave");
}


if (sessionStorage.getItem("autosave2")) {
    // Restore a content of the input
    nummer.value = sessionStorage.getItem("autosave2");
}


// Listen for changes in the input field
naam.addEventListener("change", function () {
    // save value into sessionStorage object 
    sessionStorage.setItem("autosave", naam.value);
});

nummer.addEventListener("change", function () {
    // save value into sessionStorage object 
    sessionStorage.setItem("autosave2", nummer.value);
});

