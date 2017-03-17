
// Check scroll position and add/remove background to navbar
function checkScrollPosition() {
    if($(window).scrollTop() > 50) {
      $(".fixed-header").addClass("scroll");
      $(".fixed-header a").css("color", "white");
      $('.navbar-brand').css("color", "white");
  } else {        
      $(".fixed-header").removeClass("scroll");
      $('.navbar-brand').css("color", "rgba(2, 61, 105, 0.80)");
      $(".fixed-header a").css("color", "rgba(2, 61, 105, 0.80)");
  }
}

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
    checkScrollPosition();    
});