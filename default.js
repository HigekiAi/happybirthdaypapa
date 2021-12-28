var loopText = [
    'Chúc mừng sinh nhật ba của Mi Mi!',
    'Hai mẹ con chúc ba luôn luôn vui khỏe,',
    'công việc thuận lợi, mọi sự bình an.',
    'Chúc gia đình mình mãi êm ấm, hạnh phúc.',
    'Thương thương ba nhiều lắm!'
  ];
  var i = 0;
  var max = loopText.length;
  var $text = $('#swap-text');
  var css = {};
  
  function changeText() {
  
    if (i < max) {
      $text
        .fadeOut(0)
        .text(loopText[i++])
        .css(css)
        .fadeIn(1000);
  
      setTimeout(changeText, 3500);
  
    }
  
  };

  document.getElementById("click").onclick = changeText;