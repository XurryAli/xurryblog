
// Check scroll position and add/remove background to navbar
function checkScrollPosition() {
    if($(window).scrollTop() > 50) {
      $(".fixed-header").addClass("scroll");
      $(".fixed-header a").css("color", "white");
      $(".main-menu a").on("mouseover",function(){
        $(this).css("border-bottom","2px solid white")
      }).on("mouseleave",function(){
        $(this).css("border","none")
      })
  } else {
      $(".fixed-header").removeClass("scroll");
      $(".fixed-header a").css("color", "#006699");
      $(".main-menu a").on("mouseover",function(){
        $(this).css("border-bottom","2px solid #006699")
      }).on("mouseleave",function(){
        $(this).css("border","none")
      })
  }
}



function showTopIcon(){
  if($(window).scrollTop() > 50) {
      $(".uptop").fadeIn(500);
  } else {
      $(".uptop").fadeOut(500);
  }
}

$(".uptop").on('click',function(){
    console.log(123)
    $('body,html').animate({scrollTop:0},500);
})

$(document).ready(function () {
    // Single page nav
    $('.fixed-header').singlePageNav({
        offset: 59,
        filter: ':not(.external)',
        updateHash: true
    });

    checkScrollPosition();

    // nav bar
    $('.navbar-toggle').click(function(){
        $('.main-menu').toggleClass('show');
    });

    $('.main-menu a').click(function(){
        $('.main-menu').removeClass('show');
    });

     $('.navbar-brand').on('click',function(){
      window.location.href = "index.html"
    })

});

$(window).on("scroll", function() {
    showTopIcon();
    checkScrollPosition();
});



/*-----------------------------------/
  /*  angular common js
  /*----------------------------------*/

var common = common || {};

common.baseUrl = '';

var commonApp = angular.module('commonApp', []);

commonApp.filter('range',function(){
    return function(array,range){
        for(var i = 1; i<=range; i++){
            array.push(i);
        }
        return array;
    }
})

commonApp.config(["$httpProvider", function ($httpProvider) {
    // http请求配置文件，将数据处理成后台（php）能识别的数据格式
    $httpProvider.defaults.transformRequest=function(obj){
        var str=[];
        for(var p in obj){
            str.push(encodeURIComponent(p)+"="+encodeURIComponent(obj[p]));
        }
        return str.join("&");
    };

    $httpProvider.defaults.headers.post={
        'Content-Type':'application/x-www-form-urlencoded'
    };

    $httpProvider.interceptors.push(function ($rootScope, $q) {
        return {
            'request': function (config) {
                if (config.url.indexOf('.html') < 0 && config.url.indexOf('.txt') < 0) {
                    config.url = common.baseUrl + config.url;
                }
                config.params = $.extend(config.params,{ '_': Math.random() });
                return config || $q.when(config);
            },
            'requestError': function (rejection) {
                //请求出错的时候执行
                return rejection;
            },
            'response': function (response) {
                //响应成功的回调函数
                $('.loader').addClass('item-hidden');
                return response || $q.when(response);
            },
            'responseError': function (response) {
                //响应失败的回调函数
                $.alert(response.status + ' - ' + response.statusText + '<br/>请求路径：<br/>' + response.config.url, '请求错误');
                return $q.reject(response);
            }
        };
    });
}]);