$(document).ready(function() {
    $("select").change(function() {
      $("select option:selected").each(function() {
        if ($(this).attr("value") == "1one") {
          $(".box1").hide();
          $(".1red").show();
        }
        if ($(this).attr("value") == "1two") {
          $(".box1").hide();
          $(".1green").show();
        }
        if ($(this).attr("value") == "1three") {
          $(".box1").hide();
          $(".1blue").show();
        }
        if ($(this).attr("value") == "1four") {
          $(".box1").hide();
          $(".1four").show();
        }
        if ($(this).attr("value") == "1five") {
          $(".box1").hide();
          $(".1five").show();
        }
        if ($(this).attr("value") == "1six") {
          $(".box1").hide();
          $(".1six").show();
        }
        if ($(this).attr("value") == "1seven") {
          $(".box1").hide();
          $(".1seven").show();
        }
        if ($(this).attr("value") == "1eight") {
          $(".box1").hide();
          $(".1eight").show();
        }
        if ($(this).attr("value") == "1nine") {
          $(".box1").hide();
          $(".1nine").show();
        }
          if ($(this).attr("value") == "1ten") {
          $(".box1").hide();
          $(".1ten").show();
        }
          if ($(this).attr("value") == "1eleven") {
          $(".box1").hide();
          $(".1eleven").show();
        }
          if ($(this).attr("value") == "1twelve") {
          $(".box1").hide();
          $(".1twelve").show();
        }
      });
    }).change();
  });