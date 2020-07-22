$(function () {

    // 头部的隐藏和出现
    scroll();
    function scroll() {
        if ($(document).scrollTop() >= 600) {
            $('.header').fadeIn();
        } else {
            $('.header').fadeOut();
        }
    }
    $(window).scroll(function () {
        scroll();
    });

    // 搜索 课程的隐藏和出现
    $('header .search>div').hover(function () {
        $(this).children('ul').stop().slideToggle();
    })



    // 隐藏首页的课程导航的隐藏和出现
    $('.header .course').mouseover(function () {
        $(this).children('.course1').stop().slideToggle();
    });

    // 隐藏首页的关注领福利二维码的隐藏和出现
    $('.header .welfare').mouseover(function () {
        $(this).children('.ewm').stop().slideToggle();
    });

    // 搜索 课程的隐藏和出现
    $('.header .search>div').mouseover(function () {
        $(this).children('ul').stop().slideToggle();
    })


    // $(".nav>li").hover(function () {
    //     // stop 方法必须写到动画的前面
    //     $(this).children("ul").stop().slideToggle();
    //   });








})