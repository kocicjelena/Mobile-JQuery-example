	$(document).ready(function(){
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
							$('<li class="zag"></li>').html(zag).appendTo('#link_'+id);
							$('<li class="okrivljen"></li>').html(okrivljen).appendTo('#link_'+id);
							$('<li class="vestak"></li>').html(vestak).appendTo('#link_'+id);
							$('<li class="pbr"></li>').html(pbr).appendTo('#link_'+id);
							$('<li class="kbr"></li>').html(kbr).appendTo('#link_'+id);
							$('<li class="zag"></li>').html(zag).appendTo('#zagid');
							$('<li class="okrivljen"></li>').html(okrivljen).appendTo('#okrivljen');
							$('<li class="vestak"></li>').html(vestak).appendTo('#vestak');
							$('<li class="pbr"></li>').html(pbr).appendTo('#pbr');
							$('<li class="kbr"></li>').html(kbr).appendTo('#kbr');
						});
						$(this).find('adv2').each(function(){
							var okrivljen2 = $(this).find('okrivljen').text();
							var vestak2 = $(this).find('vestak').text();
							var pbr2 = $(this).find('prb').text();
							var kbr2 = $(this).find('kbr').text();
							var zag2 = $(this).find('zag').text();
							$('<li class="zag2"></li>').html(zag2).appendTo('#link_'+id);
							$('<li class="okrivljen"></li>').html(okrivljen2).appendTo('#link_'+id);
							$('<li class="vestak"></li>').html(vestak2).appendTo('#link_'+id);
							$('<li class="pbr"></li>').html(pbr2).appendTo('#link_'+id);
							$('<li class="kbr"></li>').html(kbr2).appendTo('#link_'+id);
							$('<li class="zag2"></li>').html(zag2).appendTo('#zagid2');
							$('<li class="okrivljen"></li>').html(okrivljen2).appendTo('#okrivljen2');
							$('<li class="vestak"></li>').html(vestak2).appendTo('#vestak2');
							$('<li class="pbr"></li>').html(pbr2).appendTo('#pbr2');
							$('<li class="kbr"></li>').html(kbr2).appendTo('#kbr2');
						});
					});
				}
			});
		});