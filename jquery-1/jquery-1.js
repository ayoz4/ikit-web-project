/* eslint-disable consistent-return */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-alert */
/* eslint-disable func-names */
/* eslint-disable no-undef */
$(document).ready(function () {
  $('#name').keyup(function () {
    if ($(this).val() === '') {
      $('#pass, #confirmPass').attr('disabled', 'disabled');
    } else {
      $('#pass, #confirmPass').removeAttr('disabled');
    }
  });

  $('form').change(function () {
    const colorR = Math.floor(Math.random() * 256);
    const colorG = Math.floor(Math.random() * 256);
    const colorB = Math.floor(Math.random() * 256);

    $('#submitButton').css('color', `rgb(${colorR},${colorG},${colorB})`);
  });

  $('form').submit(function () {
    const pass = $('#pass').val();
    const confirmPass = $('#confirmPass').val();

    if (pass !== confirmPass) {
      alert('Passwords do not match');
      return false;
    }

    if ($('#name').val() === '') {
      alert('Please, enter the name');
      return false;
    }
    if ($('#pass').val() === '') {
      alert('Please, enter the password');
      return false;
    }

    if ($('#selector').val() === 'Choose role') {
      alert('Please, choose role');
      return false;
    }

    console.log($(this).serializeArray());

    alert('Successfully!');
  });
});
