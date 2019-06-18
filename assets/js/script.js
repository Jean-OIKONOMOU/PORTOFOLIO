$(window).on("load", function() {
  $(".loader .inner").fadeOut(1000, function() {
    $(".loader").fadeOut(250);
  });

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });
});

function load() {
  $(document).ready(function() {
    $(this).scrollTop(0);
  });

  console.log("DOM STATUS: NOMINAL. WELCOME, DAVE.");
  $("#slides").superslides({
    animation_speed: 1300,
    animation: "fade",
    pagination: false,
    play: 3500
  });

  var typed = new Typed(".typed", {
    strings: [
      "Sample Text",
      "I'm a Web Developer.",
      "I'm a Fun Guy.",
      "I'm an IT Technician.",
      "I'm a Tech Enthusiast.",
      "I'm a BeCode Student."
    ],
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
    smartBackspace: true,
    showCursor: true,
    autoInsertCss: true,
    backDelay: 500,
    backSpeed: 100,
    startDelay: 0
  });

  $(".owl-carousel").owlCarousel({

    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    },
    nav: true,
    smartSpeed: 900,
    dots: false
  });

  var skillsTopOffset = $(".skillsSection").offset().top;
  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 300) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false, // it's the color of the empty part of the chart.
        scaleColor: false, //color of the linemarks on the charts
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }
  });

  var statsTopOffset = $(".statsSection").offset().top;
  var countUpFinished = false;
  $(window).scroll(function() {
    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 300
    ) {
      $(".counter").each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());
        element.countup(endVal);
      });

      countUpFinished = true;
    }
  });

  $("[data-fancybox]").fancybox();

  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");
    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: true
      }
    });
    return false;
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $("#navigation a").click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 79 }, "slow");
  });

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");
    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
}

function error() {
  console.error("SOMETHING WENT WRONG WITH THE DOM! RUN FOR YOUR LIVES!");
}

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", load);
} else {
  error();
}
