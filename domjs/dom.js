/*
* 자주 쓰는 js function 모음
* //추가할 항목
* //input > 마우스, 키보드, 터치 등
*
* */
var dom = dom | {};

//console.log 길어..
var log = function(context){
    console.log(context);
};

// 키보드+마우스+터치 인풋
var ipt = function(){
    //keydown, keyup
    //click, mousemove,
    //touchstart, touchmove
    // disable preventDefault
    document.addEventListener('keydown',keydown,false);
    //document.addEventListener('keydown',keydown,false);
    document.addEventListener('keyup',keyup,false);
    document.addEventListener('click',click,false);
    document.addEventListener('mousemove',mousemove,false);
    document.addEventListener('touchstart',touchstart,false);
    document.addEventListener('touchmove',touchmove,false);

    function keydown(e){
        //event.preventDefault();
        log(e.keyCode);
    }
    function keyup(e){

    }
    function click(e){
        //e.target;
    }
    function mousemove(e){
        e.target;
    }
    function touchstart(e){
        //log(e.target);
    }
    function touchmove(e){
        //log(e.target);
    }
};
dom = {
    get:function(name){
        return document.querySelector(name);
    },
    set:function(name,content){
        return name.innerHTML = content;
    },
    on:function(ele,type,fn,capture){
        ele.addEventListener(type, fn, capture);
    },
    un:function(ele,type,fn,capture){
        ele.removeEventListener(type, fn, capture);
    },
    hide:function(ele){
        ele.style.display = "none";
    },
    show:function(ele){
        ele.style.display = "";
    },
    hasClassName:function(ele,className){
        if (ele.classList) {
            return ele.classList.contains(className);
        } else {
            var getClass = ele.getAttribute('class');
            return (getClass === className);
        }
    },
    addClassName:function(ele,className){
        if (ele.classList) {
            ele.classList.add(className);
        } else {
            var lastClass = ele.getAttribute('class');
            if (lastClass){
                className = lastClass+" "+className;
            }
            ele.setAttribute('class',className);
        }

    },
    removeClassName:function(ele,className){
        if (ele.classList) {
            ele.classList.remove(className);
        } else {
            var lastClass = ele.getAttribute('class');
            if (lastClass){
                var newClass = lastClass.replace(className,'');

                // 클래스 앞뒤로 공백 체크해서 필요없는 공백 지우기
                if (newClass[0] === ' ' || newClass[newClass.length-1] === ' ') {
                    newClass = newClass.replace(' ','');
                }
                if (newClass.match('  ')){
                    newClass = newClass.replace('  ',' ');
                }

                // 클래스가 없으면 class 어트리뷰트도 지움
                if (newClass !== '') {
                    ele.setAttribute('class',newClass);
                }else{
                    ele.removeAttribute('class');
                }
            }
        }
    },
    toggleClassName:function(ele,className){
        if (!ele.classList) {
            ele.classList.toggle(className);
        } else {
            var lastClass = ele.getAttribute('class');
            if (lastClass){

                if (lastClass.match(className)){
                    dom.removeClassName(ele,className);

                }
            } else {
                dom.addClassName(ele,className);
            }
        }
        // 클래스 없으면 class 어트리뷰트 지움
        if (ele.getAttribute('class') === ''){
            ele.removeAttribute('class');
        }
    },
    query:function(context,selector){
        return (context || document).querySelectorAll(selector);
    },
    hasText:function(setence,word){
        return (setence.indexOf(word) != -1);
    },
    whatBrowser:function(){
        var agt = navigator.userAgent.toLowerCase();

        if (agt.indexOf("chrome") != -1) return 'Chrome';
        if (agt.indexOf("opera") != -1) return 'Opera';
        if (agt.indexOf("firefox") != -1) return 'Firefox';
        if (agt.indexOf("safari") != -1) return 'Safari';
        if (agt.indexOf("msie") != -1) return 'fuckIE';

    },
    whatOS:function(){
        var agt = navigator.userAgent.toLowerCase();

        if (agt.indexOf("macintosh") != -1) return 'OSX';
        if (agt.indexOf("windows") != -1) return 'Win';
        if (agt.indexOf("Linux") != -1) return 'Linux';
        if (agt.indexOf("iOS") != -1) return 'iOS';
        if (agt.indexOf("Android") != -1) return 'Android';
    },
    evState:function(){}
};

//var wr = dom.get('.wrapper');
//var ul = dom.get('ul');
//var all = dom.query(document,'a');
//
//dom.addClassName(ul,'ululul');
//dom.addClassName(ul,'test02');
//dom.addClassName(ul,'test03');
//dom.addClassName(wr,'hay');
//dom.removeClassName(ul,'ululul');
//
//dom.toggleClassName(ul,'test02');
//dom.toggleClassName(ul,'ululul');
//
//ipt();
//ipt(wr);

//log(dom.whatBrowser());
//log(dom.whatOS());
//console.log(dom.hasClassName(wr,'wrapper'));


var btn = dom.get('a');
dom.on(btn,'click',function(){dom.toggleClassName(btn,'hihi')},false);


