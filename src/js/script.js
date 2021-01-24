window.addEventListener('DOMContentLoaded', () => {
  
  // Click logo to scroll to top

  const mainLogo = document.getElementById('logo');
  console.log(mainLogo);
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

});