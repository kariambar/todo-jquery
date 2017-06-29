//CODIGO JQUERY
//funcion para añadir item con enter
$(document).ready(function(){
    $(".add").click(function(){
     $.fn.additem(); //fn combina el contenido de un objeto
  });
  $(".add-text").keypress(function( event ) { //detectar la presión de las teclas del teclado
     if ( event.which == 13 ) { //event.which propiedad que indica la tecla o botón específico que se pulsó.
       $.fn.additem();
     }
  });
  //checkbox: Selecciona todos los elementos del tipo formulario.
  $("ul").on('click', '.checkbox', function () { //controlador de eventos para uno o más eventos a los elementos seleccionados.
    $(this).parents("li").toggleClass("completed"); //toggleClassAñade o quita una o más clases de cada elemento del conjunto de elementos
       if ( $(this).parents("li").hasClass("completed") ) { //hasClass Determina si alguno de los elementos coincidentes tiene asignada la clase dada
         $(this).parents("li").appendTo("ul"); //appendTo Inserta contenido al final del elemento de destino
         $(this).parents("li").prependTo("ul"); //prepend inserta contenido al principio de un elemento especificado
       }
  });
 //añadir lista a items completa 
  var listnum = 1;
  $( "#sortable" ).sortable(); //sortable Reordenar elementos en una lista
  $( "#sortable" ).disableSelection(); //Deshabilita la selección de contenido de texto dentro del conjunto de elementos coincidentes
  $("ul").on('click', '.close', function () {
      $(this).parent().fadeOut();//Oculta los elementos coincidentes desvaneciéndolos a transparente.
  });
  $.fn.additem = function(){
    var addtext=$.trim($(".add-text").val());//trim Elimina el espacio en blanco desde el principio y el final de una cadena.
    //añado mis tareas a la lista
    var listitem = $("<li><input type='checkbox' id='checkbox" + listnum + "' value='None' name='check'><label class='checkbox' for='checkbox" + listnum + "''><p>" + addtext + "</p>" + "</label><a class='close waves-effect waves-light btn item-delete' id='eliminar'>remove</a>"+"</li>");
    if(addtext.length>0) {
      $("ul").prepend(listitem);
      document.getElementById("add-text").value = "";
      listnum++; 
    }
  }

});