//home modal
var modal = document.getElementById('homeModal');
//get the button that opens the modal
var btn = document.getElementById("listHome");
//get the <span> element that closes the modal
btn.onclick = function() {
    modal.style.display = "block";
};
// ----------------------------------------------------------------------------

//news modal
var modal = document.getElementById('newsModal');
//get the button that opens the modal
var btn = document.getElementById("listNews");
//get the <span> element that closes the modal
btn.onclick = function() {
    modal.style.display = "block";
};

// ----------------------------------------------------------------------------

//contact modal
var modal = document.getElementById('contactModal');
//get the button that opens the modal
var btn = document.getElementById("listContact");
//when the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

// ----------------------------------------------------------------------------

//about modal
var modal = document.getElementById('aboutModal');
//get the button that opens the modal
var btn = document.getElementById("listAbout");
//when the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

// ----------------------------------------------------------------------------

// close the modal
//get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0,1,2,3];
//when the user clicks on <span> (Back), close the modal
span.onclick = function() {
    modal.style.display = "none";
};
//when the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
