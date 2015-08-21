"use strict";
/*
* 현재 찝힌 영역에만 작동 li>a a 찍으면 li들 검색 안됌. 상위로 올라가며 시빌링 있는 존재만 카운터
* */

var elCounter = function(){
    var that = this;

    var now = 0;
    var all = 0;

    document.addEventListener('mouseover',function(e){
        var target = e.target;

        var tagSibilingArry = [];
        var tagSibilingArryCount=0;


        if (e.target.parentNode.childNodes.length>1) { //같은 자식이 2개 이상
            for (var i =0; i<e.target.parentNode.childNodes.length; i++ ){ //같은자식간에 탐색
                if (e.target.parentNode.childNodes[i].tagName && e.target.parentNode.tagName){ //태그 인지 검증, 부모

                    tagSibilingArry[tagSibilingArryCount] = e.target.parentNode.childNodes[i];

                    if (e.target == tagSibilingArry[tagSibilingArryCount]){
                        now = tagSibilingArryCount+1;
                    }
                    //console.log(e.target.parentNode.childNodes[i],i, '태그있는 자식');
                    tagSibilingArryCount=tagSibilingArryCount+1;
                }
            }
            all = tagSibilingArry.length;
            //console.log(now+'/'+all);
        }

        haveData('.blob',now,all);
    });
    var makeElement = function(what,classname){
        var blobFrag = document.createDocumentFragment();

        blobFrag = document.createElement(what);
        document.body.appendChild(blobFrag);
        blobFrag.classList.add(classname);
    };
    var makeMove = function(what){
        var x = 0;
        var y = 0;
        document.addEventListener('mousemove',function(e){
            y = e.clientX-25;
            x = e.clientY-35;

            var blob = document.querySelector(what);
            var data = 'top:'+x+'px; left:'+y+'px; position: absolute;';
            blob.setAttribute('style',data);
        });
    };
    var haveData = function(what,now,all){
        var blob = document.querySelector(what);
        blob.innerHTML = now+'/'+all;
    };
    makeElement('div','blob');
    makeMove('.blob');






};

    elCounter.prototype = {
};

var test = new elCounter();



