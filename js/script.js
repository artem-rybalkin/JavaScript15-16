
var xmlhttp;
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
var str;
var button = document.getElementById('button1');

function ask1(){
  var zapros = document.getElementById('field1').value;
  var str = 'https://pixabay.com/api/?key=3168519-28357a1b07f864f5473734c78&q='+zapros+'&image_type=photo';

  var xmlhttp = getXmlHttp();
  xmlhttp.open('GET', str , true);
  xmlhttp.send(null);
  
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
      if(xmlhttp.status == 200) {
        var  data = JSON.parse(xmlhttp.responseText);
        var im = document.getElementById('image1'); 
        im.setAttribute('src', data.hits[0].previewURL);
        alert(data.hits[0].previewURL);
        } else { alert('bad');}
    } 
  }
}
    // ask1();
  button.addEventListener("click", ask1);




