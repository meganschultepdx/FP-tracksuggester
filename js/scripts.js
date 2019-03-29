$(document).ready(function() {
  $("#formOne").submit(function(event){

    var ask1 = $("input:radio[name=ask1]:checked").val();
    var ask2 = $("input:radio[name=ask2]:checked").val();
    var ask3 = $("input:radio[name=ask3]:checked").val();
    var ask4 = $("input:radio[name=ask4]:checked").val();
    var ask5 = $("input:radio[name=ask5]:checked").val();

    if (ask1 === "front" && ask2 === "design" && ask3 === "userExperience" || ask1 === "front" && ask2 === "design" && ask4 === "agency" || ask1 === "front" && ask2 === "design" && ask5 === "designers" || ask1 === "front" && ask3 === "userExperience" && ask4 === "agency" || ask1 === "front" && ask3 === "userExperience" && ask5 === "designers" || ask1 === "front" && ask4 === "agency" && ask5 === "designers" || ask2 === "design" && ask3 === "userExperience" && ask4 === "agency" || ask2 === "design" && ask3 === "userExperience" && ask5 === "designers" || ask2 === "design" && ask4 === "agency" && ask5 === "designers" || ask3 === "userExperience" && ask4 === "agency" && ask5 === "designers") {
      $("#css").show();
      $("#java, #php, #moreResearch").hide();
    } else if (ask1 === "back" && ask2 === "android" && ask3 === "innerWorkings" || ask1 === "back" && ask2 === "android" && ask4 === "enterprise"|| ask1 === "back" && ask2 === "android" && ask5 === "developers" || ask2 === "android" && ask3 === "innerWorkings" && ask4 === "enterprise" || ask1 === "back" && ask3 === "innerWorkings" && ask4 === "enterprise" || ask1 === "back" && ask4 === "enterprise" && ask5 === "developers" || ask2 === "android" && ask3 === "innerWorkings" && ask5 === "developers" || ask3 === "innerWorkings" && ask4 === "enterprise" && ask5 === "developers") {
      $("#java").show();
      $("#css, #php, #moreResearch").hide();
    } else if (ask1 === "back" && ask2 === "websites" && ask3 === "systems" || ask1 === "back" && ask2 === "websites" && ask4 === "government" || ask1 === "back" && ask2 === "websites" && ask5 === "developers" || ask1 === "back" && ask3 === "systems" && ask4 === "government" || ask1 === "back" && ask3 === "systems" && ask5 === "developers" || ask1 === "back" && ask4 === "government" && ask5 === "developers" || ask2 === "websites" && ask3 === "systems" && ask4 === "government" || ask2 === "websites" && ask3 === "systems" && ask5 === "developers" || ask2 === "websites" && ask4 === "government" && ask5 === "developers" || ask3 === "systems" && ask4 === "government" && ask5 === "developers") {
      $("#php").show();
      $("#css, #java, #moreResearch").hide();
    } else {
      $("#moreResearch").show();
      $("#css, #php, #java").hide();
    }

  event.preventDefault();
  });
});
