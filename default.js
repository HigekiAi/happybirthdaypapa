var loopText = [
    // '',
    'Chúc mừng sinh nhật ba yêu dấu!',
    'Hai mẹ con chúc ba luôn luôn vui khỏe,',
    'công việc thuận lợi, mọi sự bình an.',
    'Chúc gia đình mình mãi êm ấm, hạnh phúc.',
    'Thương thương ba nhiều lắm!'
  ];
  var i = 0;
  var max = loopText.length;
  var $text = $('#swap-text');
  var css = {};
  
  // Immediately Invoked Named Function Expression - we define it then
  // immediately call it by the parenthesis after the closing bracket,
  // function (){}(). Once it has done it's work we call it again with
  // `setTimeout()` as long as our counter `i` is not equal to the 
  // number of entries in the `loopText` array.
  (function changeText() {
  
    if (i < max) {
      $text
        .fadeOut(0)
        .text(loopText[i++])
        .css(css)
        .fadeIn(1000);
  
      setTimeout(changeText, 3500);
  
    }
  
  }());

  document.getElementById("click").onclick = changeText;