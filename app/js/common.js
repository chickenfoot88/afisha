$(function() {

  setBtnWidth();

  //Кастомный скрол на странице
  $('.cities-list').customScroll({
    prefix: 'custom-scroll_',
    barHtml: '<div />',
    horizontal: false,
  });


//Выпадающий список городов
   $('.cities-btn').click(function(){
     $(".cities-list").slideToggle('fast');
   });

   $('ul.cities-list li').click(function(){
     var tx = $(this).html();
    $(".cities-list").slideUp('fast');
    $(".cities-choosen span").html(tx);

    setBtnWidth();
   });

   //Скрывает список городов, если кликает не по списку
   $(document).mouseup(function(e) {
     var div = $(".cities-btn");
     if(!div.is(e.target) && div.has(e.target).length === 0) {
       $(".cities-list").slideUp("fast");
     }
   })

//Изменение ширины кнопки выбора города
   function setBtnWidth() {
     $(".cities-choosen").css('width', function() {
       return parseInt($(".cities-choosen span").css('width')) + 50 + "px";
     });
   };

 //Меню для мобильных

  $("#my-menu").mmenu({
    extensions: ["widescreen", "effect-menu-slide"]
  });

//Кнопка переключения меню на мобильных
  $(".toggle-menu").click(function() {
    var myMenu = $("#my-menu").data( "mmenu");
    myMenu.open();
    return false;
  });



//Слайд-шоу
  var owlMain = $(".slider");
   owlMain.owlCarousel({
    loop: true,
    items: 1,
    itemClass: "slide-wrap",
    navText: "",
    autoplay: true,
    autoplayTimeout: 10000,
    smartSpeed: 1000
  });

  var mainSliderNav = $(".main-slider-nav-container");

   mainSliderNav.find(".next").click(function() {
     owlMain.trigger('next.owl.carousel');
   })
   mainSliderNav.find(".prev").click(function() {
     owlMain.trigger('prev.owl.carousel');
   });


//Слайды для youtube блока
  var owlYoutube = $(".youtube-slider");
   owlYoutube.owlCarousel({
     items:1,
     loop:false,
     center:true,
     margin:10,
     itemClass: "youtube-slide-wrap",
     URLhashListener:true,
     startPosition: 'zero',
     animateIn: 'fadeIn',
     animateOut: 'fadeOut',
     mouseDrag: false,
     dots: false,
     navText: ""
  });

//Меню для youtube блока
  var owlYoutubeNav = $(".youtube-menu");
   owlYoutubeNav.owlCarousel({
    loop: false,
    items: 4,
    itemClass: "youtube-menu-slide-wrap",
    rewind: true
  });

  var youtubeSliderNav = $(".slider-nav-container");

   youtubeSliderNav.find(".next").click(function() {
     owlYoutubeNav.trigger('next.owl.carousel');
   })
   youtubeSliderNav.find(".prev").click(function() {
     owlYoutubeNav.trigger('prev.owl.carousel');
   });

  // $(".youtube-menu-slide").find("a").click(function(event) {
  //   return false
  // })

// Табы

  // Табы в календаре событий

  var owlEventsTabs = $('.calendar-of-events .tabs');
  owlEventsTabs.owlCarousel({
      margin: 0,
      responsiveClass: true,
      stageElement: "ul",
      itemElement: "li",
      items: 5,
      URLhashListener:true,
      startPosition: 'cinema',
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true
          }
      }
  });
  owlEventsTabs.on('change.owl.carousel', function(event) {
    console.log($(".calendar-of-events .owl-item"));
    $(".calendar-of-events .owl-item").click(function() {
      console.log(1);
      $(this).removeClass("active-tab").eq($(this).index()).addClass("active-tab");
      $(".calendar-of-events .event-section").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active-tab");
  });

  // Табы в городской хронике
  $(".city-сhronicle .tab").click(function() {
  	$(".city-сhronicle .tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
  	$(".city-сhronicle .article-section").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active-tab");

  //Табы в видеоблоге
  $(".vlog .tab").click(function(event) {
    $(".vlog .tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
    $(".vlog .vlog-section").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active-tab");


    // Убираем бордер у таба при переключении
  $(".tabs-wrapper .tab").click(function() {
    $(this).prev().children().addClass("br-none");
    $(".tabs-wrapper .tab.active-tab").prev().siblings().children().removeClass("br-none");
  });

  //Убираем бордер при ховере таб (кроме активного)
  $(".tabs-wrapper .tab").mouseover(function functionName() {
    if (!($(this).hasClass("active-tab"))) {
      $(this).prev().children().addClass("br-none");
    }
  });

  $(".tabs-wrapper .tab").mouseout(function() {
    if (!($(this).hasClass("active-tab"))) {
      $(this).prev().children().removeClass("br-none");
    }
  });


  //Ссылки на статьи в проевьюшках

  $(".article-item").click(function(){
       window.location=$(this).children(".article-text").children("h3").find("a").attr("href"); return false;
   });


  //Прилипающие кнопки соц.сетей

  $(".social-buttons").parent().stick_in_parent()
    .on("sticky_kit:bottom", function(e) {$(this).parent().css("position","static");})
    .on("sticky_kit:unbottom", function(e) {$(this).parent().css("position", "relative")});


  //Смена сетки для блоков на 320px

  $(window).resize(function() {
    var ww = $(".wrapper").width();

    var colXs4 = $(".side-banners-box").find(".col-xs-4");
    var colXs12 = $(".side-banners-box").find(".col-xs-12");
    var colSm4 = $(".article-item").find(".col-sm-4");
    var colSm8 = $(".article-item").find(".col-sm-8");
    if (ww < 320) {
      colXs4.removeClass("col-xs-4").addClass("col-xs-12");
      colSm4.removeClass("col-xs-4").addClass("col-xs-6");
      colSm8.removeClass("col-xs-8").addClass("col-xs-6");
    } else {
      colXs12.removeClass("col-xs-12").addClass("col-xs-4");
      colSm4.removeClass("col-xs-6").addClass("col-xs-4");
      colSm8.removeClass("col-xs-6").addClass("col-xs-8");
    }


  });

  if($(".wrapper").width() < 320) {

    $(".side-banners-box").find(".col-xs-4").removeClass("col-xs-4").addClass("col-xs-12");
    $(".article-item").find(".col-sm-4").removeClass("col-xs-4").addClass("col-xs-6");

      } else if ($(".wrapper").width() > 320 && $(".wrapper").width() < 768) {
        $(".article-item").find(".col-sm-4").removeClass("col-xs-6").addClass("col-xs-4");
        $(".article-item").find(".col-sm-8").removeClass("col-xs-6").addClass("col-xs-8");
      }

});
