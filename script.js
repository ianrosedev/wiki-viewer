/*$(function() {
  $.ajax({
    url: 'http://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&meta=&continue=&titles=San+Francisco&rvprop=content&rvparse=1&rvsection=0',
    //url: 'http://en.wikipedia.org/wiki/Special:Random&format=json',
    //data: queryData,
    dataType: 'jsonp',
    //type: 'POST',
    //headers: { 'Api-User-Agent': 'ianrose@gmail.com' },
    success: 
      function(data) {
      console.log(data['query']);
      
    }
  });
  
});*/

$(function() {
  // Button redirects to random wiki page
  $('#random').click(function() {
    window.location.href = 'http://en.wikipedia.org/wiki/Special:Random';
  });
});