$(function(){
	
	let i=0;
	let oBtn = $(".button").find("label");
	let timer = null;
	let Iheight =0;
	move();
	timer =setInterval(move,2000);
	function move(){
			if(i===4){
	            i=0;
           	}
			Iheight = -40*i;	
			$("#banner_1").animate({top:Iheight+"rem"},"slow");	
			oBtn.eq(i).addClass("yellow");
			oBtn.eq(i-1).removeClass("yellow");
			i++;
	}
})
