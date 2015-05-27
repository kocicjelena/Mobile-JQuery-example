function json2xml(o, tab) {
  var toXml = function(v, name, ind) {
    var xml = "";
    if (typeof(v) == "object") {
      var hasChild = false;
      for (var m in v) {
        if (m.charAt(0) == "@") {
          xml += " " + m.substr(1) + "=\"" + v[m].toString() + "\"";
        } else {
          hasChild = true;
        }
      }
      if (hasChild) {
        for (var m in v) {
          if (m=="name") {
            xml += "<" + v[m] + ">" + v['value'] + "";
          }
        }
      }
    }
    return xml;
  }, xml="";
  for (var m in o) {
    xml += toXml(o[m], m, "");
  }

  return "
"+xml+"
";

}
and then I call it like this:

var formjson = $('form#myform').serializeArray();
//var formxml = $.compactJSON(mjson);
var formxml = json2xml(formjson);
alert(formxml);
$.post("/collect.cgi", { 'data': formxml }, function (data){ });