window.addEventListener('DOMContentLoaded', () => {
  
  // multi-used variables
  const topOffset = document.querySelector('.header').offsetHeight;
  const mainLogo = document.getElementById('logo');


  // Click logo to scroll to top

  // const mainLogo = document.getElementById('logo');
  mainLogo.addEventListener('click', () => { window.scrollTo({top: 0, behavior: 'smooth'}) });

  //Smooth Scrolling Using Navigation Menu

  document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        // const topOffset = document.querySelector('.header').offsetHeight;
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

  window.addEventListener("scroll", callbackFunc);
    function callbackFunc() {
      let y = window.pageYOffset;
      // function shifting(el){
      //   if (y > 150) {
      //     el.classList.toggle("navShadow");
      //   } else {
      //     el.classList.toggle("navShadow");
      //   }
      // }
      // shifting(shifting);
      // shifting(mainLogo);
      // shifting(wordMark);
      if (y > 150) {
        header.classList.add("navShadow");
        brand.classList.add("navShadow");
        mainLogo.classList.add("navShadow");
        wordMark.classList.add("navShadow");
      } else {
        header.classList.remove("navShadow");
        brand.classList.remove("navShadow");
        mainLogo.classList.remove("navShadow");
        wordMark.classList.remove("navShadow");
      }
    }

});