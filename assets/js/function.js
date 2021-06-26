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