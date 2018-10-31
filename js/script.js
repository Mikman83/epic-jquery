$(document).ready(function(){

  var slickIsActive = false;

  checkSlider();

  $(window).on('resize', function(){
    checkSlider();
  });

  function checkSlider(){

    if( $(window).width() < 600 ) {
      if( slickIsActive === false ) {
        $('#slider').slick();
        slickIsActive = true;
      }
    }
    else {
      if( slickIsActive === true ) {
        $('#slider').slick('unslick');
        slickIsActive = false;
      }
    }
  }









  calcPrice();

  $('#goods input').on('input keyup', function(){
    calcPrice();
  });

  function calcPrice(){
    var sum = 0;

    $('#goods tr').each(function(){
      var price = $(this).find('.price').text();
      var num = $(this).find('input').val();
      var res = price * num;
      sum = sum + res;
    });

    $('#sum').text(sum);
  }

});
