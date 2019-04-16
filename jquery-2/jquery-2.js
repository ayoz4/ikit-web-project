/* eslint-disable prefer-template */
/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable consistent-return */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-alert */
/* eslint-disable func-names */
/* eslint-disable no-undef */

$(document).ready(function() {
  $('#gallery a').click(function(evt) {
    evt.preventDefault();

    const imgPath = $(this).attr('href');

    const oldImage = $('#photo img');

    const newImage = $('<img src="' + imgPath + '">');

    newImage.hide();
    $('#photo').prepend(newImage);
    newImage.fadeIn(1000);

    oldImage.fadeOut(1000, function() {
      $(this).remove();
    });
  });
  $('#gallery a:first').click();
});
