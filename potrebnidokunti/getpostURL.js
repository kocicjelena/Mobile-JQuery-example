function HTTP() {
 var xmlhttp
 /*@cc_on @*/
 /*@if (@_jscript_version >= 5)
   try {
   xmlhttp=new ActiveXObject("Msxml2.XMLHTTP")
  } catch (e) {
   try {
     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")
   } catch (E) {
    xmlhttp=false
   }
  }
 @else
  xmlhttp=false
 @end @*/
 if (!xmlhttp) {
  try {
   xmlhttp = new XMLHttpRequest();
  } catch (e) {
   xmlhttp=false
  }
 }
 return xmlhttp
}

if (typeof getURL=='undefined') {
 getURL=function(url,fn) { 
  var xmlhttp=new HTTP();
  if (xmlhttp) {
   xmlhttp.open("GET",url,true);
   xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4) {
     fn({status:xmlhttp.status,content:xmlhttp.responseText,
      contentType:xmlhttp.getResponseHeader("Content-Type")})
    }
   }
   xmlhttp.send()
  } else {
   //Some Appropriate Fallback...
  }
 }
}
if (typeof postURL=='undefined') {
 postURL=function(url,txt,fn,type,enc) {
  var xmlhttp=new HTTP();
  if (xmlhttp) {
   xmlhttp.open("POST",url,true);
   if (enc) xmlhttp.setRequestHeader("Content-Encoding",enc)
   if (type) xmlhttp.setRequestHeader("Content-Type",type)
   xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4) {
     fn({status:xmlhttp.status,content:xmlhttp.responseText,
      contentType:xmlhttp.getResponseHeader("Content-Type")})
    }
   }
   xmlhttp.send(txt)
  } else {
   //Some Appropriate Fallback...
  }
 }
}