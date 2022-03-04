const swiper = new Swiper('.swiper', {
	autoplay:{
      delay:3000,
	 disableOnInteraction:false,
	},
	direction: 'vertical',
	loop: true,

	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},

	//pagination: {
		//el: '.swiper-pagination',
	  // },
   
   });
