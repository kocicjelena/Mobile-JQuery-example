$(document).on('pagebeforechange', "#zaposljeni1str", function() {
$.ajax({
    type: "GET",
    url: "http://localhost:8070/5/nalozi.xml",
    dataType: "xml",
    success: xmlParserzaposljeni
   });
});
function xmlParserzaposljeni(xml) {
$(xml).find("nalozi").each(function () {
 $(".radnal").append('<div class="nalozi"><div class="zaduzen">' + $(this).find("adv1").text() +   '</div></div>');
  
  
  $(this).find("zaduzen").find('adv1').each(function(){
  $("#select-native-3").append('<option>' + $(this).find("bpo").text() + '</option>');
   $("#select-native-4").append('<option class="adv1">' + $(this).find("pbr").text() + '</option>');
	 $("#select-native-2").append('<option class="adv1">' + $(this).find("zag").text() + '</option>');
	});
	  $(this).find("zaduzen").find('adv2').each(function(){
	  $("#select-native-2").append('<option>' + $(this).find("zag").text() + '</option>');
 $("#select-native-4").append('<option>' + $(this).find("pbr").text() + '</option>');
	 $("#select-native-3").append('<option>' + $(this).find("bpo").text() + '</option>');

 });});}
  