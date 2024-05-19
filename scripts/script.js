
$(document).ready(function () {
  

     setTimeout(function () {
        $('body').addClass('loaded');
        AOS.init({
            once: true,
            disable: function () {
                var maxWidth = 800;
                return window.innerWidth < maxWidth;
            }
        });

     }, 1500);

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
     });  


     tailwind.config = {
        theme: {
          extend: {
            colors: {
              clifford: '#da373d',
            }
          }
        }
      }