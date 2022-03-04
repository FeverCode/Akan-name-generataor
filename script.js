 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.table').offset().top }, 'slow');
      return false;
    });
  });