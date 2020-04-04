function calcVH() {
    $('.bg1').innerHeight( $(this).innerHeight() );
}
(function($) {
  calcVH();
  $(window).on('resize orientationchange', function() {
    calcVH();
  });
})(jQuery);
