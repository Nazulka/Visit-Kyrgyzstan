// function myFunction() {
//   var dots = document.getElementById("dots-1");
//   var moreText = document.getElementById("more-1");
//   var btnText = document.getElementById("read-1");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
// }

// $(document).ready(function(){
//     $(".read").click(function(){
//         $(this).prev().toggle();
//         $(this).siblings('.dots').toggle();
//         if($(this).text()=='read more'){
//             $(this).text('read less');
//         }
//         else{
//             $(this).text('read more');
//         }
//     });
// });

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