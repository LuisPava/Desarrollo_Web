jQuery(document).ready(function () {
  $("#btnRegistrar").click(function () {
    //alert("Aquí Vamos ...");
    document.getElementById("txtHora").value=Date().substring(16,25);
  });
});



function horaActual() {
  setTimeout(horaActual, 1000);
  //alert(Date().substring(16,25));
  document.getElementById("txtHora").value=Date().substring(16,25);
  document.getElementsByName("phora").value="Salida";
  $("#phora").text(Date().substring(16,25));
  //document.getElementById("txtUsuario").innerHTML=Date().substring(16,25);
}

function horaIndex() {
  setTimeout(horaIndex, 1000);
  //alert(Date().substring(16,25));
  document.getElementById("phora").innerHTML=Date().substring(16,25);
  document.getElementsByName("phora").value=Date().substring(16,25);
  //$("#phora").text(Date().substring(16,25));
  //document.getElementById("txtUsuario").innerHTML=Date().substring(16,25);
}
