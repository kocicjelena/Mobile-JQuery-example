$("#myform").click(function(){
  var js = document.querySelector("#master").innerHTML
  var formjson = $(js).serializeArray();
  var formxml = json2xml(formjson);
  $.post("http://localhost:8070/nov15/2.xml", { 'data': formxml }, function(data){ 
    // callback logic
  });
  return false;
});