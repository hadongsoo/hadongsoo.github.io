
(function() {
    "use strict";

    var cssLoader = function(){
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'http://localhost:9000/www/css/style.css';
        link.media = 'all';
        console.log(link);
        head.appendChild(link);
    };
    cssLoader();

    var elCounter = function () {
        var that = this;

        var now = 0;
        var all = 0;

        document.addEventListener('mouseover', function (e) {
            var target = e.target;

            var tagSibilingArry = [];
            var tagSibilingArryCount = 0;


            if (e.target.parentNode.childNodes.length > 1) { //같은 자식이 2개 이상
                for (var i = 0; i < e.target.parentNode.childNodes.length; i++) { //같은자식간에 탐색
                    if (e.target.parentNode.childNodes[i].tagName && e.target.parentNode.tagName) { //태그 인지 검증, 부모

                        tagSibilingArry[tagSibilingArryCount] = e.target.parentNode.childNodes[i];

                        if (e.target == tagSibilingArry[tagSibilingArryCount]) {
                            now = tagSibilingArryCount + 1;
                            //console.log(e.target.parentNode.childNodes[i]);
                            bgChanger(e.target.parentNode, 'pointyoufather');
                            bgChanger(e.target.parentNode.childNodes[i], 'pointyou');
                        }
                        tagSibilingArryCount = tagSibilingArryCount + 1;
                    }
                }
                all = tagSibilingArry.length;
            }

            haveData('.blob', now, all);
            makeMove('.blob');
            bgRemover('pointyou');
            bgRemover('pointyoufather');

        });
        var makeElement = function (what, classname) {
            if (!document.querySelector("." + classname)) {
                var blobFrag = document.createDocumentFragment();
                blobFrag = document.createElement(what);
                document.body.appendChild(blobFrag);
                blobFrag.classList.add(classname);
                blobFrag.classList.add('hide');
            }
        };
        var makeMove = function (what) {
            var x = 0,
                y = 0,
                xCali = 45,
                yCali = 25;
            document.addEventListener('mousemove', function (e) {
                x = e.pageX - yCali;
                y = e.pageY - xCali;

                var blob = document.querySelector(what);
                var data = 'top:' + y + 'px; left:' + x + 'px; position: absolute;';
                blob.setAttribute('style', data);
            });
        };
        var haveData = function (what, now, all) {
            var blob = document.querySelector(what);
            if (all > 1) {
                blob.classList.remove('hide');
                blob.innerHTML = now + '/' + all;
            } else {
                blob.classList.add('hide');
            }

        };
        var bgChanger = function (element, classname) {
            if (element.tagName !== 'HTML' &&
                element.tagName !== 'BODY' &&
                element.tagName !== 'HEAD') {
                element.classList.add(classname);
            }
        };
        var bgRemover = function (classname) {
            var uncover = document.querySelectorAll(classname);
            if (uncover.classList.contains(classname)) {
                uncover.classList.remove(classname);
            }
        };
        makeElement('div', 'blob');


    };

    var test = new elCounter();
})();


//javascript:var h=document.createElement('link');h.setAttribute('href','http://localhost:9000/www/css/style.css'); var e=document.createElement('script');e.setAttribute('language','javascript');e.setAttribute('src','http://localhost:9000/js/elcounter.js');document.head.appendChild(h);document.body.appendChild(e);void(0);

/*
* 개선할 문제. CSS없이 js내에서 스타일 다 주기. 백그라운드만 남기기
* 오브젝트 태그 이름도 같이 보이기
* 북마클릿 종료 기능
* */
