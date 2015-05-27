var xmlDocument = [create xml document];
var xmlRequest = $.ajax({
  url: "page.php",
  processData: false,
  data: xmlDocument
});
 
xmlRequest.done( handleResponse );