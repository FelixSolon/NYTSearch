var apikey = "bc694a104a334c12b4763b2f284c3402";
var q;
var fq;
var begin_date;
var end_date;
var sort;
var hl;
var page = 0;
var facet_filter;

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "bc694a104a334c12b4763b2f284c3402",
  'q': "alpha",
  'fq': "bravo",
  'begin_date': "20160617",
  'end_date': "20170617",
  'sort': "newest",
  'hl': "true",
  'page': 0,
  'facet_field': "section_name",
  'facet_filter': "true"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});