"use strict";

/*
* �⺻ ����
* ���� ����� : ��������, ������, ���� ����
* ��Ʈ�� : �����̽�, �����¿�,
* ���� ������ : ����
* �� ���� : 7�� ����
* �ݺ� : �ʱ�ȭ, ���� ����, �ӵ�
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
