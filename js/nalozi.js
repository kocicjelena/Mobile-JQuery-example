	$(document).on('pageinit', function() {
			$.ajax({
				type: "GET",
				url: "http://localhost:8070/5/nalozi.xml",
				dataType: "xml",
				success: function(xml) {
					$(xml).find('zaduzen').each(function(){
						var id = $(this).attr('id');
						var url = $(this).find('url').text();
						$('<div class="items" id="link_'+id+'"></div>').html('<a href="'+url+'">'+id+'</a>').appendTo('#page-wrap');
						$(this).find('adv1').each(function(){
							var okrivljen = $(this).find('okrivljen').text();
							var vestak = $(this).find('vestak').text();
							var pbr = $(this).find('prb').text();
							var kbr = $(this).find('kbr').text();
							var zag = $(this).find('zag').text();
							$('<div class="zag"></div>').html(zag).appendTo('#link_'+id);
							$('<div class="okrivljen"></div>').html(okrivljen).appendTo('#link_'+id);
							$('<div class="vestak"></div>').html(vestak).appendTo('#link_'+id);
							$('<div class="pbr"></div>').html(pbr).appendTo('#link_'+id);
							$('<div class="kbr"></div>').html(kbr).appendTo('#link_'+id);
							$('<div class="zag"></div>').html(zag).appendTo('#zagid');
							$('<div class="okrivljen"></div>').html(okrivljen).appendTo('#okrivljen');
							$('<div class="vestak"></div>').html(vestak).appendTo('#vestak');
							$('<div class="pbr"></div>').html(pbr).appendTo('#pbr');
							$('<div class="kbr"></div>').html(kbr).appendTo('#kbr');
						});
						$(this).find('adv2').each(function(){
							var okrivljen2 = $(this).find('okrivljen').text();
							var vestak2 = $(this).find('vestak').text();
							var pbr2 = $(this).find('prb').text();
							var kbr2 = $(this).find('kbr').text();
							var zag2 = $(this).find('zag').text();
							$('<div class="zag2"></div>').html(zag2).appendTo('#link_'+id);
							$('<div class="okrivljen"></div>').html(okrivljen2).appendTo('#link_'+id);
							$('<div class="vestak"></div>').html(vestak2).appendTo('#link_'+id);
							$('<div class="pbr"></div>').html(pbr2).appendTo('#link_'+id);
							$('<div class="kbr"></div>').html(kbr2).appendTo('#link_'+id);
							$('<div class="zag2"></div>').html(zag2).appendTo('#zagid2');
							$('<div class="okrivljen"></div>').html(okrivljen2).appendTo('#okrivljen2');
							$('<div class="vestak"></div>').html(vestak2).appendTo('#vestak2');
							$('<div class="pbr"></div>').html(pbr2).appendTo('#pbr2');
							$('<div class="kbr"></div>').html(kbr2).appendTo('#kbr2');
						});
					});
				}
			});
		});