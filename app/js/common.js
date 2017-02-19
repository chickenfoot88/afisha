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
    rewind: true,
    navText:"",
    responsive:{
        320:{
            items:2
        },
        479:{
            items:2
        },
        767:{
            items:4
        }
    }
  });

  var youtubeSliderNav = $(".slider-nav-container");

   youtubeSliderNav.find(".next").click(function() {
     owlYoutubeNav.trigger('next.owl.carousel');
   })
   youtubeSliderNav.find(".prev").click(function() {
     owlYoutubeNav.trigger('prev.owl.carousel');
   });

// Табы

  // Табы в календаре событий
  var owlEventsTabs = $('.calendar-of-events .tabs');
  owlEventsTabs.owlCarousel({
      margin: 0,
      responsiveClass: true,
      stageElement: "ul",
      itemElement: "li",
      items: 5,
      smartSpeed: 500,
      mouseDrag: false,
      responsive:{
          320:{
              items:2,
              nav:true
          },
          479:{
              items:5,
              nav:true
          }
      },
      navText: ""
  });

  //Кнопки навигации в табах календаря событий
  var owlEventsTabsNav = $(".events-tabs-nav-container");

  if(owlEventsTabs.find(".owl-item:first-child").hasClass("active")) {
    owlEventsTabsNav.find(".prev").hide();
  };

  owlEventsTabsNav.find(".next").click(function() {

    owlEventsTabs.trigger('next.owl.carousel');
    owlEventsTabsNav.find(".prev").show();

    if(owlEventsTabs.find(".owl-item:last-child").hasClass("active")) {
      owlEventsTabsNav.find(".next").hide();
    };

  });

  owlEventsTabsNav.find(".prev").click(function() {

   owlEventsTabs.trigger('prev.owl.carousel');
   owlEventsTabsNav.find(".next").show();

   if(owlEventsTabs.find(".owl-item:first-child").hasClass("active")) {
     owlEventsTabsNav.find(".prev").hide();
   };

  });

   // Табы в городских хрониках
   var owlChronicleTabs = $('.city-сhronicle .tabs');
   owlChronicleTabs.owlCarousel({
       margin: 0,
       responsiveClass: true,
       stageElement: "ul",
       itemElement: "li",
       items: 7,
       smartSpeed: 500,
       mouseDrag: false,
       responsive:{
           320:{
               items:2,
               nav:true
           },
           479:{
               items:4,
               nav:true
           },
           768:{
               items:7,
               nav:false
           }
       },
       navText: ""
   });

   //Кнопки навигации в табах городских хрониках
   var owlChronicleTabsNav = $(".chronicle-tabs-nav-container");

   if(owlChronicleTabs.find(".owl-item:first-child").hasClass("active")) {
     owlChronicleTabsNav.find(".prev").hide();
   };

   owlChronicleTabsNav.find(".next").click(function() {

     owlChronicleTabs.trigger('next.owl.carousel');
     owlChronicleTabsNav.find(".prev").show();

     if(owlChronicleTabs.find(".owl-item:last-child").hasClass("active")) {
       owlChronicleTabsNav.find(".next").hide();
     };

   });

   owlChronicleTabsNav.find(".prev").click(function() {

    owlChronicleTabs.trigger('prev.owl.carousel');
    owlChronicleTabsNav.find(".next").show();

    if(owlChronicleTabs.find(".owl-item:first-child").hasClass("active")) {
      owlChronicleTabsNav.find(".prev").hide();
    };

  });

  // Табы в видеоблоге
  var owlVlogTabs = $('.vlog .tabs');
  owlVlogTabs.owlCarousel({
      margin: 0,
      responsiveClass: true,
      stageElement: "ul",
      itemElement: "li",
      items: 3,
      smartSpeed: 500,
      mouseDrag: false,
      responsive:{
          320:{
              items:2,
              nav:true
          },
          479:{
              items:5,
              nav:true
          },
          768:{
              items:7,
              nav:false
          }
      },
      navText: ""
  });

  //Кнопки навигации в табах видеоблога
  var owlVlogTabsNav = $(".vlog-tabs-nav-container");

  if(owlVlogTabs.find(".owl-item:first-child").hasClass("active")) {
    owlVlogTabsNav.find(".prev").hide();
  };

   owlVlogTabsNav.find(".next").click(function() {

     owlVlogTabs.trigger('next.owl.carousel');
     owlVlogTabsNav.find(".prev").show();

     if(owlVlogTabs.find(".owl-item:last-child").hasClass("active")) {
       owlVlogTabsNav.find(".next").hide();
     };

   });

   owlVlogTabsNav.find(".prev").click(function() {

     owlVlogTabs.trigger('prev.owl.carousel');
     owlVlogTabsNav.find(".next").show();

     if(owlVlogTabs.find(".owl-item:first-child").hasClass("active")) {
       owlVlogTabsNav.find(".prev").hide();
     };

   });


  $(".calendar-of-events .owl-item").click(function() {
    $(".calendar-of-events .owl-item").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
    $(".calendar-of-events .event-section").hide().eq($(this).index()).show();
  }).eq(0).addClass("active-tab");


  // Табы в городской хронике
  $(".city-сhronicle .owl-item").click(function() {
  	$(".city-сhronicle .owl-item").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
  	$(".city-сhronicle .article-section").hide().eq($(this).index()).show();
  }).eq(0).addClass("active-tab");

  //Табы в видеоблоге
  $(".vlog .owl-item").click(function(event) {
    $(".vlog .owl-item").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
    $(".vlog .vlog-section").hide().eq($(this).index()).show();
  }).eq(0).addClass("active-tab");


    // Убираем бордер у таба при переключении
  $(".tabs-wrapper .owl-item").click(function() {
    $(this).prev().children().addClass("br-none");
    $(".tabs-wrapper .owl-item.active-tab").prev().siblings().children().removeClass("br-none");
  });

  //Убираем бордер при ховере таб (кроме активного)
  $(".tabs-wrapper .owl-item").mouseover(function functionName() {
    if (!($(this).hasClass("active-tab"))) {
      $(this).prev().children().addClass("br-none");
    }
  });

  //Убираем бордер при ховере таб (у активного)
  $(".tabs-wrapper .owl-item").mouseout(function() {
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
