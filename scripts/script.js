
$(document).ready(function () {
  

    //  setTimeout(function () {
    //     $('body').addClass('loaded');
    //     AOS.init({
    //         once: true,
    //         disable: function () {
    //             var maxWidth = 800;
    //             return window.innerWidth < maxWidth;
    //         }
    //     });

    //  }, 1500);
    $('.custom-carousel').owlCarousel({
      loop: true,
      margin: 50,
      items: 3,
      nav: false,
      dots: false,
      slideSpeed: 10000,
      autoplaySpeed: 800,
      autoplayTimeout: 5000,
      autoplay: false,
      navText: [
          '<i class="fa-solid fa-chevron-left"></i>',
          '<i class="fa-solid fa-chevron-right"></i>',
      ],
      responsiveClass: true,
      responsive: {
          900: { items: 3 },
          700: { items: 2 },
          0: { items: 1 }
      }
  });

  $('.custom-next').click(function() {
      owl.trigger('next.owl.carousel');
  });

  $('.custom-prev').click(function() {
      owl.trigger('prev.owl.carousel');
  });
});
      

      $('.follow-ups').owlCarousel({
        loop: true,
        nav: true,
        margin: 50,
        items: 3,
        dots: true,
        slideSpeed: 10000,
        autoplaySpeed: 800,
        autoplayTimeout: 5000,
        autoplay: false,
        // navText: [
        //     '<i class="fi-circle-arrow-left1"></i>',
        //     '<i class="fi-circle-arrow-right1"></i>'
        // ],
        responsiveClass: true,
        responsive: {
          
            900: { items: 3 },
            700: { 
                items: 5 ,
            },
            0: { items: 1  }
        }
    })
    $('.card-follow-ups').owlCarousel({
      loop: true,
      nav: true,
      margin: 50,
      items: 1,
      dots: false,
      slideSpeed: 10000,
      autoplaySpeed: 800,
      autoplayTimeout: 5000,
      autoplay: true,
      // navText: [
      //     '<i class="fi-circle-arrow-left1"></i>',
      //     '<i class="fi-circle-arrow-right1"></i>'
      // ],
      responsiveClass: true,
  
  })

    if (document.documentElement.lang == 'en') {
        $('.banner-slide').owlCarousel({
            loop: true,
            items: 1,
            dots: true,
            slideSpeed: 10000,
            autoplaySpeed: 800,
            autoplayTimeout: 10000,
            autoplay: true,
            slideBy: 1,
        })
        $('.ourService-slide').owlCarousel({
            loop: true,
            nav: true,
            margin: 50,
            items: 1,
            dots: true,
            slideSpeed: 10000,
            autoplaySpeed: 800,
            autoplayTimeout: 5000,
            autoplay: true,
            // navText: [
            //     '<i class="fi-circle-arrow-left1"></i>',
            //     '<i class="fi-circle-arrow-right1"></i>'
            // ],
            responsiveClass: true,
            responsive: {
                1200: { items: 5 },
                900: { items: 3 },
                700: { 
                    items: 5 ,
                },
                0: { items: 1  }
            }
        })

    }


     document.addEventListener("DOMContentLoaded", () => {
      // Select all dropdown toggle buttons
      const dropdownToggles = document.querySelectorAll(".dropdown-toggle")
    
      dropdownToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
          // Find the next sibling element which is the dropdown menu
          const dropdownMenu = toggle.nextElementSibling
    
          // Toggle the 'hidden' class to show or hide the dropdown menu
          if (dropdownMenu.classList.contains("hidden")) {
            // Hide any open dropdown menus before showing the new one
            document.querySelectorAll(".dropdown-menu").forEach((menu) => {
              menu.classList.add("hidden")
            })
    
            dropdownMenu.classList.remove("hidden")
          } else {
            dropdownMenu.classList.add("hidden")
          }
        })
      })
    
      // Optional: Clicking outside of an open dropdown menu closes it
      window.addEventListener("click", (event) => {
        if (!event.target.matches(".dropdown-toggle")) {
          document.querySelectorAll(".dropdown-menu").forEach((menu) => {
            if (!menu.contains(event.target)) {
              menu.classList.add("hidden")
            }
          })
        }
      })
    })


