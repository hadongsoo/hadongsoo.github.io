/*
* 자주 쓰는 js function 모음
* 추가할 항목
* input > 마우스, 키보드, 터치 등
*
* */
var dom = dom | {};

var log = function(context){
    console.log(context);
};

ipt = {
    //keydown, keyup
    //click, mousemove,
    //touchstart, touchmove
    // disable preventDefault
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
            if (ele.getAttribute('class')){
                var className = lastClass+" "+className;
            }
            ele.setAttribute('class',className);
        }

    },
    removeClassName:function(ele,className){

    },
    toggleClassName:function(){},
    query:function(context,selector){
        return (context || document).querySelectorAll(selector);
    },
    evState:function(){},
    event:function(){},
    browser:function(){}
};

var wr = dom.get('.wrapper');
var ul = dom.get('ul');

var all = dom.query(document,'a');

dom.addClassName(ul,'ululul');
dom.addClassName(wr,'hay');
//console.log(dom.hasClassName(wr,'wrapper'));
