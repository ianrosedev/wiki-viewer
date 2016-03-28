 $(function() {
  // Search Wikipedia
  $("#search, #search-term").on('click keyup', function(e) {
    var q = $("#search-term").val();
    $.getJSON("http://en.wikipedia.org/w/api.php?callback=?",
      {
        srsearch: q,
        action: "query",
        list: "search",
        format: "json"
      },
    function(data) {
      $("#results").empty();
      $("#results").append("<h3>Results for: <b>" + q + "</b></h3>");
      $.each(data.query.search, function(i, item){
      $("#results").append("<div><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'>" + item.title + "</a><br>" + item.snippet + "<br><br></div>");
      });
    });
  });

  // Button redirects to random wiki page
  $('#random').click(function() {
    window.location.href = 'http://en.wikipedia.org/wiki/Special:Random';
  });
});