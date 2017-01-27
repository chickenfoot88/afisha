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

//Слайд-шоу
  var owl = $(".slider");
   owl.owlCarousel({
    loop: true,
    items: 1,
    itemClass: "slide-wrap",
    navText: "",
    autoplay: true,
    autoplayTimeout: 10000,
    smartSpeed: 1000
  });

   $(".next").click(function() {
     owl.trigger('next.owl.carousel');
   })
   $(".prev").click(function() {
     owl.trigger('prev.owl.carousel');
   })


// Табы
  $(".tabs-wrapper .tab").click(function() {
  	$(".tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  	$(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");


});
