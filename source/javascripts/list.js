$(function() {
  $('.rental').on('change', '.favorite-list-toggle', function() {
    var $input = $(this);
    heartbeat($input);
    updateRentalStatus();
    updateListCount($input);
  });
});

heartbeat = function($input) {
  var buttonClass = $input.is(':checked') ? 'favorite-toggle--beat' : null;

  $('.favorite-toggle').addClass(buttonClass).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function() {
      $(this).removeClass(buttonClass);
    });
}

updateRentalStatus = function() {
  var listLength = $('.favorite-list-toggle:checked').length ? true : false;
  $('.rental').toggleClass('rental--favorited', listLength);
}

updateListCount = function($input) {
  var listCount = $input.is(':checked') ? $input.val() : $input.val() - 1;
  $input.siblings('.favorite-list-count').html(listCount);
}
