(function($){
  $.fn.resetListItem = function(listName) {
    $li = $(this);
    $li.addClass('favorite-lists-item--new');
    $li.find('.favorite-list-text').html(listName);
    $li.find('.favorite-list-count').html('0');
    $li.find('input').val(1).prop('checked', false).click();
    return this;
  };
})(jQuery);

$(function() {
  $('.favorite-create').submit(function(ev) {
    ev.preventDefault();
    var $input = $('.favorite-create-text');
    var listName = $input.val();
    var li = $('.favorite-lists li:first-child').clone().appendTo('.favorite-lists').resetListItem(listName);
    $input.val('').blur();
  });
});
