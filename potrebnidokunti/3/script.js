var xhr = new XMLHttpRequest();
xhr.open("GET", "text.txt", true);
xhr.onreadystatechange = function(){
	if (xhr.readyState === 4) {
		alert(xhr.responseText);
	}
}};
xhr.send(null);
alert(xhr.responseText + "this is outside of event haldler");