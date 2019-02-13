$('#button').on('click', function(){
  if ($('.colors').val() === 'red') {
    $('.color1').css('background',randomColor({hue:'red'}));
    $('.color2').css('background',randomColor({hue:'red'}));
    $('.color3').css('background',randomColor({hue:'red'}));
    $('.color4').css('background',randomColor({hue:'red'}));

  } else if ($('.colors').val() === 'yellow') {
      $('.color1').css('background',randomColor({hue:'yellow'}));
      $('.color2').css('background',randomColor({hue:'yellow'}));
      $('.color3').css('background',randomColor({hue:'yellow'}));
      $('.color4').css('background',randomColor({hue:'yellow'}));

  }else if ($('.colors').val() === 'blue') {
      $('.color1').css('background',randomColor({hue:'blue'}));
      $('.color2').css('background',randomColor({hue:'blue'}));
      $('.color3').css('background',randomColor({hue:'blue'}));
      $('.color4').css('background',randomColor({hue:'blue'}));

  }else if ($('.colors').val() === 'green') {
      $('.color1').css('background',randomColor({hue:'green'}));
      $('.color2').css('background',randomColor({hue:'green'}));
      $('.color3').css('background',randomColor({hue:'green'}));
      $('.color4').css('background',randomColor({hue:'green'}));
  }


})
