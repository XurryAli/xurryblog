
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
