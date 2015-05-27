$("#myform").submit(function(){
  var formjson = $('#myform').serializeArray();
  var formxml = json2xml(formjson);
  $.post("http://localhost:8070/nov15/post.html", { 'data': formxml }, function(data){ 
    // callback logic
  });
  return false;
});