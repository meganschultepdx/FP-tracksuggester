$(document).ready(function() {
  $("#formOne").submit(function(event){

    var ask1 = $("input:radio[name=ask1]:checked").val();
    var ask2 = $("input:radio[name=ask2]:checked").val();
    var ask3 = $("input:radio[name=ask3]:checked").val();
    var ask4 = $("input:radio[name=ask4]:checked").val();
    var ask5 = $("input:radio[name=ask5]:checked").val();

    if (ask1 === "front" && ask2 === "design" || ask1 === "front" && ask3 === "userExperience" || ask1 === "design" && ask4 === "agency" || ask1 === "design" && ask5 === "designers" || ask2 === "design" && ask3 === "userExperience") {
    // if (ask1 === "front" && ask2 === "design") {
    $("#css").show();
    $("#java, #php").hide();
  } else {

  }

  event.preventDefault();
  });
});
