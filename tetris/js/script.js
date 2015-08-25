"use strict";


/*
 * 기본 스펙
 * 영역 만들기 : 스테이지, 다음블럭, 점수 노출
 * 컨트롤 : 스페이스, 상하좌우,
 * 점수 데이터 : 점수
 * 블럭 정보 : 7개 영역
 * 반복 : 초기화, 게임 루핑, 속도
 *
 * */


var tetris = tetris || {};

tetris.looping = function(){
    this.init();
    this.key();
    this.loop();
};

tetris.looping.prototype = {
    init:function(){
        var stage = document.getElementsByClassName('stage');
        var stagebg = document.createElement('div');
        var i = 0, j= 0;
        stagebg.classList.add('stage_bg');

        for (i; i<20; i++) {
            for (j; j<10; j++) {
                stage[0].appendChild(stagebg);
            }
        }
    },
    loop:function(){
        console.log('asfdasdf');
    },
    key:{

    }
};

var tetris = new tetris.looping();
