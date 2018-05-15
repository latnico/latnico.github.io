window.onload = function(){
	var prevBut = document.getElementById("prev");
    var nextBut = document.getElementById("next");
    var carouse = document.getElementsByClassName("carouse")
    var state = 1;  //id的变化状态

    prevBut.addEventListener("click",function() {
        prev();
    }) ;

    nextBut.addEventListener("click",function() {
        next();
    }) ;



    function prev(){
        if( state == 1||state == 21){
            state = 29;
            carouse.item(0).id = 'carouse'+state;
        }else if(state == 2||state == 22){
            state = 21;
            carouse.item(0).id = 'carouse'+state;
        }else if(state == 3 || state == 23){
            state = 22;
            carouse.item(0).id = 'carouse'+state;
        }else if(state == 4 || state == 24){
            state = 23;
            carouse.item(0).id = 'carouse'+state;
        }else if(state == 5||state == 25){
            state = 24;
            carouse.item(0).id = 'carouse'+state;
        }else if(state == 6 || state == 26){
            state = 25;
            carouse.item(0).id = 'carouse'+state;
        }else if(state == 7 || state == 27){
            state = 26;
            carouse.item(0).id = 'carouse'+state;
        }else if(state == 8||state == 28){
            state = 27;
            carouse.item(0).id = 'carouse'+state;
        }else if(state == 9 || state == 29){
            state = 28;
            carouse.item(0).id = 'carouse'+state;
        }else if(state == 10 || state == 30){
            state = 29;
            carouse.item(0).id = 'carouse'+state;
        }
    }

    function next() {
        if( state == 1||state == 21){
            state = 1;
            carouse.item(0).id = 'carouse'+state;
            state++;
        }else if(state == 2||state == 22){
            state = 2;
            carouse.item(0).id = 'carouse'+state;
            state++;
        }else if(state == 3 || state == 23){
            state = 3;
            carouse.item(0).id = 'carouse'+state;
            state++;
        }else if(state == 4 || state == 24){
            state = 4;
            carouse.item(0).id = 'carouse'+state;
            state++;
        }else if(state == 5||state == 25){
            state = 5;
            carouse.item(0).id = 'carouse'+state;
            state++;
        }else if(state == 6 || state == 26){
            state = 6;
            carouse.item(0).id = 'carouse'+state;
            state++;
        }else if(state == 7 || state == 27){
            state = 7;
            carouse.item(0).id = 'carouse'+state;
            state++;
        }else if(state == 8||state == 28){
            state = 8;
            carouse.item(0).id = 'carouse'+state;
            state++;
        }else if(state == 9 || state == 29){
            state = 9;
            carouse.item(0).id = 'carouse'+state;
            state++;
        }else if(state == 10 || state == 30){
            state = 1;
            carouse.item(0).id = 'carouse'+state;
        }
    }
}
