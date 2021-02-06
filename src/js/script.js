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
        // const topOffset = document.querySelector('.header').offsetHeight;
        const topOffset = 100;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
  });

  // при первом переходе берётся offsetPosition не от текущей высоты header, но от высоты header на момент клика.
  // поэтому, на данный момент, значение offsetPosition захардкожено на значении высоты сжатого header-а (100px).

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
        
        if (y > 120) {
          shiftChanges[i].classList.add("navShadow");
        } else {
          shiftChanges[i].classList.remove("navShadow");
        }
      }
    }


    //Toggle Menu on cellphones and tabs

  const toggleMenuButton = document.getElementById('menu-toggle'),
    togglableLinksList = document.getElementById('menu-header');
    // togglableLinksList.addEventListener('click', () => { window.scrollTo({top: 0, behavior: 'smooth'}) });
  toggleMenuButton.addEventListener('click', () => {
    toggleMenuButton.classList.toggle('closeMenu');
    togglableLinksList.classList.toggle('showMenu');
  });

  // close menu ONLY on click "X". it`s a BETA version
  
});