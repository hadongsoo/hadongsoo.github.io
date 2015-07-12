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
    console.log(this);
};

tetris.looping.prototype = {
    loop:function(){
        console.log('asfdasdf');
    }
};
