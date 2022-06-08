$(document).ready(function () {
  $('.mobile-menu').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu-items').toggleClass('active');
    $('active').slideToggle(1000);
  });

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

  // $('.mail-receipt').click(function(e){
  //   e.preventDefault();
  //   $('.receipt-mail').toggleClass('d-block');
  // });

  // $('.send-receipt').click(function (e) {
  //   e.preventDefault();
  //   $('.receipt-address').toggleClass('d-block');
  // });
});
