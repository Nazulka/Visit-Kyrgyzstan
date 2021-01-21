var cards = document.querySelector('#explore-cards');

cards.addEventListener('click', function(e) {
  var target = e.target;
  if (target.classList.contains('btn')) {
    var cardBody = target.parentNode;
    var open = target.dataset.open === 'true';
    target.dataset.open = !open;
    if (open) {
      target.innerText = 'Read more';
      cardBody.classList.remove('open');
    } else {
      target.innerText = 'Read less';
      cardBody.classList.add('open');
    }
  }
});