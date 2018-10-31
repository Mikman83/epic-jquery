$(document).ready(function(){

  //

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
