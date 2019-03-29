$(document).ready(function() {
  $("#formOne").submit(function(event){

    var ask1 = $("input:radio[name=ask1]:checked").val();
    var ask2 = $("input:radio[name=ask2]:checked").val();
    var ask3 = $("input:radio[name=ask3]:checked").val();
    var ask4 = $("input:radio[name=ask4]:checked").val();
    var ask5 = $("input:radio[name=ask5]:checked").val();

    // if (ask1 === "front" && ask2 === "design" || ask1 === "front" && ask3 === "userExperience" || ask1 === "design" && ask4 === "agency" || ask1 === "design" && ask5 === "designers" || ask2 === "design" && ask3 === "userExperience" || ask4 === "agency" && ask5 === "designers") {
    if (ask1 === "front" && ask2 === "design" && ask3 === "userExperience" || ask1 === "front" && ask2 === "design" && ask4 === "agency" || ask1 === "front" && ask2 === "design" && ask5 === "designers") {
      $("#css").show();
      $("#java, #php, #moreResearch").hide();
    } else if (ask1 === "back" && ask2 === "android" || ask1 === "back" && ask3 === "innerworkings" && ask4 === "enterprise"|| ask1 === "back" && ask2 === "android" && ask4 === "enterprise" || ask1 === "back" && ask2 === "android" && ask5 === "developers" || ask1 === "back" && ask3 === "innerWorkings" && ask4 === "enterprise") {
      $("#java").show();
      $("#css, #php, #moreResearch").hide();
    } else if (ask1 === "back" && ask2 === "websites" || ask1 === "back" && ask3 === "systems" || ask1 === "back" && ask4 === "government") {
      $("#php").show();
      $("#css, #java, #moreResearch").hide();
    } else {
      $("#moreResearch").show();
      $("#css, #php, #java").hide();
    }

  event.preventDefault();
  });
});
