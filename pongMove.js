$(document).ready(function(){	
		keyArrowUp = false;
		keyArrowDown = false;
	$(document).keydown(function(event) {
		switch (event.which){
			case 38:
				keyArrowUp = true;
				break;
			case 40:
				keyArrowDown = true;
				break;		
		}
	});
	$(document).keyup(function(event) {
		switch (event.which){
			case 38:
				keyArrowUp = false;
				break;
			case 40:
				keyArrowDown = false;
				break;		
		}
	});

	setInterval(function() {
		posP = parseInt($('#p1').css('top'));
		if (keyArrowUp){
			if ((posP -5) > 100){
				$('#p1').css("top",""+(posP-5)+"");
			}
			if (posP -5 >= 100){
				if (posP <= 105){
					posX = 100;
					$('#p1').css("top",""+(posX)+"");
				}
			}	
		}
		if (keyArrowDown){
			if ((posP + 5) < 500){
				$('#p1').css("top",""+(posP+5)+"");
			}
			if ((posP + 5) >= 500){
				if(posP <=495){
					posX = 500;
					$('#p1').css("top",""+posX+"");
				}
			}			
		}	
	},5);	
});