$(function() {
  $('.name').click(function() {
    $(this).fadeOut();
  });

  $('.navlink').mouseenter(function() {
    $(this).animate({ right: '20px' }, 'slow');
    $(this).animate({ left: '10px' }, 'fast');
    $(this).animate({ left: '-5px' }, 'fast');
  });
});
