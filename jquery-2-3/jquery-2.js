/* eslint-disable prefer-template */
/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable consistent-return */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-alert */
/* eslint-disable func-names */
/* eslint-disable no-undef */

$(document).ready(function() {
  jQuery.fx.speeds.spark = 1;

  $('#gallery a').click(function(evt) {
    evt.preventDefault();

    const imgPath = $(this).attr('href');

    const oldImage = $('#photo img');

    const newImage = $('<img src="' + imgPath + '">');

    newImage.hide('slow');
    $('#photo').prepend(newImage);
    newImage.fadeIn('spark');

    oldImage.fadeOut(1000, function() {
      $(this).remove();
    });
  });
  $('#gallery a:first').click();

  $('#animate-section').click(function() {
    const elem = $(this);
    
    if (elem.data('click') === 'oldEvent') {
      elem.data('click', 'newEvent');
      elem.animate(
        {
          height: '400px',
          width: '400px',
        },
        1000,
        'easeOutBounce');
    } else {
      elem.data('click', 'oldEvent');
      elem.animate(
        {
          height: '600px',
          width: '600px',
        },
        1000,
        'easeInBack');
    }
  });
});
