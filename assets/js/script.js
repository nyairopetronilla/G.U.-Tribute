function typer(elementClass, text, speed) {
  var element = document.getElementsByClassName(elementClass)[0];
  var i = 0;
  function typeWriter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}

function hide_intro() {
  document.querySelector('.intro-panel').style.display = 'none';
}

window.addEventListener('load', function() {
  var quit_intro = document.getElementsByClassName('continue-site')[0];
  quit_intro.addEventListener('click', function() {
    hide_intro();
  });
  typer('intro-text', 'On 2 April 2015, a tragic event took place at Garissa University in Kenya. This website is created to honor the victims and their families.', 50);
});
