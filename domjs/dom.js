/*
* 자주 쓰는 js function 모음
*
* */
var dom = dom | {};

var log = function(context){
    console.log(context);
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
    hasClassName:function(){},
    addClassName:function(){},
    removeClassName:function(){},
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

dom.on(wr,'mousemove',function(){console.log('clickclick')},false);
dom.un(wr,'click',function(){console.log('un')},false);

//var wrapper = dom.query(document,'.wrapper');
//log(wrapper);
//dom.query(wrapper,'div');
