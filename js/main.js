	window.onload = function(){
		
		var li = document.getElementById('active3');
		var ul = document.getElementById('ul-hidden');
		var a  = document.getElementById("a1");
		li.onmouseover = show;
		li.onmouseout = out;
		
		function show(){
			ul.style.display = "block";	
			a.style.backgroundColor = "#000000";
		}
		
		function out(){
			ul.style.display = "none";	
			a.style.backgroundColor = "#5F5A5A";
		}
	}
