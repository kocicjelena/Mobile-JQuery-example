  $(document).on('change', '#select-native-1', function(){ 
    var dirName1 = $.mobile.path.get( $( this ).attr( "#select-native-1" ) );
	var selektovano1 = $(this).find("option:selected").text();
	var dodelodgbr = document.querySelector("#vezabr").innerHTML;
    $( "#myResultsel1" ).text( String( dirName1 ) );	
        document.querySelector("#status1").innerHTML = selektovano1;
		$("#btn3").click(function(){
        $("#test3").val(selektovano1);
  });
   $("#btn3veza").click(function(){
        $("#test3veza").val(selektovano1);
  });
   });
    $(document).on('change', '#select-native-2', function(){   
    var dirName = $.mobile.path.get( $( this ).attr( "#select-native-2" ) );
	var selektovano2 = $(this).find("option:selected").text();
    $( "#myResult2" ).text( String( dirName ) );	
        document.querySelector("#status2").innerHTML = selektovano2;
		$("#btn32").click(function(){
        $("#test32").val(selektovano2);
  });
   });
    $(document).on('change', '#select-native-3', function(){   
    var dirName = $.mobile.path.get( $( this ).attr( "#select-native-3" ) );
	var selektovano3 = $(this).find("option:selected").text();
    $( "#myResult3" ).text( String( dirName ) );	
        document.querySelector("#status3").innerHTML = selektovano3;
		$("#btn33").click(function(){
        $("#test33").val(selektovano3);
  });
   });
    $(document).on('change', '#select-native-4', function(){   
    var dirName = $.mobile.path.get( $( this ).attr( "#select-native-4" ) );
	var selektovanoadvsele = $(this).find("option:selected").text();
    $( "#myResultadvsele" ).text( String( dirName ) );	
        document.querySelector("#statusadvsele").innerHTML = selektovanoadvsele;
		$("#btnadvsele").click(function(){
        $("#testadvsele").val(selektovanoadvsele);
  });
   });
    $(document).on('change', '#select-native-5', function(){   
    var dirName5 = $.mobile.path.get( $( this ).attr( "#select-native-5" ) );
	var selektovanoadvselec = $(this).find("option:selected").text();
    $( "#myResultadvselec" ).text( String( dirName ) );	
        document.querySelector("#statusadvselec").innerHTML = selektovanoadvselec;
		$("#btnadvselec").click(function(){
        $("#testadvselec").val(selektovanoadvselec);
  });
   });
   $(document).on('change', '#select-native-6', function(){   
    var dirName6 = $.mobile.path.get( $( this ).attr( "#select-native-6" ) );
	var selektovano6 = $(this).find("option:selected").text();
    $( "#myResult6" ).text( String( dirName6 ) );	
        document.querySelector("#status6").innerHTML = selektovano6;
		$("#btn6").click(function(){
        $("#test6").val(selektovano6);
  });
   });
     $(document).on('change', '#select-native-7', function(){ 
    var dirName = $.mobile.path.get( $( this ).attr( "#select-native-7" ) );
	var selektovanozag = $(this).find("option:selected").text();
	var dodelodgbr = document.querySelector("#vezabr").innerHTML;
    $( "#myResultsel1" ).text( String( dirName ) );	
        document.querySelector("#statuszag").innerHTML = selektovanozag;
		$("#btn7").click(function(){
        $("#test7").val(selektovanozag);
  });
   });