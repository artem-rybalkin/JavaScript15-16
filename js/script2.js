$(document).ready(function(){


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
var im = document.getElementById('image1'); 
var parentElem = document.body;
// var str;
// var xmlhttp;
// // ask();
// function ask() {
//   var zapros = document.getElementById('field1');
//   var zapros1 = zapros.getAttribute('value');
//   var str = 'https://pixabay.com/api/?key=3168519-28357a1b07f864f5473734c78&q='+zapros1+'&image_type=photo';
//   return(str);
 
// }
function ask1(){

  var xmlhttp = getXmlHttp();
  xmlhttp.open('GET', 'https://pixabay.com/api/?key=3168519-28357a1b07f864f5473734c78&q=yellow&image_type=photo', true);
  xmlhttp.send(null);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
      if(xmlhttp.status == 200) {
        var  data = JSON.parse(xmlhttp.responseText);
        // var img = document.createElement('img');
        // img.setAttribute('src', data.hits[0].previewURL);
        // parentElem.appendChild( img );
        // alert(im.getAttribute('src'));
        // шобланизируем:)
        var template = $('#template').html();
        var content = tmpl(template, {data:data});
        $('body').append(content);
        } else { alert('bad');}
    } 
  }
}
 // function ask11(){

$('#button1').click( function() {
ask1();

});  // }
  // button.addEventListener("click", ask11);



// function key(){
//   alert('key!!!');
// }

//https://pixabay.com/api/?key=3168519-28357a1b07f864f5473734c78&q=yellow+flowers&image_type=photo
});