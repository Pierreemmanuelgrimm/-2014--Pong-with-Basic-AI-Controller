$(document).ready(function(){
velocityM = 5;
velocityA = (Math.random()*Math.PI/2)-(Math.PI/4);

velY = (velocityM*Math.sin(velocityA));
velX = (velocityM*Math.cos(velocityA));
		setInterval(function() {
			if(end == 0){
				 $('#b1').css("top",""+(parseInt($('#b1').css('top')) - velY)+"");
				 $('#b1').css("left",""+(parseInt($('#b1').css('left')) + velX)+"");
				 if ((parseInt($('#b1').css('top'))- velY) <= 100){
					velY *= -1;
				 }
				 if ((parseInt($('#b1').css('top'))- velY) >= 580){
					velY *= -1;
				 }
				 if ((parseInt($('#b1').css('left'))+ velX) <= 170){
					if (((parseInt($('#b1').css('top'))- velY + 20) >= (parseInt($('#p1').css('top')))) && ((parseInt($('#b1').css('top'))- velY) <= (parseInt($('#p1').css('top')) + 100) )){
						velX *= -1;
					}
				 }
				 if ((parseInt($('#b1').css('left'))+ velX) >= 860){
					if (((parseInt($('#b1').css('top'))- velY + 20) >= (parseInt($('#p2').css('top')))) && ((parseInt($('#b1').css('top'))- velY) <= (parseInt($('#p2').css('top')) + 100) )){
						velX *= -1;
					}
				 }
				 if ((parseInt($('#b1').css('left'))) >= 900){
					$('#b1').css("top","340px");
					$('#b1').css("left","515px");	
					end = 3;
					$('#test').html(end);
					LeftP++;
					$('#s2').html(LeftP);
					velocityA = -1*((Math.random()*Math.PI/2)+(3*Math.PI/4));
					velY = (velocityM*Math.sin(velocityA));
					velX = (velocityM*Math.cos(velocityA));
				 }
				  if (((parseInt($('#b1').css('left')))+20) <= 150){
					$('#b1').css("top","340px");
					$('#b1').css("left","515px");	
					end = 3;
					$('#test').html(end);
					RightP++;
					$('#s1').html(RightP);
					velocityA = (Math.random()*Math.PI/2)-(Math.PI/4);
					velY = (velocityM*Math.sin(velocityA));
					velX = (velocityM*Math.cos(velocityA));
				 }
			}
		},10);
});