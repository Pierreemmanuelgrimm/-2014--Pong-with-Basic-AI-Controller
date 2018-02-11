$(document).ready(function(){
	Pspeed= 10;
		setInterval(function() {
			posP2 = parseInt($('#p2').css('top'));
			if (velX > 0 && end == 0){
				if ((parseInt($('#b1').css('top'))+10) > (posP2+50)){
					$('#p2').css("top",""+(posP2+Pspeed)+"");
				}				
				if ((parseInt($('#b1').css('top'))+10) < (posP2+50)){
					$('#p2').css("top",""+(posP2-Pspeed)+"");
				}	
			}
			if (velX < 0){
				if (posP2+50 <= 345){
					$('#p2').css("top",""+(posP2+Pspeed)+"");
				}
				if (posP2+50 > 355){
					$('#p2').css("top",""+(posP2-Pspeed)+"");
				}		
			}
		},35);
});