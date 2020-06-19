jQuery(document).ready(function($) {
	const mMenuBtn = $(".m-menu-button");
	const mMenu = $(".m-menu");
	const tabs = document.getElementsByClassName('tab');
	const content = document.getElementsByClassName('tabs-content');
	const burgerani = document.getElementsByClassName("burger");

	mMenuBtn.on("click", function() {
		mMenu.toggleClass('active');
		$("body").toggleClass('no-scroll');
	});

	tabs[0].addEventListener('click', function(){
    this.classList.add('active');
    tabs[1].classList.remove('active');
    content[0].classList.add('visible');
    content[1].classList.remove('visible');
    });

    tabs[1].addEventListener('click', function(){
    this.classList.add('active');
    tabs[0].classList.remove('active');
    content[1].classList.add('visible');
    content[0].classList.remove('visible');
    });

    document.querySelector('.m-menu-button').onclick = function(){
    document.querySelector('.burger').classList.toggle('burger.active');
    };

  

	var mySwiper = new Swiper ('.swiper-container', {
		slidesPerView: 4,
		spaceBetween: 25,
    loop: true,
    breakpoints: {
    	992: {
    		slidesPerView: 4,
    	},
    	768: {
    		slidesPerView: 2,
    	},
    	320: {
    		slidesPerView: 1,
    		slidesOffsetAfter: 50,
    		navigation: {
    			nextEl: ".button-next",
    		},
    	},
    },
  });
});	
