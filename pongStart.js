$(document).ready(function(){

LeftP = 0;
RightP = 0;
end = 5;
	setInterval(function() {
			if (end !=0){
			end--;
			$('#test').html(end);
		}
	},1000);
});