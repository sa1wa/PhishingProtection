// Get the modal 1
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");

// Get the button that opens the modal
var btn1 = document.getElementById("info-1");
var btn2 = document.getElementById("info-2");
var btn3 = document.getElementById("info-3");
var btn4 = document.getElementById("info-4");
var btn5 = document.getElementById("info-5");
var btn6 = document.getElementById("info-6");

// Get the <span> element that closes the modal
// var closeBtn = document.getElementsByClassName("close");

// Modal 1
// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
  }
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}
btn5.onclick = function() {
    modal5.style.display = "block";
}
btn6.onclick = function() {
    modal6.style.display = "block";
}


var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");
var close4 = document.getElementById("close4");
var close5 = document.getElementById("close5");
var close6 = document.getElementById("close6");


close1.onclick = function() {
    modal1.style.display = "none";
  }
close2.onclick = function() {
    modal2.style.display = "none";
}
close3.onclick = function() {
    modal3.style.display = "none";
}
close4.onclick = function() {
    modal4.style.display = "none";
}
close5.onclick = function() {
    modal5.style.display = "none";
}
close6.onclick = function() {
    modal6.style.display = "none";
}

  
  
  // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }



  
 