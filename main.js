/* This is Commented out Javascript bruh */


$(document).ready(function(){
   $("button").click(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
   });
});

$(document).ready(function(){
      $("#title").click(function(){
         $("#div1").fadeOut();
         $("#div2").fadeOut("slow");
         $("#div3").fadeOut("fast");
      });

      $("#phoneicon").mouseover(function(){
         alert("832-816-4804");
      });
});
