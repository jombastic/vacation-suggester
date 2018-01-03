var chosen = function(brazil, greece, india, macedonia) {
  if ((brazil > greece) && (brazil > india)) {
    return "brazil";
  } else if ((greece > brazil) && (greece > india)) {
    return "greece";
  } else if ((india > brazil) && (india > greece)) {
    return "india";
  } else if ((india === brazil) || (brazil === greece) || (india === greece)) {
    return "macedonia";
  }
};


$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var place = $("input:radio[name=place]:checked").val();
    var food = $("input:radio[name=food]:checked").val();
    var activity = $("input:radio[name=activity]:checked").val();
    var animals = $("input:radio[name=animals]:checked").val();

    var choices = [place, food, activity, animals];
    var brazil = 0;
    var greece = 0;
    var india = 0;
    var macedonia = 0;

    choices.forEach(function(choice) {
      if (choice === "1") {
        brazil++;
      } else if (choice === "2") {
        greece++;
      } else if (choice === "3") {
        india++;
      }
    });

    var result = chosen(brazil, greece, india, macedonia);

    if (!place || !food || !activity || !animals) {
      alert("Please answer all questions.")
    } else {
      $("#" + result).show();
    }
  });
});
