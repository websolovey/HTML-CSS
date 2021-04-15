//first slider 
$('#top-slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

$('#firs-slider__arrow--next').on('click', function() {
  $('#top-slider').slick('slickNext');
});
$('#firs-slider__arrow--prev').on('click', function() {
  $('#top-slider').slick('slickPrev');
});


//two slider (our-clients block)
$('#our-clients__slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

$('#our-clients__arrow--next').on('click', function() {
  $('#our-clients__slider').slick('slickNext');
});
$('#our-clients__arrow--prev').on('click', function() {
  $('#our-clients__slider').slick('slickPrev');
});

//reviews slider
$('#reviews__slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

$('#reviews__arrow--next').on('click', function() {
  $('#reviews__slider').slick('slickNext');
});
$('#reviews__arrow--prev').on('click', function() {
  $('#reviews__slider').slick('slickPrev');
});