let posY = 0;
let jarak = 22;

function smoothScroll(id) {
  let target = document.getElementById(id).offsetTop;

  let scrollAnimate = setTimeout(function () {
    smoothScroll(id);
  }, 4);

  posY = posY + jarak;

  if (posY >= target) {
    clearTimeout(scrollAnimate);
    posY = 0;
  } else {
    window.scroll(0, posY);
  }

  return false;
}
