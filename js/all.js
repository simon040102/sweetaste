$(document).ready(function () {
  //menu
  $('.mobile-menu').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu-items').toggleClass('active');
    $('active').slideToggle(1000);
  });

  //愛心點擊
  $('.heart a i').click(function(e){
    e.preventDefault();
    $(this).toggleClass('fas')
  })

  //發票方式
  $('.receipt-type a').click(function (e) {
    e.preventDefault();
    if ($(this).attr('class') == 'mail-receipt') {
      $('.receipt-mail').removeClass('d-none');
      $('.receipt-address').removeClass('d-block');
    }
    if ($(this).attr('class') == 'send-receipt') {
      $('.receipt-address').addClass('d-block');
      $('.receipt-mail').addClass('d-none');
    }
    $(this).addClass('receipt-active').siblings().removeClass('receipt-active');
  });
});
