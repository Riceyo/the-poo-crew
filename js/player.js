function player() {
    var img = document.getElementById('player').src;
    if (img.indexOf('play.png')!= -1) {
      document.getElementById('player').src = 'images/stop.png';
      document.getElementById('equaliser').src = 'images/equaliser.gif';
      document.getElementById('theme-tune').play();
      document.getElementById('theme-tune').volume = 0.5;
    } else {
      document.getElementById('player').src = 'images/play.png';
      document.getElementById('equaliser').src = 'images/black_pixel.gif';
      document.getElementById('theme-tune').pause();
    }
  }