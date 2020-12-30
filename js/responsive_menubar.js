function myFunction() {
    var x = document.getElementById("mynav");
    if (x.className === "nav-collaps") {
      x.className = "nav-list";
    } 
    else {
      x.className = "nav-collaps";
    }
  }