function showPicture() {
    var sourceOfPicture = "images/2012.png"
    var img = document.getElementById('2012')
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block";

    var sourceOfPicture = "images/kal.png"
    var img1 = document.getElementById('kal')
    img1.src = sourceOfPicture.replace('90x90', '225x225');
    img1.style.display = "block";
  } 


  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



$(document).ready(function() {
  $("select").change(function() {
    $("select option:selected").each(function() {
      if ($(this).attr("value") == "Oone") {
        $(".box").hide();
        $(".red").show();
      }
      if ($(this).attr("value") == "Otwo") {
        $(".box").hide();
        $(".green").show();
      }
      if ($(this).attr("value") == "Othree") {
        $(".box").hide();
        $(".blue").show();
      }
      if ($(this).attr("value") == "Ofour") {
        $(".box").hide();
        $(".four").show();
      }
      if ($(this).attr("value") == "Ofive") {
        $(".box").hide();
        $(".five").show();
      }
      if ($(this).attr("value") == "Osix") {
        $(".box").hide();
        $(".six").show();
      }
      if ($(this).attr("value") == "Oseven") {
        $(".box").hide();
        $(".seven").show();
      }
      if ($(this).attr("value") == "Oeight") {
        $(".box").hide();
        $(".eight").show();
      }
    });
  }).change();
});