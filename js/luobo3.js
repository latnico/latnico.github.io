	window.onload= function(){
		var oImg = document.getElementById("list");
		var oLabel1 = document.getElementById("label1");
		var oLabel2 = document.getElementById("label2");
		var oLabel3 = document.getElementById("label3");
		var oLabel4 = document.getElementById("label4");
		
		oLabel1.onclick = function(){
			oImg.style.transform = "translateX(0%)";
		}
		oLabel2.onclick = function(){
			oImg.style.transform = "translateX(-25%)";
		}
		oLabel3.onclick = function(){
			oImg.style.transform = "translateX(-50%)";
		}
	
		oLabel4.onclick = function(){
			oImg.style.transform = "translateX(-75%)";
		}
		
		getid('btn1').onclick =function(){
			getid('btn1').style.background = "red";
		}	
		function getid(id){
			return document.getElementById(id);
		}
	}
