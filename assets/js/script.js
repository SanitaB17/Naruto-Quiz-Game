console.log("Hello");

//start  code taken from w3 schools.com https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  // End of code