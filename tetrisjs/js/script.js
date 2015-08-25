"use strict";

/* spec list
* 1. //data 블럭 데이터 7종
* 2. 게임진행 loop
* 3. 점수 계산
* 4. 키보드 컨트롤, 상하좌우, 스페이스: 바로 내리기, 엔터:시작, ESC:종료
* 5. 블럭 떨어뜨리기
* 6. 블럭 돌리기
* 7. 충돌 검사
* 8. 블럭을 한줄 지운다
* 9. 다음 블럭 랜덤
* 10. 미정// 음악
* */

var hd = hd || {};

hd.tetris = function (){
    this.init();
    this.area();
    this.renderingGrid();
    this.evKbd();
    this.stateBlock();
    this.scoreCalc();
    //this.looping();
};
hd.tetris.blockdata = {
  i:[[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],'cyan'],
  j:[[[0,1,0,0],[0,1,0,0],[1,1,0,0],[0,0,0,0]],'blue'],
  l:[[[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]],'orange'],
  o:[[[1,1,0,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]],'yellow'],
  s:[[[0,0,0,0],[0,1,1,0],[1,1,0,0],[0,0,0,0]],'green'],
  t:[[[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]],'purple'],
  z:[[[0,0,0,0],[1,1,0,0],[0,1,1,0],[0,0,0,0]],'red']
};
hd.tetris.prototype = {
    init:function(){ //초기화. 점수. 블럭데이터
        //console.log('hi');

        // 첫블럭
        this.state.now = this.gamefunc.randomNext();
        this.renderingBlock(handle, hd.tetris.blockdata[this.state.now]);
        //this.renderingBlockStart(this.state.now);

        // 넥스트 블럭
        this.state.next = this.gamefunc.randomNext();
        this.renderingBlock(next, hd.tetris.blockdata[this.state.next]);
        this.renderingBlockNext(this.state.next);
        // 첫 블럭 위치

        // 루프 시작

    },
    area:function(){
        this.staging = document.querySelector('.stage');
        this.grid = null;
        var blocks = function(){};
        this.handle = document.querySelector('#handle');
        this.next = document.querySelector('#next');
        this.scoreboard = document.querySelector('.scoreboard');

        //console.log(this.staging.offsetLeft);
        //console.log(this.staging.offsetTop);
        //console.log(this.staging.offsetTop+this.staging.offsetHeight);
        //console.log(this.staging.offsetLeft+this.staging.offsetWidth);
        //console.log(this.handle.offsetTop, this.handle.offsetLeft);
    },
    state:{
        playing:false,
        now:null,
        next:null,
        score:0,
        speed:1
    },
    //looping:function(){
    //    var that = this,
    //        drop = 100;
    //
    //    if (that.state.playing) {
    //        that.gamefunc.blockMoving(drop);
    //    }
    //
    //},
    evKbd:function(){
        var that = this;

        if (that.state.playing) {
            var e = document.addEventListener('keydown',function(e){
                switch(event.keyCode) {
                    case 38: //up
                        //this.gamefunc.blockMoving(0,60);
                        break;
                    case 40: //down
                        that.gamefunc.blockMoving(20,0);
                        break;
                    case 37: //left
                        that.gamefunc.blockMoving(0,-20);
                        break;
                    case 39: //right
                        that.gamefunc.blockMoving(0,20);
                        break;
                    case 32: //space
                        console.log('space');
                        break;
                    case 27: //esc
                        console.log('ESC');
                        break;
                }
            });
        } else {
            var e = document.addEventListener('keydown',function(e) {
                switch (event.keyCode) {
                    case 13: //enter
                        that.state.playing = true;
                        that.evKbd();
                        console.log('start');
                        break;
                }
            });
        }
    },
    stateBlock:function(){},
    scoreCalc:function(){
        this.scoreboard.innerHTML = this.state.score;
    },
    renderingGrid:function(){
        for (var allgrid=0; allgrid<200; allgrid++){
            this.grid = document.createElement('div');
            this.staging.appendChild(this.grid);
            this.grid.setAttribute('class','grid');
        }
    },
    renderingBlock:function(which, what){
        var that = this;
        var blockOne = null;

        handle.setAttribute('data-block',that.state.now);

        for (var sero = 0; sero < 4; sero ++ ){
            for (var garo = 0; garo < 4; garo ++ ) {
                if (what[0][sero][garo]){
                    blockOne = document.createElement('div');
                    blockOne.classList.add('color');
                    blockOne.classList.add(what[1]);
                    //console.log(handle);
                    which.appendChild(blockOne);
                } else {
                    blockOne = document.createElement('div');
                    blockOne.classList.add('none');
                    which.appendChild(blockOne);
                }
            }
        }

        //var block = document.createElement(arg);
        //this.handle.appsendChild(block);
    },
    renderingBlockStart:function(arg){
        switch (arg){
            case 'i':
                this.gamefunc.blockMoving(0,60);
                break;
            case 'j':
                this.gamefunc.blockMoving(0,80);
                break;
            case 'l':
                this.gamefunc.blockMoving(0,60);
                break;
            case 's':
                this.gamefunc.blockMoving(-20,80);
                break;
            case 'z':
                this.gamefunc.blockMoving(-20,60);
                break;
            case 't':
                this.gamefunc.blockMoving(-20,80);
                break;
            case 'o':
                this.gamefunc.blockMoving(0,80);
                break;
        }
    },
    renderingBlockNext:function(arg){
        switch (arg){
            case 'i':
                this.gamefunc.blockMovingNext(10,20);
                break;
            case 'j':
                this.gamefunc.blockMovingNext(20,30);
                break;
            case 'l':
                this.gamefunc.blockMovingNext(20,10);
                break;
            case 's':
                this.gamefunc.blockMovingNext(15,20);
                break;
            case 'z':
                this.gamefunc.blockMovingNext(10,20);
                break;
            case 't':
                this.gamefunc.blockMovingNext(15,20);
                break;
            case 'o':
                this.gamefunc.blockMovingNext(30,30);
                break;
        }
    },
    gamefunc:{
        rotateBlock:function(){},
        dropBlock:function(){},
        clearLine:function(){},
        blockCollision:function(){},
        blockMoving:function(x,y){
            var that = this;
            var lasttop = handle.offsetTop;
            var lastleft = handle.offsetLeft;
            var colortop = null;
            var colorleft = null;

            //for(var i = 0; i<handle.childNodes.length; i++){
            //    if (handle.childNodes[i].classList.contains('color')){
            //        console.log(handle.childNodes[i].offsetLeft, 'offsetLeft');
            //
            //    }
            //}

            // 스테이지 정보
            console.log(handle.offsetParent.offsetLeft, handle.offsetParent.offsetLeft+handle.offsetParent.offsetLeft+handle.offsetParent.offsetWidth, handle.offsetParent.offsetTop, handle.offsetParent.offsetTop+handle.offsetParent.offsetHeight);



            var colors = document.querySelectorAll('.color');
            var minLeft = 0,
                maxLeft = 0;
            var arrNum = [];

            for (var i = 1; i <= colors.length; i++) {
                arrNum[i] = parseInt(colors[i-1].offsetLeft);
                //console.log(colors[i-1].offsetParent.offsetLeft);
                //console.log(colors[i-1].offsetLeft);
            }
            arrNum.sort();
            var objWidth = arrNum[arrNum.length-2] - arrNum[0];



            if (this.isInStage()) {
                var data = 'top: '+(lasttop+x)+'px; left: '+(lastleft+y)+'px;';
                handle.setAttribute('style',data);
            }

        },
        blockMovingNext:function(x,y){
            var data = 'top: '+(x)+'px; left: '+(y)+'px;';
            next.setAttribute('style',data);
        },
        randomNext:function(){
            var array = ['i','j','l','o','s','z','t'];
            return array[Math.floor(Math.random()*7)];
        },
        isInStage:function(){
            //console.log(handle.childNodes);

            //for(var i = 0; i<handle.childNodes.length; i++){
            //    if (handle.childNodes[i].classList.contains('color')){
            //        console.log(parseInt(handle.childNodes[i].offsetLeft));
            //        console.log(parseInt(handle.childNodes[i].offsetLeft) > 0);
            //
            //        //if (parseInt(handle.childNodes[i].offsetLeft) > 0) {
            //        //    return true;
            //        //}
            //
            //        //console.log(handle.childNodes[i].classList.contains('color').offsetLeft > 0);
            //
            //        //if (parseInt(handle.childNodes[i].offsetLeft) < 0) {
            //        //    console.log(handle.childNodes[i].offsetLeft);
            //        //    return false;
            //        //}
            //    }
            //}

            return true;
        }

        //isInStage:function(){
        //    var whatblock = handle.getAttribute('data-block');
        //    switch (whatblock){
        //        case 'i':
        //            if (parseInt(handle.style.left) < -20 || parseInt(handle.style.left) > 160) {
        //                console.log('out');
        //            }
        //            break;
        //        case 'j':
        //            if (parseInt(handle.style.left) < 0 || parseInt(handle.style.left) > 160) {
        //                console.log('out');
        //            }
        //            break;
        //        case 'l':
        //            if (parseInt(handle.style.left) < -20 || parseInt(handle.style.left) > 140) {
        //                console.log('out');
        //            }
        //            break;
        //        case 'o':
        //            if (parseInt(handle.style.left) < 0 || parseInt(handle.style.left) > 160) {
        //                console.log('out');
        //            }
        //            break;
        //        case 's':
        //            if (parseInt(handle.style.left) < 0 || parseInt(handle.style.left) > 140) {
        //                console.log('out');
        //            }
        //            break;
        //        case 't':
        //            if (parseInt(handle.style.left) < 0 || parseInt(handle.style.left) > 140) {
        //                console.log('out');
        //            }
        //            break;
        //        case 'z':
        //            if (parseInt(handle.style.left) < 0 || parseInt(handle.style.left) > 140) {
        //                console.log('out');
        //            }
        //            break;
        //    }
        //
        //    return true;
        //}
    },
    check:{
        isCollision:function(){},
        isOneLine:function(){}
    }
};

var tetris = new hd.tetris();
