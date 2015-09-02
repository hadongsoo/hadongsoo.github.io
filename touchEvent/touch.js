/*
* 터치 이벤트
*
* */

//function log(){
//
//}




var touch = function (){
    this.log('asdf');
};

touch.prototype = {
    log:function(){
        console.log(arguments);
    },
    what:function(){
        document.addEventListener('')
    }
};


var test = new touch();


var button01 = document.querySelector('.touch');
var button02 = document.querySelector('.touchDouble');
var button03 = document.querySelector('.touchLong');
var output = document.querySelector('.output');



var mc = new Hammer(button01);

mc.on("panleft panright tap press", function(ev) {
    output.textContent = ev.type +" gesture detected.";
});
