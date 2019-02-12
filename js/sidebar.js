const switchBtn = document.getElementById('switch-cata');

switchBtn.addEventListener('click', function (evt) {
  const menu = document.getElementById('menu-inner');
  const toc = document.getElementById('toc-container');
  if (getComputedStyle(menu).display === 'none') {
    Velocity(toc, 'stop');
    Velocity(toc, 'transition.slideRightOut', {
          duration: 300,
          complete: function () {
            Velocity(menu, 'stop');
            Velocity(menu, 'transition.slideLeftIn', {duration: 500});
          }
        });
  } else {
    Velocity(menu, 'stop');
    Velocity(menu, 'transition.slideRightOut', {
          duration: 300,
          complete: function () {
            Velocity(toc, 'stop');
            Velocity(toc, 'transition.slideLeftIn', {duration: 500});
          }
        });
  }
}, false);
