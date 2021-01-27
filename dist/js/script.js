window.addEventListener('DOMContentLoaded', () => {
  
  // multi-used variables
  
  const mainLogo = document.getElementById('logo');


  // Click logo to scroll to top

  mainLogo.addEventListener('click', () => { window.scrollTo({top: 0, behavior: 'smooth'}) });


  //Smooth Scrolling Using Navigation Menu

  document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
  });

  // header shifting
  const header = document.querySelector('.header'),
    brand = document.querySelector('.header'),
    wordMark = document.getElementById('word-mark');

    let shiftChanges = [];
    shiftChanges.push(header);
    shiftChanges.push(brand);
    shiftChanges.push(mainLogo);
    shiftChanges.push(wordMark);

  window.addEventListener("scroll", callbackFunc);
    function callbackFunc() {
      let y = window.pageYOffset;

      for (let i = 0; i < shiftChanges.length; i++) {

        
        if (y > 150) {
          shiftChanges[i].classList.add("navShadow");
        } else {
          shiftChanges[i].classList.remove("navShadow");
        }
      }
    }
});