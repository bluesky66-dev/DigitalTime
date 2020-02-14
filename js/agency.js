(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $("#portfolio .main-nav a").click(function (e) {
    e.preventDefault();
    var cat = $(this).attr("data-cat");
    console.log("cat", cat);
    $(".portfolio2 .portfolio-item").hide();
    $("#portfolio .main-nav li").removeClass("active");
    $(this).parent().addClass("active");
    if(cat===""){
      $(".portfolio2 .portfolio-item").show();
    }
    else{
      $(".portfolio2 ." + cat).show();
    }
  });

  $("#serviceLink1").click(function (e) {
    e.preventDefault();
    $('#serviceLeft1').css('display', 'block');
    $('#serviceLeft0').css('display', 'none');
    $('#serviceLeft2').css('display', 'none');
    $('#serviceLeft3').css('display', 'none');
    $('#serviceLeft4').css('display', 'none');
  });
  $("#serviceLink2").click(function (e) {
    e.preventDefault();
    $('#serviceLeft2').css('display', 'block');
    $('#serviceLeft0').css('display', 'none');
    $('#serviceLeft1').css('display', 'none');
    $('#serviceLeft3').css('display', 'none');
    $('#serviceLeft4').css('display', 'none');
  });
  $("#serviceLink3").click(function (e) {
    e.preventDefault();
    $('#serviceLeft3').css('display', 'block');
    $('#serviceLeft0').css('display', 'none');
    $('#serviceLeft1').css('display', 'none');
    $('#serviceLeft2').css('display', 'none');
    $('#serviceLeft4').css('display', 'none');
  });
  $("#serviceLink4").click(function (e) {
    e.preventDefault();
    $('#serviceLeft4').css('display', 'block');
    $('#serviceLeft0').css('display', 'none');
    $('#serviceLeft1').css('display', 'none');
    $('#serviceLeft2').css('display', 'none');
    $('#serviceLeft3').css('display', 'none');
  });

})(jQuery); // End of use strict

function onSelectCat(event, cat) {
  event.preventDefault();
  console.log("cat", cat);
}