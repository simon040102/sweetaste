$(document).ready(function () {
  $('.mobile-menu').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu-items').toggleClass('active');
    $('active').slideToggle(1000);
  });

  $('.receipt-type a').click(function (e) {
    e.preventDefault();
    $(this).addClass('receipt-active').siblings().removeClass('receipt-active');
  });

});


