$(document).ready(function () {
$.ajax({
    type: "GET",
    url: "http://localhost:8070/5/nalozi.xml",
    dataType: "xml",
    success: xmlParser3
   });
});

function xmlParser3(xml) {
$(xml).find("nalozi").each(function () {
  $("#select-native-2").append('<option>' + $(this).find("zaduzen").find("adv1").find("zag").text() + '</option>');
	 $("#select-native-2").append('<option>' + $(this).find("zaduzen").find("adv2").find("zag").text() + '</option>');
  $("#select-native-3").append('<option>' + $(this).find("zaduzen").find("adv1").find("bpo").text() + '</option>');
	 $("#select-native-3").append('<option>' + $(this).find("zaduzen").find("adv2").find("bpo").text() + '</option>');
  $("#select-native-1").append('<option>' + $(this).find("zaduzen").find("adv1").find("bpo").text() + '</option>');
	 $("#select-native-1").append('<option>' + $(this).find("zaduzen").find("adv2").find("bpo").text() + '</option>');

$(this).find("zaduzen").find('adv1').each(function(){
$(this).find("zaduzen").find('adv1').find('zag').each(function(){
$(xml).find("nalozi").find("zaduzen").each(function () {
$(this).find('adv1').each(function(){
$("#zagzanalbpo").append('<div class="nalozi"><div class="zaduzen">' + $(this).find("zaduzen").find('adv1').find("bpo").text() + '</div></div>');
});
});
$(".bpoclasss").append('<div class="nalozi"><div class="zaduzen"><div class="adv1">' + $(this).find("zaduzen").find('adv1').find("bpo").text() + '</div></div></div>');
$(".bpozag").append('<div class="nalozi"><div class="zaduzen"><div class="adv1">' + $(this).find("zaduzen").find('adv1').find("zag").text() + '</div></div></div>');

});

 $(".bpoclass").append('<div class="nalozi"><div class="zaduzen"><div class="adv1">' + $(this).find("zaduzen").find('adv1').find("bpo").text() +   '</div></div></div>');

   $("#bpo1").append('<div class="nalozi"><div class="zaduzen"><div class="adv1">' + $(this).find("zaduzen").find('adv1').find("bpo").text() + '</div>');
	 $("#bpo2").append('<div class="nalozi"><div class="zaduzen"><div class="adv2">' + $(this).find("zaduzen").find('adv1').find("bpo").text() + '</div>');
 }); 
  var myzag = document.getElementById("test32").value;
 var zag = $(this).find("zaduzen").find("adv1").find('zag').text();
 if (zag == myzag){$(".myzag").append('<div class="myzag">' + $(this).find("zaduzen").find('adv1').find("osiguranje").text() +   '</div>');};
	});

}