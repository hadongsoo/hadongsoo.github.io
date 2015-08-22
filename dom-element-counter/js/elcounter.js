"use strict";
/*
* 현재 찝힌 영역에만 작동 li>a a 찍으면 li들 검색 안됌. 상위로 올라가며 시빌링 있는 존재만 카운터
* 찍은 요소 말고, 인접한 형제들 알아내서 표시해주기?
* 배경색 일시적으로 추가하는 부분에서, 형제들 문제있어서 부모 배경색 지정
* */

var elCounter = function(){
    var that = this;

    var now = 0;
    var all = 0;

    document.addEventListener('mouseover',function(e){
        var target = e.target;

        var tagSibilingArry = [];
        var tagSibilingArryCount=0;


        if (e.target.parentNode.childNodes.length>1  ) { //같은 자식이 2개 이상
            for (var i =0; i<e.target.parentNode.childNodes.length; i++ ){ //같은자식간에 탐색
                if (e.target.parentNode.childNodes[i].tagName && e.target.parentNode.tagName){ //태그 인지 검증, 부모

                    tagSibilingArry[tagSibilingArryCount] = e.target.parentNode.childNodes[i];

                    if (e.target == tagSibilingArry[tagSibilingArryCount]){
                        now = tagSibilingArryCount+1;
                        //console.log(e.target.parentNode.childNodes[i]);
                        bgChanger(e.target.parentNode,'pointyoufather');
                        bgChanger(e.target.parentNode.childNodes[i],'pointyou');
                    }
                    tagSibilingArryCount=tagSibilingArryCount+1;
                }
            }
            all = tagSibilingArry.length;
        }

        haveData('.blob',now,all);
        makeMove('.blob');
        bgRemover('pointyou');
        bgRemover('pointyoufather');

    });
    var makeElement = function(what,classname){
        var blobFrag = document.createDocumentFragment();

        blobFrag = document.createElement(what);
        document.body.appendChild(blobFrag);
        blobFrag.classList.add(classname);
    };
    var makeMove = function(what){
        var x = 0,
            y = 0,
            xCali = 45,
            yCali = 25;
        document.addEventListener('mousemove',function(e){
            x = e.clientX-yCali;
            y = e.clientY-xCali;

            var blob = document.querySelector(what);
            var data = 'top:'+y+'px; left:'+x+'px; position: absolute;';
            blob.setAttribute('style',data);
        });
    };
    var haveData = function(what,now,all){
        var blob = document.querySelector(what);
        if (all>1) {
            blob.classList.remove('hide');
            blob.innerHTML = now+'/'+all;
        } else {
            blob.classList.add('hide');
        }

    };
    var bgChanger = function(element, classname){
        if (element.tagName !== 'HTML' &&
            element.tagName !== 'BODY' &&
            element.tagName !== 'HEAD'){
            element.classList.add(classname);
        }
    };
    var bgRemover = function(classname){
        var uncover = document.querySelectorAll(classname);
        if (uncover.classList.contains(classname)){
            uncover.classList.remove(classname);
        }
    };
    makeElement('div','blob');






};

    elCounter.prototype = {
};

var test = new elCounter();



