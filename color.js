$(document).ready(function() {
   $("#color-input").on("keyup", function(event) {
     $(".colored").css("background-color", $(event.target).val());
   });
   $("#text-color-input").on("keyup", function(event) {
     $("li.colored").css("color", $(event.target).val());
   })
});
