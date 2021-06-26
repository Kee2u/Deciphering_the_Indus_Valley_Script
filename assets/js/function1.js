$(document).ready(function() {
    $("select").change(function() {
      $("select option:selected").each(function() {
        if ($(this).attr("value") == "1one") {
          $(".1box").hide();
          $(".1red").show();
        }
        if ($(this).attr("value") == "1two") {
          $(".1box").hide();
          $(".1green").show();
        }
        if ($(this).attr("value") == "1three") {
          $(".1box").hide();
          $(".1blue").show();
        }
        if ($(this).attr("value") == "1four") {
          $(".1box").hide();
          $(".1four").show();
        }
        if ($(this).attr("value") == "1five") {
          $(".1box").hide();
          $(".1five").show();
        }
        if ($(this).attr("value") == "1six") {
          $(".1box").hide();
          $(".1six").show();
        }
        if ($(this).attr("value") == "1seven") {
          $(".1box").hide();
          $(".1seven").show();
        }
        if ($(this).attr("value") == "1eight") {
          $(".1box").hide();
          $(".1eight").show();
        }
        if ($(this).attr("value") == "1nine") {
          $(".1box").hide();
          $(".1nine").show();
        }
          if ($(this).attr("value") == "1ten") {
          $(".1box").hide();
          $(".1ten").show();
        }
          if ($(this).attr("value") == "1eleven") {
          $(".1box").hide();
          $(".1eleven").show();
        }
          if ($(this).attr("value") == "1twelve") {
          $(".1box").hide();
          $(".1twelve").show();
        }
      });
    }).change();
  });