

$(document).ready(function(){
  var listnum = 1;
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
  $("ul").on('click', '.close', function () {
      $(this).parent().fadeOut();
  });
  $.fn.additem = function(){
    var addtext=$.trim($(".add-text").val());
    var listitem = $("<li><div><input type='checkbox' id='checkbox" + listnum + "' value='None' name='check'><label class='checkbox' for='checkbox" + listnum + "''></div><p>" + addtext + "</p><a class='close'>X</a></li>");
    if(addtext.length>0) {
      $("ul").prepend(listitem);
      document.getElementById("add-text").value = "";
      listnum++;
    }
  }
  $(".add").click(function(){
     $.fn.additem();
  });
  $(".add-text").keypress(function( event ) {
     if ( event.which == 13 ) {
       $.fn.additem();
     }
  });
  $("ul").on('click', '.checkbox', function () {
    $(this).parents("li").toggleClass("completed");
       if ( $(this).parents("li").hasClass("completed") ) {
         $(this).parents("li").appendTo("ul");
       } else {
         $(this).parents("li").prependTo("ul");
       }
  });
});
