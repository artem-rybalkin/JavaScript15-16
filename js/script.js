$(function() {
 
  $('form').submit(function (){
    $( '#images' ).empty();
    $( '#searchResult' ).empty();
   var value = $('#field1').val();
   var zapros = 'https://pixabay.com/api/?key=3168519-28357a1b07f864f5473734c78&q='+value;
  $.getJSON(zapros,
    function(data){
      if ( data.hits.length == 0 ) {
        alert('no results');
      }
   // console.log(data.hits.length);
      $.each( data.hits, function( i, hits ) {
        $( "<img/>" ).attr( "src", data.hits[i].previewURL ).appendTo('#images');
          if ( i === 9 ) { return false;}
      });
  });
  $( '#searchResult' ).append('Search Result for:'+'"'+value+'"');
    $( '#field1' ).val('');
  return false;
  });
  
 
});




