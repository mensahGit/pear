 

 function w3_open() {
    document.getElementById("mySidenav").style.display = "inline";
    document.getElementById("myOverlay").style.display = "block";
    console.log("...opened fired!");
}
 
 function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
    console.log("...closed fired!");
}

function onClicker(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}