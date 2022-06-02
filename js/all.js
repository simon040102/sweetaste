$(document).ready(function () {
  $('.mobile-meun').on('click', function (e) {
    e.preventDefault();
    $('.mobile-meun-items').toggleClass('active');
    $('active').slideToggle(1000);
  });
});
