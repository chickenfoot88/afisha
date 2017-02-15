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
     autoplayHoverPause:true,
     startPosition: 'URLHash',
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
    navText: "",
    rewind: true
  });

  $(".youtube-menu-slide").find("a").click(function(event) {
    return false
  })

// Табы

  // Табы в календаре событий
  $(".calendar-of-events .tab").click(function() {
  	$(".calendar-of-events .tab").removeClass("active").eq($(this).index()).addClass("active");
  	$(".calendar-of-events .event-section").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");

  // Табы в городской хронике
  $(".city-сhronicle .tab").click(function() {
  	$(".city-сhronicle .tab").removeClass("active").eq($(this).index()).addClass("active");
  	$(".city-сhronicle .article-section").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");

  //Табы в видеоблоге
  $(".vlog .tab").click(function(event) {
    $(".vlog .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".vlog .vlog-section").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");


    // Убираем бордер у таба при переключении
  $(".tabs-wrapper .tab").click(function() {
    $(this).prev().children().addClass("br-none");
    $(".tabs-wrapper .tab.active").prev().siblings().children().removeClass("br-none");
  });

  //Убираем бордер при ховере таб (кроме активного)
  $(".tabs-wrapper .tab").mouseover(function functionName() {
    if (!($(this).hasClass("active"))) {
      $(this).prev().children().addClass("br-none");
    }
  });

  $(".tabs-wrapper .tab").mouseout(function() {
    if (!($(this).hasClass("active"))) {
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


  //Смена сетки для бокового блока на 320px

  $(window).resize(function() {
    var ww = $(".wrapper").width();

    var col4 = $(".side-banners-box").find(".col-xs-4");
    var col12 = $(".side-banners-box").find(".col-xs-12");
    if (ww < 320) {
      col4.removeClass("col-xs-4").addClass("col-xs-12");
    } else {
      col12.removeClass("col-xs-12").addClass("col-xs-4");
    }

  });

  if($(".wrapper").width() < 320) {
    $(".side-banners-box").find(".col-xs-4").removeClass("col-xs-4").addClass("col-xs-12");
  };

});
