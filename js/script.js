
// Кроссбраузерная функция создания XMLHttpRequest
function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}
// Кроссбраузерная функция создания XMLHttpRequest//
////////////////////////////////////////////////////////
var button = document.getElementById('button1');
var str;
var xmlhttp;

function ask() {
  var zapros = document.getElementById('field1');
  var zapros1 = zapros.getAttribute('value');
  var str = 'https://pixabay.com/api/?key=3168519-28357a1b07f864f5473734c78&q='+zapros1+'&image_type=photo';
  return(str);
 
}
function ask1(){

  var xmlhttp = getXmlHttp();
  xmlhttp.open('GET', ask(str) , true);
  xmlhttp.send(null);
  
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
      if(xmlhttp.status == 200) {
        var  data = JSON.parse(xmlhttp.responseText);
        var im = document.getElementById('image1'); 
        im.setAttribute('src', data.hits[0].previewURL);
        alert(im.getAttribute('src'));

        } else { alert('bad');}
    } 
  }
}
    // ask1();
  button.addEventListener("click", ask1);




